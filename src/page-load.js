import './style.css';
import Ramen from './ramen-icon.png';
import Logo from './matsuya-logo.gif';

export function pageLoad() {
    // alert('TEST');
    const content = document.createElement('div');
    document.body.appendChild(content);
    const background = document.createElement('div');

    //Navigation bar, or Header
    // const headerBackground = document.createElement('div');
    //                     headerBackground.classList.add('header-bar');

    const matsuyaLogo = new Image();
    matsuyaLogo.src = Logo; 
    matsuyaLogo.classList.add('small-icon')
    const header = document.createElement('div');
    header.classList.add('header-bar');
    header.appendChild(matsuyaLogo);

    const headerSections = document.createElement('div');
    headerSections.classList.add('header-sections');
    const headerMenu = document.createElement('p');
    headerMenu.innerHTML = 'Menu';
    headerSections.appendChild(headerMenu);
    const headerStore = document.createElement('p');
    headerStore.innerHTML = 'Store Locator';
    headerSections.appendChild(headerStore);
    // const headerCompany = document.createElement('p');
    // const headerInvestors = document.createElement('p');
    // const headerFutureDev = document.createElement('p');

    //English menu separator
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator-div');
    const ramenIcon = new Image();
    ramenIcon.src = Ramen;
    ramenIcon.classList.add('small-icon');
    const menuLanguageText = document.createElement('p');
    menuLanguageText.innerHTML = 'English Menu';
    menuLanguageText.classList.add('menu-language-text');

    // //Menu divs
    // const menuContainer = document.createElement('div');
    // const gyumeshi = document.createElement('div');
    // const curry = document.createElement('div');
    // const bbq = document.createElement('div');
    // const setMeal = document.createElement('div');
    // const morningMeal = document.createElement('div');
    // const sideDish = document.createElement('div');
    // const toppings = document.createElement('div');
    // const drinks = document.createElement('div');

    //class lists
    background.classList.add('background');

    // main.appendChild(background);
    content.appendChild(background);
    background.appendChild(header);
    header.append(headerSections);
    separatorDiv.appendChild(ramenIcon);
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);
    return content;
} 