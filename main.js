function appendToList(element) {
  const list = document.querySelector('ol');
  list.appendChild(element);
}

function addToLoremDiv(element) {
  const loremDiv = document.querySelector('div#lorem')
  loremDiv.appendChild(element);
}

function makeLi(text) {
  const newLi = document.createElement('li');
  newLi.cl
  newLi.innerText = text;

  return newLi;
}

function putImageSourceIn(image, src) {
  image.src = src;
}

function cloneClass(element1, element2) {
  element2.className = element1.className;
}

function makeElementWithId(tagName, id) {
  const newElement = document.createElement(tagName);
  newElement.id = id;

  return newElement;
}

function addColor(color, id) {
  const element = document.querySelector('#' + id);
  element.style.color = color;
}


const item1 = makeLi('hi');
const item2 = makeLi('hello');
const item3 = makeLi('how are you');
appendToList(item1);
appendToList(item2);
appendToList(item3);

const dino1 = makeElementWithId('img', 'dino-1');
const dino2 = makeElementWithId('img', 'dino2');

putImageSourceIn(dino1, 'https://95octane.com/wp-content/uploads/2015/11/2016_camaro_ss_findnewroads_22.jpg');
putImageSourceIn(dino2, 'https://blogs.plos.org/paleocomm/files/2015/12/Iguanodon_feeding.jpg');

addToLoremDiv(dino1);
addToLoremDiv(dino2);

const firstNumberedItem = document.querySelector('#thing-1');
const secondNumberedItem = document.querySelector('#thing-2');
const thirdNumberedItem = document.querySelector('#thing-c');
cloneClass(firstNumberedItem, secondNumberedItem);
cloneClass(firstNumberedItem, thirdNumberedItem);

addColor('lightgreen', 'heading');