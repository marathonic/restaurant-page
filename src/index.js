import menu from './page-load.js';
import storeLocator from './storeLocator.js';
import clearBody from './makeBody.js';

window.addEventListener('DOMContentLoaded', menu());

document.querySelector('#store-locator-anchor')
        .addEventListener('click', function(){
            clearBody();
            storeLocator();
        });

document.querySelector('#menu-anchor')
        .addEventListener('click', function(){
            clearBody();
            menu();
        })

// !!!!!! THIS GOES BEFORE ANYTHING ELSE:
//Load initial landing page, our Menu
// document.addEventListener('DOMContentLoaded', menu());
