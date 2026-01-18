/**
 * Main Application Entry Point
 * Initializes SPA, registers routes, and sets up navigation
 */

/**
 * Create and initialize bottom navigation
 */
function createBottomNav() {
    const nav = document.getElementById('bottom-nav');
    nav.className = 'bg-[#0f1419]/95 backdrop-blur-xl border-t border-white/10';

    nav.innerHTML = `
        <div class="max-w-md mx-auto px-4 py-3">
            <div class="flex items-center justify-around">
                <button class="nav-item flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5" 
                        data-page="home" 
                        aria-label="Go to Home">
                    <span class="material-symbols-outlined text-2xl nav-icon">home</span>
                    <span class="text-xs font-medium nav-label">Home</span>
                </button>
                <button class="nav-item flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5" 
                        data-page="companies" 
                        aria-label="Go to Companies">
                    <span class="material-symbols-outlined text-2xl nav-icon">business</span>
                    <span class="text-xs font-medium nav-label">Companies</span>
                </button>
                <button class="nav-item flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5" 
                        data-page="work-history" 
                        aria-label="Go to History">
                    <span class="material-symbols-outlined text-2xl nav-icon">history</span>
                    <span class="text-xs font-medium nav-label">History</span>
                </button>
                <button class="nav-item flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5" 
                        data-page="settings" 
                        aria-label="Go to Settings">
                    <span class="material-symbols-outlined text-2xl nav-icon">settings</span>
                    <span class="text-xs font-medium nav-label">Settings</span>
                </button>
            </div>
        </div>
    `;

    // Add navigation styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-item.active {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
        }
        
        .nav-item.active .nav-icon {
            color: #3b82f6;
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .nav-item.active .nav-label {
            color: #3b82f6;
            font-weight: 600;
        }
        
        .nav-item:not(.active) .nav-icon {
            color: #9ca3af;
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        
        .nav-item:not(.active) .nav-label {
            color: #6b7280;
        }
        
        .nav-item:active {
            transform: scale(0.95);
        }
        
        #bottom-nav {
            box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        @media (min-width: 768px) {
            #bottom-nav {
                left: 50%;
                transform: translateX(-50%);
                max-width: 430px;
                border-radius: 24px 24px 0 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add click handlers
    nav.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            router.navigate(item.dataset.page);
        });
    });
}

/**
 * Register all application routes
 */
function registerRoutes() {
    // Home page (Timer)
    router.register('home', {
        template: 'fragments/home.html',
        header: null, // Home has custom header in fragment
        init: initHomePage
    });

    // Companies page
    router.register('companies', {
        template: 'fragments/companies.html',
        header: `
            <div class="flex items-center p-6 justify-between bg-background-light dark:bg-background-dark">
                <h1 class="text-2xl font-bold">Companies</h1>
            </div>
        `,
        init: initCompaniesPage
    });

    // Work History page
    router.register('work-history', {
        template: 'fragments/work-history.html',
        header: `
            <div class="flex items-center p-6 justify-between bg-background-light dark:bg-background-dark">
                <h1 class="text-2xl font-bold">Work History</h1>
                <button id="exportDayEndButton" 
                        class="flex items-center justify-center rounded-full w-10 h-10 bg-slate-200 dark:bg-surface-dark hover:bg-slate-300 dark:hover:bg-[#233c48] transition-colors text-slate-900 dark:text-white">
                    <span class="material-symbols-outlined">upload</span>
                </button>
            </div>
        `,
        init: initWorkHistoryPage
    });

    // Settings page
    router.register('settings', {
        template: 'fragments/settings.html',
        header: `
            <div class="flex items-center p-6 justify-between bg-background-light dark:bg-background-dark">
                <button id="backButton" 
                        class="flex items-center justify-center rounded-full w-10 h-10 bg-slate-200 dark:bg-surface-dark hover:bg-slate-300 dark:hover:bg-[#233c48] transition-colors text-slate-900 dark:text-white">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 class="text-2xl font-bold">Settings</h1>
                <button id="saveButton" 
                        class="flex items-center justify-center rounded-full w-10 h-10 bg-primary hover:bg-primary/90 transition-colors text-white">
                    <span class="material-symbols-outlined">check</span>
                </button>
            </div>
        `,
        init: initSettingsPage
    });
}

/**
 * Page initialization functions (to be implemented)
 */
function initHomePage() {
    console.log('Home page initialized');

    // Settings button in header
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => router.navigate('settings'));
    }

    // Timer buttons (placeholder)
    const startBtn = document.getElementById('startButton');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Start timer');
            alert('Timer functionality coming soon!');
        });
    }

    // Timer logic will go here
}

function initCompaniesPage() {
    console.log('Companies page initialized');
    // Companies logic will go here
}

function initWorkHistoryPage() {
    console.log('Work History page initialized');
    // Work history logic will go here
}

function initSettingsPage() {
    console.log('Settings page initialized');

    // Back button - navigate to home
    const backBtn = document.getElementById('backButton');
    if (backBtn) {
        backBtn.addEventListener('click', () => router.navigate('home'));
    }

    // Save button - save settings
    const saveBtn = document.getElementById('saveButton');
    if (saveBtn) {
        saveBtn.addEventListener('click', async () => {
            console.log('Saving settings...');

            // Get values
            const dailyTarget = document.getElementById('dailyTargetInput')?.value;
            const excludeWeekends = document.getElementById('excludeWeekendsToggle')?.checked;
            const goalNotification = document.getElementById('goalNotificationToggle')?.checked;

            // Save to database (placeholder for now)
            console.log('Settings:', { dailyTarget, excludeWeekends, goalNotification });

            // Show success message
            alert('Settings saved successfully!');
        });
    }

    // Load settings (placeholder)
    console.log('Loading settings...');
}

/**
 * Initialize application
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Workflow Timer SPA...');

    // Create bottom navigation
    createBottomNav();

    // Register all routes
    registerRoutes();

    // Navigate to home page
    router.navigate('home');

    console.log('App initialized successfully');
});
