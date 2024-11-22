const LoansBook = require('../models/LoansBook')
const bookCtrl = require('../controllers/book.controller');

exports.find = async (req, res) =>{
    const loan = await LoansBook.findOne()

    if(loan){
        return res.status(200).json(loan);
    } 

    return res.status(404).json({message: 'Not found'});
}

exports.findAll = async(req, res) => {
    const loans = await LoansBook.findAll({
      raw: true
    })
    
    if(loans){
      return res.status(200).json(loans);
    }
    
    return res.status(404).json({message: 'Not found'});
}

exports.create = async (req, res) => {

    // validations

    const dataInicio = req.body.dataInicio;
    const dataFinal = req.body.dataFinal;

    if(dataInicio > dataFinal) {  
      return res.status(400).json({ message: 'A data inicial deve ser anterior à data final' });
    }

    const isAvailable = await LoansBook.isAvailable(req.body.bookId, dataInicio);

    if(!isAvailable) {
      return res.status(409).json({ message: 'Este livro já está emprestado.' });
    }

    // persistence

    const loan = new LoansBook;

    loan.userId = req.body.userId;
    loan.bookId = req.body.bookId;
    loan.dataInicio = dataInicio;
    loan.dataFinal = dataFinal;

    loan.save();

    // increment book count

    bookCtrl.incrementCount(loan.bookId);

    return res.status(201).json(loan);
}