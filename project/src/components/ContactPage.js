export function ContactPage() {
  return `
    <div class="container mx-auto px-4 py-24">
      <h1 class="text-5xl font-bold mb-12 text-center">Contact Us</h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 class="text-3xl mb-6">Get in Touch</h2>
            <form class="space-y-6">
              <div>
                <label class="block text-warm-700 mb-2" for="name">Name</label>
                <input type="text" id="name" class="w-full p-3 rounded border border-warm-300 focus:border-warm-500 outline-none" required>
              </div>
              <div>
                <label class="block text-warm-700 mb-2" for="email">Email</label>
                <input type="email" id="email" class="w-full p-3 rounded border border-warm-300 focus:border-warm-500 outline-none" required>
              </div>
              <div>
                <label class="block text-warm-700 mb-2" for="message">Message</label>
                <textarea id="message" rows="5" class="w-full p-3 rounded border border-warm-300 focus:border-warm-500 outline-none" required></textarea>
              </div>
              <button type="submit" class="w-full bg-warm-600 text-white py-3 rounded hover:bg-warm-700 transition-colors">Send Message</button>
            </form>
          </div>

          <div data-aos="fade-left">
            <h2 class="text-3xl mb-6">Visit Us</h2>
            <div class="bg-warm-100 p-6 rounded-lg mb-6">
              <h3 class="text-xl mb-3">Main Office</h3>
              <p class="mb-2">123 Village Road</p>
              <p class="mb-2">Rural District, Country</p>
              <p class="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@villagefoundation.org</p>
            </div>

            <h2 class="text-3xl mb-6">Office Hours</h2>
            <div class="bg-warm-100 p-6 rounded-lg">
              <p class="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}