// Main Navigation and UI Scripts - Optimized Version
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements to avoid repeated queries
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const productsDropdownBtn = document.getElementById('products-dropdown-btn');
    const productsDropdown = document.getElementById('products-dropdown');
    const productsChevron = document.getElementById('dropdown-chevron');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Debounce function to limit scroll event frequency
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    
    // Scroll event handling with debounce - only runs every 10ms
    const handleScroll = debounce(() => {
        if (window.scrollY > 10) {
            header?.classList.add('shadow-on-scroll');
        } else {
            header?.classList.remove('shadow-on-scroll');
        }
    }, 10);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle with event delegation
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        });
    }
    
    // Desktop dropdown functionality for Products using event delegation
    if (productsDropdownBtn && productsDropdown) {
        // Toggle dropdown on click
        productsDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle dropdown visibility with single classList toggle
            const isVisible = productsDropdown.classList.contains('opacity-100');
            
            if (isVisible) {
                hideDropdown();
            } else {
                showDropdown();
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            if (productsDropdown.classList.contains('opacity-100')) {
                hideDropdown();
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        productsDropdown?.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Helper functions for dropdown visibility
    function showDropdown() {
        productsDropdown.classList.remove('opacity-0', 'invisible', '-translate-y-4');
        productsDropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
        productsChevron?.classList.add('rotate-180');
    }
    
    function hideDropdown() {
        productsDropdown.classList.add('opacity-0', 'invisible', '-translate-y-4');
        productsDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
        productsChevron?.classList.remove('rotate-180');
    }
    
    // Tab functionality with event delegation
    if (tabButtons.length && tabContents.length) {
        // Create a single event listener for all tab buttons
        document.addEventListener('click', function(e) {
            const tabButton = e.target.closest('.tab-button');
            if (!tabButton) return;
            
            const targetId = tabButton.getAttribute('data-tab');
            if (!targetId) return;
            
            // Remove active state from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active-tab'));
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Add active state to clicked tab
            tabButton.classList.add('active-tab');
            document.getElementById(targetId)?.classList.remove('hidden');
        });
    }
    
    // Lazy load images when they come into viewport
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    
                    // Optional: Load srcset as well if available
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
        });
    }
    
    // Initialize smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Use native smooth scrolling if supported
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Defer non-critical JS loading
function loadDeferredScripts() {
    // Analytics - load only after page is fully interactive
    setTimeout(() => {
        // Example placeholder for analytics code
        if (typeof gtag === 'undefined') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); // Replace with actual ID
        }
    }, 3000); // Delay by 3 seconds
}

// Check if page has loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    loadDeferredScripts();
} else {
    window.addEventListener('load', loadDeferredScripts);
}

// Enable passive event listeners where possible
try {
    const opts = Object.defineProperty({}, 'passive', {
        get: function() {
            window.supportsPassive = true;
            return true;
        }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
} catch (e) {}

// Use passive listeners for touch and wheel events if supported
const wheelOpt = window.supportsPassive ? { passive: true } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
window.addEventListener(wheelEvent, function() {}, wheelOpt);
window.addEventListener('touchstart', function() {}, wheelOpt);