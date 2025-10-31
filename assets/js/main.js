/* ========================================
   NGO Template - Main JavaScript
   Core UI Interactions
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // Favicon Injector (works for root and /pages)
    // ========================================
    function injectFavicons() {
        const head = document.head;
        if (!head) return;

        // If any favicon already present, skip
        if (head.querySelector('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]')) return;

        const isInPages = /\/pages\//.test(location.pathname);
        const prefix = isInPages ? '../' : '';

        const svgFavicon = document.createElement('link');
        svgFavicon.setAttribute('rel', 'icon');
        svgFavicon.setAttribute('type', 'image/svg+xml');
        svgFavicon.setAttribute('href', `${prefix}assets/img/logo.svg`);
        head.appendChild(svgFavicon);

        if (!head.querySelector('meta[name="theme-color"]')) {
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'theme-color');
            meta.setAttribute('content', '#ff6b35');
            head.appendChild(meta);
        }
    }

    // ========================================
    // Counter Animation
    // ========================================
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            const suffix = counter.getAttribute('data-suffix') || '';
            let current = 0;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.textContent = `${Math.floor(current).toLocaleString('en-IN')}${suffix}`;
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = `${target.toLocaleString('en-IN')}${suffix}`;
                            }
                        };
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }

    // ========================================
    // Progress Bar Animation
    // ========================================
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width || bar.getAttribute('data-width');
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => observer.observe(bar));
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========================================
    // Form Validation Helper
    // ========================================
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('[required]');
        
        inputs.forEach(input => {
            const errorElement = input.nextElementSibling;
            
            // Remove previous error messages
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.remove();
            }
            
            // Validate input
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                showError(input, 'Please enter a valid email address');
            } else if (input.type === 'tel' && !isValidPhone(input.value)) {
                isValid = false;
                showError(input, 'Please enter a valid phone number');
            }
        });
        
        return isValid;
    }

    function showError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
    }

    // ========================================
    // Phone Number Formatter (Indian)
    // ========================================
    function formatPhoneNumber() {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 10) value = value.slice(0, 10);
                
                // Format: 98765 43210
                if (value.length > 5) {
                    value = value.slice(0, 5) + ' ' + value.slice(5);
                }
                
                e.target.value = value;
            });
        });
    }

    // ========================================
    // Indian Number Formatting
    // ========================================
    function formatIndianNumber(num) {
        const numStr = num.toString();
        const lastThree = numStr.substring(numStr.length - 3);
        const otherNumbers = numStr.substring(0, numStr.length - 3);
        
        if (otherNumbers !== '') {
            return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
        } else {
            return lastThree;
        }
    }

    // ========================================
    // Lazy Loading Images
    // ========================================
    function initLazyLoad() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    // ========================================
    // Tabs Functionality
    // ========================================
    function initTabs() {
        const tabButtons = document.querySelectorAll('[data-tab]');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const tabGroup = this.closest('[data-tab-group]');
                
                if (tabGroup) {
                    // Remove active class from all tabs and contents
                    tabGroup.querySelectorAll('[data-tab]').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    tabGroup.querySelectorAll('[data-tab-content]').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Add active class to clicked tab and corresponding content
                    this.classList.add('active');
                    const tabContent = tabGroup.querySelector(`[data-tab-content="${tabId}"]`);
                    if (tabContent) {
                        tabContent.classList.add('active');
                    }
                }
            });
        });
    }

    // ========================================
    // Accordion Functionality
    // ========================================
    function initAccordion() {
        const accordionButtons = document.querySelectorAll('.accordion-toggle');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const accordionItem = this.closest('.accordion-item');
                const accordionContent = accordionItem.querySelector('.accordion-content');
                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordions in the same group
                const accordionGroup = this.closest('.accordion');
                if (accordionGroup) {
                    accordionGroup.querySelectorAll('.accordion-item').forEach(item => {
                        item.classList.remove('active');
                        item.querySelector('.accordion-content').style.maxHeight = null;
                    });
                }
                
                // Toggle current accordion
                if (!isActive) {
                    accordionItem.classList.add('active');
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            });
        });
    }

    // ========================================
    // Toast Notifications
    // ========================================
    function showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-message">${message}</span>
                <button class="toast-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    // ========================================
    // Copy to Clipboard
    // ========================================
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copied to clipboard!', 'success');
            });
        } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('Copied to clipboard!', 'success');
        }
    }

    // ========================================
    // Date Formatter (DD/MM/YYYY)
    // ========================================
    function formatDate(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // ========================================
    // Initialize All
    // ========================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        injectFavicons();
        animateCounters();
        animateProgressBars();
        initSmoothScroll();
        formatPhoneNumber();
        initLazyLoad();
        initTabs();
        initAccordion();
        
        console.log('NGO Template initialized');
    }

    // ========================================
    // Export Functions for Global Use
    // ========================================
    window.NGO = {
        validateForm,
        showToast,
        copyToClipboard,
        formatDate,
        formatIndianNumber
    };

    // Auto-initialize
    init();

})();

/* ========================================
   Toast Notification Styles
   ======================================== */
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        min-width: 300px;
    }
    
    .toast.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .toast-message {
        flex: 1;
    }
    
    .toast-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .toast-success {
        border-left: 4px solid #28a745;
    }
    
    .toast-error {
        border-left: 4px solid #dc3545;
    }
    
    .toast-warning {
        border-left: 4px solid #ffc107;
    }
    
    .toast-info {
        border-left: 4px solid #17a2b8;
    }
`;
document.head.appendChild(toastStyles);

