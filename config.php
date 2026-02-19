<?php
// Configuration file for Brainy Troves PHP website

// Site Configuration
define('SITE_NAME', 'Brainy Troves');
define('SITE_URL', 'https://yourdomain.com'); // Change to your domain
define('SITE_EMAIL', 'info@brainytroves.com');

// Contact Form Configuration
define('CONTACT_EMAIL', 'info@brainytroves.com');
define('CONTACT_PHONE', '+91 96209 96689');
define('WHATSAPP_NUMBER', '919620996689');

// Social Media Links
define('LINKEDIN_URL', 'https://linkedin.com');
define('TWITTER_URL', 'https://twitter.com');
define('INSTAGRAM_URL', 'https://instagram.com');

// Security Configuration
define('ENABLE_CSRF_PROTECTION', true);
define('MAX_FORM_SUBMISSIONS_PER_HOUR', 5);

// Email Configuration (for production)
define('SMTP_HOST', 'smtp.gmail.com'); // Change to your SMTP host
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com'); // Change to your email
define('SMTP_PASSWORD', 'your-app-password'); // Change to your app password
define('SMTP_ENCRYPTION', 'tls');

// Database Configuration (if needed for future features)
define('DB_HOST', 'localhost');
define('DB_NAME', 'brainytroves');
define('DB_USER', 'username');
define('DB_PASS', 'password');

// Error Reporting (set to false in production)
define('DEBUG_MODE', true);

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
?>
