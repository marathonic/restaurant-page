import './style.css';
import Ramen from './ramen-icon.png';
import Gyumeshi from './img/menu-eng/gyumeshi.jpg';
import Curry from './img/menu-eng/curry.png';
import Bowl from './img/menu-eng/bowl.png';
import SetMeals from './img/menu-eng/set-meals.png';
import MorningMeals from './img/menu-eng/morning-meals.png';
import SideDishes from './img/menu-eng/side-dishes.png';
import Toppings from './img/menu-eng/toppings.png';
import Drinks from './img/menu-eng/drinks.png';

import EngMenu from './img/menu-select/en.jpg';
import KorMenu from './img/menu-select/kor.jpg';

//pageLoad contains our menu! We'll rename it menu() later;


export default function pageLoad() {
    // alert('TEST');
    const content = document.createElement('div');
    document.body.appendChild(content);


    const bgLayout = document.querySelector('#bg-layout');
    const background = document.createElement('div');


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
    const menuContainer = document.createElement('div');


    const menuLanguages = document.createElement('div');
    const menuCenterContainer = document.createElement('div');
    menuCenterContainer.classList.add('menu-center-container');
    
    const menuDiv = document.createElement('div');
    const menuCurrentLang = document.createElement('div');
    const menuGridItems = document.createElement('div');

    menuContainer.classList.add('menu-container');
    menuDiv.classList.add('menu-grid-bg');
    menuContainer.appendChild(menuDiv);
    const menuRightHalf = document.createElement('div');
    menuRightHalf.classList.add('menu-right');
    menuDiv.appendChild(menuRightHalf);

    const menuLefttHalf = document.createElement('div');
    menuLefttHalf.classList.add('menu-left');
    const englishMenu = new Image();
    englishMenu.src = EngMenu;

    const koreanMenu = new Image();
    koreanMenu.src = KorMenu;
    
    const spanishMenu = document.createElement('div');

    menuLefttHalf.appendChild(englishMenu);
    menuLefttHalf.appendChild(koreanMenu);
    menuLefttHalf.appendChild(spanishMenu);
    menuDiv.appendChild(menuLefttHalf);

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

    const gyumeshi = new Image();
    gyumeshi.src = Gyumeshi;
    
    //TRYING OUT SECOND IMG METHOD
    const curry = new Image();
    curry.src = Curry;

    //THIS SECOND WAY LOOKS A LOT BETTER!


    const bowl = new Image();
    bowl.src = Bowl;
    const setMeal = new Image();
    setMeal.src = SetMeals;
    const morningMeal = new Image();
    morningMeal.src = MorningMeals;

    const sideDishes = new Image();
    sideDishes.src = SideDishes;
    const toppings = new Image();
    toppings.src = Toppings;

    const drinks = new Image();
    drinks.src = Drinks;

    // APPEND DISHES TO FOODGRID!
    foodGridInner.appendChild(gyumeshi);
    foodGridInner.appendChild(curry);
    foodGridInner.appendChild(bowl);
    foodGridInner.appendChild(setMeal);
    foodGridInner.appendChild(morningMeal);
    foodGridInner.appendChild(sideDishes);
    foodGridInner.appendChild(toppings);
    foodGridInner.appendChild(drinks);
    foodGridOuter.appendChild(foodGridInner);
    menuRightHalf.appendChild(foodGridOuter);


    //class lists
    background.classList.add('background-invisible');
    background.id = 'background-grid'


    // main.appendChild(background);
    content.appendChild(background);
    // container.append(containerSections);
    separatorDiv.appendChild(ramenIcon);
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);

    
    content.appendChild(menuContainer);
  
    const header = document.querySelector('#m-header');
    header.appendChild(backgroundLayout);


    background.appendChild(content);
    // bgLayout.appendChild(content);  
    bgLayout.appendChild(background)

    return bgLayout;
} 