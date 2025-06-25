/**
 * ================================
 * THURRO WEBSITE - CONSOLIDATED JAVASCRIPT
 * ================================ */

class ThurroWebsite {
    constructor() {
        this.currentSlide = 0;
        this.interval = null;
        this.isInitialized = false;
        this.init();
    }

    /**
     * Initialize the website functionality
     */
    init() {
        if (this.isInitialized) return;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
        
        this.isInitialized = true;
    }

    /**
     * Initialize all website components
     */
    initializeComponents() {
        try {
            this.initializeMobileMenu();
            this.initializeHeaderShadow();
            this.initializeSmoothScrolling();
            this.initializeSolutionTabs();
            this.initializeFeatureTabs();
            this.initializeTestimonials();
            this.initializeAnimations();
            this.initializeDropdowns();
            this.initializeVideoPlayback();
            this.initializeFAQ();
            this.initializeAnswersSpecific();
            this.initializeAltDataSpecific();
            
            console.log('Thurro Website initialized successfully');
        } catch (error) {
            console.error('Error initializing website components:', error);
        }
    }

    /**
     * ================================
     * DROPDOWN FUNCTIONALITY (INDEX PAGE)
     * ================================
     */
    initializeDropdowns() {
        // Get all dropdown elements
        const productsDropdownBtn = document.getElementById('products-dropdown-btn');
        const productsDropdown = document.getElementById('products-dropdown');
        const productsChevron = document.getElementById('dropdown-chevron');
        
        const solutionsDropdownBtn = document.getElementById('solutions-dropdown-btn');
        const solutionsDropdown = document.getElementById('solutions-dropdown');
        const solutionsChevron = document.getElementById('solutions-dropdown-chevron');

        // Helper function to close a dropdown
        const closeDropdown = (dropdown, chevron) => {
            if (dropdown) {
                dropdown.classList.add('opacity-0', 'invisible', '-translate-y-4');
                dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
            if (chevron) {
                chevron.classList.remove('rotate-180');
            }
        };

        // Helper function to open a dropdown
        const openDropdown = (dropdown, chevron) => {
            if (dropdown) {
                dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-4');
                dropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
            }
            if (chevron) {
                chevron.classList.add('rotate-180');
            }
        };

        // Helper function to check if dropdown is open
        const isDropdownOpen = (dropdown) => {
            return dropdown && dropdown.classList.contains('opacity-100');
        };
        
        // Desktop dropdown functionality for Products
        if (productsDropdownBtn && productsDropdown) {
            productsDropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close solutions dropdown first
                closeDropdown(solutionsDropdown, solutionsChevron);
                
                // Toggle products dropdown
                if (isDropdownOpen(productsDropdown)) {
                    closeDropdown(productsDropdown, productsChevron);
                } else {
                    openDropdown(productsDropdown, productsChevron);
                }
            });
        }
        
