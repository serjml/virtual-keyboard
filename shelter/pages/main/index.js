// Burger start------------------------------------
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  overlay.classList.toggle('open')
}  
burger.addEventListener('click', toggleMenu);

function closeMenu() {
  burger.classList.remove('open');
  nav.classList.remove('open');
  overlay.classList.remove('open')
}
overlay.addEventListener('click', closeMenu);
// Burger end-----------------------------------------

// Slider start---------------------------------------
  
  const arrow = document.querySelectorAll('.pets-arrow');
  const pets = [...document.querySelectorAll('.pets-card')];
  let petsShow = pets.filter(el => getComputedStyle(el).display == 'block');
  let petsHidden = pets.filter(el => el.classList.contains('hidden'))
  let firstCard;
  let secondCard;
  let thirdCard;

  if (document.documentElement.clientWidth < 768) {
    petsShow[1].classList.add('hidden');
    petsShow[2].classList.add('hidden');

    petsShow = pets.filter(el => getComputedStyle(el).display == 'block');
    console.log(petsShow);
    petsHidden = pets.filter(el => el.classList.contains('hidden'))
    console.log(petsHidden);
    
    function changeCardForMobile() {
      petsShow.forEach(el => el.classList.add('hidden'));
      petsHidden[Math.floor(Math.random() * 7)].classList.remove('hidden');     
      petsHidden = pets.filter(el => el.classList.contains('hidden'));
      petsShow = pets.filter(el => getComputedStyle(el).display == 'block');
    }

    arrow.forEach(el => el.addEventListener('click', changeCardForMobile))
  }

  if ((document.documentElement.clientWidth < 1280) && (document.documentElement.clientWidth >= 768)) {
    petsShow[2].classList.add('hidden');
    
    petsShow = pets.filter(el => getComputedStyle(el).display == 'block');
    console.log(petsShow);
    petsHidden = pets.filter(el => el.classList.contains('hidden'))
    console.log(petsHidden);

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
    arrow.forEach(el => el.addEventListener('click', changeCardForTablet))
  }  

  if (document.documentElement.clientWidth >= 1280) {
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
    
    arrow.forEach(el => el.addEventListener('click', changeCard))
  }
  
  // Slider end---------------------------------------



  



