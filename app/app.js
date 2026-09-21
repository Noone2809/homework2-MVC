import { changePage } from '../model/model.js';


function initListener() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let btnID = event.currentTarget.id;
            changePage(btnID);
        })
    })
}


initListener();