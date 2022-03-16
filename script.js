const btn = document.getElementById('add')
const card = document.querySelector('.card')
const cardsSection = document.getElementById('cards-section')


btn.addEventListener("click", addBookToLibrary)

let myLibrary = [];

function Book(title,author,pages,isRead) {
  this.title = title,
  this.author = author,
  this.pages = pages
}

function addBookToLibrary() {
  let title = prompt('What is the title of the book?','test')
  let author = prompt('Who is the author?')
  let pages = prompt('How many pages is it?')

  const newBook = new Book(title,author,pages)
  myLibrary.push(newBook)

  createCard(myLibrary[myLibrary.length - 1])
}

function createCard(info) {
    let newCard = document.createElement('div');
    newCard.classList.add('card')
    cardsSection.appendChild(newCard);
    let titleP = document.createElement('p')
    let authorP = document.createElement('p')
    let pagesP = document.createElement('p')
    let removeBtn = document.createElement('button')
    titleP.innerHTML = info.title
    authorP.innerHTML = info.author
    pagesP.innerHTML = `${info.pages} pages`
    removeBtn.innerHTML = 'Remove'
    newCard.append(titleP,authorP,pagesP,removeBtn)
    titleP.classList.add('cardInfo')
    authorP.classList.add('cardInfo')
    pagesP.classList.add('cardInfo')
    removeBtn.classList.add('remove')
}

