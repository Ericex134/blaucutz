// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Gallery Scrolling Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryScroll = document.querySelector('.gallery-scroll');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    if (galleryScroll && prevBtn && nextBtn) {
        const scrollAmount = 320; // Width of item + gap

        prevBtn.addEventListener('click', function() {
            galleryScroll.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function() {
            galleryScroll.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update button visibility based on scroll position
        function updateNavigationButtons() {
            const scrollLeft = galleryScroll.scrollLeft;
            const maxScroll = galleryScroll.scrollWidth - galleryScroll.clientWidth;

            prevBtn.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
            nextBtn.style.opacity = scrollLeft >= maxScroll ? '0.5' : '1';
        }

        galleryScroll.addEventListener('scroll', updateNavigationButtons);
        updateNavigationButtons(); // Initial check

        // Touch/swipe support for mobile
        let isDown = false;
        let startX;
        let scrollLeftStart;

        galleryScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            galleryScroll.style.cursor = 'grabbing';
            startX = e.pageX - galleryScroll.offsetLeft;
            scrollLeftStart = galleryScroll.scrollLeft;
        });

        galleryScroll.addEventListener('mouseleave', () => {
            isDown = false;
            galleryScroll.style.cursor = 'grab';
        });

        galleryScroll.addEventListener('mouseup', () => {
            isDown = false;
            galleryScroll.style.cursor = 'grab';
        });

        galleryScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - galleryScroll.offsetLeft;
            const walk = (x - startX) * 2;
            galleryScroll.scrollLeft = scrollLeftStart - walk;
        });
    }
});

// Testimonials Scrolling Functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsScroll = document.querySelector('.testimonials-scroll');
    const prevBtn = document.querySelector('.testimonials-prev');
    const nextBtn = document.querySelector('.testimonials-next');

    if (testimonialsScroll && prevBtn && nextBtn) {
        const scrollAmount = 370; // Width of item + gap

        prevBtn.addEventListener('click', function() {
            testimonialsScroll.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function() {
            testimonialsScroll.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update button visibility based on scroll position
        function updateTestimonialsButtons() {
            const scrollLeft = testimonialsScroll.scrollLeft;
            const maxScroll = testimonialsScroll.scrollWidth - testimonialsScroll.clientWidth;

            prevBtn.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
            nextBtn.style.opacity = scrollLeft >= maxScroll ? '0.5' : '1';
        }

        testimonialsScroll.addEventListener('scroll', updateTestimonialsButtons);
        updateTestimonialsButtons(); // Initial check

        // Touch/swipe support for mobile
        let isDown = false;
        let startX;
        let scrollLeftStart;

        testimonialsScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialsScroll.style.cursor = 'grabbing';
            startX = e.pageX - testimonialsScroll.offsetLeft;
            scrollLeftStart = testimonialsScroll.scrollLeft;
        });

        testimonialsScroll.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialsScroll.style.cursor = 'grab';
        });

        testimonialsScroll.addEventListener('mouseup', () => {
            isDown = false;
            testimonialsScroll.style.cursor = 'grab';
        });

        testimonialsScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsScroll.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsScroll.scrollLeft = scrollLeftStart - walk;
        });
    }
});

// FAB Scroll Behavior
document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('fab-book');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide FAB based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            fab.style.transform = 'translateY(100px)';
        } else {
            // Scrolling up
            fab.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// Navbar scroll effect with dark theme
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special effect for service items
            if (entry.target.classList.contains('service-item')) {
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-item, .gallery-item, .testimonial-card, .about-text, .about-visual');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Enhanced gallery hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const placeholder = this.querySelector('.gallery-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1.1)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const placeholder = this.querySelector('.gallery-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1)';
        }
    });
});

// Service item enhanced hover effects
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.borderColor = '#ffffff';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.borderColor = '#333333';
    });
});

// Testimonial card hover effects
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.borderColor = '#ffffff';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.borderColor = '#333333';
    });
});

