<?php
// Include configuration
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo SITE_NAME; ?> - Professional Consultancy Services</title>
    <meta name="description" content="Brainy Troves Consultancy - Where Talent Meets Opportunity. Expert consultancy services for career growth and business success.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'amber': {
                            500: '#f59e0b',
                            600: '#d97706'
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body class="bg-white">
    <!-- Navigation -->
    <nav class="w-full fixed top-0 left-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-lg" id="navbar">
        <div class="flex flex-row justify-between p-5 md:px-32 px-5">
            <div class="flex flex-col items-center md:flex-row md:items-center cursor-pointer">
                <a href="index.php" class="flex items-center">
                    <h1 class="text-3xl md:text-4xl font-bold text-amber-500">
                        Brainy Troves
                    </h1>
                </a>
            </div>

            <nav class="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                <a href="index.php" class="nav-link <?php echo ($page == 'home') ? 'active' : ''; ?>">Home</a>
                <a href="index.php?page=services" class="nav-link <?php echo ($page == 'services') ? 'active' : ''; ?>">Services</a>
                <a href="index.php?page=about" class="nav-link <?php echo ($page == 'about') ? 'active' : ''; ?>">About Us</a>
                <a href="index.php?page=contactus" class="nav-link <?php echo ($page == 'contactus') ? 'active' : ''; ?>">Contact Us</a>
                <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="px-6 py-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full font-semibold transition-all duration-300">
                    Let's Talk
                </a>
            </nav>

            <div class="md:hidden flex items-center cursor-pointer" id="mobile-menu-btn">
                <i class="fas fa-bars text-gray-900" id="menu-icon"></i>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden hidden flex-col absolute bg-white/90 backdrop-blur-sm left-0 w-full py-8 gap-6 border-t border-gray-100 shadow-lg" id="mobile-menu">
            <div class="px-8">
                <a href="index.php" class="text-xl font-medium <?php echo ($page == 'home') ? 'text-amber-500' : 'text-gray-700'; ?> hover:text-amber-500 transition-colors duration-300">Home</a>
            </div>
            <div class="px-8">
                <a href="index.php?page=services" class="text-xl font-medium <?php echo ($page == 'services') ? 'text-amber-500' : 'text-gray-700'; ?> hover:text-amber-500 transition-colors duration-300">Services</a>
            </div>
            <div class="px-8">
                <a href="index.php?page=about" class="text-xl font-medium <?php echo ($page == 'about') ? 'text-amber-500' : 'text-gray-700'; ?> hover:text-amber-500 transition-colors duration-300">About Us</a>
            </div>
            <div class="px-8">
                <a href="index.php?page=contactus" class="text-xl font-medium <?php echo ($page == 'contactus') ? 'text-amber-500' : 'text-gray-700'; ?> hover:text-amber-500 transition-colors duration-300">Contact Us</a>
            </div>
            <div class="px-8">
                <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="inline-block px-6 py-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all rounded-full font-semibold">
                    Let's Talk
                </a>
            </div>
        </div>
    </nav>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });
    </script>
