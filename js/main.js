// ============================================
// Main JavaScript for Portfolio Website
// ============================================

// ============================================
// Theme Management (Dark/Light Mode)
// ============================================
const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    },

    setTheme(theme) {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }
};

// ============================================
// Mobile Navigation
// ============================================
const MobileNav = {
    init() {
        const hamburger = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }
};

// ============================================
// Smooth Scroll
// ============================================
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
};

// ============================================
// Scroll Animations
// ============================================
const ScrollAnimations = {
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
            el.classList.add('opacity-0', 'transition-opacity', 'duration-700');
            observer.observe(el);
        });
    }
};

// ============================================
// Modal Management
// ============================================
const ModalManager = {
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    },

    init() {
        // Close modals on outside click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    const modal = overlay.closest('.modal');
                    if (modal) {
                        this.closeModal(modal.id);
                    }
                }
            });
        });

        // Close modals on close button click
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = btn.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (!modal.classList.contains('hidden')) {
                        this.closeModal(modal.id);
                    }
                });
            }
        });
    }
};

// ============================================
// Form Validation
// ============================================
const FormValidator = {
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    validateForm(formId) {
        const form = document.getElementById(formId);
        if (!form) return false;

        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const message = form.querySelector('[name="message"]');

        let isValid = true;

        // Reset previous errors
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.border-red-500').forEach(el => {
            el.classList.remove('border-red-500');
            el.classList.add('border-gray-300');
        });

        // Validate name
        if (name && name.value.trim().length < 2) {
            this.showError(name, 'Name must be at least 2 characters');
            isValid = false;
        }

        // Validate email
        if (email && !this.validateEmail(email.value)) {
            this.showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (message && message.value.trim().length < 10) {
            this.showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }

        return isValid;
    },

    showError(input, message) {
        input.classList.remove('border-gray-300');
        input.classList.add('border-red-500');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    },

    init() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.validateForm('contact-form')) {
                    // Form is valid - you can submit here
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }
            });
        }
    }
};

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    MobileNav.init();
    SmoothScroll.init();
    ScrollAnimations.init();
    ModalManager.init();
    FormValidator.init();
});

