import './style-store-locator.css';
import Logo from './matsuya-logo.gif';

export default function storeLocator() {

    
    const content = document.createElement('div');
    document.body.appendChild(content);
    const background = document.createElement('div');

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
    menuNav.id = 'menu-anchor';

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

    //English menu separator
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator-div');
    const menuLanguageText = document.createElement('p');
    menuLanguageText.innerHTML = 'Store locations';
    menuLanguageText.classList.add('menu-language-text');

    // //Menu divs
    const menuContainer = document.createElement('div');


    const menuCenterContainer = document.createElement('div');
    menuCenterContainer.classList.add('menu-center-container');
    
    const storesDiv = document.createElement('div');

    menuContainer.classList.add('menu-container');
    storesDiv.classList.add('stores-grid-bg');
    menuContainer.appendChild(storesDiv);
    const menuRightHalf = document.createElement('div');
    menuRightHalf.classList.add('menu-right');


    //Selected menu language 
    const selectedMenuLanguage = document.createElement('div');
    selectedMenuLanguage.classList.add('selected-menu-lang');
    selectedMenuLanguage.innerHTML = 'English Menu';
    menuRightHalf.appendChild(selectedMenuLanguage);  
    
    //FOOD GRID! 
    const foodGridInner = document.createElement('div');
    foodGridInner.classList.add('food-grid-inner');

    const foodGridOuter = document.createElement('div');
    foodGridOuter.classList.add('food-grid-outer');

    background.classList.add('background');

    content.appendChild(background);
    background.appendChild(mainHeader);
    mainHeader.appendChild(container);
    
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);
    background.appendChild(menuContainer);
    
    return background;

}
