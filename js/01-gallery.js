import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

// Виконуй це завдання у файлах 01 - gallery.html і 01 - gallery.js.
// Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву 
// даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url 
// великого зображення.
// Підключення скрипту і стилів бібліотеки модального 
// вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай 
// у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні 
// перед відкриттям.Використовуй готову розмітку модального вікна із
//  зображенням з прикладів бібліотеки basicLightbox.
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source 
// на елементі < img >, і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи,
//     крім тих, що містяться в цьому шаблоні.

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

  if (!evt.target.classList.contains('gallery__link')) {
    return;
  }
  // console.log(evt.target);

  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)
instance.show()
}
console.log(onclick);

