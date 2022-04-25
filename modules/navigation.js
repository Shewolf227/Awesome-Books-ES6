import { bookList, addNewBook, contactInfo } from './elements.js';

const handleNavigation = (target) => {
  if (target.innerHTML === 'List') {
    bookList.style.display = 'flex';
    addNewBook.style.display = 'none';
    contactInfo.style.display = 'none';
  }
  if (target.innerHTML === 'Add new') {
    bookList.style.display = 'none';
    addNewBook.style.display = 'flex';
    contactInfo.style.display = 'none';
  }
  if (target.innerHTML === 'Contact') {
    bookList.style.display = 'none';
    addNewBook.style.display = 'none';
    contactInfo.style.display = 'flex';
  }
};

export default handleNavigation;
