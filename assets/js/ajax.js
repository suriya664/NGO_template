/* ========================================
   NGO Template - AJAX Handlers
   For forms: donate, contact, volunteer, newsletter
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // Generic AJAX Form Handler
    // ========================================
    function handleFormSubmit(form, endpoint, successCallback, errorCallback) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        
        // Simulate AJAX request (replace with actual API call in production)
        setTimeout(() => {
            // In production, use fetch or axios:
            /*
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken()
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                if (data.success) {
                    successCallback(data);
                } else {
                    errorCallback(data.message || 'An error occurred');
                }
            })
            .catch(error => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                errorCallback('Network error. Please try again.');
            });
            */
            
            // Simulated success response
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            successCallback({
                success: true,
                message: 'Form submitted successfully!',
                data: data
            });
        }, 1500);
    }

    // ========================================
    // Donation Form Handler
    // ========================================
    function initDonationForms() {
        const donationForms = document.querySelectorAll('.donation-form, #donation-form, #quick-donate-form');
        
        donationForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!window.NGO.validateForm(this)) {
                    return;
                }
                
                handleFormSubmit(
                    this,
                    '/api/donate',
                    function(response) {
                        // Success: redirect to payment gateway or thank you page
                        const amount = response.data.amount || response.data['custom-amount'];
                        const name = response.data['donor-name'] || response.data['donor-full-name'];
                        
                        window.NGO.showToast('Redirecting to payment gateway...', 'success');
                        
                        // In production, redirect to actual payment gateway
                        setTimeout(() => {
                            // Example: Razorpay integration
                            // window.location.href = `/payment?amount=${amount}&name=${encodeURIComponent(name)}`;
                            
                            // For demo, redirect to thank you page
                            window.location.href = `thank-you.html?type=donation&amount=${amount}`;
                        }, 2000);
                    },
                    function(error) {
                        window.NGO.showToast(error, 'error');
                    }
                );
            });
        });
    }

    // ========================================
    // Volunteer Form Handler
    // ========================================
    function initVolunteerForms() {
        const volunteerForms = document.querySelectorAll('.volunteer-form, #volunteer-form');
        
        volunteerForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!window.NGO.validateForm(this)) {
                    return;
                }
                
                handleFormSubmit(
                    this,
                    '/api/volunteer',
                    function(response) {
                        window.NGO.showToast('Application submitted successfully!', 'success');
                        form.reset();
                        
                        // Redirect to thank you page
                        setTimeout(() => {
                            window.location.href = 'thank-you.html?type=volunteer';
                        }, 2000);
                    },
                    function(error) {
                        window.NGO.showToast(error, 'error');
                    }
                );
            });
        });
    }

    // ========================================
    // Contact Form Handler
    // ========================================
    function initContactForms() {
        const contactForms = document.querySelectorAll('.contact-form, #contact-form');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!window.NGO.validateForm(this)) {
                    return;
                }
                
                handleFormSubmit(
                    this,
                    '/api/contact',
                    function(response) {
                        window.NGO.showToast('Message sent successfully! We will get back to you soon.', 'success');
                        form.reset();
                        
                        // Show success message in form
                        const messageDiv = form.querySelector('.form-message') || document.createElement('div');
                        messageDiv.className = 'alert alert-success form-message';
                        messageDiv.textContent = 'Thank you for contacting us! We will respond within 24 hours.';
                        form.insertBefore(messageDiv, form.firstChild);
                        
                        setTimeout(() => {
                            messageDiv.remove();
                        }, 5000);
                    },
                    function(error) {
                        window.NGO.showToast(error, 'error');
                    }
                );
            });
        });
    }

    // ========================================
    // Newsletter Subscription Handler
    // ========================================
    function initNewsletterForms() {
        const newsletterForms = document.querySelectorAll('.newsletter-form, #newsletter-form');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value.trim();
                
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    window.NGO.showToast('Please enter a valid email address', 'error');
                    return;
                }
                
                handleFormSubmit(
                    this,
                    '/api/newsletter/subscribe',
                    function(response) {
                        window.NGO.showToast('Successfully subscribed to our newsletter!', 'success');
                        form.reset();
                        
                        // Show inline success message
                        const messageDiv = form.querySelector('.newsletter-message');
                        if (messageDiv) {
                            messageDiv.innerHTML = '<div class="alert alert-success">Thank you for subscribing!</div>';
                            setTimeout(() => {
                                messageDiv.innerHTML = '';
                            }, 5000);
                        }
                    },
                    function(error) {
                        window.NGO.showToast(error, 'error');
                    }
                );
            });
        });
    }

    // ========================================
    // Event Registration Handler
    // ========================================
    function initEventRegistrationForms() {
        const eventForms = document.querySelectorAll('.event-registration-form, #event-registration-form');
        
        eventForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!window.NGO.validateForm(this)) {
                    return;
                }
                
                handleFormSubmit(
                    this,
                    '/api/events/register',
                    function(response) {
                        window.NGO.showToast('Successfully registered for the event!', 'success');
                        form.reset();
                        
                        setTimeout(() => {
                            window.location.href = 'thank-you.html?type=event';
                        }, 2000);
                    },
                    function(error) {
                        window.NGO.showToast(error, 'error');
                    }
                );
            });
        });
    }

    // ========================================
    // Login Form Handler - REMOVED
    // Login functionality has been removed from this template
    // ========================================

    // ========================================
    // File Upload Handler
    // ========================================
    function initFileUploads() {
        const fileInputs = document.querySelectorAll('input[type="file"]');
        
        fileInputs.forEach(input => {
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    // Validate file size (max 5MB)
                    if (file.size > 5 * 1024 * 1024) {
                        window.NGO.showToast('File size must be less than 5MB', 'error');
                        e.target.value = '';
                        return;
                    }
                    
                    // Validate file type
                    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
                    if (!allowedTypes.includes(file.type)) {
                        window.NGO.showToast('Only JPG, PNG and PDF files are allowed', 'error');
                        e.target.value = '';
                        return;
                    }
                    
                    // Show file name
                    const fileName = file.name;
                    const fileLabel = this.nextElementSibling;
                    if (fileLabel) {
                        fileLabel.textContent = fileName;
                    }
                }
            });
        });
    }

    // ========================================
    // Search Functionality
    // ========================================
    function initSearch() {
        const searchForms = document.querySelectorAll('.search-form');
        
        searchForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const searchInput = this.querySelector('input[type="search"], input[name="search"]');
                const query = searchInput.value.trim();
                
                if (!query) {
                    window.NGO.showToast('Please enter a search term', 'warning');
                    return;
                }
                
                // Redirect to search results page
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            });
        });
    }

    // ========================================
    // CSRF Token Helper (for security)
    // ========================================
    function getCsrfToken() {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    }

    // ========================================
    // Initialize All AJAX Handlers
    // ========================================
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        initDonationForms();
        initVolunteerForms();
        initContactForms();
        initNewsletterForms();
        initEventRegistrationForms();
        initFileUploads();
        initSearch();
        
        console.log('AJAX handlers initialized');
    }

    // Auto-initialize
    init();

})();

