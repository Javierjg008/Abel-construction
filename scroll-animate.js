document.addEventListener("DOMContentLoaded", function() {
  const elems = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.13 });

  elems.forEach(elem => observer.observe(elem));
});
