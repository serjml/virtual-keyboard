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

// ----------------------SLIDER---START----------------------------------
  
const container = document.querySelector('.pets-card-container');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const pets = [...document.querySelectorAll('.pets-card')];
let petsShow = pets.filter(el => getComputedStyle(el).display == 'block');
let petsHidden = pets.filter(el => el.classList.contains('hidden'))
let firstCard;
let secondCard;
let thirdCard;

if (document.documentElement.clientWidth >= 1280) {    
  function moveLeft() {
    container.classList.remove('appear-right');
    container.classList.remove('appear-left');
    container.classList.add('leave-left');     
  }
   function moveRight() {
    container.classList.remove('appear-left');
    container.classList.remove('appear-right');
    container.classList.add('leave-right');
  }

  container.addEventListener('animationend', (event) => {
    if (event.animationName === 'move-leave') {
      changeCard();
      container.classList.remove('leave-left');
      container.classList.add('appear-left');        
    } else if (event.animationName === 'move-leave-right') {
      changeCard();
      container.classList.remove('leave-right');
      container.classList.add('appear-right');  
    }      
  });

  function changeCard() {
    petsShow.forEach(el => el.classList.add('hidden'));
    firstCard = petsHidden[Math.floor(Math.random() * 5)]
    chooseSecondCard();      
    chooseThirdCard();            
    firstCard.classList.remove('hidden');
    secondCard.classList.remove('hidden');
    thirdCard.classList.remove('hidden');      
    petsHidden = pets.filter(el => el.classList.contains('hidden'))
    petsShow = pets.filter(el => getComputedStyle(el).display == 'block');      
  }
  
  function chooseSecondCard() {  
    secondCard = petsHidden[Math.floor(Math.random() * 5)];
    if (firstCard === secondCard) {
      chooseSecondCard();    
    } else {
      return secondCard 
    }  
  }
    
  function chooseThirdCard() {
    thirdCard = petsHidden[Math.floor(Math.random() * 5)];
    if ((firstCard === thirdCard) || (secondCard === thirdCard)) {
      chooseThirdCard();    
    } else {
      return thirdCard;
    }  
  }
    
  arrowRight.addEventListener('click', moveLeft);
  arrowLeft.addEventListener('click', moveRight);
}


if ((document.documentElement.clientWidth < 1280) && (document.documentElement.clientWidth >= 768)) {
  petsShow[2].classList.add('hidden');    
  petsShow = pets.filter(el => getComputedStyle(el).display == 'block');    
  petsHidden = pets.filter(el => el.classList.contains('hidden'));

  function moveLeftTablet() {
    container.classList.remove('appear-left');
    container.classList.add('leave-left');
    container.classList.remove('appear-right');     
  }

  function moveRightTablet() {      
    container.classList.remove('appear-left');
    container.classList.remove('appear-right');
    container.classList.add('leave-right');
  }

  container.addEventListener('animationend', (event) => {
    if (event.animationName === 'move-leave') {
      changeCardForTablet();
      container.classList.remove('leave-left');
      container.classList.add('appear-left');        
    } else if (event.animationName === 'move-leave-right') {
      changeCardForTablet();
      container.classList.remove('leave-right');
      container.classList.add('appear-right');  
    }  
  })

  function changeCardForTablet() {
    petsShow.forEach(el => el.classList.add('hidden'));
    firstCard = petsHidden[Math.floor(Math.random() * 6)];
    chooseSecondCardForTablet();     
    firstCard.classList.remove('hidden');
    secondCard.classList.remove('hidden');
    petsHidden = pets.filter(el => el.classList.contains('hidden'))
    petsShow = pets.filter(el => getComputedStyle(el).display == 'block');   
  }   

  function chooseSecondCardForTablet() {
    secondCard = petsHidden[Math.floor(Math.random() * 6)];
    if (firstCard === secondCard) {
      chooseSecondCardForTablet();    
    } else {
      return secondCard 
    }  
  } 
  arrowRight.addEventListener('click', moveLeftTablet);
  arrowLeft.addEventListener('click', moveRightTablet);
}  

if (document.documentElement.clientWidth < 768) {
  petsShow[1].classList.add('hidden');
  petsShow[2].classList.add('hidden');
  petsShow = pets.filter(el => getComputedStyle(el).display == 'block');    
  petsHidden = pets.filter(el => el.classList.contains('hidden'));    
  
  function moveLeftMobile() {
    container.classList.remove('appear-left');
    container.classList.add('leave-left');
    container.classList.remove('appear-right');     
  }

  function moveRightMobile() {      
    container.classList.remove('appear-left');
    container.classList.remove('appear-right');
    container.classList.add('leave-right');
  }

  container.addEventListener('animationend', (event) => {
    if (event.animationName === 'move-leave') {
      changeCardForMobile();
      container.classList.remove('leave-left');
      container.classList.add('appear-left');        
    } else if (event.animationName === 'move-leave-right') {
      changeCardForMobile();
      container.classList.remove('leave-right');
      container.classList.add('appear-right');  
    }  
  })

  function changeCardForMobile() {
    petsShow.forEach(el => el.classList.add('hidden'));
    petsHidden[Math.floor(Math.random() * 7)].classList.remove('hidden');        
    petsHidden = pets.filter(el => el.classList.contains('hidden'));
    petsShow = pets.filter(el => getComputedStyle(el).display == 'block');      
  }

  arrowRight.addEventListener('click', moveLeftMobile);
  arrowLeft.addEventListener('click', moveRightMobile);
}  
// --------------------SLIDER----END-------------------------------------
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
  popupContainer.classList.add('starts');  
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






  



