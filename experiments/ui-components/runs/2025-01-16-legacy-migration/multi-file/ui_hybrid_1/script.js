// Organic Search Hub - Interactive Functionality

class OrganicSearchHub {
    constructor() {
        this.searchInput = document.getElementById('main-search');
        this.searchButton = document.querySelector('.search-button');
        this.filterToggle = document.querySelector('.filter-toggle');
        this.advancedFilters = document.getElementById('advanced-filters');
        this.suggestionsContainer = document.querySelector('.search-suggestions');
        this.recentSearchesList = document.querySelector('.recent-searches .search-list');
        this.popularSearchesList = document.querySelector('.popular-searches .search-list');
        this.actionButtons = document.querySelectorAll('.action-button');
        this.statusText = document.querySelector('.status-text');
        
        this.searchHistory = this.loadSearchHistory();
        this.currentSuggestions = [];
        this.debounceTimer = null;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.populateRecentSearches();
        this.populatePopularSearches();
        this.initializeFilters();
        this.startGrowthAnimation();
    }
    
    bindEvents() {
        // Search input events
        this.searchInput.addEventListener('input', (e) => this.handleSearchInput(e));
        this.searchInput.addEventListener('focus', () => this.showSuggestions());
        this.searchInput.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
        
        // Search button
        this.searchButton.addEventListener('click', () => this.performSearch());
        
        // Filter toggle
        this.filterToggle.addEventListener('click', () => this.toggleFilters());
        
        // Action buttons
        this.actionButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleQuickAction(e));
        });
        
        // Click outside to close suggestions
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideSuggestions();
            }
        });
        
        // Filter changes
        this.advancedFilters.addEventListener('change', () => this.updateSearchContext());
    }
    
    handleSearchInput(e) {
        const query = e.target.value.trim();
        
        // Debounce search suggestions
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            if (query.length > 0) {
                this.generateSuggestions(query);
                this.showSuggestions();
            } else {
                this.hideSuggestions();
            }
        }, 300);
        
        // Update growth status
        this.updateGrowthStatus(query);
    }
    
    generateSuggestions(query) {
        // Simulated organic suggestions based on nature themes
        const natureTerms = [
            'sustainable gardens', 'permaculture design', 'native plants',
            'pollinator habitats', 'composting methods', 'seed saving',
            'organic farming', 'forest bathing', 'wildlife photography',
            'botanical illustration', 'mushroom foraging', 'tree identification',
            'bird watching', 'natural remedies', 'eco-friendly practices'
        ];
        
        // Filter and enhance suggestions
        const suggestions = natureTerms
            .filter(term => term.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5)
            .map(term => ({
                text: term,
                type: this.categorizeSuggestion(term),
                relevance: this.calculateRelevance(term, query)
            }))
            .sort((a, b) => b.relevance - a.relevance);
        
        this.currentSuggestions = suggestions;
        this.renderSuggestions(suggestions);
    }
    
    categorizeSuggestion(term) {
        const categories = {
            garden: ['garden', 'plant', 'seed', 'compost'],
            wildlife: ['bird', 'wildlife', 'pollinator', 'mushroom'],
            practice: ['sustainable', 'organic', 'eco-friendly', 'permaculture'],
            experience: ['bathing', 'watching', 'photography', 'illustration']
        };
        
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => term.toLowerCase().includes(keyword))) {
                return category;
            }
        }
        return 'general';
    }
    
    calculateRelevance(term, query) {
        const lowerTerm = term.toLowerCase();
        const lowerQuery = query.toLowerCase();
        
        // Exact match gets highest score
        if (lowerTerm === lowerQuery) return 100;
        
        // Starting with query gets high score
        if (lowerTerm.startsWith(lowerQuery)) return 80;
        
        // Contains query gets medium score
        if (lowerTerm.includes(lowerQuery)) return 60;
        
        // Fuzzy match gets lower score
        return this.fuzzyMatch(lowerTerm, lowerQuery) ? 40 : 0;
    }
    
    fuzzyMatch(str, pattern) {
        let patternIdx = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === pattern[patternIdx]) {
                patternIdx++;
            }
            if (patternIdx === pattern.length) return true;
        }
        return false;
    }
    
    renderSuggestions(suggestions) {
        if (suggestions.length === 0) {
            this.hideSuggestions();
            return;
        }
        
        const html = suggestions.map((suggestion, index) => `
            <div class="suggestion-item" data-index="${index}" role="option">
                <span class="suggestion-icon suggestion-icon--${suggestion.type}"></span>
                <span class="suggestion-text">${this.highlightMatch(suggestion.text)}</span>
            </div>
        `).join('');
        
        this.suggestionsContainer.innerHTML = html;
        
        // Add click handlers to suggestions
        this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                this.selectSuggestion(this.currentSuggestions[index]);
            });
        });
    }
    
    highlightMatch(text) {
        const query = this.searchInput.value.trim();
        if (!query) return text;
        
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }
    
    selectSuggestion(suggestion) {
        this.searchInput.value = suggestion.text;
        this.hideSuggestions();
        this.performSearch();
    }
    
    showSuggestions() {
        if (this.currentSuggestions.length > 0) {
            this.suggestionsContainer.classList.add('active');
        }
    }
    
    hideSuggestions() {
        this.suggestionsContainer.classList.remove('active');
    }
    
    handleKeyNavigation(e) {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        const activeItem = this.suggestionsContainer.querySelector('.suggestion-item.active');
        let currentIndex = activeItem ? parseInt(activeItem.dataset.index) : -1;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = (currentIndex + 1) % items.length;
                this.highlightSuggestion(currentIndex);
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
                this.highlightSuggestion(currentIndex);
                break;
                
            case 'Enter':
                if (currentIndex >= 0) {
                    e.preventDefault();
                    this.selectSuggestion(this.currentSuggestions[currentIndex]);
                } else {
                    this.performSearch();
                }
                break;
                
            case 'Escape':
                this.hideSuggestions();
                break;
        }
    }
    
    highlightSuggestion(index) {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        items.forEach(item => item.classList.remove('active'));
        
        if (index >= 0 && index < items.length) {
            items[index].classList.add('active');
            items[index].scrollIntoView({ block: 'nearest' });
        }
    }
    
    toggleFilters() {
        const isExpanded = this.filterToggle.getAttribute('aria-expanded') === 'true';
        this.filterToggle.setAttribute('aria-expanded', !isExpanded);
        this.advancedFilters.setAttribute('aria-hidden', isExpanded);
        
        if (!isExpanded) {
            this.advancedFilters.style.display = 'grid';
            // Animate in
            requestAnimationFrame(() => {
                this.advancedFilters.style.transform = 'scaleY(1)';
                this.advancedFilters.style.opacity = '1';
            });
        } else {
            this.advancedFilters.style.transform = 'scaleY(0)';
            this.advancedFilters.style.opacity = '0';
            setTimeout(() => {
                this.advancedFilters.style.display = 'none';
            }, 400);
        }
    }
    
    performSearch() {
        const query = this.searchInput.value.trim();
        if (!query) return;
        
        // Add to search history
        this.addToSearchHistory(query);
        
        // Get active filters
        const filters = this.getActiveFilters();
        
        // Simulate search action
        console.log('Searching for:', query, 'with filters:', filters);
        
        // Update UI feedback
        this.showSearchFeedback(query);
        
        // Clear suggestions
        this.hideSuggestions();
    }
    
    getActiveFilters() {
        const filters = {
            timeframe: null,
            types: []
        };
        
        // Get timeframe
        const timeframeInput = this.advancedFilters.querySelector('input[name="timeframe"]:checked');
        if (timeframeInput) {
            filters.timeframe = timeframeInput.value;
        }
        
        // Get types
        const typeInputs = this.advancedFilters.querySelectorAll('input[name="type"]:checked');
        typeInputs.forEach(input => {
            filters.types.push(input.value);
        });
        
        return filters;
    }
    
    handleQuickAction(e) {
        const button = e.currentTarget;
        const action = button.dataset.action;
        
        // Animate button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
        
        // Perform action
        switch(action) {
            case 'trending':
                this.searchInput.value = 'trending in sustainable living';
                break;
            case 'seasonal':
                this.searchInput.value = this.getSeasonalQuery();
                break;
            case 'evergreen':
                this.searchInput.value = 'timeless gardening wisdom';
                break;
            case 'wild':
                this.searchInput.value = this.getRandomNatureQuery();
                break;
        }
        
        this.performSearch();
    }
    
    getSeasonalQuery() {
        const month = new Date().getMonth();
        const seasons = {
            spring: 'spring planting guide',
            summer: 'summer garden care',
            fall: 'autumn harvest tips',
            winter: 'winter garden preparation'
        };
        
        if (month >= 2 && month <= 4) return seasons.spring;
        if (month >= 5 && month <= 7) return seasons.summer;
        if (month >= 8 && month <= 10) return seasons.fall;
        return seasons.winter;
    }
    
    getRandomNatureQuery() {
        const queries = [
            'rare botanical species',
            'unexplored nature trails',
            'unique ecosystem discoveries',
            'hidden garden gems',
            'secret foraging spots'
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    }
    
    addToSearchHistory(query) {
        // Remove if already exists
        this.searchHistory = this.searchHistory.filter(item => item !== query);
        
        // Add to beginning
        this.searchHistory.unshift(query);
        
        // Keep only last 10
        this.searchHistory = this.searchHistory.slice(0, 10);
        
        // Save to localStorage
        this.saveSearchHistory();
        
        // Update UI
        this.populateRecentSearches();
    }
    
    loadSearchHistory() {
        try {
            return JSON.parse(localStorage.getItem('organicSearchHistory')) || [];
        } catch {
            return [];
        }
    }
    
    saveSearchHistory() {
        try {
            localStorage.setItem('organicSearchHistory', JSON.stringify(this.searchHistory));
        } catch (e) {
            console.error('Failed to save search history:', e);
        }
    }
    
    populateRecentSearches() {
        if (this.searchHistory.length === 0) {
            this.recentSearchesList.innerHTML = '<li class="empty-state">No recent searches yet</li>';
            return;
        }
        
        const html = this.searchHistory.slice(0, 5).map(query => 
            `<li data-query="${query}">${query}</li>`
        ).join('');
        
        this.recentSearchesList.innerHTML = html;
        
        // Add click handlers
        this.recentSearchesList.querySelectorAll('li').forEach(item => {
            if (!item.classList.contains('empty-state')) {
                item.addEventListener('click', () => {
                    this.searchInput.value = item.dataset.query;
                    this.performSearch();
                });
            }
        });
    }
    
    populatePopularSearches() {
        const popularSearches = [
            'composting basics',
            'native plant species',
            'butterfly gardens',
            'organic pest control',
            'rainwater harvesting'
        ];
        
        const html = popularSearches.map(query => 
            `<li data-query="${query}">${query}</li>`
        ).join('');
        
        this.popularSearchesList.innerHTML = html;
        
        // Add click handlers
        this.popularSearchesList.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                this.searchInput.value = item.dataset.query;
                this.performSearch();
            });
        });
    }
    
    updateSearchContext() {
        const filters = this.getActiveFilters();
        let context = 'Searching ';
        
        if (filters.timeframe && filters.timeframe !== 'all') {
            context += `${filters.timeframe}'s `;
        }
        
        if (filters.types.length > 0) {
            context += filters.types.join(', ');
        } else {
            context += 'all content';
        }
        
        this.showStatusMessage(context);
    }
    
    updateGrowthStatus(query) {
        const messages = [
            'Your search is taking root...',
            'Ideas are sprouting...',
            'Knowledge is blooming...',
            'Wisdom is growing...',
            'Discoveries are flourishing...'
        ];
        
        if (query.length > 0) {
            const index = Math.min(Math.floor(query.length / 3), messages.length - 1);
            this.statusText.textContent = messages[index];
        } else {
            this.statusText.textContent = 'Your search garden is thriving';
        }
    }
    
    showSearchFeedback(query) {
        const messages = [
            `Cultivating results for "${query}"...`,
            `Harvesting knowledge about "${query}"...`,
            `Growing insights on "${query}"...`,
            `Nurturing information about "${query}"...`
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showStatusMessage(message);
        
        // Reset after delay
        setTimeout(() => {
            this.statusText.textContent = 'Your search garden is thriving';
        }, 3000);
    }
    
    showStatusMessage(message) {
        this.statusText.style.opacity = '0';
        setTimeout(() => {
            this.statusText.textContent = message;
            this.statusText.style.opacity = '1';
        }, 200);
    }
    
    initializeFilters() {
        // Set initial state
        this.advancedFilters.style.transform = 'scaleY(0)';
        this.advancedFilters.style.opacity = '0';
        this.advancedFilters.style.transformOrigin = 'top';
        this.advancedFilters.style.transition = 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    
    startGrowthAnimation() {
        // Animate elements on load
        const elements = [
            { el: '.search-hub__header', delay: 0 },
            { el: '.search-container', delay: 200 },
            { el: '.quick-actions', delay: 400 },
            { el: '.search-ecosystem', delay: 600 }
        ];
        
        elements.forEach(({ el, delay }) => {
            const element = document.querySelector(el);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 800ms ease-out';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new OrganicSearchHub();
});

// Add custom styles for suggestion type icons
const style = document.createElement('style');
style.textContent = `
    .suggestion-icon--garden::after { content: '🌱'; }
    .suggestion-icon--wildlife::after { content: '🦋'; }
    .suggestion-icon--practice::after { content: '♻️'; }
    .suggestion-icon--experience::after { content: '🌄'; }
    .suggestion-icon--general::after { content: '🔍'; }
    
    .suggestion-icon::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
    }
    
    .suggestion-item.active {
        background: var(--morning-mist);
        padding-left: var(--space-branch);
    }
    
    .empty-state {
        opacity: 0.6;
        font-style: italic;
        cursor: default !important;
    }
    
    .empty-state:hover {
        transform: none !important;
        color: inherit !important;
    }
`;
document.head.appendChild(style);