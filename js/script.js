// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const bombNumbers = 15;

const playButton = document.getElementById('btn-output').addEventListener('click', init);


const select = document.getElementById('inputGroupSelect04');
const value = select.options[select.selectedIndex].value;


function init(){

  const container = document.querySelector('.main_container');

  // svuota container di tutte le celle
  while (container.firstChild) {
  container.removeChild(container.lastChild);
  }

  create(container, parseInt(value));
  const bombs = createBomb();

}

function create(element, numLoops, num){

  for(let i = 1; i <= numLoops; i++){
    createBox(element, numLoops,num)
  }
}

function createBox(element1, numLoops1, num) {
  
  const box = document.createElement('div');
  
  box.addEventListener('click', function changeColor(){
    box.classList.add('box-clicked');
  })

  num = getRandomNumber(1, numLoops1);
  box.innerHTML = num;
  
  if( numLoops1 === 100)
  box.className = 'box-easy';
  else if( numLoops1 === 81)
  box.className = 'box-hard';
  else if(numLoops1 === 49)
  box.className = 'box-veryhard'; 
  element1.append(box);
}

// function createUniqueRandomNumbers(){
//   let randomNumber;
//   const maxLimit = value;
//   const minLimit = 1;
//   const uniqueRandomNumbers = [];

//   while (uniqueRandomNumbers.length < maxLimit) {
//     const randomNumbers = getRandomNumber(minLimit, maxLimit)
//     if (uniqueRandomNumbers.indexOf(randomNumbers) == -1) { 
       
//       uniqueRandomNumbers.push( randomNumbers );
//     }
// }
//   return randomNumber;
// }


function createBomb(){
  const generateBombs = [];
  
  while(generateBombs.length < bombNumbers){
    const bomb = getRandomNumber(1, bombNumbers);
    
    if(!generateBombs.includes(bomb)){
      generateBombs.push(bomb)
    }
  }
  return generateBombs;
}

// console.log(createBomb());

function getRandomNumber(min,max){
  return Math.floor(Math.random()* (max - min + 1) + min);
}