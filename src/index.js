const express = require('express');
const sequelize= require('sequelize');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');
const db = require('./config/database')
const port = 3000;

const app = express();

db.authenticate().then(()=>{
  console.log('conexao com sucesso')
}).catch((err)=>{
  console.log(err)
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute)

app.listen(port, ()=>{
  console.log(`server running at port ${port}`);
})