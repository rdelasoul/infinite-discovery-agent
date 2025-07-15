// Digital Minimalism - Input Intelligence Script

class InputIntelligence {
    constructor() {
        this.form = document.getElementById('smartForm');
        this.inputs = {};
        this.validators = {
            email: this.validateEmail.bind(this),
            phone: this.validatePhone.bind(this),
            card: this.validateCard.bind(this),
            password: this.validatePassword.bind(this)
        };
        this.formatters = {
            phone: this.formatPhone.bind(this),
            card: this.formatCard.bind(this)
        };
        this.validFields = new Set();
        this.init();
    }

    init() {
        // Initialize all input fields
        this.form.querySelectorAll('.intelligent-input').forEach(input => {
            const type = input.closest('.input-group').dataset.inputType;
            this.inputs[type] = {
                element: input,
                group: input.closest('.input-group'),
                error: input.closest('.input-group').querySelector('.input-error'),
                hint: input.closest('.input-group').querySelector('.input-hint'),
                isValid: false
            };

            // Add event listeners
            input.addEventListener('input', (e) => this.handleInput(e, type));
            input.addEventListener('focus', (e) => this.handleFocus(e, type));
            input.addEventListener('blur', (e) => this.handleBlur(e, type));
            input.addEventListener('keydown', (e) => this.handleKeydown(e, type));
        });

        // Initialize email suggestions
        this.initEmailSuggestions();

        // Initialize password toggle
        this.initPasswordToggle();

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Update initial stats
        this.updateStats();
    }

    handleInput(event, type) {
        const input = event.target;
        const value = input.value;

        // Apply formatter if available
        if (this.formatters[type]) {
            const formatted = this.formatters[type](value);
            if (formatted !== value) {
                input.value = formatted;
                // Restore cursor position
                const cursorPos = this.getCursorPosition(input, value, formatted);
                input.setSelectionRange(cursorPos, cursorPos);
            }
        }

        // Validate input
        this.validateField(type, input.value);

        // Update progress
        this.updateProgress();

        // Type-specific handlers
        if (type === 'email') {
            this.updateEmailSuggestions(input.value);
        } else if (type === 'card') {
            this.updateCardType(input.value);
        } else if (type === 'password') {
            this.updatePasswordStrength(input.value);
        }
    }

    handleFocus(event, type) {
        const group = this.inputs[type].group;
        group.classList.add('active');
        
        // Show suggestions for email
        if (type === 'email') {
            const suggestions = document.getElementById('emailSuggestions');
            if (suggestions.children.length > 0) {
                suggestions.classList.add('visible');
            }
        }
    }

    handleBlur(event, type) {
        const group = this.inputs[type].group;
        group.classList.remove('active');
        
        // Hide suggestions
        if (type === 'email') {
            setTimeout(() => {
                document.getElementById('emailSuggestions').classList.remove('visible');
            }, 200);
        }
    }

    handleKeydown(event, type) {
        if (type === 'email' && (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter')) {
            this.handleSuggestionNavigation(event);
        }
    }

    validateField(type, value) {
        const validator = this.validators[type];
        const input = this.inputs[type];
        
        if (!validator) return;

        const validation = validator(value);
        
        input.isValid = validation.isValid;
        input.group.classList.toggle('valid', validation.isValid);
        input.group.classList.toggle('invalid', !validation.isValid && value.length > 0);

        // Update error message
        if (!validation.isValid && value.length > 0) {
            input.error.textContent = validation.error;
            input.error.classList.add('visible');
            input.hint.style.opacity = '0';
        } else {
            input.error.classList.remove('visible');
            input.hint.style.opacity = '1';
        }

        // Update valid fields set
        if (validation.isValid) {
            this.validFields.add(type);
        } else {
            this.validFields.delete(type);
        }

        // Update submit button state
        this.updateSubmitButton();
        this.updateStats();
    }

    validateEmail(email) {
        if (!email) return { isValid: false, error: '' };
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        
        return {
            isValid,
            error: isValid ? '' : 'Please enter a valid email address'
        };
    }

    validatePhone(phone) {
        if (!phone) return { isValid: false, error: '' };
        
        const cleaned = phone.replace(/\D/g, '');
        const isValid = cleaned.length === 10;
        
        return {
            isValid,
            error: isValid ? '' : 'Please enter a 10-digit phone number'
        };
    }

    validateCard(card) {
        if (!card) return { isValid: false, error: '' };
        
        const cleaned = card.replace(/\s/g, '');
        const isValid = cleaned.length >= 13 && cleaned.length <= 19 && this.luhnCheck(cleaned);
        
        return {
            isValid,
            error: isValid ? '' : 'Please enter a valid card number'
        };
    }

    validatePassword(password) {
        if (!password) return { isValid: false, error: '' };
        
        const checks = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };
        
        const passedChecks = Object.values(checks).filter(Boolean).length;
        const isValid = passedChecks >= 3 && checks.length;
        
        let error = '';
        if (!checks.length) error = 'Password must be at least 8 characters';
        else if (passedChecks < 3) error = 'Password needs more complexity';
        
        return { isValid, error, strength: passedChecks };
    }

    formatPhone(value) {
        const cleaned = value.replace(/\D/g, '');
        
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }

    formatCard(value) {
        const cleaned = value.replace(/\s/g, '');
        const parts = [];
        
        for (let i = 0; i < cleaned.length; i += 4) {
            parts.push(cleaned.slice(i, i + 4));
        }
        
        return parts.join(' ').trim();
    }

