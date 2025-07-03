// server.js
import express from 'express';
import cors from 'cors';
import BookList from './BookList.js';
const app = express();

app.use(express.json());
app.use(cors());

// קריאה לכל הספרים
app.get('/api/books', (req, res) => {
  res.send(BookList);
});

// הוספת ספר חדש
app.post('/api/books', (req, res) => {
  const newBook = { ...req.body };
  newBook.id = BookList.length ? BookList[BookList.length - 1].id + 1 : 1;
  BookList.push(newBook);
  res.status(201).send(newBook);
});

// מחיקת ספר לפי id
app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = BookList.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).send('Book not found');
  BookList.splice(index, 1);
  res.send('Book deleted');
});

//עדכון כמות במלאי
app.put('/api/books/:id/amount', (req, res) => {
  const idNum = parseInt(req.params.id);
  const { amount } = req.body;
  const book = BookList.find(b => b.id === idNum);
  if (book) {
    book.amount = amount;
    res.json(book);
  } else {
    res.status(400).json({ message: 'Book not found' });
  }
});

//הוספת דירוג
app.put('/api/books/:id/rate', (req, res) => {
  const idNum = parseInt(req.params.id);
  const { rate } = req.body;

  const book = BookList.find(b => b.id === idNum);
  if (book) {
    book.sumOfRaitings += rate;
    book.numOfRaitings += 1;
    res.json(book);
  } else {
    res.status(400).json({ message: 'Book not found' });
  }
});


app.listen(3001, () => {
  console.log('📚 Server running at http://localhost:3001');
});
