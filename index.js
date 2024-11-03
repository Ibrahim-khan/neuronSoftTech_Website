// Counter animation
document.querySelectorAll('[data-count]').forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText.replace('+', '');

      const speed = 200;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + '+';
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + '+';
      }
    };

    updateCount();
  });