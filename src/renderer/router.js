/**
 * Simple Client-Side Router for SPA
 */

class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;
    }

    /**
     * Register a route
     * @param {string} path - Route path (e.g., 'home', 'settings')
     * @param {object} config - Route configuration
     */
    register(path, config) {
        this.routes[path] = config;
    }

    /**
     * Navigate to a route
     * @param {string} path - Route path to navigate to
     */
    async navigate(path) {
        const route = this.routes[path];
        if (!route) {
            console.error('Route not found:', path);
            return;
        }

        try {
            // Show loading state (optional)
            const contentArea = document.getElementById('app-content');

            // Load page content
            const response = await fetch(route.template);
            if (!response.ok) {
                throw new Error(`Failed to load ${route.template}`);
            }
            const html = await response.text();

            // Update content area
            contentArea.innerHTML = html;

            // Update header if provided
            const headerArea = document.getElementById('app-header');
            if (route.header) {
                headerArea.innerHTML = route.header;
                headerArea.classList.remove('hidden');
            } else {
                headerArea.innerHTML = '';
                headerArea.classList.add('hidden');
            }

            // Run page init function
            if (route.init && typeof route.init === 'function') {
                // Wait a tick for DOM to be ready
                setTimeout(() => route.init(), 0);
            }

            // Update active nav
            this.updateActiveNav(path);

            // Update current page
            this.currentPage = path;

        } catch (error) {
            console.error('Navigation error:', error);
            document.getElementById('app-content').innerHTML = `
                <div class="flex items-center justify-center h-full">
                    <div class="text-center">
                        <span class="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
                        <p class="text-lg text-red-400">Failed to load page</p>
                        <p class="text-sm text-gray-500 mt-2">${error.message}</p>
                    </div>
                </div>
            `;
        }
    }

    /**
     * Update active state in navigation
     * @param {string} path - Current active path
     */
    updateActiveNav(path) {
        document.querySelectorAll('.nav-item').forEach(item => {
            const isActive = item.dataset.page === path;
            item.classList.toggle('active', isActive);

            // Update ARIA
            if (isActive) {
                item.setAttribute('aria-current', 'page');
            } else {
                item.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Get current page
     * @returns {string} Current page path
     */
    getCurrentPage() {
        return this.currentPage;
    }
}

// Create global router instance
const router = new Router();
