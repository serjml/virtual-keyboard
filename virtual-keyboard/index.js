import keysRows from './modules/keys.js';
import VirtualKeyboardPage from './modules/class-keyboard.js'

// класс для создания контейнера с элементами и кнопок клавиатуры
const virtualKeyboard = new VirtualKeyboardPage();
virtualKeyboard.createPage();
virtualKeyboard.createKeys();

const keys = document.querySelectorAll('.key');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
const caps = document.querySelector('.CapsLock');
const backspace = document.querySelector('.Backspace');
let flag2 = false;
let flag = false;
let lang = 'eng';

// функция вставка символов
function addTextInTextarea(text) {
  textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
}

// функция действия спец. кнопок в textarea
function addKey(value, numStart, numEnd) {
  const cursor = textarea.selectionStart;
  textarea.setRangeText(value, cursor - numStart, cursor + numEnd, 'end');
}

// функция перебора и замены символов ряда при шифте
function changeRowKeys(start, end, idx, rowNum, keyNum) {
  for (let i = start; i < end; i = i + 1) {
    keys[i].innerHTML = keysRows[rowNum][i - idx][keyNum];
  }
}

// функция заполнения клавиш в зависимости от языка
function chooseLang(lang) {
  if (lang === 'eng') {
    changeRowKeys(0, 2, 0, 0, 1);
    changeRowKeys(14, 27, 14, 1, 1);
    changeRowKeys(29, 41, 29, 2, 1);
    changeRowKeys(42, 53, 42, 3, 1);
  } else {
    changeRowKeys(0, 2, 0, 0, 3);
    changeRowKeys(14, 28, 14, 1, 3);
    changeRowKeys(29, 41, 29, 2, 3);
    changeRowKeys(42, 53, 42, 3, 3);
  }
}

// функция установки клавиш для капса 
function setEngKeys(caps) {
  changeRowKeys(15, 25, 14, 1, caps);
  changeRowKeys(30, 39, 29, 2, caps);
  changeRowKeys(43, 50, 42, 3, caps);
}

function setRuKeys(caps) {
  keys[0].innerHTML = keysRows[0][0][caps];
  changeRowKeys(15, 27, 14, 1, caps);
  changeRowKeys(30, 41, 29, 2, caps);
  changeRowKeys(43, 52, 42, 3, caps);
}

// функция установки клавиш для шифта
function setEngKeysForShift() {
  changeRowKeys(0, 14, 0, 0, 1);
  changeRowKeys(14, 25, 14, 1, 2);
  changeRowKeys(25, 29, 14, 1, 1);
  changeRowKeys(29, 39, 29, 2, 2);
  changeRowKeys(39, 42, 29, 2, 1);
  changeRowKeys(42, 50, 42, 3, 2);
  changeRowKeys(50, 55, 42, 3, 1);
}

function setEngKeysCapsForShift() {
  changeRowKeys(0, 14, 0, 0, 2);
  changeRowKeys(14, 25, 14, 1, 1);
  changeRowKeys(25, 29, 14, 1, 2);
  changeRowKeys(29, 39, 29, 2, 1);
  changeRowKeys(39, 42, 29, 2, 2);
  changeRowKeys(42, 50, 42, 3, 1);
  changeRowKeys(50, 55, 42, 3, 2);
}

function setEngKeysUpForShift() {
  changeRowKeys(0, 14, 0, 0, 2);
  changeRowKeys(14, 29, 14, 1, 2);
  changeRowKeys(29, 42, 29, 2, 2);
  changeRowKeys(42, 55, 42, 3, 2);
}

function setEngKeysDownForShift() {
  changeRowKeys(0, 14, 0, 0, 1);
  changeRowKeys(14, 29, 14, 1, 1);
  changeRowKeys(29, 42, 29, 2, 1);
  changeRowKeys(42, 55, 42, 3, 1);
}

function setRuKeysForShift() {
  keys[0].innerHTML = keysRows[0][0][4];
  changeRowKeys(1, 14, 0, 0, 3);
  changeRowKeys(14, 27, 14, 1, 4);
  changeRowKeys(27, 29, 14, 1, 3);
  changeRowKeys(29, 42, 29, 2, 4);
  changeRowKeys(42, 52, 42, 3, 4);
  changeRowKeys(52, 55, 42, 3, 3);
}

