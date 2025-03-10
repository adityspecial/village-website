export function AboutPage() {
  return `
    <div class="container mx-auto px-4 py-24">
      <h1 class="text-5xl font-bold mb-12 text-center">About Us</h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="mb-12" data-aos="fade-up">
          <h2 class="text-3xl mb-6">Our Story</h2>
          <p class="text-lg mb-6">Village Foundation was established in 2020 with a vision to transform rural communities while preserving their unique cultural heritage. We believe in sustainable development that empowers local communities and creates lasting positive change.</p>
          <p class="text-lg">Our approach combines traditional wisdom with modern innovation, ensuring that development is both effective and culturally sensitive.</p>
        </div>

        <div class="mb-12" data-aos="fade-up">
          <h2 class="text-3xl mb-6">Our Mission</h2>
          <p class="text-lg">To empower rural communities through sustainable development initiatives that preserve cultural heritage while embracing modern innovation.</p>
        </div>

        <div class="mb-12" data-aos="fade-up">
          <h2 class="text-3xl mb-6">Our Values</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-warm-100 p-6 rounded-lg">
              <h3 class="text-xl mb-3">Sustainability</h3>
              <p>We prioritize long-term solutions that benefit both communities and the environment.</p>
            </div>
            <div class="bg-warm-100 p-6 rounded-lg">
              <h3 class="text-xl mb-3">Community-First</h3>
              <p>Local communities are at the heart of every decision we make.</p>
            </div>
            <div class="bg-warm-100 p-6 rounded-lg">
              <h3 class="text-xl mb-3">Innovation</h3>
              <p>We embrace new technologies and methods while respecting traditional practices.</p>
            </div>
            <div class="bg-warm-100 p-6 rounded-lg">
              <h3 class="text-xl mb-3">Cultural Preservation</h3>
              <p>We work to preserve and celebrate local traditions and heritage.</p>
            </div>
          </div>
        </div>

        <div class="mb-12" data-aos="fade-up">
          <h2 class="text-3xl mb-6">Our Team</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-warm-200"></div>
              <h3 class="text-xl mb-2">Sarah Johnson</h3>
              <p class="text-warm-700">Executive Director</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-warm-200"></div>
              <h3 class="text-xl mb-2">Michael Chen</h3>
              <p class="text-warm-700">Program Director</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-warm-200"></div>
              <h3 class="text-xl mb-2">Priya Patel</h3>
              <p class="text-warm-700">Community Relations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}