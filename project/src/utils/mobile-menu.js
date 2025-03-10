export function initMobileMenu() {
  const button = document.querySelector('#mobile-menu-button');
  const menu = document.querySelector('#mobile-menu');
  
  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}