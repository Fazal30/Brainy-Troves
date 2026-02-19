    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 to-black text-white mt-8 md:mt-0 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div class="relative flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 gap-12">
            <div class="w-full md:w-1/3 space-y-6" data-aos="fade-up">
                <h1 class="text-3xl md:text-4xl font-bold text-amber-500">
                    <?php echo SITE_NAME; ?>
                </h1>
                <p class="text-gray-300 leading-relaxed">
                    We provide expert consultancy services, helping businesses and individuals achieve their goals with personalized, professional advice.
                </p>
                <div class="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-amber-500 transition-colors">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-amber-500 transition-colors">
                        <i class="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="text-gray-400 hover:text-amber-500 transition-colors">
                        <i class="fab fa-instagram text-2xl"></i>
                    </a>
                </div>
            </div>

            <div class="w-full md:w-1/4 space-y-6" data-aos="fade-up" data-aos-delay="100">
                <h2 class="text-xl font-semibold text-amber-500">Services</h2>
                <nav class="flex flex-col gap-3">
                    <a href="index.php?page=services" class="text-gray-300 hover:text-amber-500 transition-colors duration-300 block">Executive Placement</a>
                    <a href="index.php?page=services" class="text-gray-300 hover:text-amber-500 transition-colors duration-300 block">Graduate Recruitment</a>
                    <a href="index.php?page=services" class="text-gray-300 hover:text-amber-500 transition-colors duration-300 block">Career Transition Consulting</a>
                    <a href="index.php?page=services" class="text-gray-300 hover:text-amber-500 transition-colors duration-300 block">Talent Acquisition</a>
                    <a href="index.php?page=services" class="text-gray-300 hover:text-amber-500 transition-colors duration-300 block">Market Trend Analysis</a>
                </nav>
            </div>

            <div class="w-full md:w-1/4 space-y-6" data-aos="fade-up" data-aos-delay="200">
                <h2 class="text-xl font-semibold text-amber-500">Contact Us</h2>
                <nav class="flex flex-col gap-4">
                    <a href="mailto:<?php echo SITE_EMAIL; ?>" class="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors duration-300">
                        <i class="fas fa-envelope"></i>
                        <span><?php echo SITE_EMAIL; ?></span>
                    </a>
                    <a href="tel:<?php echo CONTACT_PHONE; ?>" class="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors duration-300">
                        <i class="fas fa-phone"></i>
                        <span><?php echo CONTACT_PHONE; ?></span>
                    </a>
                </nav>
            </div>
        </div>
        
        <div class="relative border-t border-gray-800 mt-12 py-6 text-center text-gray-400" data-aos="fade-up" data-aos-delay="300">
            <p>© 2024 Brainy Troves. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
