import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source ="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);
console.log(markup);


galleryContainer.addEventListener('click', onClickImg);

function onClickImg(event) {
  event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') return;
  console.log(event.target)
  
    const item = event.target;
    onClickImageShow(item.dataset.source, item.alt);
}
function onClickImageShow(imgSrc, imgAlt) {
    const modal = basicLightbox.create(
        `<img src="${imgSrc}" alt="${imgAlt}">`,
        {
        onShow:() => window.addEventListener('keydown',  closeByESC),
        onClose: () => window.removeEventListener('keydown', closeByESC),
      });
  
  function closeByESC(evt) {
    if (evt.code === 'Escape') {
      modal.close();
    }
  }
    modal.show();
    console.log(modal)
}