function setRuKeysCapsForShift() {
  keys[0].innerHTML = keysRows[0][0][3];
  changeRowKeys(1, 14, 0, 0, 4);
  changeRowKeys(14, 27, 14, 1, 3);
  changeRowKeys(27, 29, 14, 1, 4);
  changeRowKeys(29, 42, 29, 2, 3);
  changeRowKeys(42, 52, 42, 3, 3);
  changeRowKeys(52, 55, 42, 3, 4);
}

function setRuKeysUpForShift() {
  changeRowKeys(0, 14, 0, 0, 4);
  changeRowKeys(14, 29, 14, 1, 4);
  changeRowKeys(29, 42, 29, 2, 4);
  changeRowKeys(42, 55, 42, 3, 4);
}

function setRuKeysDownForShift() {
  changeRowKeys(0, 14, 0, 0, 3);
  changeRowKeys(14, 29, 14, 1, 3);
  changeRowKeys(29, 42, 29, 2, 3);
  changeRowKeys(42, 55, 42, 3, 3);
}

// функция смена языка на клавишах
function changeLanguage() {
  if (event.code === 'ControlLeft') {
    addKey('', 4, 0);
    flag = true;
    document.addEventListener('keyup', () => flag = false)
  }
  if (event.code === 'AltLeft' && flag) {
    flag = false;
    if (lang === 'eng') {
      lang = 'ru';
      chooseLang(lang);
      if (caps.classList.contains('active-btn')) {
        setRuKeys(4);
      }
    } else {
      lang = 'eng';
      chooseLang(lang);
      if (caps.classList.contains('active-btn')) {
        setEngKeys(2);
      }
    }
  }

  if (event.code === 'AltLeft') {
    addKey('', 3, 0);
    flag2 = true;
    document.addEventListener('keyup', () => flag2 = false)
  }
  if (event.code === 'ControlLeft' && flag2) {
    flag2 = false;
    if (lang === 'eng') {
      lang = 'ru';
      chooseLang(lang);
      if (caps.classList.contains('active-btn')) {
        setRuKeys(4);
      }
    } else {
      lang = 'eng'
      chooseLang(lang);
      if (caps.classList.contains('active-btn')) {
        setEngKeys(2);
      }
    }
  }
}

// функция работы шифта
function addKeyShift(currentKey) {
  if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
    if (lang === 'eng') {
      addKey('', 5, 0);
      if (caps.classList.contains('active-btn')) {
        setEngKeysCapsForShift();               
        document.addEventListener('keyup', (event) => {
          if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
            if (caps.classList.contains('active-btn')) {
              setEngKeysForShift();              
              currentKey.classList.remove('active');
            }
          }
        });
      } else {
        setEngKeysUpForShift();        
        document.addEventListener('keyup', (event) => {
          if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
            if (caps.classList.contains('active-btn')) {
              setEngKeysForShift();            
              currentKey.classList.remove('active');
            } else {
              setEngKeysDownForShift();              
              currentKey.classList.remove('active');
            }
          }
        });
      }
    } else {
      addKey('', 5, 0);
      if (caps.classList.contains('active-btn')) {
        setRuKeysCapsForShift();     
        document.addEventListener('keyup', (event) => {
          if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
            if (caps.classList.contains('active-btn')) {
              setRuKeysForShift();
              currentKey.classList.remove('active');
            }
          }
        });
      } else {
        setRuKeysUpForShift();
        document.addEventListener('keyup', (event) => {
          if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
            if (caps.classList.contains('active-btn')) {
              setRuKeysForShift();
              currentKey.classList.remove('active');
            } else {
              setRuKeysDownForShift();
              currentKey.classList.remove('active');
            }
          }
        });
      }
    }
  }
}

// функция работы капслок
function addCaps() {
  addKey('', 4, 0);
  caps.classList.toggle('active-btn');
  if (caps.classList.contains('active-btn')) {
    if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
      setEngKeys(1);
    } else {
      setEngKeys(2);
    }
  } else {
    if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
      setEngKeys(2);
    } else {
      setEngKeys(1);
    }
  }
}
function addCapsRu() {
  addKey('', 4, 0);
  caps.classList.toggle('active-btn');
  if (caps.classList.contains('active-btn')) {
    keys[0].innerHTML = keysRows[0][0][4];
    if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
      setRuKeys(3);
    } else {
      setRuKeys(4);
    }
  } else {
    keys[0].innerHTML = keysRows[0][0][3];
    if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
      setRuKeys(4);
    } else {
      setRuKeys(3);
    }
  }
}

