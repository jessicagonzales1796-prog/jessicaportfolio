const lightbox = document.querySelector('#lightbox');
const title = document.querySelector('#art-title');
const artwork = document.querySelector('#large-art');

document.querySelectorAll('[data-art]').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.title;
    artwork.src = button.dataset.art;
    artwork.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});
