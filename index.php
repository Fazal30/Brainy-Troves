<?php
// Simple routing system
$page = $_GET['page'] ?? 'home';

// Define allowed pages
$allowed_pages = ['home', 'about', 'services', 'contactus', 'review'];

// Validate page parameter
if (!in_array($page, $allowed_pages)) {
    $page = 'home';
}

// Include header
include 'includes/header.php';

// Include the requested page
switch($page) {
    case 'home':
        include 'pages/home.php';
        break;
    case 'about':
        include 'pages/about.php';
        break;
    case 'services':
        include 'pages/services.php';
        break;
    case 'contactus':
        include 'pages/contactus.php';
        break;
    case 'review':
        include 'pages/review.php';
        break;
    default:
        include 'pages/home.php';
        break;
}

// Include footer
include 'includes/footer.php';
?>
