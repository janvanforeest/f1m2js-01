console.log("script is geladen!");

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function zetinfruitla(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetingroentela(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'groen';
    groentevak.appendChild(nieuwElement);
}