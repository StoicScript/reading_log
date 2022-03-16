console.log('Hello, world!')

const btn = document.getElementById('add')
const list = document.getElementById('bookList')

btn.addEventListener("click", addBookToLibrary)

let myLibrary = [];

function Book(title,author,pages,isRead) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.isRead = isRead,
  this.info = function(){
      return `${title} by ${author}, ${pages} pages, ${isRead}`
  }
}

function addBookToLibrary() {
  let title = window.prompt('What is the title of the book?','test')
  let author = prompt('Who is the author?')
  let pages = prompt('How many pages is it?')
  let isRead = prompt('Did you read it yet?')

  const newBook = new Book(title,author,pages,isRead)
  myLibrary.push(newBook)

  createListItem(myLibrary[myLibrary.length - 1].info())
}

function createListItem(info) {
    let li = document.createElement('li');
    li.innerHTML = info ;
    list.appendChild(li)
}