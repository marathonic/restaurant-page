import './style.css';
import './style-store-locator.css';
import pageLoad from './page-load.js';
import storeLocator from './storeLocator.js';
import clearBody from './makeBody';
import createHeader from './createHeader';
import createBackground from './createBackground';

//ANOTHER OPTION WOULD BE TO APPEND THE HEADER FIRST:
//APPEND THE BACKGROUND 
//THEN THE HEADER  

window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(createHeader());
    document.body.appendChild(createBackground());
    pageLoad();
})

// window.addEventListener('DOMContentLoaded', pageLoad());

// document.querySelector('#store-locator-anchor')
//         .addEventListener('click', function(){
//             // clearBody();
//             storeLocator();
//         });

// document.querySelector('#menu-anchor')
//         .addEventListener('click',function(){
//             // clearBody();
//             pageLoad();
//         })

// !!!!!! THIS GOES BEFORE ANYTHING ELSE:
//Load initial landing page, our Menu
// document.addEventListener('DOMContentLoaded', menu());
