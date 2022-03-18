import Logo from './matsuya-logo.gif';
import './style.css';

export const header = (() => {
    //the matsuya logo
    const matsuyaLogo = new Image();
    matsuyaLogo.src = Logo; 
    matsuyaLogo.classList.add('small-icon')


    //main header
    const mainHeader = document.createElement('header');
    mainHeader.classList.add('main-header');

    //container
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(matsuyaLogo);

    //navigation bar
    const mainNav = document.createElement('nav');
    mainNav.classList.add('main-nav');
    
    const ulNav = document.createElement('ul');
    ulNav.classList.add('main-nav-list');
    
    const liNavOne = document.createElement('li');
    const menuNav = document.createElement('a');
    menuNav.innerHTML = 'Menu';
    liNavOne.appendChild(menuNav);
    ulNav.appendChild(liNavOne);
    
    const liNavTwo = document.createElement('li');
    const shopNav = document.createElement('a');
    const iconNavTwo = document.createElement('li');

    shopNav.innerHTML = 'Store locator';
    liNavTwo.appendChild(shopNav);
    ulNav.appendChild(liNavTwo);

    
    const liNavThree = document.createElement('li');
    const companyNav = document.createElement('a');
    companyNav.innerHTML = 'Our company';
    liNavThree.appendChild(companyNav);
    ulNav.appendChild(liNavThree);
    
    const liNavFour = document.createElement('li');
    const investorNav = document.createElement('a');
    investorNav.innerHTML = 'Investor information';
    liNavFour.appendChild(investorNav);
    ulNav.appendChild(liNavFour);
    
    mainNav.appendChild(ulNav);
    container.appendChild(mainNav);

    return {
        mainHeader,
        container,
    };

});

// export function makeHeader() {
    //we're going to call this function inside of each page
    // e.g: storeLocator(){ makeHeader() }
    //make sure to not import the logo from all other func

    

// }