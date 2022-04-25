import { bookList, addNewBook, contactInfo } from './elements.js';

const redirectToList = () => {
  bookList.style.display = 'flex';
  addNewBook.style.display = 'none';
  contactInfo.style.display = 'none';
};

export default redirectToList;
