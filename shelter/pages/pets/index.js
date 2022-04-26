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

// ---------------------PAGINATION----START-------------------------------
const FIRST_PAGE = document.querySelector('#pagination-btn-first');
const LEFT_PAGE = document.querySelector('#pagination-btn-left');
const CURRENT_PAGE = document.querySelector('#pagination-page');
const RIGHT_PAGE = document.querySelector('#pagination-btn-right');
const LAST_PAGE = document.querySelector('#pagination-btn-last');
const PET_NAME = document.querySelectorAll('.pet-name');
let OURPETS_CONTAINER = document.querySelector('.ourpets-container');
let curPage = 1;
let randomArrayPets = [];
let petsNew;
const petsJson = [
  {
    "name": "Katrine",
    "img": "../../assets/img/pets-katrine.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/img/pets-jennifer.jpg",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/img/pets-woody.jpg",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", " distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/img/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/img/pets-timmy.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", " viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/img/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", " leptospirosis"],
    "diseases": ["deafness", " blindness"],
    "parasites": ["lice", " fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/img/pets-scarlet.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },  
  {
    "name": "Freddie",
    "img": "../../assets/img/pets-freddie.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
]

function createCard(i) {  
  const newCard = document.createElement('div');
  const newImg = document.createElement('img');
  const newParagraph = document.createElement('p');
  const newBtn = document.createElement('button');

  newCard.classList.add('pets-card');
  newCard.classList.add('ourpets-card');
  newImg.classList.add('pets-card-img');
  newParagraph.classList.add('pet-name');
  newBtn.classList.add('pet-btn');  
  newBtn.classList.add('btn');  
  
  newParagraph.innerText = randomArrayPets[i]['name'];
  newBtn.innerText = 'Learn more'
  newImg.src = randomArrayPets[i]['img']

  newCard.append(newImg);
  newCard.append(newParagraph);
  newCard.append(newBtn); 
  
  return newCard;
}

if (document.documentElement.clientWidth >= 1280) {

  function generateArrayPets() {
    petsJson.sort(() => Math.random() - 0.5);
    randomArrayPets.push(...petsJson);
    if (randomArrayPets.length < 48) {
      generateArrayPets();
    } else {
      return randomArrayPets;
    }
  }
  generateArrayPets();
 
  addRandomCardStart(1);

  function genPetsNew(page) {
    petsNew = document.querySelectorAll('.ourpets-card');
    petsNew.forEach((el, i) => el.addEventListener('click', () => {
      getPetsCard(((page - 1) * 8) + i)
    }));  
  }
  genPetsNew(1);  
  
  function addRandomCardStart(arg) {
    OURPETS_CONTAINER.innerHTML = '';
    let card1 = createCard(((arg - 1) * 8) + 0);
    OURPETS_CONTAINER.append(card1);
    let card2 = createCard(((arg - 1) * 8) + 1);
    OURPETS_CONTAINER.append(card2);
    let card3 = createCard(((arg - 1) * 8) + 2);
    OURPETS_CONTAINER.append(card3);
    let card4 = createCard(((arg - 1) * 8) + 3);
    OURPETS_CONTAINER.append(card4);
    let card5 = createCard(((arg - 1) * 8) + 4);
    OURPETS_CONTAINER.append(card5);
    let card6 = createCard(((arg - 1) * 8) + 5);
    OURPETS_CONTAINER.append(card6);
    let card7 = createCard(((arg - 1) * 8) + 6);
    OURPETS_CONTAINER.append(card7);
    let card8 = createCard(((arg - 1) * 8) + 7);
    OURPETS_CONTAINER.append(card8);       
  }  

  function flipRight() {
    curPage++;    
    addRandomCardStart(curPage);   
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNew(curPage);  
    FIRST_PAGE.classList.remove('disable');
    LEFT_PAGE.classList.remove('disable');
    FIRST_PAGE.classList.add('able');
    LEFT_PAGE.classList.add('able');
    LEFT_PAGE.addEventListener('click', flipLeft);
    if (curPage === 6) {
      LAST_PAGE.classList.add('disable');
      RIGHT_PAGE.classList.add('disable');
      LAST_PAGE.classList.remove('able');
      RIGHT_PAGE.classList.remove('able');
      RIGHT_PAGE.removeEventListener('click', flipRight);
    }    
  }
  RIGHT_PAGE.addEventListener('click', flipRight);  
  
  function flipLeft() {
    curPage--;
    addRandomCardStart(curPage)
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNew(curPage);
    LAST_PAGE.classList.remove('disable');
    RIGHT_PAGE.classList.remove('disable');
    LAST_PAGE.classList.add('able');
    RIGHT_PAGE.classList.add('able');
    RIGHT_PAGE.addEventListener('click', flipRight);
    if (curPage === 1) {
      FIRST_PAGE.classList.add('disable');
      LEFT_PAGE.classList.add('disable');
      FIRST_PAGE.classList.remove('able');
      LEFT_PAGE.classList.remove('able');
      LEFT_PAGE.removeEventListener('click', flipLeft);
    }
  }
  LEFT_PAGE.addEventListener('click', flipLeft);
  
  function flipLast() {
    curPage = 5;
    flipRight();
  }
  LAST_PAGE.addEventListener('click', flipLast);
  
  function flipFirst() {
    curPage = 2;
    flipLeft();
  }
  FIRST_PAGE.addEventListener('click', flipFirst);
}

if ((document.documentElement.clientWidth < 1280) && (document.documentElement.clientWidth >= 768)) {
  let arrayPets = [];

  function createArrayPets() {
    arrayPets.push(...petsJson);
    if (arrayPets.length < 48) {
      createArrayPets(petsJson);
    } else {
      return arrayPets;
    }  
  }
  createArrayPets();

  function generateArrayPetsForTablet() {
    let arrOfSix = arrayPets.splice(0, 6);

    arrOfSix.sort(() => Math.random() - 0.5);
    randomArrayPets.push(...arrOfSix);
    if (randomArrayPets.length < 48) {
      generateArrayPetsForTablet();
    } else {
      return randomArrayPets;
    }
  }
  generateArrayPetsForTablet();
  
  function addRandomCardStartForTablet(arg) {
    OURPETS_CONTAINER.innerHTML = '';
    let card1 = createCard(((arg - 1) * 6) + 0);
    OURPETS_CONTAINER.append(card1)
    let card2 = createCard(((arg - 1) * 6) + 1);
    OURPETS_CONTAINER.append(card2)
    let card3 = createCard(((arg - 1) * 6) + 2);
    OURPETS_CONTAINER.append(card3)
    let card4 = createCard(((arg - 1) * 6) + 3);
    OURPETS_CONTAINER.append(card4)
    let card5 = createCard(((arg - 1) * 6) + 4);
    OURPETS_CONTAINER.append(card5)
    let card6 = createCard(((arg - 1) * 6) + 5);
    OURPETS_CONTAINER.append(card6)
  }
  addRandomCardStartForTablet(1); 
  
  function genPetsNewForTablet(page) {
    petsNew = document.querySelectorAll('.ourpets-card');
    petsNew.forEach((el, i) => el.addEventListener('click', () => {
      getPetsCard(((page - 1) * 6) + i)
    }));  
  }
  genPetsNewForTablet(1); 

  function flipRightForTablet() {
    curPage++;  
    addRandomCardStartForTablet(curPage);
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNewForTablet(curPage);
    FIRST_PAGE.classList.remove('disable');
    LEFT_PAGE.classList.remove('disable');
    FIRST_PAGE.classList.add('able');
    LEFT_PAGE.classList.add('able');
    LEFT_PAGE.addEventListener('click', flipLeftForTablet);
    if (curPage === 8) {
      LAST_PAGE.classList.add('disable');
      RIGHT_PAGE.classList.add('disable');
      LAST_PAGE.classList.remove('able');
      RIGHT_PAGE.classList.remove('able');
      RIGHT_PAGE.removeEventListener('click', flipRightForTablet);
    }
  }
  RIGHT_PAGE.addEventListener('click', flipRightForTablet);
  
  function flipLeftForTablet() {
    curPage--;
    addRandomCardStartForTablet(curPage);
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNewForTablet(curPage)
    LAST_PAGE.classList.remove('disable');
    RIGHT_PAGE.classList.remove('disable');
    LAST_PAGE.classList.add('able');
    RIGHT_PAGE.classList.add('able');
    RIGHT_PAGE.addEventListener('click', flipRightForTablet);
    if (curPage === 1) {
      FIRST_PAGE.classList.add('disable');
      LEFT_PAGE.classList.add('disable');
      FIRST_PAGE.classList.remove('able');
      LEFT_PAGE.classList.remove('able');
      LEFT_PAGE.removeEventListener('click', flipLeftForTablet);
    }
  }
  LEFT_PAGE.addEventListener('click', flipLeftForTablet);
  
  function flipLastForTablet() {
    curPage = 7;
    flipRightForTablet();
  }
  LAST_PAGE.addEventListener('click', flipLastForTablet);
  
  function flipFirstForTablet() {
    curPage = 2;
    flipLeftForTablet();
  }
  FIRST_PAGE.addEventListener('click', flipFirstForTablet);
}

if (document.documentElement.clientWidth < 768) {
  let arrayPetsForMobile = [];

  function createArrayPetsForMobile() {
    arrayPetsForMobile.push(...petsJson);
    if (arrayPetsForMobile.length < 48) {
      createArrayPetsForMobile(petsJson);
    } else {
      return arrayPetsForMobile;
    }  
  }
  createArrayPetsForMobile();

  function generateArrayPetsForMobile() {
    let arrOfSix = arrayPetsForMobile.splice(0, 6);

    arrOfSix.sort(() => Math.random() - 0.5);
    randomArrayPets.push(...arrOfSix);
    if (randomArrayPets.length < 48) {
      generateArrayPetsForMobile();
    } else {
      return randomArrayPets;
    }
  }
  generateArrayPetsForMobile();  
  
  function addRandomCardStartForMobile(arg) {
    OURPETS_CONTAINER.innerHTML = '';
    let card1 = createCard(((arg - 1) * 3) + 0);
    OURPETS_CONTAINER.append(card1)
    let card2 = createCard(((arg - 1) * 3) + 1);
    OURPETS_CONTAINER.append(card2)
    let card3 = createCard(((arg - 1) * 3) + 2);
    OURPETS_CONTAINER.append(card3)
  }
  addRandomCardStartForMobile(1);
  
  function genPetsNewForMobile(page) {
    petsNew = document.querySelectorAll('.ourpets-card');
    petsNew.forEach((el, i) => el.addEventListener('click', () => {
      getPetsCard(((page - 1) * 3) + i)
    }));  
  }
  genPetsNewForMobile(1); 

  function flipRightForMobile() {
    curPage++;  
    addRandomCardStartForMobile(curPage);
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNewForMobile(curPage);
    FIRST_PAGE.classList.remove('disable');
    LEFT_PAGE.classList.remove('disable');
    FIRST_PAGE.classList.add('able');
    LEFT_PAGE.classList.add('able');
    LEFT_PAGE.addEventListener('click', flipLeftForMobile);
    if (curPage === 16) {
      LAST_PAGE.classList.add('disable');
      RIGHT_PAGE.classList.add('disable');
      LAST_PAGE.classList.remove('able');
      RIGHT_PAGE.classList.remove('able');
      RIGHT_PAGE.removeEventListener('click', flipRightForMobile);
    }
  }
  RIGHT_PAGE.addEventListener('click', flipRightForMobile);
  
  function flipLeftForMobile() {
    curPage--;
    addRandomCardStartForMobile(curPage);
    CURRENT_PAGE.innerHTML = curPage;
    genPetsNewForMobile(curPage);
    LAST_PAGE.classList.remove('disable');
    RIGHT_PAGE.classList.remove('disable');
    LAST_PAGE.classList.add('able');
    RIGHT_PAGE.classList.add('able');
    RIGHT_PAGE.addEventListener('click', flipRightForMobile);
    if (curPage === 1) {
      FIRST_PAGE.classList.add('disable');
      LEFT_PAGE.classList.add('disable');
      FIRST_PAGE.classList.remove('able');
      LEFT_PAGE.classList.remove('able');
      LEFT_PAGE.removeEventListener('click', flipLeftForMobile);
    }
  }
  LEFT_PAGE.addEventListener('click', flipLeftForMobile);
  
  function flipLastForMobile() {
    curPage = 15;
    flipRightForMobile();
  }
  LAST_PAGE.addEventListener('click', flipLastForMobile);
  
  function flipFirstForMobile() {
    curPage = 2;
    flipLeftForMobile();
  }
  FIRST_PAGE.addEventListener('click', flipFirstForMobile);
}
// ---------------------PAGINATION----END---------------------------------

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

function geniratePets(pets) {       
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

function getPetsCard(index) { 
  geniratePets(randomArrayPets[index]);     
  showPetInfo();               
}

// функция показа попап окна
function showPetInfo() {
  popupContainer.style.display = 'block';
  body.classList.toggle('open');
  popupContainer.classList.add('starts');
}

// закрытие попап окна 
function closePopup() {
  popupContainer.style.display = 'none';
  body.classList.remove('open');
}

popupBtn.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);
popupOverlay.addEventListener('mouseover', () => {
  popupBtn.classList.add('popup-hover')
})
popupOverlay.addEventListener('mouseout', () => {
  popupBtn.classList.remove('popup-hover')
})
// ---------------------POPUP----END-------------------------------------