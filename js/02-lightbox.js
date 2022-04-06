import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function rendersTheGallery(gallary) {
  const renderingElements = gallary.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="" title="${description}"/>
          </a>`;
  }).join('');
  galleryContainer.innerHTML = renderingElements;
};

function openLightbox(container) {
  container.addEventListener('click', (e) => e.preventDefault());
}

rendersTheGallery(galleryItems);
new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250 });
openLightbox(galleryContainer);
