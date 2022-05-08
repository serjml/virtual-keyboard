// массив из 5 рядов  
// каждый ряд массив
// каждая кнопка массив [code, en, en-shift, ru, ru-shift];
const keysRows = [
  [
    ['Backquote','`', '~', 'ё', 'Ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', '⇦', '⇦', '⇦', '⇦'],
  ],
  [
    ['Tab', 'TAB', 'TAB', 'TAB', 'TAB'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Backslash', '\\', '|', '\\', '/'],
    ['Delete', 'DEL', 'DEL', 'DEL', 'DEL'],
  ],
  [
    ['CapsLock','CAPS', 'CAPS', 'CAPS', 'CAPS'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', '\'', '"', 'э', 'Э'],
    ['Enter', 'ENTER', 'ENTER', 'ENTER', 'ENTER'],
  ],
  [
    ['ShiftLeft','SHIFT', 'SHIFT', 'SHIFT', 'SHIFT'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['NumpadDecimal', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '⮝', '⮝', '⮝', '⮝'],
    ['ShiftRight', 'SHIFT', 'SHIFT', 'SHIFT', 'SHIFT'],
  ],
  [
    ['ControlLeft','CTRL', 'CTRL', 'CTRL', 'CTRL'],
    ['MetaLeft', 'WIN', 'WIN', 'WIN', 'WIN'],
    ['AltLeft', 'ALT', 'ALT', 'ALT', 'ALT'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'ALT', 'ALT', 'ALT', 'ALT'],
    ['ArrowLeft', '⮜', '⮜', '⮜', '⮜'],
    ['ArrowDown', '⮟', '⮟', '⮟', '⮟'],
    ['ArrowRight', '⮞', '⮞', '⮞', '⮞'],
    ['ControlRight', 'CTRL', 'CTRL', 'CTRL', 'CTRL'],    
  ],
]

// создание контейнера с элементами
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const title = document.createElement('h1');
title.className = 'title';
container.append(title);
title.innerText = 'RSS Виртуальная клавиатура';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('id', 'textarea');
textarea.removeAttribute('style');
container.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.setAttribute('id', 'keyboard');
container.append(keyboard);

const description = document.createElement('p');
description.className = 'description';
container.append(description);
description.innerText = 'Клавиатура создана в операционной системе Windows';

const combination = document.createElement('p');
combination.className = 'combination';
container.append(combination);
combination.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

// создание кнопок клавиатуры
function createKeys() {
  for (let i = 0; i < keysRows.length; i++ ) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);
    
    for (let j = 0; j < keysRows[i].length; j++) {
      const key = document.createElement('div');
      key.className = `key ${keysRows[i][j][0]}`;
      row.append(key)
      key.innerText = `${keysRows[i][j][1]}`
    }
  }  
}
createKeys();

document.body.addEventListener('click', () => textarea.focus());

const keys = document.querySelectorAll('.key');

keys.forEach(el => {
  el.addEventListener('click', () => {    
    addTextInTextarea(el.textContent);
  });

  el.addEventListener('mouseover', () => {
    el.classList.add('hover');
    el.classList.remove('active');
  })

  el.addEventListener('mouseout', () => {
    el.classList.remove('hover');
    el.classList.remove('active');
  })

  el.addEventListener('mousedown', () => {
    el.classList.add('active');
    el.classList.remove('hover');
  })

  el.addEventListener('mouseup', () => {
    el.classList.remove('active');
    el.classList.add('hover');
  })
})

const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
const caps = document.querySelector('.CapsLock');


