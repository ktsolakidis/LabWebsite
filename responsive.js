const header = document.querySelector('#header')
const headerUl = document.querySelector('#header ul')
const headerLi = document.querySelectorAll('#header li')
const menuBar = document.querySelector('#menu--bar')
const body = document.querySelector('body')



let menuIsOpen = false;





const toggleMenu = () => {


    if(!menuIsOpen){

         
    headerUl.style.display = 'flex'
    headerUl.style['flex-direction']= 'column'
    header.style.display = 'flex'
    header.style['flex-direction']= 'column'
    body.style.overflow = 'hidden'
    headerUl.style.height = '50vh'
    header.style.height = '50vh'
    header.style['z-index'] = '2'

    menuIsOpen = true;

    }else{
        headerUl.style.display = 'none'
        headerUl.style.height = '3rem'
        header.style.height = '3rem'


        menuIsOpen = false;
   

    }


    
   



}







if (window.innerWidth < 600) {

    for(let i=0;i<headerLi.length; i++){
        headerLi[i].addEventListener('click',toggleMenu)
     }

    
    menuBar.addEventListener('click', toggleMenu)

}


