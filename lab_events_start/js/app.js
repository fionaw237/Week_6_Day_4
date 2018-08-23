document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  // console.dir(form);
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton)
});


const handleFormSubmit = function(event){
  event.preventDefault();

  const newListItem = document.createElement('li')
  newListItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`

  document.getElementById("new-item-form").reset();

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newListItem);
}


const handleDeleteAllButton = function(){
  const readingList = document.querySelector('#reading-list');
  readingList.textContent = ""
}
