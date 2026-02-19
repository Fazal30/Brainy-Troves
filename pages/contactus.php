<?php
// Include configuration
require_once '../config.php';

// Contact form handling
$message = '';
$error = '';

if ($_POST) {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message_text = trim($_POST['message'] ?? '');
    
    // CSRF Protection (basic)
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== session_id()) {
        $error = 'Security token mismatch. Please try again.';
    }
    // Basic validation
    elseif (empty($name) || empty($email) || empty($message_text)) {
        $error = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email address.';
    } elseif (strlen($message_text) < 10) {
        $error = 'Please provide a more detailed message (at least 10 characters).';
    } else {
        // Send email
        $to = CONTACT_EMAIL;
        $email_subject = 'Contact Form: ' . ($subject ?: 'General Inquiry');
        $email_body = "New contact form submission:\n\n";
        $email_body .= "Name: " . htmlspecialchars($name) . "\n";
        $email_body .= "Email: " . htmlspecialchars($email) . "\n";
        $email_body .= "Phone: " . htmlspecialchars($phone) . "\n";
        $email_body .= "Subject: " . htmlspecialchars($subject) . "\n\n";
        $email_body .= "Message:\n" . htmlspecialchars($message_text) . "\n\n";
        $email_body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
        $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
        
        $headers = "From: " . SITE_EMAIL . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        if (mail($to, $email_subject, $email_body, $headers)) {
            $message = 'Thank you for your message! We will get back to you within 24 hours.';
            // Clear form data
            $name = $email = $phone = $subject = $message_text = '';
        } else {
            $error = 'Sorry, there was an error sending your message. Please try again later or contact us directly.';
        }
    }
}

// Start session for CSRF protection
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>

<div class="pt-28 pb-16 min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
        <!-- Header Section -->
        <div class="text-center mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Us
            </h1>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                Get in touch with us to discuss your career goals or business needs. We're here to help you succeed.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <?php if ($message): ?>
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                        <?php echo htmlspecialchars($message); ?>
                    </div>
                <?php endif; ?>
                
                <?php if ($error): ?>
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <?php echo htmlspecialchars($error); ?>
                    </div>
                <?php endif; ?>
                
                <form method="POST" action="">
                    <input type="hidden" name="csrf_token" value="<?php echo session_id(); ?>">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" id="name" name="name" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                   value="<?php echo htmlspecialchars($_POST['name'] ?? ''); ?>">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                   value="<?php echo htmlspecialchars($_POST['email'] ?? ''); ?>">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                   value="<?php echo htmlspecialchars($_POST['phone'] ?? ''); ?>">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select id="subject" name="subject" 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                                <option value="">Select a subject</option>
                                <option value="Executive Placement" <?php echo ($_POST['subject'] ?? '') == 'Executive Placement' ? 'selected' : ''; ?>>Executive Placement</option>
                                <option value="Graduate Recruitment" <?php echo ($_POST['subject'] ?? '') == 'Graduate Recruitment' ? 'selected' : ''; ?>>Graduate Recruitment</option>
                                <option value="Career Transition" <?php echo ($_POST['subject'] ?? '') == 'Career Transition' ? 'selected' : ''; ?>>Career Transition</option>
                                <option value="Talent Acquisition" <?php echo ($_POST['subject'] ?? '') == 'Talent Acquisition' ? 'selected' : ''; ?>>Talent Acquisition</option>
                                <option value="Market Analysis" <?php echo ($_POST['subject'] ?? '') == 'Market Analysis' ? 'selected' : ''; ?>>Market Analysis</option>
                                <option value="General Inquiry" <?php echo ($_POST['subject'] ?? '') == 'General Inquiry' ? 'selected' : ''; ?>>General Inquiry</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea id="message" name="message" rows="6" required 
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"><?php echo htmlspecialchars($_POST['message'] ?? ''); ?></textarea>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8" data-aos="fade-up" data-aos-delay="200">
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-phone text-amber-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Phone</h3>
                                <p class="text-gray-600"><?php echo CONTACT_PHONE; ?></p>
                                <a href="tel:<?php echo CONTACT_PHONE; ?>" class="text-amber-600 hover:text-amber-700">Call Now</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-envelope text-amber-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Email</h3>
                                <p class="text-gray-600"><?php echo SITE_EMAIL; ?></p>
                                <a href="mailto:<?php echo SITE_EMAIL; ?>" class="text-amber-600 hover:text-amber-700">Send Email</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                <i class="fab fa-whatsapp text-amber-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">WhatsApp</h3>
                                <p class="text-gray-600"><?php echo CONTACT_PHONE; ?></p>
                                <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="text-amber-600 hover:text-amber-700">Chat Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
                    <h3 class="text-xl font-bold mb-4">Why Choose Brainy Troves?</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-check-circle"></i>
                            <span>500+ Successful Placements</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-check-circle"></i>
                            <span>95% Client Satisfaction Rate</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-check-circle"></i>
                            <span>24/7 Support Available</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-check-circle"></i>
                            <span>Personalized Career Guidance</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
