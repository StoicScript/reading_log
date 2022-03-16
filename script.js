const addBtn = document.getElementById('add')
const closeBtn = document.getElementById('close')
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')

const card = document.querySelector('.card')
const cardsSection = document.getElementById('cards-section')
const deleteBtn = document.querySelectorAll('.remove')
const form = document.getElementById('form')


addBtn.addEventListener('click', () => {
  openModal();
})
closeBtn.addEventListener('click', () => {
  closeModal();
})

overlay.addEventListener('click', () => {
  closeModal()
})

function openModal(){
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(){
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


form.addEventListener('submit', function(event){
  event.preventDefault();

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value

  addBookToLibrary(title,author,pages)
  form.reset()
  closeModal()
})


let myLibrary = [];

function Book(title,author,pages) {
  this.title = title,
  this.author = author,
  this.pages = pages
}

function addBookToLibrary(title,author,pages) {

  const newBook = new Book(title,author,pages)
  myLibrary.push(newBook)

  createCard(myLibrary[myLibrary.length - 1])
}

function createCard(info) {
    let newCard = document.createElement('div');
    let image = document.createElement('img')
    let titleP = document.createElement('p')
    let authorP = document.createElement('p')
    let pagesP = document.createElement('p')
    let removeBtn = document.createElement('button')
    image.src = 'laws.jpg'
    titleP.innerHTML = info.title
    authorP.innerHTML = info.author
    pagesP.innerHTML = `${info.pages} pages`
    removeBtn.innerHTML = 'Remove'
    newCard.classList.add('card')
    image.classList.add('cardImg')
    titleP.classList.add('cardInfo')
    authorP.classList.add('cardInfo')
    pagesP.classList.add('cardInfo')
    removeBtn.classList.add('remove')
    cardsSection.appendChild(newCard);
    newCard.append(image,titleP,authorP,pagesP,removeBtn)

    addRemoveButtons()
}

function addRemoveButtons(){
  const deleteBtn = document.querySelectorAll('.remove')
  deleteBtn.forEach(function (i) {
    i.addEventListener('click', function() {
      i.parentElement.remove();
    });
  });
}


const firstBook = new Book('The Laws of Human Nature','Robert Green', 301)
myLibrary.push(firstBook)
createCard(myLibrary[myLibrary.length - 1])

addRemoveButtons()