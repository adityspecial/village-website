import { initMobileMenu } from '../utils/mobile-menu';

export function Navigation() {
  return `
    <nav class="fixed top-0 left-0 right-0 bg-warm-800 bg-opacity-95 text-warm-50 z-50 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a href="#home" class="text-2xl font-display font-bold">Village Foundation</a>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="hover:text-warm-300 transition-colors">Home</a>
            <a href="#about" class="hover:text-warm-300 transition-colors">About Us</a>
            <a href="#contact" class="hover:text-warm-300 transition-colors">Contact</a>
          </div>
          <button class="md:hidden p-2" id="mobile-menu-button">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <div class="md:hidden hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" class="block px-3 py-2 hover:bg-warm-700 rounded">Home</a>
            <a href="#about" class="block px-3 py-2 hover:bg-warm-700 rounded">About Us</a>
            <a href="#contact" class="block px-3 py-2 hover:bg-warm-700 rounded">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}