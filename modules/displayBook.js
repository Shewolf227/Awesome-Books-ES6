import { bookContainer } from './elements.js';

const displayBook = (book) => {
  const bookItemHTML = `    
    <h4 class="book-title">"${book.title}" by <span>${book.author}</span></h4>  
    <button class="btn-remove" id=${book.id}>Remove</button>`;
  const bookItem = document.createElement('div');
  bookItem.classList.add('book-holder');
  bookItem.innerHTML = bookItemHTML;
  bookContainer.appendChild(bookItem);
};

export default displayBook;
