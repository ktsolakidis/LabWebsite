import { pictures } from "./data/gallery.js"

const galleryContainer = document.querySelector('#gallery--container')


pictures.forEach(pic => {



    galleryContainer.insertAdjacentHTML('beforeend',
    `

    <img class="hidden" src="/images/gallery/${pic.img}" alt="${pic.title}">
    `
    )
})