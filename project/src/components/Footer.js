export function Footer() {
  return `
    <footer class="footer">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl mb-4">Contact Us</h3>
            <p>Email: info@villagefoundation.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 class="text-2xl mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-warm-300">Facebook</a>
              <a href="#" class="hover:text-warm-300">Twitter</a>
              <a href="#" class="hover:text-warm-300">Instagram</a>
            </div>
          </div>
          <div>
            <h3 class="text-2xl mb-4">Location</h3>
            <p>123 Village Road</p>
            <p>Rural District, Country</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}