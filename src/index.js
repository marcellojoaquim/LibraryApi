const express = require('express');
const sequelize= require('sequelize');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');
const bookRoute = require('./routes/book.routes');
const loanRoute = require('./routes/loan.routes');
const db = require('./config/database');
const Address = require('./models/Address');
const Book = require('./models/Book');
const User = require('./models/User');
const LoansBook = require('./models/LoansBook');
const port = 3000;

const app = express();

(async () => {
  db.authenticate().then(()=>{
    console.log('conexao com sucesso')
  }).catch((err)=>{
    console.log(err)
  })
})();

(async () => {
  await User.sync();
  await Book.sync();
  await Address.sync();
  await LoansBook.sync();
})();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);
app.use('/api/loan', loanRoute);

app.listen(port, ()=>{
  console.log(`server running at port ${port}`);
})