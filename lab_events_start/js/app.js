document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  // console.dir(form);
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton)
});

// ------ before adding flexbox
// const handleFormSubmit = function(event){
//   event.preventDefault();
//
//   const newListItem = document.createElement('li')
//   newListItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
//
//   document.getElementById("new-item-form").reset();
//
//   const readingList = document.querySelector('#reading-list');
//   readingList.appendChild(newListItem);
// }


// ------ after adding flexbox
const handleFormSubmit = function(event){
  event.preventDefault();

// create new grid row for flex box
  const newGridRow = document.createElement('div')
  newGridRow.classList.add('grid-row')

// add individual cells for each property
  const newBookTitle = document.createElement('div')
  newBookTitle.classList.add('cell');
  newBookTitle.textContent = `Title: ${event.target.title.value}`

  newGridRow.appendChild(newBookTitle);

  const newBookAuthor = document.createElement('div')
  newBookAuthor.classList.add('cell');
  newBookAuthor.textContent = `Author: ${event.target.author.value}`

  newGridRow.appendChild(newBookAuthor);

  const newBookCategory = document.createElement('div')
  newBookCategory.classList.add('cell');
  newBookCategory.textContent = `Category: ${event.target.category.value}`

  newGridRow.appendChild(newBookCategory);

  document.getElementById("new-item-form").reset();

//add the whole grid row to the reading list
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newGridRow);
}


const handleDeleteAllButton = function(){
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = ""
}
