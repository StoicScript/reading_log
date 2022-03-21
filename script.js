const addBtn = document.getElementById('openModalBtn')

const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const overlay = document.getElementById('overlay')
const form = document.getElementById('form')
const imageInput = document.getElementById('imgUpload')

const cardsSection = document.getElementById('cards-section')
const card = document.querySelector('.card')

let myLibrary = [];


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
    let readStatusDiv = document.createElement('div');    

    readStatusDiv.innerHTML = 'Not Read'

    if(uploaded_image.length < 1){
      image.src = 'laws.jpg'
    } else {
      image.src = uploaded_image;
    }

    titleP.innerHTML = info.title
    authorP.innerHTML = info.author
    pagesP.innerHTML = `${info.pages} pages`
    removeBtn.innerHTML = '&times;'
    newCard.classList.add('card')
    image.classList.add('cardImg')
    titleP.classList.add('cardInfo')
    authorP.classList.add('cardInfo')
    pagesP.classList.add('cardInfo', 'pages')
    removeBtn.classList.add('remove')
    readStatusDiv.classList.add('readStatus')

    readStatusDiv.id = `book-${myLibrary.length - 1}`

    cardsSection.appendChild(newCard);
    newCard.append(removeBtn,image,titleP,authorP,pagesP, readStatusDiv)
    
    readStatusDiv.addEventListener('click', () => {
      readStatusDiv.classList.toggle('read')
      if(readStatusDiv.classList.contains('read')){
        readStatusDiv.innerHTML = 'Read'
        } else {
        readStatusDiv.innerHTML = 'Not Read'
        }
    })

    removeBtn.addEventListener('click', () =>{
      removeBtn.parentElement.remove();
    })
}

let uploaded_image = ''

imageInput.addEventListener("change", function() {
   const reader = new FileReader();
   reader.addEventListener("load", () => {
     uploaded_image = reader.result;
});
   reader.readAsDataURL(this.files[0]);
});

const firstBook = new Book('The Laws of Human Nature','Robert Green', 301)
myLibrary.push(firstBook)
createCard(myLibrary[myLibrary.length - 1])