    luhnCheck(value) {
        let sum = 0;
        let isEven = false;
        
        for (let i = value.length - 1; i >= 0; i--) {
            let digit = parseInt(value[i]);
            
            if (isEven) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            
            sum += digit;
            isEven = !isEven;
        }
        
        return sum % 10 === 0;
    }

    getCursorPosition(input, oldValue, newValue) {
        const oldPos = input.selectionStart;
        const oldLength = oldValue.length;
        const newLength = newValue.length;
        
        if (oldLength < newLength) {
            // Characters were added
            return oldPos + (newLength - oldLength);
        }
        return oldPos;
    }

    initEmailSuggestions() {
        const emailInput = this.inputs.email.element;
        const suggestionsList = document.getElementById('emailSuggestions');
        
        this.emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
        this.selectedSuggestion = -1;
    }

    updateEmailSuggestions(value) {
        const suggestionsList = document.getElementById('emailSuggestions');
        suggestionsList.innerHTML = '';
        this.selectedSuggestion = -1;
        
        if (!value.includes('@') || value.endsWith('@')) {
            const localPart = value.split('@')[0];
            if (localPart.length > 0) {
                this.emailDomains.forEach(domain => {
                    const suggestion = `${localPart}@${domain}`;
                    const li = document.createElement('li');
                    li.className = 'suggestion-item';
                    li.textContent = suggestion;
                    li.setAttribute('role', 'option');
                    li.addEventListener('click', () => {
                        this.inputs.email.element.value = suggestion;
                        this.validateField('email', suggestion);
                        suggestionsList.classList.remove('visible');
                    });
                    suggestionsList.appendChild(li);
                });
                suggestionsList.classList.add('visible');
            }
        } else {
            suggestionsList.classList.remove('visible');
        }
    }

    handleSuggestionNavigation(event) {
        const suggestionsList = document.getElementById('emailSuggestions');
        const suggestions = suggestionsList.querySelectorAll('.suggestion-item');
        
        if (suggestions.length === 0) return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.selectedSuggestion = Math.min(this.selectedSuggestion + 1, suggestions.length - 1);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.selectedSuggestion = Math.max(this.selectedSuggestion - 1, -1);
        } else if (event.key === 'Enter' && this.selectedSuggestion >= 0) {
            event.preventDefault();
            suggestions[this.selectedSuggestion].click();
            return;
        }
        
        suggestions.forEach((item, index) => {
            item.classList.toggle('selected', index === this.selectedSuggestion);
        });
    }

    updateCardType(value) {
        const cardType = this.inputs.card.group.querySelector('.card-type');
        const cleaned = value.replace(/\s/g, '');
        
        let type = '';
        if (cleaned.startsWith('4')) type = 'VISA';
        else if (cleaned.startsWith('5')) type = 'MC';
        else if (cleaned.startsWith('3')) type = 'AMEX';
        else if (cleaned.startsWith('6')) type = 'DISC';
        
        if (type) {
            cardType.textContent = type;
            cardType.classList.add('visible');
        } else {
            cardType.classList.remove('visible');
        }
    }

    initPasswordToggle() {
        const toggle = this.form.querySelector('.password-toggle');
        const passwordInput = this.inputs.password.element;
        
        toggle.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            toggle.classList.toggle('visible', !isPassword);
        });
    }

    updatePasswordStrength(value) {
        const strengthContainer = document.getElementById('passwordStrength');
        const strengthFill = strengthContainer.querySelector('.strength-fill');
        const strengthText = strengthContainer.querySelector('.strength-text');
        
        if (!value) {
            strengthContainer.classList.remove('visible');
            return;
        }
        
        const validation = this.validatePassword(value);
        const strength = validation.strength || 0;
        
        strengthContainer.classList.add('visible');
        strengthFill.style.width = `${(strength / 5) * 100}%`;
        
        const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
        strengthText.textContent = strengthLabels[strength - 1] || 'Very Weak';
    }

    updateProgress() {
        const totalFields = Object.keys(this.inputs).length;
        const filledFields = Object.values(this.inputs).filter(input => input.element.value.length > 0).length;
        const validFields = this.validFields.size;
        
        const progress = (validFields / totalFields) * 100;
        const progressFill = this.form.querySelector('.progress-fill');
        const progressText = this.form.querySelector('.progress-text');
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Complete`;
    }

    updateSubmitButton() {
        const submitButton = this.form.querySelector('.submit-button');
        const allValid = this.validFields.size === Object.keys(this.inputs).length;
        submitButton.disabled = !allValid;
    }

    updateStats() {
        document.getElementById('validFields').textContent = this.validFields.size;
        document.getElementById('totalFields').textContent = Object.keys(this.inputs).length;
        
        const quality = (this.validFields.size / Object.keys(this.inputs).length) * 100;
        document.getElementById('inputQuality').textContent = `${Math.round(quality)}%`;
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        const submitButton = this.form.querySelector('.submit-button');
        submitButton.classList.add('loading');
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Collect form data
        const formData = {};
        Object.entries(this.inputs).forEach(([type, input]) => {
            formData[type] = input.element.value;
        });
        
        console.log('Form submitted:', formData);
        
        // Reset form
        submitButton.classList.remove('loading');
        this.form.reset();
        this.validFields.clear();
        
        // Reset all states
        Object.values(this.inputs).forEach(input => {
            input.group.classList.remove('valid', 'invalid');
            input.error.classList.remove('visible');
            input.isValid = false;
        });
        
        this.updateProgress();
        this.updateStats();
        
        // Show success message
        alert('Form submitted successfully!');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new InputIntelligence();
});