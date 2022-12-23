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

galleryContainer.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();

  const instance = basicLightbox.create(`
 <div class="modal">
  <img src="${original}" width="800" height="600">
</div> `, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})
}
instance.show()




