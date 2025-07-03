// ===== TRANSLATIONS SYSTEM =====

const translations = {
    fr: {
        // Navigation
        app_title: "AgriBot Solutions",
        nav_overview: "Vue d'ensemble",
        nav_problem: "Énoncé du Problème",
        nav_analysis: "Analyse des Idées",
        nav_solutions: "Solutions",
        nav_ussd_sms: "USSD/SMS",
        nav_whatsapp: "WhatsApp Bot",
        nav_ecosystem: "Écosystème",
        
        // Hero Section
        hero_title: "Solutions AgriBot pour l'Alerte Précoce",
        hero_subtitle: "Hackathon OpenEPI 2025 - Protéger les cultures avec l'intelligence artificielle",
        
        // Stats
        stat_farmers: "Agriculteurs ciblés",
        stat_reduction: "Réduction des pertes",
        stat_solutions: "Solutions innovantes",
        
        // Overview Cards
        overview_user_title: "Utilisateur Cible",
        overview_user_desc: "Ablawa, 42 ans, productrice de maïs au Togo avec 3 hectares et 5 enfants à charge",
        overview_problem_title: "Problème",
        overview_problem_desc: "Détection tardive des ravageurs causant jusqu'à 33% de pertes de récolte",
        overview_solution_title: "Solution",
        overview_solution_desc: "Système d'alerte précoce utilisant les données OpenEPI et l'IA",
        
        // Section Headers
        problem_title: "Énoncé du Problème",
        problem_subtitle: "Comprendre les défis des petits agriculteurs",
        analysis_title: "Analyse des Idées",
        analysis_subtitle: "Évaluation comparative des solutions proposées",
        solutions_title: "Solutions Techniques",
        solutions_subtitle: "Sélectionnez une solution dans le menu pour voir les détails",
        solutions_placeholder_title: "Choisissez une solution",
        solutions_placeholder_desc: "Utilisez le menu de navigation pour sélectionner WhatsApp Bot ou SMS Secours et découvrir les détails techniques de chaque solution.",
        ussd_title: "Solution USSD/SMS",
        ussd_subtitle: "Technologie universelle pour tous les téléphones",
        whatsapp_title: "Solution WhatsApp Bot",
        whatsapp_subtitle: "Messagerie riche et interactive",
        ecosystem_title: "Écosystème AgriBot",
        ecosystem_subtitle: "Vision complète du business model",
        
        // Tabs
        tab_ussd_sms: "USSD/SMS",
        tab_whatsapp: "WhatsApp Bot",
        
        // Problem Statement
        problem_user_label: "UTILISATEUR",
        problem_need_label: "BESOIN",
        problem_insight_label: "INSIGHT",
        problem_user_content: "Smallholder farmers like Ablawa, a 42-year-old maize producer in rural Togo who manages 3 hectares and supports 5 children",
        problem_need_content: "an accessible early warning and pest detection system to identify threats like fall armyworm before they cause massive crop losses",
        problem_insight_content: "they lack technological accessibility, systematic monitoring protocols, and trained personnel for crop health surveillance, leaving them vulnerable to unforeseen pest outbreaks that can destroy 33% of their harvest and threaten their family's food security and income",
        
        // Common Terms
        loading: "Chargement...",
        error: "Erreur lors du chargement",
        retry: "Réessayer",
        close: "Fermer",
        next: "Suivant",
        previous: "Précédent",
        save: "Enregistrer",
        cancel: "Annuler",
        confirm: "Confirmer",
        
        // Analysis Terms
        analysis_desirability: "DÉSIRABILITÉ",
        analysis_feasibility: "FAISABILITÉ",
        analysis_viability: "VIABILITÉ",
        analysis_pros: "POUR",
        analysis_cons: "CONTRE",
        analysis_score: "SCORE TOTAL",
        analysis_recommendation: "RECOMMANDATION HACKATHON",
        
        // Technical Terms
        tech_architecture: "ARCHITECTURE TECHNIQUE",
        tech_user_flow: "PARCOURS UTILISATEUR",
        tech_implementation: "IMPLÉMENTATION",
        tech_features: "FONCTIONNALITÉS",
        tech_benefits: "AVANTAGES",
        tech_challenges: "DÉFIS",
        tech_solutions: "SOLUTIONS",
        
        // Business Model
        business_model: "BUSINESS MODEL",
        revenue_streams: "SOURCES DE REVENUS",
        pricing: "TARIFICATION",
        impact: "IMPACT",
        roadmap: "FEUILLE DE ROUTE",

        // Loading states
        loading_problem: "Chargement de la problématique...",
        loading_analysis: "Chargement de l'analyse des solutions...",
        loading_ussd: "Chargement de la solution USSD/SMS...",
        loading_whatsapp: "Chargement de la solution WhatsApp Bot...",
        loading_ecosystem: "Chargement de l'écosystème...",

        // Additional technical terms
        tech_overview: "Vue d'ensemble",
        tech_advantages: "Avantages",
        tech_workflow: "Flux de Fonctionnement",
        tech_stack: "Stack Technologique",
        tech_implementation_plan: "Plan d'Implémentation",
        tech_features_key: "Fonctionnalités Clés",

        // Analysis specific terms
        analysis_comparative_title: "Analyse Comparative des Solutions",
        analysis_comparative_subtitle: "Évaluation selon les critères Désirabilité, Faisabilité, Viabilité",
        analysis_mobile_app: "Application Mobile",
        analysis_whatsapp_bot: "WhatsApp Bot",
        analysis_textbee_sms: "TextBee SMS",
        analysis_winner_badge: "SOLUTION GAGNANTE",
        analysis_recommended_badge: "RECOMMANDÉE",
        analysis_openapi_integration: "Intégration OpenEPI",
        analysis_hackathon_feasibility: "Faisabilité Hackathon",

        // Problem statement specific
        problem_statement_title: "Énoncé du Problème",
        problem_statement_subtitle: "Comprendre les défis des petits agriculteurs",
        problem_user_persona: "Ablawa, 42 ans, productrice de maïs au Togo avec 3 hectares et 5 enfants à charge",
        problem_need_description: "un système d'alerte précoce et de détection des ravageurs accessible pour identifier les menaces comme la chenille légionnaire avant qu'elles ne causent des pertes massives de récolte",
        problem_insight_description: "ils manquent d'accessibilité technologique, de protocoles de surveillance systématique et de personnel formé pour la surveillance de la santé des cultures, les laissant vulnérables aux épidémies de ravageurs imprévues qui peuvent détruire 33% de leur récolte et menacer la sécurité alimentaire et les revenus de leur famille",

        // WhatsApp Bot specific
        whatsapp_solution_title: "Solution WhatsApp Bot",
        whatsapp_solution_subtitle: "Messagerie riche et interactive avec fallback SMS",
        whatsapp_architecture_title: "Architecture Technique",
        whatsapp_user_flow_title: "Parcours Utilisateur",
        whatsapp_implementation_title: "Implémentation",
        whatsapp_features_title: "Fonctionnalités Clés",

        // TextBee SMS specific
        textbee_solution_title: "Solution TextBee SMS",
        textbee_solution_subtitle: "Système de fallback universel",
        textbee_architecture_title: "Architecture SMS",
        textbee_integration_title: "Intégration TextBee",

        // Navigation improvements
        nav_toggle_menu: "Basculer le menu",
        nav_close_menu: "Fermer le menu",
        nav_open_menu: "Ouvrir le menu",

        // Error messages
        error_initialization: "Erreur d'initialisation",
        error_loading_content: "Erreur lors du chargement du contenu",
        error_network: "Erreur de réseau",
        error_retry_message: "Veuillez réessayer plus tard",

        // Success messages
        success_loaded: "Chargé avec succès",
        success_updated: "Mis à jour avec succès",

        // New navigation items
        nav_sms_secours: "SMS Secours",
        tab_whatsapp_technique: "Version Technique",
        tab_whatsapp_simple: "Version Simple",

        // SMS Secours section
        sms_secours_title: "SMS Secours - Plan de Fallback",
        sms_secours_subtitle: "Solution de secours automatique avec TextBee",

        // Solution explanations
        solution_technique_title: "Explication Technique",
        solution_simple_title: "Explication Simple",
        whatsapp_ecosystem_title: "Écosystème WhatsApp Bot + SMS Secours"
    },
    
    en: {
        // Navigation
        app_title: "AgriBot Solutions",
        nav_overview: "Overview",
        nav_problem: "Problem Statement",
        nav_analysis: "Ideas Analysis",
        nav_solutions: "Solutions",
        nav_ussd_sms: "USSD/SMS",
        nav_whatsapp: "WhatsApp Bot",
        nav_ecosystem: "Ecosystem",
        
        // Hero Section
        hero_title: "AgriBot Early Warning Solutions",
        hero_subtitle: "OpenEPI Hackathon 2025 - Protecting crops with artificial intelligence",
        
        // Stats
        stat_farmers: "Target farmers",
        stat_reduction: "Loss reduction",
        stat_solutions: "Innovative solutions",
        
        // Overview Cards
        overview_user_title: "Target User",
        overview_user_desc: "Ablawa, 42 years old, maize producer in Togo with 3 hectares and 5 children to support",
        overview_problem_title: "Problem",
        overview_problem_desc: "Late pest detection causing up to 33% crop losses",
        overview_solution_title: "Solution",
        overview_solution_desc: "Early warning system using OpenEPI data and AI",
        
        // Section Headers
        problem_title: "Problem Statement",
        problem_subtitle: "Understanding smallholder farmers' challenges",
        analysis_title: "Ideas Analysis",
        analysis_subtitle: "Comparative evaluation of proposed solutions",
        solutions_title: "Technical Solutions",
        solutions_subtitle: "Select a solution from the menu to see details",
        solutions_placeholder_title: "Choose a solution",
        solutions_placeholder_desc: "Use the navigation menu to select WhatsApp Bot or SMS Backup and discover the technical details of each solution.",
        ussd_title: "USSD/SMS Solution",
        ussd_subtitle: "Universal technology for all phones",
        whatsapp_title: "WhatsApp Bot Solution",
        whatsapp_subtitle: "Rich and interactive messaging",
        ecosystem_title: "AgriBot Ecosystem",
        ecosystem_subtitle: "Complete business model vision",
        
        // Tabs
        tab_ussd_sms: "USSD/SMS",
        tab_whatsapp: "WhatsApp Bot",
        
        // Problem Statement
        problem_user_label: "USER",
        problem_need_label: "NEED",
        problem_insight_label: "INSIGHT",
        problem_user_content: "Smallholder farmers like Ablawa, a 42-year-old maize producer in rural Togo who manages 3 hectares and supports 5 children",
        problem_need_content: "an accessible early warning and pest detection system to identify threats like fall armyworm before they cause massive crop losses",
        problem_insight_content: "they lack technological accessibility, systematic monitoring protocols, and trained personnel for crop health surveillance, leaving them vulnerable to unforeseen pest outbreaks that can destroy 33% of their harvest and threaten their family's food security and income",
        
        // Common Terms
        loading: "Loading...",
        error: "Loading error",
        retry: "Retry",
        close: "Close",
        next: "Next",
        previous: "Previous",
        save: "Save",
        cancel: "Cancel",
        confirm: "Confirm",
        
        // Analysis Terms
        analysis_desirability: "DESIRABILITY",
        analysis_feasibility: "FEASIBILITY",
        analysis_viability: "VIABILITY",
        analysis_pros: "PROS",
        analysis_cons: "CONS",
        analysis_score: "TOTAL SCORE",
        analysis_recommendation: "HACKATHON RECOMMENDATION",
        
        // Technical Terms
        tech_architecture: "TECHNICAL ARCHITECTURE",
        tech_user_flow: "USER FLOW",
        tech_implementation: "IMPLEMENTATION",
        tech_features: "FEATURES",
        tech_benefits: "BENEFITS",
        tech_challenges: "CHALLENGES",
        tech_solutions: "SOLUTIONS",
        
        // Business Model
        business_model: "BUSINESS MODEL",
        revenue_streams: "REVENUE STREAMS",
        pricing: "PRICING",
        impact: "IMPACT",
        roadmap: "ROADMAP",

        // Loading states
        loading_problem: "Loading problem statement...",
        loading_analysis: "Loading solutions analysis...",
        loading_ussd: "Loading USSD/SMS solution...",
        loading_whatsapp: "Loading WhatsApp Bot solution...",
        loading_ecosystem: "Loading ecosystem...",

        // Additional technical terms
        tech_overview: "Overview",
        tech_advantages: "Advantages",
        tech_workflow: "Workflow",
        tech_stack: "Tech Stack",
        tech_implementation_plan: "Implementation Plan",
        tech_features_key: "Key Features",

        // Analysis specific terms
        analysis_comparative_title: "Comparative Solutions Analysis",
        analysis_comparative_subtitle: "Evaluation based on Desirability, Feasibility, Viability criteria",
        analysis_mobile_app: "Mobile App",
        analysis_whatsapp_bot: "WhatsApp Bot",
        analysis_textbee_sms: "TextBee SMS",
        analysis_winner_badge: "WINNING SOLUTION",
        analysis_recommended_badge: "RECOMMENDED",
        analysis_openapi_integration: "OpenEPI Integration",
        analysis_hackathon_feasibility: "Hackathon Feasibility",

        // Problem statement specific
        problem_statement_title: "Problem Statement",
        problem_statement_subtitle: "Understanding smallholder farmers' challenges",
        problem_user_persona: "Ablawa, 42 years old, maize producer in Togo with 3 hectares and 5 children to support",
        problem_need_description: "an accessible early warning and pest detection system to identify threats like fall armyworm before they cause massive crop losses",
        problem_insight_description: "they lack technological accessibility, systematic monitoring protocols, and trained personnel for crop health surveillance, leaving them vulnerable to unforeseen pest outbreaks that can destroy 33% of their harvest and threaten their family's food security and income",

        // WhatsApp Bot specific
        whatsapp_solution_title: "WhatsApp Bot Solution",
        whatsapp_solution_subtitle: "Rich and interactive messaging with SMS fallback",
        whatsapp_architecture_title: "Technical Architecture",
        whatsapp_user_flow_title: "User Flow",
        whatsapp_implementation_title: "Implementation",
        whatsapp_features_title: "Key Features",

        // TextBee SMS specific
        textbee_solution_title: "TextBee SMS Solution",
        textbee_solution_subtitle: "Universal fallback system",
        textbee_architecture_title: "SMS Architecture",
        textbee_integration_title: "TextBee Integration",

        // Navigation improvements
        nav_toggle_menu: "Toggle menu",
        nav_close_menu: "Close menu",
        nav_open_menu: "Open menu",

        // Error messages
        error_initialization: "Initialization error",
        error_loading_content: "Error loading content",
        error_network: "Network error",
        error_retry_message: "Please try again later",

        // Success messages
        success_loaded: "Successfully loaded",
        success_updated: "Successfully updated",

        // New navigation items
        nav_sms_secours: "SMS Backup",
        tab_whatsapp_technique: "Technical Version",
        tab_whatsapp_simple: "Simple Version",

        // SMS Secours section
        sms_secours_title: "SMS Backup - Fallback Plan",
        sms_secours_subtitle: "Automatic backup solution with TextBee",

        // Solution explanations
        solution_technique_title: "Technical Explanation",
        solution_simple_title: "Simple Explanation",
        whatsapp_ecosystem_title: "WhatsApp Bot + SMS Backup Ecosystem"
    }
};

// Current language
let currentLanguage = 'fr';

// Initialize translations
function initTranslations() {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('agribot-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Update HTML lang attribute
    document.getElementById('html-root').lang = currentLanguage;
    
    // Update language buttons
    updateLanguageButtons();
    
    // Apply translations
    applyTranslations();
}

// Switch language
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('agribot-language', lang);
        
        // Update HTML lang attribute
        document.getElementById('html-root').lang = lang;
        
        // Update language buttons
        updateLanguageButtons();
        
        // Apply translations
        applyTranslations();
        
        // Trigger custom event for other components
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }
}

// Update language buttons
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${currentLanguage}`) {
            btn.classList.add('active');
        }
    });
}

// Apply translations to all elements
function applyTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Get translation for a key
function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : translations.fr[key] || key;
}

// Add translation to element
function translateElement(element, key) {
    const translation = getTranslation(key);
    if (translation) {
        element.textContent = translation;
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Check if language is supported
function isLanguageSupported(lang) {
    return translations.hasOwnProperty(lang);
}

// Export functions for global use
window.switchLanguage = switchLanguage;
window.getTranslation = getTranslation;
window.getCurrentLanguage = getCurrentLanguage;
window.translateElement = translateElement;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTranslations);
