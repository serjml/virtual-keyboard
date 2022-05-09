import keysRows from './keys.js';

export default class VirtualKeyboardPage {
  constructor () {
    this.container = document.createElement('div');
    this.title = document.createElement('h1');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    this.description = document.createElement('p');
    this.combination = document.createElement('p');
  }

  createPage() {
    this.container.className = 'container';
    document.body.append(this.container);
 
    this.title.className = 'title';
    this.container.append(this.title);
    this.title.innerText = 'RSS Виртуальная клавиатура';
  
    this.textarea.className = 'textarea';
    this.textarea.setAttribute('id', 'textarea');
    this.textarea.removeAttribute('style');
    this.container.append(this.textarea);
 
    this.keyboard.className = 'keyboard';
    this.keyboard.setAttribute('id', 'keyboard');
    this.container.append(this.keyboard);

    this.description.className = 'description';
    this.container.append(this.description);
    this.description.innerText = 'Клавиатура создана в операционной системе Windows';
 
    this.combination.className = 'combination';
    this.container.append(this.combination);
    this.combination.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
  }

  createKeys() {
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
}

