import { projects } from './data/projects.js'

const projectsContainer = document.querySelector('#projects--container')



projects.forEach(project => {

    projectsContainer.insertAdjacentHTML('beforeend',
        `
    <div class="project--card hidden">
    <img src="./images/${project.image}" alt="image">


    <a href="/projects_pages/${project.html}"  class="button">${project.description}</a>
    </div>
    `
    )
});