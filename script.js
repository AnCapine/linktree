const bg = document.querySelector('.bg');
const items = document.querySelectorAll('.menu li');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    bg.style.background = getComputedStyle(item).getPropertyValue('--hover-bg').trim();
  });
  item.addEventListener('mouseleave', () => {
    bg.style.background = '';
  });
});
