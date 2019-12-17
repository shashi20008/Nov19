console.log('Hello world!');

// const h3Element = document.documentElement.children[1].children[0];
// const h3Element = document.getElementById('heading');
// const h3Element = document.querySelector('#heading');

// h3Element.innerText = 'Welcome to JS session on DOM';
// h3Element.style = 'color: green;';

// setTimeout(() => {
//   const h3Element = document.querySelector('#heading');

//   h3Element.innerText = 'Welcome to JS session on DOM';
//   h3Element.style = 'color: green;';
// }, 5000);


function changeColorToRed() {
  const paraElement = document.getElementById('para-1');
  paraElement.innerHTML = 'This will display in <b>Red</b>';
  paraElement.style = "color: red; font-size:30px";
  setTimeout(changeColorToGreen, 1000);
}

function changeColorToGreen() {
  const paraElement = document.getElementById('para-1');
  paraElement.innerHTML = 'This will display in <b>Green</b>';
  paraElement.style = "color: green; font-size:30px";
  setTimeout(changeColorToRed, 1000);
}

// changeColorToRed();

// Event handling in JS
const buttonElem = document.querySelector('#greet-btn');
buttonElem.addEventListener('click', (e) => {
  const inputElem = document.getElementById('name-input');
  const name = inputElem.value;
  
  const greetingPara = document.getElementById('greet-placeholder');
  greetingPara.innerText = 'Hello ' + name;
});

const h3Element = document.getElementById('heading');
h3Element.style = "cursor: pointer;"
h3Element.addEventListener('click', (e) => {
  console.log('H3 element was clicked!');
});

const inputElem = document.getElementById('name-input');
inputElem.addEventListener('keyup', (event) => {
  console.log(event);
  console.log('Keydown event for character:', event.key);
  if(event.key === 's') {
    event.preventDefault();
    return;
  }

  const name = event.target.value;
  const greetingPara = document.getElementById('greet-placeholder');
  greetingPara.innerText = 'Hello ' + name;
});

const redBtn = document.getElementById('red-button');
const blueBtn = document.getElementById('blue-button');

function changeColor(e) {
  const greetingPara = document.getElementById('greet-placeholder');
  if(e.target === redBtn) {
    greetingPara.style = 'color: red';
  }
  else if(e.target === blueBtn) {
    greetingPara.style = 'color: blue;';
  }
}

redBtn.addEventListener('click', changeColor);
blueBtn.addEventListener('click', changeColor);
