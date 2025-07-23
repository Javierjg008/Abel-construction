// Add .visible to .scroll-animate elements when scrolled into view
function onScrollAnimate() {
  document.querySelectorAll('.scroll-animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', onScrollAnimate);
