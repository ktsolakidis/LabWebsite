import {publications} from './data/publications.js'


const publicationsContainer = document.querySelector('#publications--container')


publications.forEach(publication => {
    publicationsContainer.insertAdjacentHTML('beforeend',
    `
    <div class="publication--card hidden">
    <a href=${publication.link} target="_blank" class="publication--title">${publication.title}</a>
    <img src="${publication.img}" alt="Publication Image">
    <div class="rest--info">
      <p class="author">Author: ${publication.author}</p>
      <p class="journal">Journal: ${publication.journal}</p>
      <p class="pages">Pages: ${publication.pages}</p>
      <p class="year">Year: ${publication.year}</p>
    </div>

  </div>
    `)
})
