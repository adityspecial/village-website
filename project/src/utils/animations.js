import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Tree growth animation
  const createTreeBranch = (progress) => {
    const angle = (Math.random() - 0.5) * 60;
    const length = 20 + Math.random() * 30;
    const startY = 150 - progress * 100;
    const endX = 50 + Math.sin(angle * Math.PI / 180) * length;
    const endY = startY - Math.cos(angle * Math.PI / 180) * length;
    return `M50,${startY} Q${endX},${endY} ${endX},${endY}`;
  };

  gsap.to('.tree', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const branches = document.querySelector('.tree-branches');
        if (branches) {
          branches.innerHTML = '';
          const numBranches = Math.floor(progress * 20);
          for (let i = 0; i < numBranches; i++) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', createTreeBranch(i / 20));
            path.setAttribute('stroke', '#2d5a27');
            path.setAttribute('stroke-width', '3');
            path.setAttribute('fill', 'none');
            branches.appendChild(path);
          }
        }
      }
    }
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    counter.textContent = '0';
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        gsap.to({
          val: 0
        }, {
          val: target,
          duration: 2,
          onUpdate: function() {
            counter.textContent = Math.floor(this.targets()[0].val);
          }
        });
      }
    });
  });
}