        // Desktop dropdown functionality for Solutions
        if (solutionsDropdownBtn && solutionsDropdown) {
            solutionsDropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close products dropdown first
                closeDropdown(productsDropdown, productsChevron);
                
                // Toggle solutions dropdown
                if (isDropdownOpen(solutionsDropdown)) {
                    closeDropdown(solutionsDropdown, solutionsChevron);
                } else {
                    openDropdown(solutionsDropdown, solutionsChevron);
                }
            });
        }
        
        // Close dropdowns when clicking elsewhere
        document.addEventListener('click', (e) => {
            // Close products dropdown if clicking outside
            if (productsDropdownBtn && productsDropdown && 
                !productsDropdownBtn.contains(e.target) && 
                !productsDropdown.contains(e.target)) {
                closeDropdown(productsDropdown, productsChevron);
            }
            
            // Close solutions dropdown if clicking outside
            if (solutionsDropdownBtn && solutionsDropdown && 
                !solutionsDropdownBtn.contains(e.target) && 
                !solutionsDropdown.contains(e.target)) {
                closeDropdown(solutionsDropdown, solutionsChevron);
            }
        });

        // Close dropdowns when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDropdown(productsDropdown, productsChevron);
                closeDropdown(solutionsDropdown, solutionsChevron);
            }
        });
    }

    /**
     * ================================
     * MOBILE MENU FUNCTIONALITY
     * ================================
     */
    initializeMobileMenu() {
        // Main mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-button');
        const closeMenuBtn = document.getElementById('close-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                mobileMenu.classList.remove('-translate-x-full');
                document.body.classList.add('overflow-hidden');
            });
        }

        if (closeMenuBtn && mobileMenu) {
            closeMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                mobileMenu.classList.add('-translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
        }

        // Get mobile dropdown elements
        const mobileProductsBtn = document.getElementById('mobile-products-btn');
        const mobileProductsMenu = document.getElementById('mobile-products-menu');
        const mobileProductsChevron = document.getElementById('mobile-products-chevron');
        
        const mobileSolutionsBtn = document.getElementById('mobile-solutions-btn');
        const mobileSolutionsMenu = document.getElementById('mobile-solutions-menu');
        const mobileSolutionsChevron = document.getElementById('mobile-solutions-chevron');

        // Enhanced mobile dropdown for Products
        if (mobileProductsBtn && mobileProductsMenu) {
            mobileProductsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close solutions dropdown first
                if (mobileSolutionsMenu) {
                    mobileSolutionsMenu.classList.add('hidden');
                }
                if (mobileSolutionsChevron) {
                    mobileSolutionsChevron.classList.remove('rotate-180');
                }
                
                // Toggle products dropdown
                mobileProductsMenu.classList.toggle('hidden');
                if (mobileProductsChevron) {
                    mobileProductsChevron.classList.toggle('rotate-180');
                }
            });
        }

        // Enhanced mobile dropdown for Solutions
        if (mobileSolutionsBtn && mobileSolutionsMenu) {
            mobileSolutionsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close products dropdown first
                if (mobileProductsMenu) {
                    mobileProductsMenu.classList.add('hidden');
                }
                if (mobileProductsChevron) {
                    mobileProductsChevron.classList.remove('rotate-180');
                }
                
                // Toggle solutions dropdown
                mobileSolutionsMenu.classList.toggle('hidden');
                if (mobileSolutionsChevron) {
                    mobileSolutionsChevron.classList.toggle('rotate-180');
                }
            });
        }
    }

    /**
     * ================================
     * VIDEO PLAYBACK HANDLING
     * ================================ */
    initializeVideoPlayback() {
        const videos = document.querySelectorAll('video');

        // Force play on all videos
        videos.forEach(video => {
            // Initial play attempt
            video.play().catch(function (error) {
                console.error('Video autoplay error:', error);

                // If autoplay fails, try playing again when user interacts with the page
                document.body.addEventListener('click', function () {
                    video.play().catch(() => {});
                }, { once: true });
            });
        });
        
        // Initialize feature videos for answers page
        this.initializeFeatureVideos();
    }

    /**
     * Initialize feature videos for answers page
     */
    initializeFeatureVideos() {
        const featureVideos = document.querySelectorAll('.feature-image video');
        
        featureVideos.forEach(video => {
            // Ensure videos loop and are muted
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            
            // Try to play
            video.play().catch(error => {
                console.warn('Feature video autoplay failed:', error);
            });
        });
    }

    /**
     * ================================
     * HEADER SHADOW ON SCROLL
     * ================================
     */
    initializeHeaderShadow() {
        const header = document.getElementById('header');
        
        if (header) {
            let ticking = false;
            
            const updateHeader = () => {
                if (window.scrollY > 10) {
                    header.classList.add('shadow-md');
                } else {
                    header.classList.remove('shadow-md');
                }
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateHeader);
                    ticking = true;
                }
            });
        }
    }

    /**
     * ================================
     * SMOOTH SCROLLING
     * ================================
     */
    initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target && href !== '#') {
                    e.preventDefault();
                    
                    const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * ================================
     * SOLUTION TABS FUNCTIONALITY
     * ================================
     */
    initializeSolutionTabs() {
        const solutionTabs = document.querySelectorAll('.solution-tab');
        const solutionContents = document.querySelectorAll('.solution-content');
        
        if (solutionTabs.length === 0) return;

        solutionTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                solutionTabs.forEach(t => {
                    t.classList.remove('bg-black', 'text-white', 'active');
                    t.classList.add('border', 'border-black', 'border-opacity-20');
                });
                
                // Add active class to clicked tab
                tab.classList.add('bg-black', 'text-white', 'active');
                tab.classList.remove('border', 'border-black', 'border-opacity-20');
                
                // Hide all content
                solutionContents.forEach(content => {
                    content.classList.remove('active');
                    content.classList.add('hidden');
                });
                
                // Show corresponding content
                const targetId = tab.id.replace('-btn', '-content');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }
            });
        });
    }

    /**
     * ================================
     * FEATURE TABS FUNCTIONALITY
     * ================================
     */
    initializeFeatureTabs() {
        const featureBtns = document.querySelectorAll('.feature-btn');
        const featureContents = document.querySelectorAll('.feature-content');
        const featureImages = document.querySelectorAll('.feature-image');
        
        if (featureBtns.length === 0) return;

        featureBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all buttons
                featureBtns.forEach(b => {
                    b.classList.remove('bg-black', 'text-white', 'active');
                    b.classList.add('border', 'border-black', 'border-opacity-20');
                });
                
                // Activate clicked button
                btn.classList.add('bg-black', 'text-white', 'active');
                btn.classList.remove('border', 'border-black', 'border-opacity-20');
                
                // Hide all content and images
                featureContents.forEach(content => content.classList.add('hidden'));
                featureImages.forEach(image => image.classList.add('hidden'));
                
                // Show relevant content and image
                const featureId = btn.id.replace('-btn', '');
                const content = document.getElementById(`${featureId}-content`);
                const image = document.getElementById(`${featureId}-image`);
                
                if (content) content.classList.remove('hidden');
                if (image) {
                    image.classList.remove('hidden');
                    // Ensure video plays when tab is activated
                    const video = image.querySelector('video');
                    if (video) {
                        video.play().catch(() => {});
                    }
                }
            });
        });
    }

    /**
     * ================================
     * TESTIMONIAL CAROUSEL
     * ================================
     */
    initializeTestimonials() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.flex.justify-center.mt-8 .rounded-full');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (slides.length === 0) return;

        const showSlide = (index) => {
            // Normalize index
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            // Update slides
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                    slide.classList.remove('opacity-0', 'invisible', 'absolute', 'top-0', 'left-0', 'w-full');
                    slide.classList.add('opacity-100', 'visible', 'relative');
                } else {
                    slide.classList.remove('active');
                    slide.classList.add('opacity-0', 'invisible', 'absolute', 'top-0', 'left-0', 'w-full');
                    slide.classList.remove('opacity-100', 'visible', 'relative');
                }
            });

            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-black', 'active');
                    dot.classList.remove('bg-gray-300');
                } else {
                    dot.classList.remove('bg-black', 'active');
                    dot.classList.add('bg-gray-300');
                }
            });

            this.currentSlide = index;
        };

        const nextSlide = () => {
            showSlide(this.currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(this.currentSlide - 1);
        };

        const startAutoplay = () => {
            this.stopAutoplay(); // Clear any existing interval
            this.interval = setInterval(nextSlide, 5000);
        };

        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.stopAutoplay();
            nextSlide();
            startAutoplay();
        });
        
        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.stopAutoplay();
            prevSlide();
            startAutoplay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                this.stopAutoplay();
                showSlide(index);
                startAutoplay();
            });
        });

        // Swipe functionality
        const testimonialContainer = document.querySelector('#testimonial-container');
        if (testimonialContainer) {
            let touchStartX = 0;
            let touchEndX = 0;

            testimonialContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            testimonialContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;

                if (touchEndX < touchStartX - 50) {
                    this.stopAutoplay();
                    nextSlide();
                    startAutoplay();
                } else if (touchEndX > touchStartX + 50) {
                    this.stopAutoplay();
                    prevSlide();
                    startAutoplay();
                }
            }, { passive: true });
        }

        // Auto-play with pause on hover
        const carousel = testimonialContainer;
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoplay());
            carousel.addEventListener('mouseleave', startAutoplay);
            startAutoplay();
        }

        // Initialize first slide
        showSlide(0);
    }

    /**
     * Stop testimonial autoplay
     */
    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    /**
     * ================================
     * ANIMATION OBSERVER
     * ================================
     */
    initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add hover effects to cards
        this.initializeCardHoverEffects();
    }

    /**
     * Initialize card hover effects
     */
    initializeCardHoverEffects() {
        const cards = document.querySelectorAll('.card-hover, .hover\\:translate-y-\\[-8px\\]');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
    }

    /**
     * ================================
     * ALTDATA PAGE SPECIFIC FUNCTIONALITY
     * ================================
     */
    initializeAltDataSpecific() {
        // Only run on altdata page
        if (!document.querySelector('.analysis-grid') && !document.querySelector('.analysis-item')) {
            return;
        }

        // Initialize analysis items animations
        this.initializeAnalysisItems();
        
        // Ensure first feature tab is active on load (search tab)
        this.setDefaultAltDataFeatureTab();
    }

    /**
     * Initialize analysis items with staggered animations
     */
    initializeAnalysisItems() {
        const analysisItems = document.querySelectorAll('.analysis-item');
        
        if (analysisItems.length === 0) return;
        
        analysisItems.forEach((item, index) => {
            // Start with items invisible (already set in CSS)
            
            // Animate in with delay based on index
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 + index * 80);

            // Enhanced hover effects (already handled by CSS :hover, but adding JS for complex interactions)
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.analysis-icon');
                if (icon) {
                    icon.style.backgroundColor = '#f0e1d3';
                    icon.style.transform = 'scale(1.1)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('.analysis-icon');
                if (icon) {
                    icon.style.backgroundColor = '#FFF1E5';
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }

    /**
     * Set default active feature tab for AltData (search tab)
     */
    setDefaultAltDataFeatureTab() {
        // Ensure search tab is active by default on altdata page
        const searchBtn = document.getElementById('search-btn');
        const searchContent = document.getElementById('search-content');
        const searchImage = document.getElementById('search-image');
        
        if (searchBtn && searchContent && searchImage) {
            // Set first tab as active
            searchBtn.classList.add('bg-black', 'text-white', 'active');
            searchBtn.classList.remove('border', 'border-black', 'border-opacity-20');
            searchContent.classList.remove('hidden');
            searchImage.classList.remove('hidden');
        }
    }

    /**
     * ================================
     * ANSWERS PAGE SPECIFIC FUNCTIONALITY
     * ================================
     */
    initializeAnswersSpecific() {
        // Only run on answers page
        if (!document.querySelector('.feature-btn') && !document.querySelector('.faq-item')) {
            return;
        }

        // Initialize notebook card hover effects
        this.initializeNotebookCards();
        
        // Ensure first feature tab is active on load
        this.setDefaultFeatureTab();
    }

    /**
     * Initialize notebook card hover effects
     */
    initializeNotebookCards() {
        const notebookCards = document.querySelectorAll('.notebook-card');
        
        notebookCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    /**
     * Set default active feature tab
     */
    setDefaultFeatureTab() {
        // Ensure notebooks tab is active by default
        const notebooksBtn = document.getElementById('notebooks-btn');
        const notebooksContent = document.getElementById('notebooks-content');
        const notebooksImage = document.getElementById('notebooks-image');
        
        if (notebooksBtn && notebooksContent && notebooksImage) {
            // Set first tab as active
            notebooksBtn.classList.add('bg-black', 'text-white', 'active');
            notebooksBtn.classList.remove('border', 'border-black', 'border-opacity-20');
            notebooksContent.classList.remove('hidden');
            notebooksImage.classList.remove('hidden');
        }
    }

    /**
     * ================================
     * FAQ FUNCTIONALITY
     * ================================
     */
    initializeFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length === 0) return;
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', () => {
                    // Close all other FAQs
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current FAQ
                    item.classList.toggle('active');
                });
            }
        });
    }

    /**
     * ================================
     * UTILITY METHODS
     * ================================
     */
    
    static addClass(element, className) {
        if (element && className) {
            element.classList.add(className);
        }
    }

    static removeClass(element, className) {
        if (element && className) {
            element.classList.remove(className);
        }
    }

    static toggleClass(element, className) {
        if (element && className) {
            element.classList.toggle(className);
        }
    }

    static show(element) {
        if (element) {
            element.classList.remove('hidden');
            element.style.display = 'block';
        }
    }

    static hide(element) {
        if (element) {
            element.classList.add('hidden');
            element.style.display = 'none';
        }
    }

    /**
     * Get element by ID with error handling
     */
    static getElementById(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with ID '${id}' not found`);
        }
        return element;
    }

    /**
     * Debounce function for performance optimization
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Destroy the instance (cleanup)
     */
    destroy() {
        this.stopAutoplay();
        // Remove event listeners if needed
        this.isInitialized = false;
    }
}

/**
 * ================================
 * INITIALIZE WEBSITE
 * ================================
 */

// Initialize the website functionality
let thurroWebsite;

// Ensure single initialization
if (!window.thurroWebsiteInitialized) {
    thurroWebsite = new ThurroWebsite();
    window.thurroWebsiteInitialized = true;
}

// Export for external use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThurroWebsite;
}

// Make it globally available
window.ThurroWebsite = ThurroWebsite;