const { where } = require('sequelize');
const Book = require('../models/Book');
const { raw } = require('express');

exports.find = async(req, res) => {
  const id = req.params.id;
  const book = await Book.findOne({
    where: {id: id}
  })
  if(book){
    return res.status(200).json(book);
  } else {
    return res.status(404).json({message: 'Not found'});
  }
}

exports.findAll = async(req, res) => {
  const sortField = req.query.sortBy || 'id';
  const sortOrder = req.query.order || 'ASC';

  const books = await Book.findAll({
    raw: true,
    order: [[sortField, sortOrder]]
  })
  if(books){
    return res.status(200).json(books);
  } else {
    return res.status(404).json({message: 'Not found'});
  }
}

exports.create = async (req, res) => {
  const book = new Book;
  if(book != undefined){
    book.titulo = req.body.titulo
    book.autor = req.body.autor
    book.genero = req.body.genero
    book.anoPublicacao = req.body.anoPublicacao
    book.count = 0
    book.save();
    return res.status(201).json(book);
  }else{
    return res.status(500).json({
      message: 'Internal error'
    })
  }
}

exports.incrementCount = async (bookId) => {
  const book = await Book.findOne({
    where: {
      id: bookId
    }
  });

  if(!book) {
    return;
  }

  book.count = book.count + 1;

  book.save();
}