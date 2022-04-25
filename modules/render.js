import { bookContainer } from './elements.js';
import book from './createNewBook.js';
import displayBook from './displayBook.js';

const drawAllBooks = () => {
  bookContainer.innerHTML = '';
  const Books = book.readBooks();

  Books.forEach((element) => {
    displayBook(element);
  });
};

export default drawAllBooks;
