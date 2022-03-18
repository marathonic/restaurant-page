import menu from "../../src/menu";

export default function clearEverything() {
    
    function empty(element) {
        while(element.firstElementChild) {
            element.firstElementChild.remove();
        }
    }

    let bodi = document.querySelector('body');
    empty(bodi);

}