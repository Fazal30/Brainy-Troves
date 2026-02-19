# Brainy Troves - PHP Version

This is the PHP/HTML version of the Brainy Troves Consultancy website, converted from the original React application.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Clean URLs**: SEO-friendly URLs without .php extensions
- **Contact Form**: Working contact form with email functionality
- **Modern UI**: Beautiful animations and transitions using AOS library
- **Cross-browser Compatible**: Works on all modern browsers

## Project Structure

```
├── index.php              # Main entry point with routing
├── .htaccess              # URL rewriting and security rules
├── includes/
│   ├── header.php         # Common header with navigation
│   └── footer.php         # Common footer
├── pages/
│   ├── home.php           # Home page
│   ├── about.php          # About page
│   ├── services.php       # Services page
│   ├── contactus.php      # Contact page with form
│   └── review.php         # Client reviews page
├── assets/
│   ├── css/
│   │   └── style.css      # Custom CSS styles
│   └── images/            # All images and assets
└── README.md              # This file
```

## Installation

1. **Upload Files**: Upload all files to your web server
2. **Configure Email**: Update email settings in `pages/contactus.php`
3. **Set Permissions**: Ensure proper file permissions (755 for directories, 644 for files)
4. **Test**: Visit your domain to test the website

## Requirements

- PHP 7.4 or higher
- Apache web server with mod_rewrite enabled
- Email functionality (for contact form)

## Configuration

### Email Settings
To enable the contact form, update the email settings in `pages/contactus.php`:

```php
$to = 'your-email@domain.com'; // Change to your email
```

### URL Structure
The website uses clean URLs:
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contactus` - Contact page
- `/review` - Reviews page

## Features Converted from React

### Navigation
- Responsive navigation with mobile menu
- Active page highlighting
- Smooth scrolling

### Pages
- **Home**: Hero section, services overview, statistics
- **About**: Company information, team, values
- **Services**: Detailed service descriptions
- **Contact**: Working contact form with validation
- **Reviews**: Client testimonials and success metrics

### Styling
- Tailwind CSS for responsive design
- Custom CSS for animations and effects
- Font Awesome icons
- AOS (Animate On Scroll) library

### Functionality
- PHP routing system
- Contact form with validation
- Email sending capability
- Mobile-responsive design
- SEO-friendly URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Security Features

- Input validation and sanitization
- XSS protection headers
- CSRF protection (can be added)
- Secure email handling

## Performance

- Optimized images
- Minified CSS
- Gzip compression
- Browser caching
- CDN-ready structure

## Support

For technical support or questions about this PHP version, please contact the development team.

## License

This project is proprietary software for Brainy Troves Consultancy.