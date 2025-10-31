# NGO Template - Complete Web Solution for Non-Profit Organizations

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/ngo-template)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Indian Localized](https://img.shields.io/badge/Localized-India-orange.svg)]()

> A modern, fully-functional NGO website template with Indian localization, built from scratch with clean code and best practices.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Pages Included](#pages-included)
- [Indian Localization](#indian-localization)
- [Customization Guide](#customization-guide)
- [Integration Guide](#integration-guide)
- [Browser Support](#browser-support)
- [License](#license)

## ✨ Features

### Core Functionality
- **Donation Management** - One-time & recurring donations with multiple payment options
- **Campaign System** - Create, manage, and track fundraising campaigns
- **Volunteer Management** - Application forms with availability scheduling
- **Event Registration** - RSVP system for events and workshops
- **Blog/News System** - Share impact stories and updates
- **Contact Forms** - AJAX-powered forms with validation
- **Newsletter Subscription** - Email collection and management

### Design & UX
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Accessibility Ready** - WCAG 2.1 compliant with proper ARIA labels
- **Dark Theme Support** - Optional dark mode (toggle in dark.css)
- **RTL Support** - Ready for Arabic, Hebrew, Urdu (rtl.css included)
- **Fast Loading** - Optimized performance with lazy loading

### Indian Localization 🇮🇳
- **Currency**: Indian Rupee (₹) formatting with proper comma placement
- **Phone Format**: +91 with space after 5 digits (98765 43210)
- **Date Format**: DD/MM/YYYY (14/10/2025)
- **Payment Methods**: UPI, Razorpay, PayU, Net Banking, Wallets
- **Tax Benefits**: 80G & 12A certification display
- **Indian States**: Dropdown with all Indian states

### Technical Features
- **No Dependencies** - Pure HTML, CSS, JavaScript (no jQuery required)
- **Modular Code** - Reusable components and clean architecture
- **SEO Optimized** - Semantic HTML, meta tags, structured data
- **Form Validation** - Client-side and server-ready validation
- **Security Ready** - CSRF token support, input sanitization
- **GitHub Ready** - Clean code, proper structure, ready to upload

## 🎯 Demo

**Live Preview Pages:**
- Homepage: `pages/index.html`
- Campaigns: `pages/campaigns.html`
- Donate: `pages/donate.html`
- Volunteer: `pages/volunteer.html`
- Events: `pages/events.html`
- Impact: `pages/impact.html`
- Reports: `pages/reports.html`

## 📥 Installation

### Quick Start

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/ngo-template.git
   cd ngo-template
   ```

2. **Open in Browser**
   - Simply open `pages/index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the Website**
   - Open http://localhost:8000/pages/index.html

### For Production Deployment

1. **Update Configuration**
   - Replace placeholder images with your own
   - Update contact information in `partials/footer.html`
   - Modify colors in `assets/css/style.css` (`:root` variables)

2. **Set Up Backend**
   - Implement API endpoints referenced in `assets/js/ajax.js`
   - Configure payment gateway (Razorpay/PayU/Stripe)
   - Set up email service for receipts and notifications

3. **Deploy**
   - Upload to your web host (supports any static hosting)
   - Configure domain and SSL certificate
   - Set up analytics and monitoring

## 📁 Project Structure

```
ngo-template/
│
├── /assets/
│   ├── /css/
│   │   ├── style.css              → Core design system
│   │   ├── layout.css             → Grid and spacing
│   │   ├── responsive.css         → Mobile responsiveness
│   │   ├── dark.css               → Dark theme (optional)
│   │   └── rtl.css                → RTL support (optional)
│   │
│   ├── /js/
│   │   ├── main.js                → Core functionality
│   │   ├── ajax.js                → Form submissions
│   │   └── plugins.js             → External library init
│   │
│   └── /img/                      → Images (use your own)
│
├── /pages/
│   ├── index.html                 → Homepage
│   ├── about.html                 → About organization
│   ├── campaigns.html             → Campaign listing
│   ├── campaign-details.html      → Single campaign
│   ├── donate.html                → Donation form
│   ├── volunteer.html             → Volunteer application
│   ├── events.html                → Events listing
│   ├── contact.html               → Contact form
│   ├── login.html                 → Admin login
│   ├── dashboard.html             → Admin dashboard
│   ├── thank-you.html             → Post-action confirmation
│   ├── 404.html                   → Error page
│   └── [more pages...]
│
├── /partials/
│   ├── header.html                → Reusable header
│   ├── footer.html                → Reusable footer
│   ├── modals.html                → Popup modals
│   └── sidebar.html               → Admin sidebar
│
└── README.md                      → This file
```

## 📄 Pages Included

### Public Pages (20+)
1. **index.html** - Homepage with hero, stats, campaigns, testimonials
2. **about.html** - About organization, mission, vision, timeline
3. **campaigns.html** - All fundraising campaigns with filters
4. **campaign-details.html** - Single campaign with donation widget
5. **donate.html** - Multi-step donation form with payment integration
6. **volunteer.html** - Volunteer application with opportunity listing
7. **events.html** - Event calendar and registration
8. **impact.html** - Success stories and impact metrics
9. **reports.html** - Annual reports and transparency documents
10. **team.html** - Team members and board directors
11. **partners.html** - Partner organizations and sponsors
12. **blog.html** - News and articles listing
13. **blog-details.html** - Single article view
14. **contact.html** - Contact form with map and FAQ
15. **thank-you.html** - Dynamic confirmation page
16. **privacy-policy.html** - Privacy policy and data protection
17. **terms.html** - Terms and conditions
18. **404.html** - Custom error page

### Reusable Components
- Header with navigation and donate CTA
- Footer with newsletter and quick links
- Modals for quick donation

## 🇮🇳 Indian Localization

### Currency Formatting
```javascript
// Indian Rupee with proper comma placement
₹ 12,45,000  // 12 lakhs 45 thousand
₹ 5,00,00,000  // 5 crores

// Implementation in code:
function formatIndianNumber(num) {
    return num.toLocaleString('en-IN');
}
```

### Phone Number Format
```html
<!-- Indian phone format: +91 98765 43210 -->
<div class="phone-input-wrapper">
    <span class="country-code">+91</span>
    <input type="tel" placeholder="98765 43210">
</div>
```

### Date Format
```javascript
// DD/MM/YYYY format
const date = new Date();
const formatted = `${day.padStart(2,'0')}/${month.padStart(2,'0')}/${year}`;
// Output: 14/10/2025
```

### Payment Methods
- **UPI** - Collect VPA for payment
- **Razorpay** - Popular Indian payment gateway
- **PayU** - Alternative gateway
- **Net Banking** - Direct bank transfer
- **Cards** - Debit/Credit cards
- **Wallets** - Paytm, PhonePe, Google Pay

### Tax Benefits (80G)
The template includes sections for:
- 80G certificate number display
- Tax deduction information
- Receipt generation (template provided)
- PAN number collection for donors

## 🎨 Customization Guide

### 1. Branding & Colors

Edit `assets/css/style.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Your brand color */
    --secondary-color: #0466c8;    /* Secondary color */
    --accent-color: #00b4d8;       /* Accent color */
}
```

### 2. Logo & Images

Replace logos in:
- `partials/header.html` - Main navigation logo
- `partials/footer.html` - Footer logo
- `pages/login.html` - Login page logo

**Image Sources Used:**
- Unsplash: `source.unsplash.com` - Free high-quality photos
- Pexels: `images.pexels.com` - Professional stock photos
- Pixabay: `cdn.pixabay.com` - Royalty-free images
- Lorem Picsum: `picsum.photos` - Random placeholders
- Pravatar: `i.pravatar.cc` - Avatar placeholders

Replace with your own images in production!

### 3. Contact Information

Edit `partials/footer.html`:
```html
<li>
    <i class="fas fa-phone"></i>
    <a href="tel:+919876543210">+91 98765 43210</a>
</li>
<li>
    <i class="fas fa-envelope"></i>
    <a href="mailto:info@yourorganization.org">info@yourorganization.org</a>
</li>
```

### 4. Social Media Links

Update social links in `partials/footer.html` and `partials/header.html`.

### 5. Content Updates

All text content is in HTML files. Simply search and replace:
- Organization name
- Addresses
- Phone numbers
- Email addresses
- Mission statements

## 🔧 Integration Guide

### Payment Gateway Integration

#### Razorpay (Recommended for India)

1. **Sign up**: https://razorpay.com
2. **Get API Keys**: Dashboard → Settings → API Keys
3. **Integrate**:

```javascript
// In donate.html or ajax.js
const options = {
    key: 'YOUR_RAZORPAY_KEY_ID',
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'NGO Name',
    description: 'Donation',
    handler: function(response) {
        // Payment successful
        window.location.href = 'thank-you.html?txn=' + response.razorpay_payment_id;
    }
};
const rzp = new Razorpay(options);
rzp.open();
```

### Email Service Integration

#### For Receipts & Notifications

Use services like:
- **SendGrid** - https://sendgrid.com
- **Mailgun** - https://mailgun.com
- **Amazon SES** - https://aws.amazon.com/ses

```javascript
// Server-side (Node.js example)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: donorEmail,
    from: 'donations@yourorg.org',
    subject: 'Thank you for your donation',
    html: receiptTemplate
};

await sgMail.send(msg);
```

### Database Setup

**Recommended Stack:**
- **Frontend**: This template (static)
- **Backend**: Node.js + Express OR PHP + Laravel
- **Database**: MySQL/PostgreSQL OR MongoDB
- **Hosting**: Heroku, DigitalOcean, AWS, or any VPS

**Tables Needed:**
- donations
- donors
- campaigns
- volunteers
- events
- users (admin)

### Analytics Integration

#### Google Analytics
Add to all pages before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Internet Explorer:** Not supported (deprecated by Microsoft)

## 📱 Mobile Optimization

- Touch-friendly buttons (minimum 44px height)
- Mobile-optimized forms
- Swipeable carousels
- Hamburger menu for navigation
- Optimized images with lazy loading

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🔒 Security Features

- Input validation and sanitization
- CSRF token support (implement on backend)
- XSS protection ready
- Secure form submissions
- Content Security Policy ready
- HTTPS recommended (configure on server)

## 📈 Performance Optimization

- Minified CSS and JS (for production)
- Image lazy loading
- Async script loading
- Optimized fonts
- CDN-ready assets
- Gzip compression recommended

## 🤝 Contributing

This template is open for contributions! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure:
- Code follows existing style
- All features are documented
- Mobile responsiveness is maintained
- Accessibility standards are met

## 📝 License

This project is licensed under the MIT License.

**MIT License Terms:**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ No warranty provided
- ⚠️ License and copyright notice must be included

## 🙏 Credits

### Created by
Original template created from scratch for NGO and non-profit organizations.

### Image Sources (Free to Use)
- Unsplash - https://unsplash.com
- Pexels - https://pexels.com
- Pixabay - https://pixabay.com
- Lorem Picsum - https://picsum.photos
- Pravatar - https://pravatar.cc

### Fonts
- Google Fonts - Poppins & Lora
- Font Awesome Icons - https://fontawesome.com

### Inspiration
Built specifically for Indian NGOs with local requirements in mind.

## 📞 Support

For questions, issues, or feature requests:

- **Email**: support@yourorganization.org
- **Phone**: +91 98765 43210
- **GitHub Issues**: https://github.com/yourusername/ngo-template/issues

## 🗺️ Roadmap

### Future Enhancements
- [ ] Multi-language support (Hindi, Tamil, Bengali)
- [ ] Progressive Web App (PWA) support
- [ ] Advanced analytics dashboard
- [ ] Mobile app integration
- [ ] WhatsApp Business integration
- [ ] AI-powered chatbot
- [ ] Blockchain donation tracking

## 📚 Documentation

For detailed documentation on specific features:

- [Payment Integration Guide](docs/payment-integration.md)
- [Admin Dashboard Guide](docs/admin-guide.md)
- [Customization Tutorial](docs/customization.md)
- [API Documentation](docs/api.md)

## ⚡ Quick Tips

1. **Replace All Images**: Search for `placehold.co`, `unsplash.com`, `pravatar.cc` and replace with your images
2. **Update Contact Info**: Global search for `+91 98765 43210` and `info@ngotemplate.org`
3. **Change Colors**: Edit `:root` variables in `style.css`
4. **Test Forms**: All forms have AJAX handlers - implement backend endpoints
5. **SSL Certificate**: Always use HTTPS for donation pages

## 🎉 Getting Started Checklist

- [ ] Download/clone the template
- [ ] Replace all placeholder images
- [ ] Update organization name throughout
- [ ] Update contact information
- [ ] Customize colors and branding
- [ ] Set up payment gateway
- [ ] Configure email service
- [ ] Set up backend API
- [ ] Test all forms
- [ ] Set up analytics
- [ ] Deploy to hosting
- [ ] Configure SSL
- [ ] Test on mobile devices
- [ ] Submit to search engines

---

**Made with ❤️ for NGOs and Non-Profit Organizations in India**

*This template is NOT copied from ThemeForest, ThemeMonster, or any other marketplace. It's built from scratch with clean, original code.*

**Star ⭐ this repository if you find it helpful!**

