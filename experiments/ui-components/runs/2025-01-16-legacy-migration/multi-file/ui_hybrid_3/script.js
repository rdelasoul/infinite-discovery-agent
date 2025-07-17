// DATACOM-3000 Data Explorer JavaScript Module

class DataExplorer {
    constructor() {
        this.data = [];
        this.filteredData = [];
        this.sortColumn = 'id';
        this.sortDirection = 'asc';
        this.selectedRow = null;
        this.columns = ['id', 'name', 'type', 'size', 'modified'];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.generateMockData();
        this.updateDisplay();
        this.startSystemClock();
        this.simulateMemoryUsage();
    }

    bindEvents() {
        // Search filter
        const searchInput = document.getElementById('search-filter');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Sort controls
        const sortSelector = document.getElementById('sort-selector');
        sortSelector.addEventListener('change', (e) => this.handleSort(e.target.value));

        const sortDirection = document.querySelector('.sort-direction');
        sortDirection.addEventListener('click', () => this.toggleSortDirection());

        // Action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleAction(action);
            });
        });

        // Column headers for sorting
        document.querySelectorAll('.column-header').forEach(header => {
            header.addEventListener('click', (e) => {
                if (!e.target.classList.contains('resize-handle')) {
                    const column = header.dataset.column;
                    this.handleSort(column);
                }
            });
        });

        // Column resizing
        this.initColumnResizing();

        // Preview close button
        const previewClose = document.querySelector('.preview-close');
        previewClose.addEventListener('click', () => this.closePreview());

        // Command input
        const commandInput = document.querySelector('.command-input');
        commandInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(e.target.value);
                e.target.value = '';
            }
        });
    }

    generateMockData() {
        const fileTypes = ['DAT', 'TXT', 'BIN', 'LOG', 'CFG', 'SYS', 'EXE', 'BAT'];
        const names = [
            'SYSTEM', 'CONFIG', 'DATA', 'BACKUP', 'ARCHIVE', 'TEMP', 
            'CACHE', 'INDEX', 'DATABASE', 'REPORT', 'LOG', 'USER'
        ];

        for (let i = 1; i <= 50; i++) {
            const type = fileTypes[Math.floor(Math.random() * fileTypes.length)];
            const name = names[Math.floor(Math.random() * names.length)];
            const size = Math.floor(Math.random() * 999999) + 1;
            const date = new Date(Date.now() - Math.floor(Math.random() * 31536000000));

            this.data.push({
                id: String(i).padStart(4, '0'),
                name: `${name}_${String(i).padStart(2, '0')}.${type}`,
                type: type,
                size: this.formatSize(size),
                sizeBytes: size,
                modified: this.formatDate(date),
                modifiedTimestamp: date.getTime(),
                rawData: this.generatePreviewData(type)
            });
        }

        this.filteredData = [...this.data];
    }

    generatePreviewData(type) {
        const previews = {
            'DAT': '00000000  48 45 58 20 44 55 4D 50  20 44 41 54 41 20 46 49  |HEX DUMP DATA FI|\n00000010  4C 45 20 46 4F 52 20 50  52 45 56 49 45 57 20 4F  |LE FOR PREVIEW O|\n00000020  4E 4C 59 20 2D 20 4E 4F  54 20 41 43 54 55 41 4C  |NLY - NOT ACTUAL|',
            'TXT': 'PLAINTEXT DOCUMENT\n==================\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n[END OF FILE]',
            'BIN': '01001000 01000101 01001100 01001100 01001111\n01010111 01001111 01010010 01001100 01000100\n00100001 00100000 00110010 00110000 00110010\n00110100 00100000 01000010 01001001 01001110',
            'LOG': '[1990-01-01 00:00:00] SYSTEM INITIALIZED\n[1990-01-01 00:00:01] MEMORY CHECK... OK\n[1990-01-01 00:00:02] DISK CHECK... OK\n[1990-01-01 00:00:03] NETWORK CHECK... OK\n[1990-01-01 00:00:04] READY FOR OPERATION',
            'CFG': 'SYSTEM.MEMORY=640K\nSYSTEM.DISK=40MB\nSYSTEM.CPU=80486\nSYSTEM.SPEED=33MHZ\nSYSTEM.CACHE=ENABLED\nSYSTEM.SOUND=BEEPER',
            'SYS': 'SYSTEM FILE - PROTECTED\n\nACCESS DENIED\n\nAUTHORIZATION REQUIRED',
            'EXE': 'EXECUTABLE FILE HEADER\n=====================\nMAGIC NUMBER: 4D5A\nBYTES ON LAST PAGE: 0090\nPAGES IN FILE: 0003\nRELOCATIONS: 0000\nHEADER SIZE: 0004',
            'BAT': '@ECHO OFF\nCLS\nECHO BATCH FILE PREVIEW\nECHO ==================\nPAUSE\nEXIT'
        };

        return previews[type] || 'UNKNOWN FILE TYPE';
    }

    formatSize(bytes) {
        if (bytes < 1024) return `${bytes}B`;
        if (bytes < 1048576) return `${Math.floor(bytes / 1024)}K`;
        return `${(bytes / 1048576).toFixed(1)}M`;
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    handleSearch(query) {
        if (!query) {
            this.filteredData = [...this.data];
        } else {
            const searchTerm = query.toLowerCase();
            this.filteredData = this.data.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.type.toLowerCase().includes(searchTerm) ||
                item.id.includes(searchTerm)
            );
        }
        this.updateDisplay();
    }

    handleSort(column) {
        if (this.sortColumn === column) {
            this.toggleSortDirection();
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
            document.querySelector('.sort-direction').textContent = '▲';
        }

        this.sortData();
        this.updateDisplay();
    }

    toggleSortDirection() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        const directionBtn = document.querySelector('.sort-direction');
        directionBtn.textContent = this.sortDirection === 'asc' ? '▲' : '▼';
        this.sortData();
        this.updateDisplay();
    }

    sortData() {
        this.filteredData.sort((a, b) => {
            let valueA, valueB;

            switch (this.sortColumn) {
                case 'size':
                    valueA = a.sizeBytes;
                    valueB = b.sizeBytes;
                    break;
                case 'date':
                case 'modified':
                    valueA = a.modifiedTimestamp;
                    valueB = b.modifiedTimestamp;
                    break;
                default:
                    valueA = a[this.sortColumn];
                    valueB = b[this.sortColumn];
            }

            if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
            if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    handleAction(action) {
        switch (action) {
            case 'import':
                this.showMessage('IMPORT FUNCTION NOT IMPLEMENTED');
                this.simulateImport();
                break;
            case 'export':
                this.exportData();
                break;
            case 'refresh':
                this.refreshData();
                break;
        }
    }

    simulateImport() {
        // Simulate file import
        setTimeout(() => {
            const newItem = {
                id: String(this.data.length + 1).padStart(4, '0'),
                name: `IMPORT_${Date.now()}.DAT`,
                type: 'DAT',
                size: this.formatSize(Math.floor(Math.random() * 99999) + 1000),
                sizeBytes: Math.floor(Math.random() * 99999) + 1000,
                modified: this.formatDate(new Date()),
                modifiedTimestamp: Date.now(),
                rawData: 'IMPORTED DATA FILE\n================\n[DATA IMPORTED SUCCESSFULLY]'
            };
            
            this.data.push(newItem);
            this.filteredData = [...this.data];
            this.updateDisplay();
            this.showMessage('IMPORT COMPLETE: 1 FILE ADDED');
        }, 1000);
    }

    exportData() {
        const exportText = this.filteredData.map(item => 
            `${item.id},${item.name},${item.type},${item.size},${item.modified}`
        ).join('\n');

        const header = 'ID,NAME,TYPE,SIZE,MODIFIED\n';
        const fullExport = header + exportText;

        // Create download
        const blob = new Blob([fullExport], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `DATACOM_EXPORT_${Date.now()}.CSV`;
        a.click();
        URL.revokeObjectURL(url);

        this.showMessage(`EXPORT COMPLETE: ${this.filteredData.length} RECORDS`);
    }

    refreshData() {
        // Simulate refresh animation
        const tbody = document.getElementById('data-tbody');
        tbody.style.opacity = '0.5';
        
        setTimeout(() => {
            tbody.style.opacity = '1';
            this.updateDisplay();
            this.showMessage('DATA REFRESHED');
        }, 500);
    }

    updateDisplay() {
        const tbody = document.getElementById('data-tbody');
        tbody.innerHTML = '';

        this.filteredData.forEach((item, index) => {
            const row = document.createElement('tr');
            row.setAttribute('role', 'row');
            row.dataset.index = index;

            row.innerHTML = `
                <td role="gridcell">${item.id}</td>
                <td role="gridcell">${item.name}</td>
                <td role="gridcell">${item.type}</td>
                <td role="gridcell">${item.size}</td>
                <td role="gridcell">${item.modified}</td>
                <td role="gridcell">
                    <button class="preview-btn" data-index="${index}">▶</button>
                </td>
            `;

            row.addEventListener('click', (e) => {
                if (!e.target.classList.contains('preview-btn')) {
                    this.selectRow(row, item);
                }
            });

            tbody.appendChild(row);
        });

        // Bind preview buttons
        document.querySelectorAll('.preview-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(btn.dataset.index);
                this.showPreview(this.filteredData[index]);
            });
        });

        // Update record count
        document.getElementById('record-count').textContent = this.filteredData.length;
    }

    selectRow(row, item) {
        // Remove previous selection
        document.querySelectorAll('.data-table tbody tr').forEach(tr => {
            tr.classList.remove('selected');
        });

        // Add selection to current row
        row.classList.add('selected');
        this.selectedRow = item;
    }

    showPreview(item) {
        const previewContent = document.getElementById('preview-content');
        previewContent.innerHTML = `
            <div class="preview-info">
                <p><span class="label">FILE:</span> ${item.name}</p>
                <p><span class="label">TYPE:</span> ${item.type}</p>
                <p><span class="label">SIZE:</span> ${item.size}</p>
                <p><span class="label">DATE:</span> ${item.modified}</p>
            </div>
            <div class="preview-separator">════════════════════</div>
            <pre class="preview-data">${item.rawData}</pre>
        `;

        // Show preview panel on mobile
        const preview = document.querySelector('.data-preview');
        preview.classList.add('active');
    }

    closePreview() {
        const preview = document.querySelector('.data-preview');
        preview.classList.remove('active');
    }

    executeCommand(command) {
        const cmd = command.toUpperCase().trim();
        
        switch (cmd) {
            case 'CLS':
            case 'CLEAR':
                this.filteredData = [];
                this.updateDisplay();
                this.showMessage('SCREEN CLEARED');
                break;
            case 'DIR':
            case 'LS':
                this.showMessage(`${this.data.length} FILES IN DIRECTORY`);
                break;
            case 'HELP':
                this.showMessage('COMMANDS: CLS, DIR, SORT, FILTER, EXIT');
                break;
            case 'EXIT':
                this.showMessage('CANNOT EXIT - SYSTEM LOCKED');
                break;
            default:
                if (cmd.startsWith('FILTER ')) {
                    const query = cmd.substring(7);
                    document.getElementById('search-filter').value = query;
                    this.handleSearch(query);
                } else if (cmd.startsWith('SORT ')) {
                    const column = cmd.substring(5).toLowerCase();
                    if (this.columns.includes(column)) {
                        this.handleSort(column);
                    }
                } else {
                    this.showMessage('UNKNOWN COMMAND - TYPE HELP');
                }
        }
    }

    showMessage(message) {
        const commandInput = document.querySelector('.command-input');
        const originalPlaceholder = commandInput.placeholder;
        commandInput.placeholder = message;
        
        setTimeout(() => {
            commandInput.placeholder = originalPlaceholder;
        }, 3000);
    }

    initColumnResizing() {
        let isResizing = false;
        let currentColumn = null;
        let startX = 0;
        let startWidth = 0;

        document.querySelectorAll('.resize-handle').forEach(handle => {
            handle.addEventListener('mousedown', (e) => {
                isResizing = true;
                currentColumn = handle.parentElement;
                startX = e.pageX;
                startWidth = currentColumn.offsetWidth;
                
                document.body.style.cursor = 'col-resize';
                e.preventDefault();
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const width = startWidth + (e.pageX - startX);
            if (width > 50) {
                currentColumn.style.width = `${width}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
            currentColumn = null;
            document.body.style.cursor = 'default';
        });
    }

    startSystemClock() {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            document.getElementById('system-time').textContent = `${hours}:${minutes}:${seconds}`;
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    simulateMemoryUsage() {
        const memoryBar = document.querySelector('.memory-used');
        const memoryText = document.querySelector('.memory-text');
        
        setInterval(() => {
            const used = 640 + Math.floor(Math.random() * 100);
            const percentage = (used / 1024) * 100;
            
            memoryBar.style.width = `${percentage}%`;
            memoryText.textContent = `${used}K/1024K`;
            
            if (percentage > 90) {
                memoryBar.style.backgroundColor = 'var(--error-red)';
            } else if (percentage > 75) {
                memoryBar.style.backgroundColor = 'var(--warning-yellow)';
            } else {
                memoryBar.style.backgroundColor = 'var(--terminal-text)';
            }
        }, 2000);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.dataExplorer = new DataExplorer();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'f':
                    e.preventDefault();
                    document.getElementById('search-filter').focus();
                    break;
                case 'e':
                    e.preventDefault();
                    window.dataExplorer.handleAction('export');
                    break;
                case 'r':
                    e.preventDefault();
                    window.dataExplorer.handleAction('refresh');
                    break;
            }
        }
    });
});

// Add some retro console messages
console.log('%c╔════════════════════════════╗', 'color: #00ff00');
console.log('%c║  DATACOM-3000 SYSTEM v2.31 ║', 'color: #00ff00');
console.log('%c║  (C) 1990 RETROTECH CORP   ║', 'color: #00ff00');
console.log('%c╚════════════════════════════╝', 'color: #00ff00');
console.log('%cSYSTEM INITIALIZED', 'color: #ffb000');
console.log('%cMEMORY: 640K OK', 'color: #00ff00');
console.log('%cREADY.', 'color: #00ff00');