import { news } from "./data/news.js"


const newsContainer = document.querySelector('#news--container')




news.forEach( newsUnit => {

    newsContainer.insertAdjacentHTML('beforeend',
    `<div class="news--card hidden">
    ${newsUnit?.image ?
    `<div class="img--div">
        <img src="/images/news/${newsUnit.image}" alt="News image">
    </div>` : ''
    }
    
    <div class="info">
    <p class="title">${newsUnit.title}</p>
    <p class="text">${newsUnit.text}</p>
    <a href="${newsUnit.link}" target="_blank">See article</a>
    </div>
</div>`

    )
})



