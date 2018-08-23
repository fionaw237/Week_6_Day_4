// console.log("app loaded", window);

// document.addEventListener('DOMContentLoaded', () => {
//   const title = document.querySelector('h1')
//   title.textContent = "My favourite language is Javascript";
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const title = document.querySelector('h1');
//   title.textContent = "My favourite language is Javascript";
//   const welcomeParagraph = document.querySelector('#welcome-paragraph');
//   welcomeParagraph.textContent = "My favourite language is Javascript";
//   const redListItem = document.querySelector('li.red');
//   redListItem.classList.add('bold');
//   // red.textContent = "RED!!";
//   console.dir(redListItem);
//
//   const newListItem = document. createElement('li');
//   newListItem.textContent = 'Dark Goldenrod';
//   newListItem.classList.add('goldenrod');
//
//   const list = document.querySelector('ul');
//   list.appendChild(newListItem);
//
// })

// -------------------------------------------------------
// looking more at dev tools

document.addEventListener('DOMContentLoaded', () => {
  // const answer = 1 + 1;
  // console.log('The answer is :', answer);
  // const fruits = ["apple", "orange", "banana"];
  // console.table(fruits);
  //
  // const person = {
  //   name: "Bob",
  //   age: 95
  // };
  // console.table(person);
  // debugger;
  //
  // let number1 = 5;
  // number1 += 10;
  // const number2 = 20 + number1;
  // const number3 = number2 / 10;

  setTimeout(function(){
    document.body.classList.add("blue");
  }, 3000);
})
