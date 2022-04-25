import formattedDate from './modules/date.js';
import { currentDate, addButton } from './modules/elements.js';
import handleNavigation from './modules/navigation.js';
import addBook from './modules/addBook.js';
import redirectToList from './modules/redirect.js';
import drawAllBooks from './modules/render.js';
import showError from './modules/error.js';
import book from './modules/createNewBook.js';

currentDate.innerHTML = formattedDate;

drawAllBooks();

addButton.addEventListener('click', () => {
  const status = addBook();
  if (status) {
    redirectToList();
  } else {
    showError();
  }
});

document.body.addEventListener(
  'click',
  (event) => {
    if (event.target.className === 'nav-link') {
      handleNavigation(event.target);
    } else if (event.target.className === 'btn-remove') {
      book.removeBook(event.target.id);
      drawAllBooks();
    }
  },
  true,
);
