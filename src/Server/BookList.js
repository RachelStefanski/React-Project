import Categories from '../Components/Categories.js';
// // booksList.js
// const categories = require('../categories');

const BookList = [{
      id: 1,
      nameb: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 10.99,
      discount: 10,
      amount: 0,
      numOfRaitings: 10,
      sumOfRaitings: 50
    },
    {
      id: 2,
      nameb: "To Kill a Mockingbird",
      author: "Harper Lee",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 12.99,
      amount: 4,
      numOfRaitings: 10,
      sumOfRaitings: 5
    },
    {
      id: 3,
      nameb: "1984",
      author: "George Orwell",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 14.99,
      amount: 4,
      numOfRaitings: 5,
      sumOfRaitings: 14
    },
    {
      id: 4,
      nameb: "Pride and Prejudice",
      author: "Jane Austen",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 9.99,
      discount: 5,
      amount: 2,
      numOfRaitings: 2,
      sumOfRaitings: 2
    },
    {
      id: 5,
      nameb: "The Catcher in the Rye",
      author: "J.D. Salinger",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 11.99,
      discount: 20,
      amount: 0,
      numOfRaitings: 6,
      sumOfRaitings: 30
    },
    {
      id: 6,
      nameb: "The Hobbit",
      author: "J.R.R. Tolkien",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 15.99,
      discount: 0,
      amount: 5,
      numOfRaitings: 10,
      sumOfRaitings: 15
    },
    {
      id: 7,
      nameb: "Fahrenheit 451",
      author: "Ray Bradbury",
      categories: [Categories.children, Categories.babies],
      published_date: new Date(2021, 4, 3),
      price: 13.99,
      discount: 25,
      amount: 3,
      numOfRaitings: 3,
      sumOfRaitings: 4
    },
    {
      id: 8,
      nameb: "Brave New World",
      author: "Aldous Huxley",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 16.99,
      amount: 1,
      numOfRaitings: 10,
      sumOfRaitings: 10
    }]

    export default BookList;
    // module.exports = {Books}