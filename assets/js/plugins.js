/* ========================================
   NGO Template - Plugins Initialization
   For external libraries: AOS, Owl Carousel, etc.
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // Initialize AOS (Animate On Scroll)
    // Include: <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    // ========================================
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
            console.log('AOS initialized');
        }
    }

    // ========================================
    // Initialize Owl Carousel
    // Include: <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    // ========================================
    function initOwlCarousel() {
        if (typeof $.fn.owlCarousel !== 'undefined') {
            // Testimonials Carousel
            $('.testimonials-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });

            // Partners Carousel
            $('.partners-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: { items: 2 },
                    576: { items: 3 },
                    768: { items: 4 },
                    992: { items: 6 }
                }
            });

            // Campaign Slider
            $('.campaign-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: false,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });

            console.log('Owl Carousel initialized');
        }
    }

    // ========================================
    // Initialize Isotope (Filtering)
    // Include: <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
    // ========================================
    function initIsotope() {
        if (typeof Isotope !== 'undefined') {
            const grid = document.querySelector('.isotope-grid');
            if (grid) {
                const iso = new Isotope(grid, {
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows',
                    percentPosition: true
                });

                // Filter buttons
                const filterButtons = document.querySelectorAll('.isotope-filter button');
                filterButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const filterValue = this.getAttribute('data-filter');
                        iso.arrange({ filter: filterValue });
                        
                        // Update active button
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                    });
                });

                console.log('Isotope initialized');
            }
        }
    }

    // ========================================
    // Initialize Magnific Popup (Lightbox)
    // Include: <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
    // ========================================
    function initMagnificPopup() {
        if (typeof $.fn.magnificPopup !== 'undefined') {
            // Image Gallery
            $('.image-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    titleSrc: 'title',
                    tError: 'The image could not be loaded.'
                }
            });

            // Video Popup
            $('.video-popup').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        }
                    }
                }
            });

            console.log('Magnific Popup initialized');
        }
    }

    // ========================================
    // Initialize Chart.js (Dashboard Charts)
    // Include: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    // ========================================
    function initCharts() {
        if (typeof Chart !== 'undefined') {
            // Donation Trends Chart
            const donationTrendCanvas = document.getElementById('donation-trend-chart');
            if (donationTrendCanvas) {
                new Chart(donationTrendCanvas, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [{
                            label: 'Donations (₹)',
                            data: [45000, 52000, 48000, 65000, 72000, 68000, 85000, 78000, 92000, 88000, 95000, 105000],
                            borderColor: '#ff6b35',
                            backgroundColor: 'rgba(255, 107, 53, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: function(value) {
                                        return '₹' + value.toLocaleString('en-IN');
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Campaign Distribution Chart
            const campaignDistCanvas = document.getElementById('campaign-distribution-chart');
            if (campaignDistCanvas) {
                new Chart(campaignDistCanvas, {
                    type: 'doughnut',
                    data: {
                        labels: ['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Emergency'],
                        datasets: [{
                            data: [35, 25, 20, 12, 8],
                            backgroundColor: [
                                '#ff6b35',
                                '#0466c8',
                                '#00b4d8',
                                '#28a745',
                                '#ffc107'
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                });
            }

            // Donor Growth Chart
            const donorGrowthCanvas = document.getElementById('donor-growth-chart');
            if (donorGrowthCanvas) {
                new Chart(donorGrowthCanvas, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'New Donors',
                            data: [45, 52, 48, 65, 72, 68],
                            backgroundColor: '#ff6b35'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            console.log('Charts initialized');
        }
    }

    // ========================================
    // Initialize Flatpickr (Date Picker)
    // Include: <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    // ========================================
    function initDatePicker() {
        if (typeof flatpickr !== 'undefined') {
            flatpickr('.datepicker', {
                dateFormat: 'd/m/Y',
                altInput: true,
                altFormat: 'j F Y',
                allowInput: true
            });

            flatpickr('.datetimepicker', {
                enableTime: true,
                dateFormat: 'd/m/Y H:i',
                altInput: true,
                altFormat: 'j F Y, h:i K',
                time_24hr: false
            });

            console.log('Flatpickr initialized');
        }
    }

    // ========================================
    // Initialize Choices.js (Select Enhancement)
    // Include: <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
    // ========================================
    function initChoices() {
        if (typeof Choices !== 'undefined') {
            const selectElements = document.querySelectorAll('.choices-select');
            selectElements.forEach(element => {
                new Choices(element, {
                    searchEnabled: true,
                    itemSelectText: 'Click to select',
                    removeItemButton: true
                });
            });

            console.log('Choices.js initialized');
        }
    }

    // ========================================
    // Initialize Tooltips (Bootstrap-style)
    // ========================================
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltipText = this.getAttribute('data-tooltip');
                const tooltip = document.createElement('div');
                tooltip.className = 'custom-tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
                
                this._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.remove();
                    this._tooltip = null;
                }
            });
        });
    }

    // ========================================
    // Initialize All Plugins
    // ========================================
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        initAOS();
        initOwlCarousel();
        initIsotope();
        initMagnificPopup();
        initCharts();
        initDatePicker();
        initChoices();
        initTooltips();
        
        console.log('All plugins initialized');
    }

    // Auto-initialize
    init();

})();

/* ========================================
   Custom Tooltip Styles
   ======================================== */
const tooltipStyles = document.createElement('style');
tooltipStyles.textContent = `
    .custom-tooltip {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 10000;
        pointer-events: none;
        white-space: nowrap;
    }
    
    .custom-tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-color: rgba(0, 0, 0, 0.9);
    }
`;
document.head.appendChild(tooltipStyles);