// Enhanced button click effects with minimal style
document.querySelectorAll('.btn, .nav-book-btn, .fab-book').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create minimal ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = this.classList.contains('fab-book') ? '50%' : '0';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Add click-to-call functionality with minimal feedback
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('.contact-item i.fa-phone + div p');
    phoneNumbers.forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', function() {
            // Add visual feedback
            this.style.color = '#ffffff';
            setTimeout(() => {
                this.style.color = '#999999';
            }, 200);
            
            window.location.href = `tel:${this.textContent.replace(/[^\d]/g, '')}`;
        });
    });
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat .number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = stat.textContent.includes('+') ? target + '+' : 
                                 stat.textContent.includes('%') ? target + '%' : target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Video background controls
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Ensure video plays on mobile
        heroVideo.play().catch(function(error) {
            console.log("Video autoplay prevented:", error);
        });
        
        // Add video loading optimization
        heroVideo.addEventListener('loadstart', function() {
            this.style.opacity = '0';
        });
        
        heroVideo.addEventListener('canplay', function() {
            this.style.transition = 'opacity 1s ease';
            this.style.opacity = '1';
        });
    }
});

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-menu.active {
        left: 0 !important;
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }
    
    /* Gallery cursor styles */
    .gallery-scroll, .testimonials-scroll {
        cursor: grab;
    }
    
    .gallery-scroll:active, .testimonials-scroll:active {
        cursor: grabbing;
    }
    
    /* FAB transition */
    .fab-book {
        transition: all 0.3s ease, transform 0.3s ease;
    }
    
    /* Minimal text glow effect */
    .hero-title {
        animation: slideInLeft 1s ease, textGlow 3s ease-in-out infinite;
    }
    
    @keyframes textGlow {
        0%, 90%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        95% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
        }
    }
    
    /* Video fade in */
    .hero-video {
        opacity: 0;
        transition: opacity 1s ease;
    }
    
    /* Testimonial star animation */
    .stars i {
        animation: starTwinkle 2s ease-in-out infinite;
        animation-delay: calc(var(--star-index) * 0.2s);
    }
    
    @keyframes starTwinkle {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.7;
            transform: scale(0.9);
        }
    }
