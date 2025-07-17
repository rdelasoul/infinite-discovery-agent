// Art Deco Time Manager - Interactive JavaScript

class TimeManager {
    constructor() {
        this.currentView = 'calendar';
        this.timerInterval = null;
        this.timerSeconds = 0;
        this.timerRunning = false;
        this.selectedDate = new Date();
        this.events = this.loadFromStorage('events') || {};
        this.schedule = this.loadFromStorage('schedule') || [];
        this.deadlines = this.loadFromStorage('deadlines') || [];
        
        this.init();
    }

    init() {
        this.setupNavigationListeners();
        this.setupTimeDisplay();
        this.setupCalendar();
        this.setupTimer();
        this.setupSchedule();
        this.setupTimezone();
        this.setupDeadlines();
        this.updateWorldClocks();
        setInterval(() => this.updateWorldClocks(), 1000);
    }

    // Navigation Management
    setupNavigationListeners() {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchView(e.target.dataset.view);
            });
        });
    }

    switchView(viewName) {
        // Update navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.view === viewName);
        });

        // Update view panels
        document.querySelectorAll('.view-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${viewName}View`);
        });

        this.currentView = viewName;
    }

    // Time Display
    setupTimeDisplay() {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            const dateStr = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            document.getElementById('currentTime').textContent = timeStr;
            document.getElementById('currentDate').textContent = dateStr;
        };

        updateTime();
        setInterval(updateTime, 1000);
    }

    // Calendar Functionality
    setupCalendar() {
        this.renderCalendar();
        
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
            this.renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
            this.renderCalendar();
        });
    }

    renderCalendar() {
        const year = this.selectedDate.getFullYear();
        const month = this.selectedDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        // Update month/year display
        document.getElementById('monthYear').textContent = 
            new Date(year, month).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
            });

        // Clear existing calendar days
        const grid = document.getElementById('calendarGrid');
        const existingDays = grid.querySelectorAll('.calendar-day');
        existingDays.forEach(day => day.remove());

        // Add previous month's trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayEl = this.createCalendarDay(
                daysInPrevMonth - i, 
                month - 1, 
                year, 
                true
            );
            grid.appendChild(dayEl);
        }

        // Add current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = this.createCalendarDay(day, month, year, false);
            grid.appendChild(dayEl);
        }

        // Add next month's leading days
        const totalCells = grid.children.length - 7; // Subtract header row
        const remainingCells = 42 - totalCells; // 6 weeks * 7 days
        for (let day = 1; day <= remainingCells; day++) {
            const dayEl = this.createCalendarDay(day, month + 1, year, true);
            grid.appendChild(dayEl);
        }

        this.renderEvents();
    }

    createCalendarDay(day, month, year, isOtherMonth) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        if (isOtherMonth) dayEl.classList.add('other-month');
        
        const date = new Date(year, month, day);
        const today = new Date();
        if (this.isSameDay(date, today)) {
            dayEl.classList.add('today');
        }

        dayEl.textContent = day;
        dayEl.addEventListener('click', () => this.selectDate(date));

        // Check for events
        const dateKey = this.getDateKey(date);
        if (this.events[dateKey]) {
            dayEl.style.borderBottom = '3px solid var(--deco-gold)';
        }

        return dayEl;
    }

    selectDate(date) {
        this.selectedDate = date;
        this.renderEvents();
    }

    renderEvents() {
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = '';

        const dateKey = this.getDateKey(this.selectedDate);
        const dayEvents = this.events[dateKey] || [];

        if (dayEvents.length === 0) {
            eventsList.innerHTML = '<li class="event-item">No appointments scheduled</li>';
            return;
        }

        dayEvents.forEach(event => {
            const li = document.createElement('li');
            li.className = 'event-item';
            li.textContent = event;
            eventsList.appendChild(li);
        });
    }

    // Timer Functionality
    setupTimer() {
        document.getElementById('startTimer').addEventListener('click', () => this.startTimer());
        document.getElementById('pauseTimer').addEventListener('click', () => this.pauseTimer());
        document.getElementById('resetTimer').addEventListener('click', () => this.resetTimer());

        // Preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const minutes = parseInt(e.target.dataset.minutes);
                this.timerSeconds = minutes * 60;
                this.updateTimerDisplay();
            });
        });
    }

    startTimer() {
        if (!this.timerRunning) {
            this.timerRunning = true;
            this.timerInterval = setInterval(() => {
                if (this.timerSeconds > 0) {
                    this.timerSeconds--;
                    this.updateTimerDisplay();
                } else {
                    this.pauseTimer();
                    this.showNotification('Timer Complete!');
                }
            }, 1000);
        }
    }

    pauseTimer() {
        this.timerRunning = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    resetTimer() {
        this.pauseTimer();
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const hours = Math.floor(this.timerSeconds / 3600);
        const minutes = Math.floor((this.timerSeconds % 3600) / 60);
        const seconds = this.timerSeconds % 60;

        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }

    // Schedule Functionality
    setupSchedule() {
        const form = document.getElementById('scheduleForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addScheduleItem();
        });

        this.renderSchedule();
    }

    addScheduleItem() {
        const time = document.getElementById('scheduleTime').value;
        const task = document.getElementById('scheduleTask').value;

        if (time && task) {
            this.schedule.push({ time, task });
            this.schedule.sort((a, b) => a.time.localeCompare(b.time));
            this.saveToStorage('schedule', this.schedule);
            this.renderSchedule();
            
            // Reset form
            document.getElementById('scheduleForm').reset();
        }
    }

    renderSchedule() {
        const timeline = document.getElementById('scheduleTimeline');
        timeline.innerHTML = '';

        if (this.schedule.length === 0) {
            timeline.innerHTML = '<div class="timeline-item">No appointments scheduled</div>';
            return;
        }

        this.schedule.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'timeline-item';
            itemEl.innerHTML = `
                <span class="timeline-time">${item.time}</span>
                <span class="timeline-task">${item.task}</span>
            `;
            timeline.appendChild(itemEl);
        });
    }

    // Timezone Functionality
    setupTimezone() {
        document.getElementById('convertTime').addEventListener('click', () => {
            this.convertTime();
        });
    }

    updateWorldClocks() {
        const cards = document.querySelectorAll('.timezone-card');
        cards.forEach(card => {
            const timezone = card.dataset.tz;
            const timeEl = card.querySelector('.tz-time');
            const time = new Date().toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            timeEl.textContent = time;
        });
    }

    convertTime() {
        const time = document.getElementById('converterTime').value;
        const fromTz = document.getElementById('fromTimezone').value;
        const results = document.getElementById('converterResults');

        if (!time) {
            results.innerHTML = '<p>Please select a time to convert</p>';
            return;
        }

        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);

        const zones = [
            { name: 'New York', tz: 'America/New_York' },
            { name: 'London', tz: 'Europe/London' },
            { name: 'Paris', tz: 'Europe/Paris' },
            { name: 'Tokyo', tz: 'Asia/Tokyo' }
        ];

        results.innerHTML = '<h4>Converted Times:</h4>';
        zones.forEach(zone => {
            const convertedTime = date.toLocaleTimeString('en-US', {
                timeZone: zone.tz,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            });
            results.innerHTML += `<p>${zone.name}: ${convertedTime}</p>`;
        });
    }

    // Deadlines Functionality
    setupDeadlines() {
        const form = document.getElementById('deadlineForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addDeadline();
        });

        this.renderDeadlines();
        setInterval(() => this.updateDeadlineCountdowns(), 60000); // Update every minute
    }

    addDeadline() {
        const title = document.getElementById('deadlineTitle').value;
        const date = document.getElementById('deadlineDate').value;
        const priority = document.getElementById('deadlinePriority').value;

        if (title && date) {
            const deadline = {
                id: Date.now(),
                title,
                date: new Date(date),
                priority
            };

            this.deadlines.push(deadline);
            this.deadlines.sort((a, b) => a.date - b.date);
            this.saveToStorage('deadlines', this.deadlines);
            this.renderDeadlines();

            // Reset form
            document.getElementById('deadlineForm').reset();
        }
    }

    renderDeadlines() {
        const list = document.getElementById('deadlinesList');
        list.innerHTML = '';

        if (this.deadlines.length === 0) {
            list.innerHTML = '<div class="deadline-item">No deadlines set</div>';
            return;
        }

        this.deadlines.forEach(deadline => {
            const itemEl = document.createElement('div');
            itemEl.className = `deadline-item ${deadline.priority}-priority`;
            
            const countdown = this.getCountdown(deadline.date);
            
            itemEl.innerHTML = `
                <div class="deadline-header">
                    <span class="deadline-title-text">${deadline.title}</span>
                    <span class="deadline-priority">${deadline.priority.toUpperCase()}</span>
                </div>
                <div class="deadline-date">${deadline.date.toLocaleString()}</div>
                <div class="deadline-countdown">${countdown}</div>
                <button class="deadline-remove" data-id="${deadline.id}">×</button>
            `;

            const removeBtn = itemEl.querySelector('.deadline-remove');
            removeBtn.addEventListener('click', () => this.removeDeadline(deadline.id));

            list.appendChild(itemEl);
        });
    }

    removeDeadline(id) {
        this.deadlines = this.deadlines.filter(d => d.id !== id);
        this.saveToStorage('deadlines', this.deadlines);
        this.renderDeadlines();
    }

    updateDeadlineCountdowns() {
        if (this.currentView === 'deadlines') {
            this.renderDeadlines();
        }
    }

    getCountdown(targetDate) {
        const now = new Date();
        const diff = targetDate - now;

        if (diff < 0) {
            return 'Overdue';
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
            return `${days} days, ${hours} hours remaining`;
        } else if (hours > 0) {
            return `${hours} hours, ${minutes} minutes remaining`;
        } else {
            return `${minutes} minutes remaining`;
        }
    }

    // Utility Functions
    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    getDateKey(date) {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    showNotification(message) {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 20px;
            background: var(--deco-gold);
            color: var(--deco-black);
            border: 2px solid var(--deco-black);
            font-family: var(--font-accent);
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            z-index: 1000;
            animation: slideIn 0.5s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Storage Functions
    saveToStorage(key, data) {
        try {
            localStorage.setItem(`timeManager_${key}`, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save to storage:', e);
        }
    }

    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(`timeManager_${key}`);
            if (data) {
                const parsed = JSON.parse(data);
                // Convert date strings back to Date objects for deadlines
                if (key === 'deadlines') {
                    return parsed.map(d => ({
                        ...d,
                        date: new Date(d.date)
                    }));
                }
                return parsed;
            }
        } catch (e) {
            console.error('Failed to load from storage:', e);
        }
        return null;
    }
}

// Add animations to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize Time Manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TimeManager();
});