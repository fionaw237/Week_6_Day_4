document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input');
  // console.dir(textInput);
  textInput.addEventListener('input', handleInput);

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);
});

var count = 0

const handleButtonClick = function(){
  // console.log("Button has been clicked!");
  const resultParagraph = document.querySelector('#button-result')
  count += 1
  resultParagraph.textContent = `That button has been clicked ${count} times(s)!`
}

const handleInput = function(event){
  const inputResult = document.querySelector('#input-result')
  inputResult.textContent = `You have typed ${event.target.value}`
}

const handleSelectChange = function(event){
  const resultSelect = document.querySelector('#select-result');
  resultSelect.textContent = `You selected ${event.target.value}`
}

const handleFormSubmit = function(event){
  event.preventDefault();
  console.dir(this);
  const resultForm = document.querySelector('#form-result');
// console.dir(event.target.first_name.value);
  resultForm.textContent = `Your name is ${event.target.first_name.value} ${event.target.last_name.value}`
}
