document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#toggle');
  const nav = document.querySelectorAll('#nav div');

  toggle.addEventListener('click', () => {
    nav.forEach((value, key) => {
      value.classList.toggle('toggling');
    });
  });
});
