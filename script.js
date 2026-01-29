(() => {
  const menu = document.getElementById('menu');
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll('li'));
  let current = 0;

  function setActive(index) {
    items.forEach(li => li.classList.remove('active'));
    items[index].classList.add('active');
    current = index;
  }

  setActive(0);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((current + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((current - 1 + items.length) % items.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const link = items[current].querySelector('a');
      if (link) link.click();
    }
  });
})();
