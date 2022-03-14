import './style.css';
import Icon from './ryuzaki.jpg';

function component(){
    // const element = document.createElement('div');
    const element = document.querySelector('#content');

    element.innerHTML = 'Hello';
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}
console.log('Hello world');
document.body.appendChild(component());