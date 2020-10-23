import { clockData } from './clockData.js';
import { generateClock } from './generateClock.js';

const selector = '.clock';
const clockDOM = document.querySelector(selector);

const HTML = generateClock(clockData);

clockDOM.innerHTML = HTML;



// reikia pakeisti services sekcijos pavadinima i "Mano paslaugos"