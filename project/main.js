import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import { Navigation } from './src/components/Navigation.js';
import { HomePage } from './src/components/HomePage';
import { AboutPage } from './src/components/AboutPage';
import { ContactPage } from './src/components/ContactPage';
import { Footer } from './src/components/Footer';
import { initMobileMenu } from './src/utils/mobile-menu';
import { initAnimations } from './src/utils/animations';

AOS.init();

// Router function
const router = () => {
  const path = window.location.hash || '#home';
  const contentDiv = document.querySelector('#content');
  
  switch (path) {
    case '#about':
      contentDiv.innerHTML = AboutPage();
      break;
    case '#contact':
      contentDiv.innerHTML = ContactPage();
      break;
    default:
      contentDiv.innerHTML = HomePage();
      initAnimations();
  }
};

// Initialize the main content
document.querySelector('#app').innerHTML = `
  <div class="relative">
    ${Navigation()}
    <div id="content" class="pt-16">
      <!-- Content will be rendered here -->
    </div>
    ${Footer()}
  </div>
`;

// Initialize everything once the page is loaded
window.addEventListener('load', () => {
  initMobileMenu();
  router();
  window.addEventListener('hashchange', router);
});