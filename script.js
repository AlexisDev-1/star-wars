const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// SPA navigation
document.querySelectorAll('.menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const sectionId = btn.getAttribute('data-section');
    document.querySelectorAll('.seccion').forEach(sec => {
      sec.classList.remove('visible');
    });
    document.getElementById(sectionId).classList.add('visible');
    menu.classList.remove('open');
  });
});
