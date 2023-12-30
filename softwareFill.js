import { softwares } from "./data/softwares.js";

const softwaresContainer = document.querySelector('#software--container')



softwares.forEach(soft => {

    softwaresContainer.insertAdjacentHTML('beforeend',
        `<div class="software--card hidden">
        <img src="./images/software/${soft.img}" alt="image">
            <p class="title">${soft.title}</p>
            <p class="text">${soft.text}
            </p>
        </div>`
    )

})