`;
document.head.appendChild(style);

// Add star animation delays
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.stars i').forEach((star, index) => {
        star.style.setProperty('--star-index', index);
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Additional scroll-based animations
}, 16)); // ~60fps

// Mobile-Enhanced DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Loading Screen
    const mobileLoader = document.getElementById('mobile-loader');
    setTimeout(() => {
        mobileLoader.classList.add('hidden');
        setTimeout(() => {
            mobileLoader.style.display = 'none';
        }, 500);
    }, 1500);

    // Initialize mobile features
    initMobileNavigation();
    initMobileGallery();
    initMobileInteractions();
    initTouchOptimizations();
});

// Enhanced Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle mobile menu with better animation
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        body.classList.toggle('nav-open');
    });

    // Enhanced mobile menu link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default for external links
            if (!this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.classList.remove('nav-open');
            
            // Smooth scroll to target
            if (target) {
                setTimeout(() => {
                    const targetPosition = target.offsetTop - 80;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.classList.remove('nav-open');
        }
    });

    // Prevent menu close on menu content click
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Mobile-Optimized Gallery with Touch Gestures
function initMobileGallery() {
    const galleryScroll = document.getElementById('gallery-mobile-scroll');
    const galleryDots = document.getElementById('gallery-dots');
    const galleryItems = document.querySelectorAll('.gallery-mobile-item');

    if (!galleryScroll || !galleryDots) return;

    // Create dots
    galleryItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'gallery-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToItem(index));
        galleryDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    // Update active dot on scroll
    let scrollTimeout;
    galleryScroll.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveDot();
        }, 100);
    });

    function updateActiveDot() {
        const scrollLeft = galleryScroll.scrollLeft;
        const itemWidth = galleryItems[0].offsetWidth + 24; // 24px gap
        const activeIndex = Math.round(scrollLeft / itemWidth);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    function scrollToItem(index) {
        const itemWidth = galleryItems[0].offsetWidth + 24;
        galleryScroll.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
    }

    // Touch swipe enhancement
    let startX, scrollStart, isDragging = false;

    galleryScroll.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        scrollStart = galleryScroll.scrollLeft;
        isDragging = true;
    }, { passive: true });

    galleryScroll.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        galleryScroll.scrollLeft = scrollStart + diff;
    }, { passive: true });

    galleryScroll.addEventListener('touchend', () => {
        isDragging = false;
        updateActiveDot();
    });
}

// Mobile Interaction Enhancements
function initMobileInteractions() {
    // Enhanced ripple effects for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('touchstart', createRipple, { passive: true });
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('touchstart', createServiceRipple, { passive: true });
    });

    document.querySelector('.fab-book')?.addEventListener('touchstart', createFabRipple, { passive: true });

    // Service card interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            // Haptic feedback simulation
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Gallery item interactions
    document.querySelectorAll('.gallery-mobile-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
            
            // Could trigger modal or action here
            console.log('Gallery item clicked:', category);
        });
    });
}

function createRipple(e) {
    const ripple = this.querySelector('.btn-ripple');
    if (!ripple) return;

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.touches[0].clientX - rect.left - size / 2;
    const y = e.touches[0].clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    
    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 500);
}

function createServiceRipple(e) {
    const ripple = this.querySelector('.service-ripple');
    if (!ripple) return;

    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    
    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 600);
}

function createFabRipple(e) {
    const ripple = document.querySelector('.fab-ripple');
    if (!ripple) return;

    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    
    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 400);
}

// Touch Optimizations
function initTouchOptimizations() {
    // Prevent zoom on input focus (if any forms are added)
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', () => {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            }
        });

        element.addEventListener('blur', () => {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
            }
        });
    });

    // Optimize scroll performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollEffects();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Handle device orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            // Recalculate positions after orientation change
            window.scrollTo(window.scrollX, window.scrollY);
        }, 100);
    });

    // Handle pull-to-refresh prevention
    let startY;
    document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        if (startY < currentY && window.scrollY === 0) {
            // Prevent pull-to-refresh if at top
            e.preventDefault();
        }
    }, { passive: false });
}

function updateScrollEffects() {
    const scrollTop = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    const fab = document.getElementById('fab-book');

    // Enhanced navbar effect
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }

    // Enhanced FAB behavior
    if (scrollTop > 200) {
        fab.style.transform = 'translateY(0) scale(1)';
        fab.style.opacity = '1';
    } else {
        fab.style.transform = 'translateY(100px) scale(0.8)';
        fab.style.opacity = '0';
    }
}

// Mobile-Enhanced Testimonials Scrolling
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsScroll = document.querySelector('.testimonials-scroll');
    
    if (testimonialsScroll) {
        let isScrolling = false;
        let startX, scrollLeft;

        testimonialsScroll.addEventListener('touchstart', (e) => {
            isScrolling = true;
            startX = e.touches[0].pageX - testimonialsScroll.offsetLeft;
            scrollLeft = testimonialsScroll.scrollLeft;
        }, { passive: true });

        testimonialsScroll.addEventListener('touchmove', (e) => {
            if (!isScrolling) return;
            
            const x = e.touches[0].pageX - testimonialsScroll.offsetLeft;
            const walk = (x - startX) * 1.5;
            testimonialsScroll.scrollLeft = scrollLeft - walk;
        }, { passive: true });

        testimonialsScroll.addEventListener('touchend', () => {
            isScrolling = false;
        });
    }
});

// Mobile Video Optimization
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Mobile video loading optimization
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            heroVideo.setAttribute('preload', 'none');
            
            // Load video when it's about to be visible
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        heroVideo.setAttribute('preload', 'metadata');
                        heroVideo.load();
                        videoObserver.unobserve(heroVideo);
                    }
                });
            }, { threshold: 0.1 });

            videoObserver.observe(heroVideo);
        }

        // Handle play/pause based on visibility
        const playObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(() => {
                        // Fallback for autoplay restrictions
                        console.log('Video autoplay blocked');
                    });
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.5 });

        playObserver.observe(heroVideo);
    }
});

// Enhanced Smooth Scrolling for Mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Add haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }

            const targetPosition = target.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second

            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});

// Mobile Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData.loadEventEnd - perfData.loadEventStart > 3000) {
                console.log('Slow loading detected on mobile');
                // Could implement loading optimization strategies
            }
        }, 0);
    });
}

// Prevent iOS bounce scroll
document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.gallery-mobile-scroll') || e.target.closest('.testimonials-scroll')) {
        return; // Allow scrolling in gallery
    }
    
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    if ((scrollY <= 0 && e.touches[0].clientY > e.touches[0].startY) ||
        (scrollY >= maxScroll && e.touches[0].clientY < e.touches[0].startY)) {
        e.preventDefault();
    }
}, { passive: false });

// Add CSS for mobile nav open state
const mobileNavStyles = document.createElement('style');
mobileNavStyles.textContent = `
    body.nav-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            left: 0 !important;
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(mobileNavStyles); 