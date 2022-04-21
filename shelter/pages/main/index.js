// Burger start------------------------------------
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

// Burger end-----------------------------------------

// Slider start---------------------------------------
  
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
    
    arrowLeft.addEventListener('click', moveLeft);
    arrowRight.addEventListener('click', moveRight);
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
    arrowLeft.addEventListener('click', moveLeftTablet);
    arrowRight.addEventListener('click', moveRightTablet);
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

    arrowLeft.addEventListener('click', moveLeftMobile);
    arrowRight.addEventListener('click', moveRightMobile);
  }  
  // Slider end---------------------------------------




  



