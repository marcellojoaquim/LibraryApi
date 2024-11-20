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
  const book = await Book.findAll({
    raw: true
  })
  if(book){
    return res.status(200).json(book);
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
    book.save();
    return res.status(201).json(book);
  }else{
    return res.status(500).json({
      message: 'Internal error'
    })
  }
}