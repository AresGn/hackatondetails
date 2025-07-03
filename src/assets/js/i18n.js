// ===== MODERN I18N SYSTEM =====

class I18nManager {
    constructor() {
        this.currentLanguage = 'fr';
        this.translations = {};
        this.fallbackLanguage = 'fr';
        this.loadedLanguages = new Set();
        this.observers = new Set();
        
        // Initialize from localStorage
        const savedLanguage = localStorage.getItem('agribot-language');
        if (savedLanguage && this.isValidLanguage(savedLanguage)) {
            this.currentLanguage = savedLanguage;
        }
    }

    // Load translation file for a specific language
    async loadLanguage(language) {
        if (this.loadedLanguages.has(language)) {
            return this.translations[language];
        }

        try {
            const response = await fetch(`src/translations/${language}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${language} translations`);
            }
            
            const translations = await response.json();
            this.translations[language] = translations;
            this.loadedLanguages.add(language);
            
            console.log(`✅ Loaded ${language} translations`);
            return translations;
        } catch (error) {
            console.error(`❌ Error loading ${language} translations:`, error);
            return null;
        }
    }

    // Initialize the i18n system
    async init() {
        try {
            // Load current language
            await this.loadLanguage(this.currentLanguage);
            
            // Load fallback language if different
            if (this.currentLanguage !== this.fallbackLanguage) {
                await this.loadLanguage(this.fallbackLanguage);
            }

            // Update HTML lang attribute
            this.updateHtmlLang();
            
            // Apply translations to DOM
            this.applyTranslations();
            
            // Update language buttons
            this.updateLanguageButtons();
            
            console.log('✅ I18n system initialized');
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize i18n system:', error);
            return false;
        }
    }

    // Switch to a different language
    async switchLanguage(language) {
        if (!this.isValidLanguage(language)) {
            console.warn(`Invalid language: ${language}`);
            return false;
        }

        if (language === this.currentLanguage) {
            return true;
        }

        try {
            // Load the language if not already loaded
            await this.loadLanguage(language);
            
            // Update current language
            this.currentLanguage = language;
            
            // Save to localStorage
            localStorage.setItem('agribot-language', language);
            
            // Update HTML lang attribute
            this.updateHtmlLang();
            
            // Apply translations
            this.applyTranslations();
            
            // Update language buttons
            this.updateLanguageButtons();
            
            // Notify observers
            this.notifyLanguageChange(language);
            
            console.log(`✅ Switched to ${language}`);
            return true;
        } catch (error) {
            console.error(`❌ Failed to switch to ${language}:`, error);
            return false;
        }
    }

    // Get translation for a key using dot notation (e.g., "navigation.app_title")
    t(key, params = {}) {
        const translation = this.getNestedValue(this.translations[this.currentLanguage], key) ||
                          this.getNestedValue(this.translations[this.fallbackLanguage], key) ||
                          key;

        // Handle array return type
        if (params.returnType === 'array' && Array.isArray(translation)) {
            return translation;
        }

        // Replace parameters in translation
        return this.interpolate(translation, params);
    }

    // Get nested value from object using dot notation
    getNestedValue(obj, path) {
        if (!obj || !path) return null;
        
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    // Interpolate parameters in translation string
    interpolate(text, params) {
        if (!params || Object.keys(params).length === 0) {
            return text;
        }

        return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return params[key] !== undefined ? params[key] : match;
        });
    }

    // Apply translations to all elements with data-i18n attribute
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const params = this.getElementParams(element);
            const translation = this.t(key, params);
            
            if (translation && translation !== key) {
                // Check if element has data-i18n-attr for attribute translation
                const attr = element.getAttribute('data-i18n-attr');
                if (attr) {
                    element.setAttribute(attr, translation);
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    // Get parameters from element's data attributes
    getElementParams(element) {
        const params = {};
        const attributes = element.attributes;
        
        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i];
            if (attr.name.startsWith('data-i18n-param-')) {
                const paramName = attr.name.replace('data-i18n-param-', '');
                params[paramName] = attr.value;
            }
        }
        
        return params;
    }

    // Update HTML lang attribute
    updateHtmlLang() {
        const htmlElement = document.getElementById('html-root') || document.documentElement;
        htmlElement.lang = this.currentLanguage;
    }

    // Update language button states
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${this.currentLanguage}`) {
                btn.classList.add('active');
            }
        });
    }

    // Check if language is valid
    isValidLanguage(language) {
        return ['fr', 'en'].includes(language);
    }

    // Add observer for language changes
    addLanguageObserver(callback) {
        this.observers.add(callback);
    }

    // Remove observer
    removeLanguageObserver(callback) {
        this.observers.delete(callback);
    }

    // Notify all observers of language change
    notifyLanguageChange(language) {
        this.observers.forEach(callback => {
            try {
                callback(language);
            } catch (error) {
                console.error('Error in language change observer:', error);
            }
        });

        // Also dispatch custom event for backward compatibility
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language }
        }));
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return ['fr', 'en'];
    }

    // Check if language is loaded
    isLanguageLoaded(language) {
        return this.loadedLanguages.has(language);
    }

    // Translate a single element
    translateElement(element, key, params = {}) {
        const translation = this.t(key, params);
        if (translation && translation !== key) {
            element.textContent = translation;
        }
    }

    // Format number according to current locale
    formatNumber(number, options = {}) {
        const locale = this.currentLanguage === 'fr' ? 'fr-FR' : 'en-US';
        return new Intl.NumberFormat(locale, options).format(number);
    }

    // Format date according to current locale
    formatDate(date, options = {}) {
        const locale = this.currentLanguage === 'fr' ? 'fr-FR' : 'en-US';
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}

// Create global instance
const i18n = new I18nManager();

// Export for global use
window.i18n = i18n;
window.t = (key, params) => i18n.t(key, params);
window.switchLanguage = (language) => i18n.switchLanguage(language);
window.getCurrentLanguage = () => i18n.getCurrentLanguage();

// Legacy compatibility functions
window.getTranslation = (key) => i18n.t(key);
window.translateElement = (element, key) => i18n.translateElement(element, key);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await i18n.init();
});

console.log('🌐 Modern I18n system loaded');
