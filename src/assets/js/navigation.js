// ===== NAVIGATION SYSTEM =====

class NavigationManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebar-toggle');
        this.mobileOverlay = document.getElementById('mobile-overlay');
        this.mainContent = document.getElementById('main-content');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.contentSections = document.querySelectorAll('.content-section');
        this.submenuItems = document.querySelectorAll('.has-submenu');
        
        this.isMobile = window.innerWidth <= 1023;
        this.isTablet = window.innerWidth <= 768;
        this.currentSection = 'overview';
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleResize();
        this.initializeActiveSection();
        this.setupSubmenuToggle();
    }
    
    bindEvents() {
        // Sidebar toggle
        if (this.sidebarToggle) {
            this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }
        
        // Mobile overlay
        if (this.mobileOverlay) {
            this.mobileOverlay.addEventListener('click', () => this.closeSidebar());
        }
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Escape key to close sidebar on mobile
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMobile && this.sidebar.classList.contains('open')) {
                this.closeSidebar();
            }
        });
        
        // Hash change for direct navigation
        window.addEventListener('hashchange', () => this.handleHashChange());
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const link = e.currentTarget;
        const section = link.getAttribute('data-section');
        
        if (section) {
            this.navigateToSection(section);
            
            // Close sidebar on mobile after navigation
            if (this.isMobile) {
                this.closeSidebar();
            }
        }
    }
    
    navigateToSection(sectionId) {
        // Update URL hash
        window.history.pushState(null, null, `#${sectionId}`);
        
        // Update active states
        this.updateActiveNavLink(sectionId);
        this.showSection(sectionId);
        
        // Update current section
        this.currentSection = sectionId;
        
        // Scroll to top
        this.mainContent.scrollTop = 0;
        
        // Trigger custom event
        document.dispatchEvent(new CustomEvent('sectionChanged', {
            detail: { section: sectionId }
        }));
    }
    
    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
                
                // Open parent submenu if needed
                const parentSubmenu = link.closest('.submenu');
                if (parentSubmenu) {
                    const parentItem = parentSubmenu.closest('.has-submenu');
                    if (parentItem) {
                        parentItem.classList.add('open');
                    }
                }
            }
        });
    }
    
    showSection(sectionId) {
        this.contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
    }
    
    toggleSidebar() {
        if (this.sidebar.classList.contains('open')) {
            this.closeSidebar();
        } else {
            this.openSidebar();
        }
    }
    
    openSidebar() {
        this.sidebar.classList.add('open');
        if (this.mobileOverlay) {
            this.mobileOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }
    
    closeSidebar() {
        this.sidebar.classList.remove('open');
        if (this.mobileOverlay) {
            this.mobileOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
    
    handleResize() {
        const wasTablet = this.isTablet;
        const wasMobile = this.isMobile;
        
        this.isMobile = window.innerWidth <= 1023;
        this.isTablet = window.innerWidth <= 768;
        
        // Close sidebar when switching from mobile to desktop
        if (wasMobile && !this.isMobile) {
            this.closeSidebar();
        }
        
        // Update sidebar toggle visibility
        if (this.sidebarToggle) {
            this.sidebarToggle.style.display = this.isMobile ? 'block' : 'none';
        }
    }
    
    initializeActiveSection() {
        // Get section from URL hash
        const hash = window.location.hash.substring(1);
        const targetSection = hash || 'overview';
        
        // Check if section exists
        const sectionElement = document.getElementById(targetSection);
        if (sectionElement) {
            this.navigateToSection(targetSection);
        } else {
            this.navigateToSection('overview');
        }
    }
    
    handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash && hash !== this.currentSection) {
            const sectionElement = document.getElementById(hash);
            if (sectionElement) {
                this.navigateToSection(hash);
            }
        }
    }
    
    setupSubmenuToggle() {
        this.submenuItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (link) {
                link.addEventListener('click', (e) => {
                    // Only toggle submenu if clicking on parent link (not submenu items)
                    if (e.target.closest('.submenu')) {
                        return;
                    }

                    e.preventDefault();

                    // Special handling for solutions section - only open sidebar, don't show content
                    const section = link.getAttribute('data-section');
                    if (section === 'solutions') {
                        // Just toggle the submenu and open sidebar if on mobile
                        item.classList.toggle('open');

                        // On mobile, ensure sidebar stays open to show submenu
                        if (this.isMobile && !this.sidebar.classList.contains('open')) {
                            this.openSidebar();
                        }

                        // Don't navigate to solutions section - user must choose submenu item
                        return;
                    }

                    item.classList.toggle('open');

                    // Close other submenus
                    this.submenuItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('open');
                        }
                    });
                });
            }
        });
    }
    
    // Public methods
    getCurrentSection() {
        return this.currentSection;
    }
    
    goToSection(sectionId) {
        this.navigateToSection(sectionId);
    }
    
    isSidebarOpen() {
        return this.sidebar.classList.contains('open');
    }
    
    // Breadcrumb functionality
    updateBreadcrumb(path) {
        const breadcrumbContainer = document.querySelector('.breadcrumb');
        if (!breadcrumbContainer) return;
        
        breadcrumbContainer.innerHTML = '';
        
        path.forEach((item, index) => {
            const breadcrumbItem = document.createElement('div');
            breadcrumbItem.className = 'breadcrumb-item';
            
            if (index === path.length - 1) {
                breadcrumbItem.classList.add('active');
                breadcrumbItem.textContent = item.name;
            } else {
                const link = document.createElement('a');
                link.href = `#${item.section}`;
                link.textContent = item.name;
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.navigateToSection(item.section);
                });
                breadcrumbItem.appendChild(link);
            }
            
            breadcrumbContainer.appendChild(breadcrumbItem);
        });
    }
    
    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        this.navigateToSection('overview');
                        break;
                    case '2':
                        e.preventDefault();
                        this.navigateToSection('problem');
                        break;
                    case '3':
                        e.preventDefault();
                        this.navigateToSection('analysis');
                        break;
                    case '4':
                        e.preventDefault();
                        this.navigateToSection('solutions');
                        break;
                    case '5':
                        e.preventDefault();
                        this.navigateToSection('ecosystem');
                        break;
                }
            }
        });
    }
}

// Initialize navigation when DOM is loaded
let navigationManager;

document.addEventListener('DOMContentLoaded', () => {
    navigationManager = new NavigationManager();
    
    // Setup keyboard navigation
    navigationManager.setupKeyboardNavigation();
});

// Export for global use
window.navigationManager = navigationManager;
