


import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryBox = document.querySelector('.gallery');

const createGalleryIteam = function (array) {
    return array.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`
    }).join('');
    
}

const gallery = createGalleryIteam(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', gallery);

new SimpleLightbox('.gallery a', {
    captionsType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});

galleryBox.addEventListener('click', showOriginalImage);

function showOriginalImage(evn) {
    evn.preventDefault();

    if (!evn.target.classList.contains('gallery__image')) {
        return;
    }


    

}
