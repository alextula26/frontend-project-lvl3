// @ts-check
import _ from 'lodash';

class Example {
  constructor(element) {
    this.element = element;
  }

  init(date) {
    this.element.textContent = `Hello, World! Now date is ${date}`;
    console.log('ehu!');
  }
}

const init = (date) => {
  const element = document.getElementById('point');
  const obj = new Example(element);
  obj.init(date);
};

init(_.now());