// функция работы бэкспэйс
function addBackspace() {
  if (textarea.selectionStart > 1) {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, cursor - 2) + textarea.value.slice(cursor, textarea.value.length);
    textarea.setRangeText('', cursor - 2, cursor - 2, 'end');
  } else {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value.slice(1, textarea.value.length)
    textarea.setRangeText('', cursor - 1, cursor - 1, 'end');
  }
}

// функция дуйствия кнопок при нажатии на клавиатуре
function addKeboardKeys(event) {
  event.preventDefault();

  let currentClass = '.' + event.code;
  let currentKey = document.querySelector(currentClass);
  addTextInTextarea(currentKey.innerHTML);
  currentKey.classList.add('active');

  changeLanguage();
  addKeyShift(currentKey);
  if (event.code === 'CapsLock') {
    if (lang === 'eng') {
      addCaps();
    } else {
      addCapsRu();
    }
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

  if ((event.code !== 'ShiftLeft') && (event.code !== 'ShiftRight')) {
    document.addEventListener('keyup', () => currentKey.classList.remove('active'))
  }
}
document.addEventListener('keydown', addKeboardKeys);

document.body.addEventListener('click', () => textarea.focus());

// вывод текста и анимации кнопок при клике мышкой
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

// добавления шифта при клике мышкой
function addShift() {
  if (keys[0].innerHTML === '\`') {
    if (caps.classList.contains('active-btn')) {
      setEngKeysCapsForShift();
    } else {
      setEngKeysUpForShift();
    }
  }
  if (keys[0].innerHTML === 'Ё' || keys[0].innerHTML === 'ё') {
    if (caps.classList.contains('active-btn')) {
      setRuKeysCapsForShift();
    } else {
      setRuKeysUpForShift();
    }
  }
}

function removeShift() {
  if (keys[0].innerHTML === '~') {
    if (caps.classList.contains('active-btn')) {
      setEngKeysForShift();     
    } else {
      setEngKeysDownForShift();      
    }
  }
  if (keys[0].innerHTML === 'Ё' || keys[0].innerHTML === 'ё') {
    if (caps.classList.contains('active-btn')) {
      setRuKeysForShift();      
    } else {
      setRuKeysDownForShift();      
    }
  }
}
shiftLeft.addEventListener('click', () => addKey('', 5, 0));
shiftLeft.addEventListener('mousedown', addShift);
shiftLeft.addEventListener('mouseup', removeShift);
shiftRight.addEventListener('click', () => addKey('', 5, 0));
shiftRight.addEventListener('mousedown', addShift);
shiftRight.addEventListener('mouseup', removeShift);

// включение backspace;
backspace.addEventListener('click', addBackspace);

// включение caps;
caps.addEventListener('click', () => {
  if (keys[0].innerHTML === '\`') {
    addCaps();
  } else {
    addCapsRu();
  }
});

// включение остальных кнопок;
class OtherKeys {
  constructor() { }

  addKeys() {
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

    const leftCtrl = document.querySelector('.ControlLeft');
    leftCtrl.addEventListener('click', () => addKey('', 4, 0));

    const leftAlt = document.querySelector('.AltLeft');
    leftAlt.addEventListener('click', () => addKey('', 3, 0));
  }
}
let otherKeys = new OtherKeys();
otherKeys.addKeys();

// сохранение языка при перезагрузке странице
function setLocalStorage() {
  if (keys[0].innerHTML === 'Ё' || keys[0].innerHTML === 'ё') {
    localStorage.setItem('lang', 'ru');
  } else {
    localStorage.setItem('lang', 'en');
  }
}
window.addEventListener('beforeunload', setLocalStorage);

function addLang() {
  if (localStorage.getItem('lang') === 'ru') {
    lang = 'ru'
    chooseLang(lang);
  } else {
    lang = 'eng'
    chooseLang(lang);
  }
}
addLang();
