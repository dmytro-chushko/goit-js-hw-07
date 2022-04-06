import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function rendersTheGallery(gallary) {
  const renderingElements = gallary.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`;
  }).join('');
  galleryContainer.innerHTML = renderingElements;
};

function takesOriginalImg(e) {
  e.preventDefault();
  const originalImage = e.target.dataset.source;
  return originalImage;
};

function showesOriginalImg(container) {
  container.addEventListener('click', (event) => {
    const instance = basicLightbox.create(`
        <img src="${takesOriginalImg(event)}" width="800" height="600">
    `);
    instance.show();
    closeByEscPressing(instance);
  });
};

function onPressingEsc(e, instance) {
  if (e.key === 'Escape' && basicLightbox.visible()) {
    instance.close();
    console.log('allready');
  };
};

function closeByEscPressing(instance) {
  document.addEventListener('keydown', (event) => onPressingEsc(event, instance), {once: true});
};

rendersTheGallery(galleryItems);
showesOriginalImg(galleryContainer);


