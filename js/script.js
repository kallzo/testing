let showme = false;

function toggle() {
  let navItems = document.querySelector('#nav-items');
  if (showme === false) {
    navItems.style.display = 'initial';
    navItems.style.background = 'rgba(71, 110, 59, 0.37)';
    showme = true;
  } else if (showme === true) {
    navItems.style.display = 'none';
    showme = false;
  }
}

let myList = document.querySelector('#myList');
let input = document.querySelector('#items');
let myForm = document.querySelector('#myForm1');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(`${input.value}`));
  myList.appendChild(item);

  input.value = '';
}

let my_form = document.querySelector('#myForm');
my_form.addEventListener('submit', calculate);

function calculate(el) {
  el.preventDefault();
  let num1 = parseInt(document.querySelector('#item1').value);
  let num2 = parseInt(document.querySelector('#item2').value);
  let operator = document.querySelector('#operator').value;
  let result = document.querySelector('#result');
  let msg = document.querySelector('#error');
  switch (operator) {
    case '+':
      result.innerHTML = num1 + num2;
      break;
    case '-':
      result.innerHTML = num1 - num2;
      break;
    case '*':
      result.innerHTML = num1 * num2;
      break;
    case '/':
      result.innerHTML = num1 / num2;
      break;
    default:
      msg.innerHTML = 'Can not perform operation!';
  }
  setTimeout(function () {
    msg.innerHTML = '';
  }, 3000);
}

(function () {
  console.log(Math.round(Math.random() * 10));
}());

class phone {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = new Date(year);
  }
  getYear() {
    return this.year.getFullYear();
  }
}
let iphone = new phone('Iphone', 'Iphone 11', '2019-09-20');
console.log(iphone.getYear());
console.log(iphone);