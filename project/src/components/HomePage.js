export function HomePage() {
  return `
   
    <header class="min-h-screen flex items-center justify-center relative">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-6">Village Foundation</h1>
        <p class="text-xl text-warm-700">Nurturing Communities, Growing Together</p>
      </div>
    </header>

    <section id="programs" class="py-24 px-8">
      <h2 class="text-4xl text-center mb-12">Our Programs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="program-card" data-aos="fade-up">
          <h3 class="text-2xl mb-4">Sustainable Farming</h3>
          <p>Empowering farmers with modern techniques while preserving traditional wisdom.</p>
        </div>
        <div class="program-card" data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-2xl mb-4">Rural Education</h3>
          <p>Building bright futures through quality education and skill development.</p>
        </div>
        <div class="program-card" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl mb-4">Artisan Support</h3>
          <p>Preserving cultural heritage by supporting local artisans and craftspeople.</p>
        </div>
      </div>
    </section>

    <section id="stats" class="py-24 bg-warm-50 px-8">
      <h2 class="text-4xl text-center mb-12">Our Impact</h2>
      <div class="stats-container">
        <div class="stat-item" data-aos="zoom-in">
          <span class="text-4xl font-bold counter">10000</span>
          <span class="text-lg">Trees Planted</span>
        </div>
        <div class="stat-item" data-aos="zoom-in" data-aos-delay="100">
          <span class="text-4xl font-bold counter">500</span>
          <span class="text-lg">Students Educated</span>
        </div>
        <div class="stat-item" data-aos="zoom-in" data-aos-delay="200">
          <span class="text-4xl font-bold counter">200</span>
          <span class="text-lg">Women Entrepreneurs</span>
        </div>
      </div>
    </section>

    <section id="newsletter" class="py-24 px-8">
      <div class="newsletter-form">
        <h2 class="text-3xl mb-6 text-center">Join Our Newsletter</h2>
        <form class="space-y-4">
          <input type="email" placeholder="Enter your email" class="w-full p-3 rounded border border-warm-300 focus:border-warm-500 outline-none"/>
          <button type="submit" class="w-full bg-warm-600 text-white py-3 rounded hover:bg-warm-700 transition-colors">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}