let flag2 = false;
let flag = false;
// сделать под раскладку !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function addKeboardKeys(event) {
  
  event.preventDefault();   
  let currentClass = '.' + event.code;
  let currentKey = document.querySelector(currentClass);
  addTextInTextarea(currentKey.innerHTML);  
  currentKey.classList.add('active');

  if (event.code === 'ControlLeft') {
    flag = true; 
    document.addEventListener('keyup', () => flag = false) 
  } 
  if (event.code === 'AltLeft' && flag) {
    flag = false;
    console.log('lang')
  }
  if (event.code === 'AltLeft') {
    flag2 = true; 
    document.addEventListener('keyup', () => flag2 = false) 
  } 
  if (event.code === 'ControlLeft' && flag2) {
    flag2 = false;
    console.log('lang2')
  }




  if (event.code === 'Backspace') {
    addBackspace();
  } 
  if (event.code === 'Delete') {
    addKey('', 3, 1);
  } 
  if (event.code === 'Enter') {
    addKey('\n', 5, 0);
  } 
  if (event.code === 'Tab') {
    addKey('  ', 3, 0);
  } 
  if (event.code === 'ControlRight') {
    addKey('', 4, 0);
  } 
   if ((event.code === 'AltRight') || (event.code === 'MetaLeft')) {
    addKey('', 3, 0);    
  }

  if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight'))  {
    // addShift(event) 
    addKey('', 5, 0);
    
    if (caps.classList.contains('active-btn')) {
      changeRowKeys(0, 14, 0, 0, 2);
      document.addEventListener('keyup', (event) => {
        
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {                
          changeRowKeys(0, 14, 0, 0, 1);
          currentKey.classList.remove('active')
        }
      });

      changeRowKeys(14, 29, 14, 1, 1);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {           
          changeRowKeys(14, 29, 14, 1, 2);
          currentKey.classList.remove('active')
        }
      });

      changeRowKeys(29, 42, 29, 2, 1);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(29, 42, 29, 2, 2);
          currentKey.classList.remove('active')
        }
      });

      changeRowKeys(42, 55, 42, 3, 1);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(42, 55, 42, 3, 2);
          currentKey.classList.remove('active')
        }
      });
    } else {
      
      changeRowKeys(0, 14, 0, 0, 2);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(0, 14, 0, 0, 1);
          currentKey.classList.remove('active')
        }
      });
  
      changeRowKeys(14, 29, 14, 1, 2);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(14, 29, 14, 1, 1);
          currentKey.classList.remove('active')
        }
      });
  
      changeRowKeys(29, 42, 29, 2, 2);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(29, 42, 29, 2, 1);
          currentKey.classList.remove('active')
        }
      });
  
      changeRowKeys(42, 55, 42, 3, 2);
      document.addEventListener('keyup', (event) => {
        if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
          changeRowKeys(42, 55, 42, 3, 1);
          currentKey.classList.remove('active')
        }
      });
    }
  }

  if (event.code === 'CapsLock') {
    addCaps();
  }

  if ((event.code !== 'ShiftLeft')  && (event.code !== 'ShiftRight')) {
    document.addEventListener('keyup', () => currentKey.classList.remove('active'))
  }
}
document.addEventListener('keydown', addKeboardKeys);

// функция перебора и замены символов ряда при шифте
function changeRowKeys(start, end, idx, rowNum, keyNum) {
  for (let i = start; i < end; i++) {
    keys[i].innerHTML = keysRows[rowNum][i - idx][keyNum];
  }
}

