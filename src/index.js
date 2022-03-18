import './style.css';
import './style-store-locator.css';
import pageLoad from './page-load.js';
import storeLocator from './storeLocator.js';
import clearBody from './makeBody';

window.addEventListener('DOMContentLoaded', pageLoad());

document.querySelector('#store-locator-anchor')
        .addEventListener('click', function(){
            // clearBody();
            storeLocator();
        });

document.querySelector('#menu-anchor')
        .addEventListener('click',function(){
            // clearBody();
            pageLoad();
        })

// !!!!!! THIS GOES BEFORE ANYTHING ELSE:
//Load initial landing page, our Menu
// document.addEventListener('DOMContentLoaded', menu());
