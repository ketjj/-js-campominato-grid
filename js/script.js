// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const playButton = document.getElementById('btn-output').addEventListener('click', init);

//console.log(container);

//init(container);

function init(){

const container = document.querySelector('.main_container');

const select = document.getElementById('inputGroupSelect04');
let value = select.options[select.selectedIndex].value;
console.log(value); // en
create(container, parseInt(value))
}
 
function create(element, numLoops){
  console.log("create");
  for(let i = 0; i < numLoops; i++){
    createBox(element, numLoops)
  }
}

function createBox(element, numLoops) {
  const box = document.createElement('div');
  if( numLoops === 100)
       box.className = 'box-veryhard';
  else if( numLoops === 81)
       box.className = 'box-hard';
  else if(numLoops === 49)
       box.className = 'box-easy'; 
  element.append(box);
}







