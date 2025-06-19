import Categories from './Categories';

const books = [
  {
    nameb: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    categories: [Categories.aduls, Categories.children],
    published_date: new Date(2021, 4, 3),
    price: 10.99,
    discount: 10,
    amount: 0
  },
  {
    nameb: "To Kill a Mockingbird",
    author: "Harper Lee",
    categories: [Categories.aduls, Categories.children],
    published_date: new Date(2021, 4, 3),
    price: 12.99,
    amount: 4
  },
  {
    nameb: "1984",
    author: "George Orwell",
    categories: [Categories.aduls],
    published_date: new Date(2021, 4, 3),
    price: 14.99,
    amount: 4
  },
  {
    nameb: "Pride and Prejudice",
    author: "Jane Austen",
    categories: [Categories.aduls, Categories.children],
    published_date: new Date(2021, 4, 3),
    price: 9.99,
    discount: 5,
    amount: 2
  },
  {
    nameb: "The Catcher in the Rye",
    author: "J.D. Salinger",
    categories: [Categories.aduls, Categories.children],
    published_date: new Date(2021, 4, 3),
    price: 11.99,
    discount: 20,
    amount: 0
  },
  {
    nameb: "The Hobbit",
    author: "J.R.R. Tolkien",
    categories: [Categories.aduls],
    published_date: new Date(2021, 4, 3),
    price: 15.99,
    discount: 0,
    amount: 5
  },
  {
    nameb: "Fahrenheit 451",
    author: "Ray Bradbury",
    categories: [Categories.children, Categories.babies],
    published_date: new Date(2021, 4, 3),
    price: 13.99,
    discount: 25,
    amount: 3
  },
  {
    nameb: "Brave New World",
    author: "Aldous Huxley",
    categories: [Categories.aduls],
    published_date: new Date(2021, 4, 3),
    price: 16.99,
    amount: 1
  }
];

export default books;
