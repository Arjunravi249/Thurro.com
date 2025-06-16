/**
 * Main JavaScript for Thurro website
 * Consolidates all common functionality across pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-button');
    const productsDropdownBtn = document.getElementById('products-dropdown-btn');
    const productsDropdown = document.getElementById('products-dropdown');
    const productsChevron = document.getElementById('dropdown-chevron');
    const solutionsDropdownBtn = document.getElementById('solutions-dropdown-btn');
    const solutionsDropdown = document.getElementById('solutions-dropdown');
    const solutionsChevron = document.getElementById('solutions-dropdown-chevron');
    const mobileProductsBtn = document.getElementById('mobile-products-btn');
    const mobileProductsMenu = document.getElementById('mobile-products-menu');
    const mobileProductsChevron = document.getElementById('mobile-products-chevron');
    const mobileSolutionsBtn = document.getElementById('mobile-solutions-btn');
    const mobileSolutionsMenu = document.getElementById('mobile-solutions-menu');
    const mobileSolutionsChevron = document.getElementById('mobile-solutions-chevron');
    
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
    
    // ===== Header Shadow on Scroll =====
    function handleHeaderShadow() {
        if (header) {
            if (window.scrollY > 10) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        }
    }
    
    // Add debounced scroll event listener
    window.addEventListener('scroll', debounce(handleHeaderShadow, 10));
    // Initialize header shadow on page load
    handleHeaderShadow();
    
    // ===== Desktop Navigation Dropdowns =====
    function toggleDesktopDropdown(dropdown, chevron) {
        if (dropdown.classList.contains('opacity-0')) {
            // Show dropdown
            dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-4');
            dropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
            chevron.classList.add('rotate-180');
        } else {
            // Hide dropdown
            dropdown.classList.add('opacity-0', 'invisible', '-translate-y-4');
            dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
            chevron.classList.remove('rotate-180');
        }
    }
    
    // Products dropdown
    if (productsDropdownBtn && productsDropdown) {
        productsDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDesktopDropdown(productsDropdown, productsChevron);
        });
    }
    
    // Solutions dropdown
    if (solutionsDropdownBtn && solutionsDropdown) {
        solutionsDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDesktopDropdown(solutionsDropdown, solutionsChevron);
        });
    }
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function(e) {
        // Close products dropdown
        if (productsDropdownBtn && productsDropdown && 
            !productsDropdownBtn.contains(e.target) && 
            !productsDropdown.contains(e.target)) {
            productsDropdown.classList.add('opacity-0', 'invisible', '-translate-y-4');
            productsDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
            productsChevron?.classList.remove('rotate-180');
        }
        
        // Close solutions dropdown
        if (solutionsDropdownBtn && solutionsDropdown && 
            !solutionsDropdownBtn.contains(e.target) && 
            !solutionsDropdown.contains(e.target)) {
            solutionsDropdown.classList.add('opacity-0', 'invisible', '-translate-y-4');
            solutionsDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
            solutionsChevron?.classList.remove('rotate-180');
        }
    });
    
    // ===== Mobile Menu Functionality =====
    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('-translate-x-full');
            document.body.classList.add('overflow-hidden');
        });
        
        // Close mobile menu
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('-translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
        
        // Close mobile menu when clicking on links that start with #
        const mobileNavLinks = mobileMenu.querySelectorAll('a[href^="#"]');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }
    
    // Mobile dropdowns
    function toggleMobileDropdown(menuElem, chevronElem) {
        if (menuElem) {
            menuElem.classList.toggle('hidden');
            if (chevronElem) {
                chevronElem.classList.toggle('rotate-180');
            }
        }
    }
    
    // Mobile Products dropdown
    if (mobileProductsBtn && mobileProductsMenu) {
        mobileProductsBtn.addEventListener('click', function() {
            toggleMobileDropdown(mobileProductsMenu, mobileProductsChevron);
        });
    }
    
    // Mobile Solutions dropdown
    if (mobileSolutionsBtn && mobileSolutionsMenu) {
        mobileSolutionsBtn.addEventListener('click', function() {
            toggleMobileDropdown(mobileSolutionsMenu, mobileSolutionsChevron);
        });
    }
    
    // ===== FAQ Accordion Functionality =====
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length) {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                if (!question) return;
                
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
            });
        }
    }
    
    // Initialize FAQ accordions
    initFaqAccordion();
    
    // ===== Feature Tabs Functionality =====
    function initFeatureTabs() {
        const featureBtns = document.querySelectorAll('.feature-btn');
        const featureContents = document.querySelectorAll('.feature-content');
        const featureImages = document.querySelectorAll('.feature-image');
        
        if (featureBtns.length && featureContents.length) {
            featureBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Reset all buttons
                    featureBtns.forEach(b => {
                        b.classList.remove('bg-black', 'text-white');
                        b.classList.add('border', 'border-black', 'border-opacity-20');
                    });
                    
                    // Activate clicked button
                    btn.classList.add('bg-black', 'text-white');
                    btn.classList.remove('border', 'border-black', 'border-opacity-20');
                    
                    // Hide all content and images
                    featureContents.forEach(content => content.classList.add('hidden'));
                    featureImages.forEach(image => image.classList.add('hidden'));
                    
                    // Show relevant content and image
                    const featureId = btn.id.replace('-btn', '');
                    const contentElem = document.getElementById(`${featureId}-content`);
                    const imageElem = document.getElementById(`${featureId}-image`);
                    
                    if (contentElem) contentElem.classList.remove('hidden');
                    if (imageElem) imageElem.classList.remove('hidden');
                });
            });
        }
    }
    
    // Initialize feature tabs
    initFeatureTabs();
    
    // ===== Solution Tabs Functionality =====
    function initSolutionTabs() {
        const solutionTabs = document.querySelectorAll('.solution-tab');
        const solutionContents = document.querySelectorAll('.solution-content');
        
        if (solutionTabs.length && solutionContents.length) {
            solutionTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    solutionTabs.forEach(t => {
                        t.classList.remove('active', 'bg-black', 'text-white');
                        t.classList.add('border', 'border-black', 'border-opacity-20');
                    });
                    
                    // Add active class to clicked tab
                    tab.classList.add('active', 'bg-black', 'text-white');
                    tab.classList.remove('border', 'border-black', 'border-opacity-20');
                    
                    // Hide all content
                    solutionContents.forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Show corresponding content
                    const targetId = tab.id.replace('-btn', '-content');
                    const targetContent = document.getElementById(targetId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }
    }
    
    // Initialize solution tabs
    initSolutionTabs();
    
    // ===== Smooth Scrolling for Anchor Links =====
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    
                    // Smooth scroll with offset for fixed header
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // ===== Video Autoplay Handling =====
    function initVideoAutoplay() {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            // Initial play attempt
            video.play().catch(function(error) {
                console.error('Video autoplay error:', error);
                
                // If autoplay fails, try playing again when user interacts with the page
                document.body.addEventListener('click', function() {
                    video.play().catch(() => {});
                }, { once: true });
            });
        });
    }
    
    // Initialize video autoplay
    initVideoAutoplay();
    
    // ===== Testimonial Carousel =====
    function initTestimonialCarousel() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.flex.justify-center.mt-8 .rounded-full');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (!slides.length) return;
        
        let currentSlide = 0;
        let interval;
        
        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.add('opacity-0', 'invisible', 'absolute', 'top-0', 'left-0', 'w-full');
                slide.classList.remove('opacity-100', 'visible', 'relative');
            });
            
            // Show current slide
            slides[index].classList.remove('opacity-0', 'invisible', 'absolute', 'top-0', 'left-0', 'w-full');
            slides[index].classList.add('opacity-100', 'visible', 'relative');
            
            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-black');
                    dot.classList.remove('bg-gray-300');
                } else {
                    dot.classList.remove('bg-black');
                    dot.classList.add('bg-gray-300');
                }
            });
            
            currentSlide = index;
        }
        
        function startAutoplay() {
            clearInterval(interval);
            interval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        }
        
        // Initialize first slide
        showSlide(0);
        startAutoplay();
        
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(interval);
                showSlide(currentSlide - 1);
                startAutoplay();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(interval);
                showSlide(currentSlide + 1);
                startAutoplay();
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(interval);
                showSlide(index);
                startAutoplay();
            });
        });
        
        // Swipe functionality
        const testimonialContainer = document.querySelector('#testimonial-container');
        if (testimonialContainer) {
            let touchStartX = 0;
            let touchEndX = 0;
            
            testimonialContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            testimonialContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                
                if (touchEndX < touchStartX - 50) {
                    // Swipe left
                    clearInterval(interval);
                    showSlide(currentSlide + 1);
                    startAutoplay();
                } else if (touchEndX > touchStartX + 50) {
                    // Swipe right
                    clearInterval(interval);
                    showSlide(currentSlide - 1);
                    startAutoplay();
                }
            }, { passive: true });
            
            // Pause on hover
            testimonialContainer.addEventListener('mouseenter', () => clearInterval(interval));
            testimonialContainer.addEventListener('mouseleave', startAutoplay);
        }
    }
    
    // Initialize testimonial carousel if it exists
    initTestimonialCarousel();
});

// ===== Deferred JS Loading =====
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