import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import contacts from './data/contact.js';

const port = process.env.PORT || 5001;


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/contacts', (req, res) => {
    res.json(contacts);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});