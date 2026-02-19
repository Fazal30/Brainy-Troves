<?php
// Services page content
?>

<div class="pt-28 pb-16 min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
        <!-- Header Section -->
        <div class="text-center mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
            </h1>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover our comprehensive range of professional services designed to elevate your career and business success.
            </p>
        </div>

        <!-- Services List -->
        <div class="space-y-20">
            <!-- Executive Placement -->
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12" data-aos="fade-up" data-aos-delay="100">
                <div class="lg:w-2/5 w-full">
                    <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                        <img src="assets/images/exc.jpeg" alt="Executive Placement" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-1/2 space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900">
                        Executive Placement
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Our executive placement services cater to seasoned professionals seeking new challenges and leadership roles. We match top-tier talent with organizations that value expertise and vision.
                    </p>
                </div>
            </div>

            <!-- Graduate Recruitment -->
            <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-12" data-aos="fade-up" data-aos-delay="200">
                <div class="lg:w-2/5 w-full">
                    <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop" alt="Graduate Recruitment" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-1/2 space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900">
                        Graduate Recruitment
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        For fresh graduates eager to launch their careers, we offer tailored recruitment services. We connect emerging talent with opportunities that align with their skills and ambitions.
                    </p>
                </div>
            </div>

            <!-- Career Transition -->
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12" data-aos="fade-up" data-aos-delay="300">
                <div class="lg:w-2/5 w-full">
                    <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Career Transition" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-1/2 space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900">
                        Career Transition Consulting
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        We provide personalized career transition support to ensure smooth and successful shifts in professional paths. Our consultants offer strategic insights and practical advice for every stage of your career journey.
                    </p>
                </div>
            </div>

            <!-- Talent Acquisition -->
            <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-12" data-aos="fade-up" data-aos-delay="400">
                <div class="lg:w-2/5 w-full">
                    <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Talent Acquisition" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-1/2 space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900">
                        Talent Acquisition
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Our talent acquisition services help organizations find the perfect candidates for their needs. We leverage our extensive network and market knowledge to identify individuals who will thrive in dynamic workplaces.
                    </p>
                </div>
            </div>

            <!-- Market Analysis -->
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12" data-aos="fade-up" data-aos-delay="500">
                <div class="lg:w-2/5 w-full">
                    <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" alt="Market Analysis" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-1/2 space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900">
                        Market Trend Analysis
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Stay ahead of industry trends with our comprehensive market analysis. We offer valuable insights to help both candidates and companies make informed decisions about career and organizational growth.
                    </p>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-20 text-center" data-aos="fade-up">
            <div class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Get Started?
                </h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto">
                    Let us help you find the perfect opportunity or the ideal candidate for your organization.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="index.php?page=contactus" class="px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                        Contact Us Today
                    </a>
                    <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-amber-600 transition-colors duration-300">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
