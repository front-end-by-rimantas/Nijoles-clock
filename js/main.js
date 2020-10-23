import { clockData } from './clockData.js';
import { generateClock } from './generateClock.js';

const selector = '.clock';
const clockDOM = document.querySelector(selector);

const HTML = generateClock(clockData);

clockDOM.innerHTML = HTML;



// reikia pakeisti services sekcijos pavadinima i "Mano paslaugos"
const selector1 = 'h2';
const h2DOM = document.querySelector(selector1);
const ttr = 'Mano paslaugos';
h2DOM.innerHTML = ttr;



// keiciam paslaugu pavadinimus
const paslaugos = ['kirpykla', 'pardavimai', 'valymas']

const selector2 = '.service > .title';
const servicesDOM = document.querySelectorAll(selector2);
for (let i = 0; i < servicesDOM.length; i++) {
    const title = servicesDOM[i]
    title.innerText = paslaugos[i]
}