




//FIRST, ATTACH IDs TO HEADER ANCHORS!
// Then
// import menu from menu.js
// import storeLocator from storeLocator.js , etc...
//
//then code page-load.js, IT SHOULD LOOK SOMETHING LIKE THIS:

function pageLoad() {
    addEventListener('DOM-load', menu());

    //each anchor
    const menu = document.querySelector('#menu-anchor')
    const storeLocator = document.querySelector('#store-locator')

    menu.addEventListener('click', menu())
    storeLocator.addEventListener('click', storeLocator());

    //etc...

    //<<>>
    
    //OR maybe we can do something like:
    const mainNavList = document.querySelector('#main-nav-list')

    mainNavList.addEventListener('click', function(e){
        switch (e.target) {
            case 'menu':
                menu() //loads the menu webpage;
                break;

            case 'store-locator':
                storeLocator() //loads the store locator page;
                break;

                //etc..
        
            default:
                break;
        }
    })
}


export default function menu() {
    //paste all of the menu website here
}