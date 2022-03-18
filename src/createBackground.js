import './style.css';

//NOTE THAT THIS IS THE GENERAL LAYOUT, THE BASE LAYER
//It contains the header, the background colour and grid
//everything else will be pasted on top, wearing no background.


export default function createBackground() {
    const backgroundLayout = document.createElement('div');
    backgroundLayout.classList.add('background-layout');
    backgroundLayout.id = 'bg-layout';
    const header = document.querySelector('#m-header');
    header.appendChild(backgroundLayout);

    return header;
}