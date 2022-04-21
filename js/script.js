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

// svuota container di tutte le celle
while (container.firstChild) {
  container.removeChild(container.lastChild);
}

const select = document.getElementById('inputGroupSelect04');
let value = select.options[select.selectedIndex].value;
console.log(value); 
create(container, parseInt(value))
}
 
function create(element, numLoops){
  console.log("create");
  for(let i = 0; i < numLoops; i++){
    createBox(element, numLoops, i+1)
  }
}

function createBox(element1, numLoops1, num) {
 
  const box = document.createElement('div');
  box.addEventListener('click', function changeColor(){
    box.classList.add('box-clicked');
  })
  box.innerHTML = num;
  if( numLoops1 === 100)
       box.className = 'box-easy';
  else if( numLoops1 === 81)
       box.className = 'box-hard';
  else if(numLoops1 === 49)
       box.className = 'box-veryhard'; 
  element1.append(box);
}







