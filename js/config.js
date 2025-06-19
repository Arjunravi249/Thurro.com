/**
 * ================================
 * THURRO WEBSITE - TAILWIND CONFIGURATION
 * ================================
 * 
 * This file contains the shared Tailwind CSS configuration
 * used across all pages of the Thurro website.
 * 
 * Load this file BEFORE the main Tailwind CSS script.
 */

// Check if tailwind is available
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class', // Enable dark mode with class strategy
        
        theme: {
            extend: {
                // Custom Colors
                colors: {
                    'ft-pink': '#FFF1E5',
                    'ft-pink-darker': '#f0e1d3',
                    'ft-cream': '#FFF8F0',
                    'ft-positive': '#3C763D',
                    'ft-negative': '#A52A2A',
                    
                    // Additional brand colors
                    'brand': {
                        50: '#FFF8F0',
                        100: '#FFF1E5',
                        200: '#f0e1d3',
                        300: '#e0d1c3',
                        400: '#d0c1b3',
                        500: '#c0b1a3',
                        600: '#b0a193',
                        700: '#a09183',
                        800: '#908173',
                        900: '#807163'
                    },
                    
                    // Semantic colors
                    'success': '#3C763D',
                    'warning': '#8a6d3b',
                    'danger': '#A52A2A',
                    'info': '#31708f'
                },
                
                // Custom Font Families
                fontFamily: {
                    'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    'display': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                },
                
                // Custom Font Sizes
                fontSize: {
                    'xs': ['0.75rem', { lineHeight: '1rem' }],
                    'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                    'base': ['1rem', { lineHeight: '1.5rem' }],
                    'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                    'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                    '2xl': ['1.5rem', { lineHeight: '2rem' }],
                    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                    '5xl': ['3rem', { lineHeight: '1' }],
                    '6xl': ['3.75rem', { lineHeight: '1' }],
                    '7xl': ['4.5rem', { lineHeight: '1' }],
                    '8xl': ['6rem', { lineHeight: '1' }],
                    '9xl': ['8rem', { lineHeight: '1' }],
                },
                
                // Custom Animations
                animation: {
                    'fade-in': 'fadeIn 0.6s ease-in-out forwards',
                    'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                    'slide-up': 'slideUp 0.6s ease-out forwards',
                    'slide-down': 'slideDown 0.6s ease-out forwards',
                    'bounce-gentle': 'bounceGentle 2s infinite',
                    'pulse-gentle': 'pulseGentle 2s infinite',
                    'rotate-gentle': 'rotateGentle 3s ease-in-out infinite',
                    'scale-in': 'scaleIn 0.3s ease-out forwards',
                },
                
                // Custom Keyframes
                keyframes: {
                    fadeIn: {
                        '0%': { 
                            opacity: '0', 
                            transform: 'translateY(20px)' 
                        },
                        '100%': { 
                            opacity: '1', 
                            transform: 'translateY(0)' 
                        }
                    },
                    fadeInUp: {
                        '0%': { 
                            opacity: '0', 
                            transform: 'translateY(30px)' 
                        },
                        '100%': { 
                            opacity: '1', 
                            transform: 'translateY(0)' 
                        }
                    },
                    slideUp: {
                        '0%': { 
                            opacity: '0', 
                            transform: 'translateY(30px)' 
                        },
                        '100%': { 
                            opacity: '1', 
                            transform: 'translateY(0)' 
                        }
                    },
                    slideDown: {
                        '0%': { 
                            opacity: '0', 
                            transform: 'translateY(-30px)' 
                        },
                        '100%': { 
                            opacity: '1', 
                            transform: 'translateY(0)' 
                        }
                    },
                    bounceGentle: {
                        '0%, 20%, 50%, 80%, 100%': { 
                            transform: 'translateY(0)' 
                        },
                        '40%': { 
                            transform: 'translateY(-10px)' 
                        },
                        '60%': { 
                            transform: 'translateY(-5px)' 
                        }
                    },
                    pulseGentle: {
                        '0%, 100%': { 
                            opacity: '1' 
                        },
                        '50%': { 
                            opacity: '0.8' 
                        }
                    },
                    rotateGentle: {
                        '0%': { 
                            transform: 'rotate(0deg)' 
                        },
                        '50%': { 
                            transform: 'rotate(180deg)' 
                        },
                        '100%': { 
                            transform: 'rotate(360deg)' 
                        }
                    },
                    scaleIn: {
                        '0%': { 
                            opacity: '0', 
                            transform: 'scale(0.9)' 
                        },
                        '100%': { 
                            opacity: '1', 
                            transform: 'scale(1)' 
                        }
                    }
                },
                
                // Custom Spacing
                spacing: {
                    '18': '4.5rem',
                    '88': '22rem',
                    '128': '32rem',
                    '144': '36rem',
                },
                
                // Custom Screens (Breakpoints)
                screens: {
                    'xs': '475px',
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1280px',
                    '2xl': '1536px',
                    '3xl': '1600px',
                    '4xl': '1920px',
                },
                
                // Custom Z-Index
                zIndex: {
                    '60': '60',
                    '70': '70',
                    '80': '80',
                    '90': '90',
                    '100': '100',
                },
                
                // Custom Border Radius
                borderRadius: {
                    'none': '0',
                    'sm': '0.125rem',
                    'default': '0.25rem',
                    'md': '0.375rem',
                    'lg': '0.5rem',
                    'xl': '0.75rem',
                    '2xl': '1rem',
                    '3xl': '1.5rem',
                    'full': '9999px',
                },
                
                // Custom Box Shadows
                boxShadow: {
                    'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                    'none': 'none',
                    
                    // Custom brand shadows
                    'brand': '0 10px 15px -3px rgba(255, 241, 229, 0.3), 0 4px 6px -2px rgba(255, 241, 229, 0.2)',
                    'brand-lg': '0 20px 25px -5px rgba(255, 241, 229, 0.3), 0 10px 10px -5px rgba(255, 241, 229, 0.2)',
                },
                
                // Custom Backdrop Blur
                backdropBlur: {
                    'xs': '2px',
                    'sm': '4px',
                    'md': '12px',
                    'lg': '16px',
                    'xl': '24px',
                    '2xl': '40px',
                    '3xl': '64px',
                },
                
                // Custom Transitions
                transitionDuration: {
                    '75': '75ms',
                    '100': '100ms',
                    '150': '150ms',
                    '200': '200ms',
                    '300': '300ms',
                    '500': '500ms',
                    '700': '700ms',
                    '1000': '1000ms',
                },
                
                // Custom Transform
                scale: {
                    '102': '1.02',
                    '103': '1.03',
                    '104': '1.04',
                    '105': '1.05',
                },
                
                // Custom Translate
                translate: {
                    '1/5': '20%',
                    '2/5': '40%',
                    '3/5': '60%',
                    '4/5': '80%',
                }
            }
        },
        
        // Custom Plugins
        plugins: [
            // You can add Tailwind plugins here if needed
            // Example: require('@tailwindcss/forms'),
        ],
        
        // Content paths (for purging unused CSS in production)
        content: [
            './*.html',
            './js/*.js',
            './components/*.html',
        ],
        
        // Safelist (classes that should never be purged)
        safelist: [
            'bg-black',
            'text-white',
            'hidden',
            'active',
            'opacity-0',
            'opacity-100',
            'translate-y-0',
            'translate-y-2',
            'scale-95',
            'scale-100',
            'rotate-180',
            'fade-in',
            'card-hover',
            'feature-btn',
            'solution-tab',
            'mobile-menu',
            'carousel-dot'
        ]
    };
} else {
    console.warn('Tailwind CSS not loaded. Please ensure Tailwind is included before this configuration file.');
}

/**
 * Additional Configuration Functions
 */

// Function to get current breakpoint
window.getCurrentBreakpoint = function() {
    const width = window.innerWidth;
    if (width < 475) return 'xs';
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    if (width < 1024) return 'lg';
    if (width < 1280) return 'xl';
    if (width < 1536) return '2xl';
    if (width < 1600) return '3xl';
    return '4xl';
};

// Function to check if dark mode is enabled
window.isDarkMode = function() {
    return document.documentElement.classList.contains('dark');
};

// Function to toggle dark mode
window.toggleDarkMode = function() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', window.isDarkMode());
};

// Initialize dark mode from localStorage
if (typeof localStorage !== 'undefined') {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.documentElement.classList.add('dark');
    }
}

console.log('Thurro Tailwind configuration loaded successfully');