function addShift() {
  // addKey('', 5, 0);
    
  // if (caps.classList.contains('active-btn')) {
  //   changeRowKeys(0, 14, 0, 0, 2);
  //   document.addEventListener('keyup', (event) => {
      
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {                
  //       changeRowKeys(0, 14, 0, 0, 1);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(14, 29, 14, 1, 1);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {           
  //       changeRowKeys(14, 29, 14, 1, 2);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(29, 42, 29, 2, 1);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(29, 42, 29, 2, 2);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(42, 55, 42, 3, 1);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(42, 55, 42, 3, 2);
  //       currentKey.classList.remove('active')
  //     }
  //   });
  // } else {
    
  //   changeRowKeys(0, 14, 0, 0, 2);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(0, 14, 0, 0, 1);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(14, 29, 14, 1, 2);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(14, 29, 14, 1, 1);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(29, 42, 29, 2, 2);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(29, 42, 29, 2, 1);
  //       currentKey.classList.remove('active')
  //     }
  //   });

  //   changeRowKeys(42, 55, 42, 3, 2);
  //   document.addEventListener('keyup', (event) => {
  //     if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {        
  //       changeRowKeys(42, 55, 42, 3, 1);
  //       currentKey.classList.remove('active')
  //     }
  //   });
  // }
  if (caps.classList.contains('active-btn')) {
    changeRowKeys(0, 14, 0, 0, 2);
    changeRowKeys(14, 29, 14, 1, 1);
    changeRowKeys(29, 42, 29, 2, 1);
    changeRowKeys(42, 55, 42, 3, 1);
  } else {
    changeRowKeys(0, 14, 0, 0, 2);
    changeRowKeys(14, 29, 14, 1, 2);  
    changeRowKeys(29, 42, 29, 2, 2);      
    changeRowKeys(42, 55, 42, 3, 2);  
  }
  
    
}
function removeShift() {
  if (caps.classList.contains('active-btn')) {
    changeRowKeys(0, 14, 0, 0, 1);
    changeRowKeys(14, 29, 14, 1, 2);
    changeRowKeys(29, 42, 29, 2, 2);
    changeRowKeys(42, 55, 42, 3, 2);
  } else {
    changeRowKeys(0, 14, 0, 0, 1);
    changeRowKeys(14, 29, 14, 1, 1);
    changeRowKeys(29, 42, 29, 2, 1);
    changeRowKeys(42, 55, 42, 3, 1); 
  }

}
shiftLeft.addEventListener('click', () => addKey('', 5, 0))
shiftLeft.addEventListener('mousedown', addShift)
shiftLeft.addEventListener('mouseup', removeShift)
shiftRight.addEventListener('click', () => addKey('', 5, 0))
shiftRight.addEventListener('mousedown', addShift)
shiftRight.addEventListener('mouseup', removeShift)



// вставка символов
function addTextInTextarea(text) {
  textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end'); 
}

// включение backspace
function addBackspace() {
  if (textarea.selectionStart > 1) {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, cursor - 2) +  textarea.value.slice(cursor, textarea.value.length);
    textarea.setRangeText('', cursor - 2, cursor - 2, 'end');
  } else {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value.slice(1, textarea.value.length)
    textarea.setRangeText('', cursor - 1, cursor - 1, 'end');
  }
}

const backspace = document.querySelector('.Backspace');
backspace.addEventListener('click', addBackspace);

// включение caps
function addCaps() {  
  addKey('', 4, 0);
  
  caps.classList.toggle('active-btn');

  if (caps.classList.contains('active-btn')) {
    for (let i = 15; i < 25; i++) {    
      keys[i].innerHTML = keysRows[1][i - 14][2];     
    }
    for (let i = 30; i < 39; i++) {
      keys[i].innerHTML = keysRows[2][i - 29][2];     
    }
    for (let i = 43; i < 50; i++) {
      keys[i].innerHTML = keysRows[3][i - 42][2];     
    }
  } else {
    for (let i = 15; i < 25; i++) {    
      keys[i].innerHTML = keysRows[1][i - 14][1];    
    }
    for (let i = 30; i < 39; i++) {
      keys[i].innerHTML = keysRows[2][i - 29][1];    
    }
    for (let i = 43; i < 50; i++) {
      keys[i].innerHTML = keysRows[3][i - 42][1];    
    }
  }
}
caps.addEventListener('click', addCaps);


// включение остальных кнопок
function addKey(value, numStart, numEnd) {
  const cursor = textarea.selectionStart;   
  textarea.setRangeText(value, cursor - numStart, cursor + numEnd, 'end');  
}

const del = document.querySelector('.Delete');
del.addEventListener('click', () => addKey('', 3, 1));

const enter = document.querySelector('.Enter');
enter.addEventListener('click', () => addKey('\n', 5, 0));

const tab = document.querySelector('.Tab');
tab.addEventListener('click', () => addKey('  ', 3, 0));

const rightCtrl = document.querySelector('.ControlRight');
rightCtrl.addEventListener('click', () => addKey('', 4, 0));

const rightAlt = document.querySelector('.AltRight');
rightAlt.addEventListener('click', () => addKey('', 3, 0));

const win = document.querySelector('.MetaLeft');
win.addEventListener('click', () => addKey('', 3, 0));

