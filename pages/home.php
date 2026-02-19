<?php
// Home page content
?>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <div class="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12" data-aos="fade-up">
            <!-- Text Content -->
            <div class="w-full md:w-1/2 space-y-8">
                <div class="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full" data-aos="fade-up" data-aos-delay="100">
                    <span class="text-amber-500 font-medium">Welcome to Brainy Troves</span>
                </div>

                <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight" data-aos="fade-up" data-aos-delay="200">
                    Where Talent <span class="text-amber-500">Meets</span> Opportunity
                </h1>

                <p class="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="300">
                    Unlock your career potential with our bespoke consultancy services.
                    At Brainy Troves Consultancy, we don't just find jobs – we craft
                    success stories that transform careers and businesses.
                </p>

                <div class="flex gap-4 items-center pt-4" data-aos="fade-up" data-aos-delay="400">
                    <a href="index.php?page=services" class="group flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-semibold rounded-full transition-all duration-300 hover:bg-amber-600 hover:scale-105">
                        Explore Services
                        <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="px-8 py-4 border-2 border-white/30 hover:border-amber-500 text-white hover:text-amber-500 font-semibold rounded-full transition-colors duration-300">
                        Contact Us
                    </a>
                </div>
            </div>

            <!-- Stats/Features -->
            <div class="w-full md:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="500">
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/15 hover:border-amber-500 hover:scale-105">
                    <i class="fas fa-bullseye text-amber-500 w-8 h-8 mb-3"></i>
                    <h3 class="text-3xl font-bold text-amber-500 mb-2">500+</h3>
                    <p class="text-gray-300 text-center">Successful Placements</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/15 hover:border-amber-500 hover:scale-105">
                    <i class="fas fa-users text-amber-500 w-8 h-8 mb-3"></i>
                    <h3 class="text-3xl font-bold text-amber-500 mb-2">50+</h3>
                    <p class="text-gray-300 text-center">Corporate Partners</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/15 hover:border-amber-500 hover:scale-105">
                    <i class="fas fa-award text-amber-500 w-8 h-8 mb-3"></i>
                    <h3 class="text-3xl font-bold text-amber-500 mb-2">95%</h3>
                    <p class="text-gray-300 text-center">Client Satisfaction</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/15 hover:border-amber-500 hover:scale-105">
                    <i class="fas fa-chart-line text-amber-500 w-8 h-8 mb-3"></i>
                    <h3 class="text-3xl font-bold text-amber-500 mb-2">24/7</h3>
                    <p class="text-gray-300 text-center">Support Available</p>
                </div>
            </div>
        </div>

        <!-- Animated decorative elements -->
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-amber-500 font-medium mb-4 block">What We Offer</span>
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Services
                </h1>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Discover our comprehensive range of consultancy services designed to elevate your career and business success.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <span class="text-4xl mb-4">👔</span>
                    <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                        Executive Placement
                    </h4>
                    <p class="text-gray-600">
                        Strategic placement of top-tier executives in leading organizations.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <span class="text-4xl mb-4">🎓</span>
                    <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                        Graduate Recruitment
                    </h4>
                    <p class="text-gray-600">
                        Connecting fresh talent with promising career opportunities.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <span class="text-4xl mb-4">🔄</span>
                    <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                        Career Transition
                    </h4>
                    <p class="text-gray-600">
                        Guiding professionals through successful career transitions.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <span class="text-4xl mb-4">🎯</span>
                    <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                        Talent Acquisition
                    </h4>
                    <p class="text-gray-600">
                        Comprehensive recruitment solutions for businesses.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="500">
                    <span class="text-4xl mb-4">📊</span>
                    <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                        Market Analysis
                    </h4>
                    <p class="text-gray-600">
                        In-depth market research and industry trend analysis.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-amber-500 font-medium mb-4 block">Why Choose Us</span>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Core Strengths
                </h2>
                <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                    At Brainy Troves, we stand out by offering unparalleled expertise,
                    personalized solutions, and a commitment to excellence. Our team of
                    seasoned professionals brings a wealth of experience to every
                    project, ensuring that you receive the best advice and support
                    tailored to your unique needs.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Expertise You Can Trust" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 bg-white">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                            Expertise You Can Trust
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            With years of industry experience, our consultants bring deep knowledge and proven strategies to help you succeed.
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Personalized Approach" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 bg-white">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                            Personalized Approach
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            We believe in a personalized approach to every project, crafting customized plans that align perfectly with your vision.
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" alt="Commitment to Excellence" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 bg-white">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                            Commitment to Excellence
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Excellence is at the core of everything we do, ensuring the highest standards of professionalism and integrity.
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop" alt="Client-Centric Focus" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 bg-white">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                            Client-Centric Focus
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Your success is our priority. We build strong relationships with our clients, offering continuous support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Clients Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-amber-500 font-medium mb-4 block">Our Partners</span>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Trusted by Leading Organizations
                </h2>
                <p class="text-gray-600 max-w-3xl mx-auto">
                    We're proud to work with industry leaders who trust us with their most important talent acquisition needs.
                </p>
            </div>
            
            <!-- Client logos would go here -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
                <div class="flex justify-center items-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span class="text-gray-400 font-semibold">Client Logo</span>
                </div>
            </div>
        </div>
    </section>
</div>
