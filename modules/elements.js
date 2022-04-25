const bookContainer = document.getElementById('book-container');
const addButton = document.getElementById('btn-add');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const bookList = document.getElementById('book-list');
const addNewBook = document.getElementById('add-new-book');
const contactInfo = document.getElementById('contact');
const currentDate = document.getElementById('current-date');
const form = document.getElementsByTagName('form')[0];
const error = document.querySelector('.error');

export {
  bookContainer,
  addButton,
  titleInput,
  authorInput,
  bookList,
  addNewBook,
  contactInfo,
  currentDate,
  form,
  error,
};