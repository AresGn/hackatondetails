// ===== MAIN APPLICATION CONTROLLER =====

class AgribotApp {
    constructor() {
        this.isInitialized = false;
        this.components = {};
        this.config = {
            version: '1.0.0',
            apiEndpoint: '/api',
            defaultLanguage: 'fr',
            supportedLanguages: ['fr', 'en'],
            theme: 'light'
        };
        
        this.init();
    }
    
    async init() {
        try {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }
            
            // Initialize core components
            await this.initializeComponents();
            
            // Setup global event listeners
            this.setupGlobalEvents();
            
            // Initialize theme
            this.initializeTheme();
            
            // Setup error handling
            this.setupErrorHandling();
            
            // Mark as initialized
            this.isInitialized = true;
            
            // Trigger app ready event
            this.triggerAppReady();
            
            console.log('AgriBot App initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize AgriBot App:', error);
            this.handleInitializationError(error);
        }
    }
    
    async initializeComponents() {
        // Initialize translations first
        if (typeof initTranslations === 'function') {
            try {
                initTranslations();
            } catch (error) {
                console.warn('Failed to initialize translations:', error);
            }
        }

        // Wait for other components to be available
        await this.waitForComponents();

        // Store component references with fallbacks
        this.components = {
            navigation: window.navigationManager || null,
            contentLoader: window.contentLoader || null,
            translations: {
                switch: window.switchLanguage || (() => console.warn('switchLanguage not available')),
                get: window.getTranslation || ((key) => key),
                current: window.getCurrentLanguage || (() => 'fr')
            }
        };

        // Set up a delayed check for components that might load later
        setTimeout(() => {
            if (!this.components.navigation && window.navigationManager) {
                this.components.navigation = window.navigationManager;
            }
            if (!this.components.contentLoader && window.contentLoader) {
                this.components.contentLoader = window.contentLoader;
            }
        }, 1000);
    }
    
    async waitForComponents() {
        const maxWait = 10000; // 10 seconds
        const checkInterval = 100; // 100ms
        let waited = 0;

        return new Promise((resolve, reject) => {
            const checkComponents = () => {
                // Check if essential functions are available
                const hasTranslations = typeof window.getCurrentLanguage === 'function' &&
                                       typeof window.getTranslation === 'function';

                if (hasTranslations) {
                    // Components may not be ready yet, but essential functions are
                    resolve();
                } else if (waited >= maxWait) {
                    console.warn('Components timeout reached, continuing with limited functionality');
                    resolve(); // Don't reject, just continue with limited functionality
                } else {
                    waited += checkInterval;
                    setTimeout(checkComponents, checkInterval);
                }
            };

            checkComponents();
        });
    }
    
    setupGlobalEvents() {
        // Handle app-wide keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleGlobalKeyboard(e);
        });
        
        // Handle visibility changes
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });
        
        // Handle online/offline status
        window.addEventListener('online', () => {
            this.handleConnectionChange(true);
        });
        
        window.addEventListener('offline', () => {
            this.handleConnectionChange(false);
        });
        
        // Handle unload
        window.addEventListener('beforeunload', (e) => {
            this.handleBeforeUnload(e);
        });
        
        // Handle errors
        window.addEventListener('error', (e) => {
            this.handleGlobalError(e);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            this.handleUnhandledRejection(e);
        });
    }
    
    handleGlobalKeyboard(e) {
        // Global keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'k':
                    e.preventDefault();
                    this.openQuickSearch();
                    break;
                case '/':
                    e.preventDefault();
                    this.toggleHelp();
                    break;
            }
        }
        
        // Escape key handling
        if (e.key === 'Escape') {
            this.handleEscape();
        }
    }
    
    handleVisibilityChange() {
        if (document.hidden) {
            // App is hidden
            this.onAppHidden();
        } else {
            // App is visible
            this.onAppVisible();
        }
    }
    
    handleConnectionChange(isOnline) {
        if (isOnline) {
            this.showNotification('Connexion rétablie', 'success');
            this.onConnectionRestored();
        } else {
            this.showNotification('Connexion perdue - Mode hors ligne', 'warning');
            this.onConnectionLost();
        }
    }
    
    handleBeforeUnload(e) {
        // Check if there are unsaved changes
        if (this.hasUnsavedChanges()) {
            e.preventDefault();
            e.returnValue = '';
        }
    }
    
    handleGlobalError(e) {
        console.error('Global error:', e.error);
        this.logError('global_error', e.error);
    }
    
    handleUnhandledRejection(e) {
        console.error('Unhandled promise rejection:', e.reason);
        this.logError('unhandled_rejection', e.reason);
    }
    
    initializeTheme() {
        // Get saved theme or detect system preference
        const savedTheme = localStorage.getItem('agribot-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        this.setTheme(theme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('agribot-theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    setTheme(theme) {
        this.config.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('agribot-theme', theme);
    }
    
    setupErrorHandling() {
        // Create error boundary
        this.errorBoundary = {
            componentStack: [],
            errorCount: 0,
            maxErrors: 10
        };
    }
    
    // Utility methods
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add to page
        let container = document.querySelector('.notifications-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notifications-container';
            document.body.appendChild(container);
        }
        
        container.appendChild(notification);
        
        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, duration);
        }
    }
    
    logError(type, error) {
        const errorData = {
            type,
            message: error.message || error,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };
        
        // Store in local storage for debugging
        const errors = JSON.parse(localStorage.getItem('agribot-errors') || '[]');
        errors.push(errorData);
        
        // Keep only last 50 errors
        if (errors.length > 50) {
            errors.splice(0, errors.length - 50);
        }
        
        localStorage.setItem('agribot-errors', JSON.stringify(errors));
    }
    
    openQuickSearch() {
        // Implement quick search functionality
        console.log('Quick search opened');
    }
    
    toggleHelp() {
        // Implement help system
        console.log('Help toggled');
    }
    
    handleEscape() {
        // Handle escape key globally
        if (this.components.navigation && this.components.navigation.isSidebarOpen()) {
            this.components.navigation.closeSidebar();
        }
    }
    
    onAppHidden() {
        // App hidden logic
        console.log('App hidden');
    }
    
    onAppVisible() {
        // App visible logic
        console.log('App visible');
    }
    
    onConnectionRestored() {
        // Connection restored logic
        console.log('Connection restored');
    }
    
    onConnectionLost() {
        // Connection lost logic
        console.log('Connection lost');
    }
    
    hasUnsavedChanges() {
        // Check for unsaved changes
        return false;
    }
    
    handleInitializationError(error) {
        // Show error message to user
        document.body.innerHTML = `
            <div class="initialization-error">
                <div class="error-content">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>Erreur d'initialisation</h2>
                    <p>L'application n'a pas pu se charger correctement.</p>
                    <button onclick="location.reload()" class="retry-button">
                        Réessayer
                    </button>
                </div>
            </div>
        `;
    }
    
    triggerAppReady() {
        // Trigger custom event
        document.dispatchEvent(new CustomEvent('appReady', {
            detail: {
                version: this.config.version,
                components: Object.keys(this.components)
            }
        }));
    }
    
    // Public API
    getComponent(name) {
        return this.components[name];
    }
    
    getConfig(key) {
        return key ? this.config[key] : this.config;
    }
    
    isReady() {
        return this.isInitialized;
    }
    
    getVersion() {
        return this.config.version;
    }
}

// Initialize the application
const agribotApp = new AgribotApp();

// Export for global use
window.agribotApp = agribotApp;

// Add some utility functions to global scope
window.showNotification = (message, type, duration) => {
    agribotApp.showNotification(message, type, duration);
};

window.setTheme = (theme) => {
    agribotApp.setTheme(theme);
};

// Development helpers
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
    window.agribotDebug = {
        app: agribotApp,
        errors: () => JSON.parse(localStorage.getItem('agribot-errors') || '[]'),
        clearErrors: () => localStorage.removeItem('agribot-errors'),
        components: () => agribotApp.components,
        config: () => agribotApp.config
    };
}
