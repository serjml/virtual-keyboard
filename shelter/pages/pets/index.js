// ------------------------BURGER---START------------------------------
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('open');
}  
burger.addEventListener('click', toggleMenu);

function closeMenu() {
  burger.classList.remove('open');
  nav.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('open');
}
overlay.addEventListener('click', closeMenu);

navLink.forEach(el => el.addEventListener('click', closeMenu));

// -----------------------BURGER---END-----------------------------------
// ---------------------POPUP----START-----------------------------------

const popupContainer = document.querySelector('.popup-container');
const popupOverlay = document.querySelector('.popup-overlay');
const popupBtn = document.querySelector('.popup-close');
const namePet = document.querySelector('.name');
const imgPet = document.querySelector('.popup-img');
const typePet = document.querySelector('.type');
const breedPet = document.querySelector('.breed');
const descriptionPet = document.querySelector('.description');
const agePet = document.querySelector('.age');
const inoculationsPet = document.querySelector('.inoculations');
const diseasesPet = document.querySelector('.diseases');
const parasitesPet = document.querySelector('.parasites');
const pets = [...document.querySelectorAll('.pets-card')];

// асинхронная функция для JSON 
async function getPetsInfo(index) { // индекс карточки питомца из массива по нажатию
  const url = 'pets.json';             
  const result = await fetch(url);     
  const data = await result.json();  
  geniratePets(data[index]);        // данные обьекта из JSON стем же индексом вставляем в функцию создания карточки питомца     
  showPetInfo()                     // запуск функции показа попап окна
}
// функция создание карточки питомца 
function geniratePets(pets) {       // аргумент из ассинхронной функции 
  namePet.innerHTML = pets['name'];
  imgPet.src = pets['img'];
  typePet.innerHTML = pets['type'];
  breedPet.innerHTML = pets['breed'];
  descriptionPet.innerHTML = pets['description'];
  agePet.innerHTML = pets['age'];
  inoculationsPet.innerHTML = pets['inoculations'];
  diseasesPet.innerHTML = pets['diseases'];
  parasitesPet.innerHTML = pets['parasites'];
}
// функция показа попап окна
function showPetInfo() {
  popupContainer.style.display = 'block';
  body.classList.toggle('open');   
}
// обработчик собитий на карточки питомцев
pets.forEach((el, i) => {                     // i - индекс питомца, передаю в асинхронную ф-ю
  el.addEventListener('click', () => {
    getPetsInfo(i)                            // i - индекс питомца, передаю в асинхронную ф-ю
  });  
})
// закрытие попап окна 
function closePopup() {
  popupContainer.style.display = 'none';
  body.classList.remove('open');
}
  
popupBtn.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);

// ---------------------POPUP----END-------------------------------------