const LoansBook = require('../models/LoansBook')

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
    const loan = new LoansBook;

    loan.userId = req.body.userId;
    loan.bookId = req.body.bookId;
    loan.type = req.body.type;
    loan.dataInicio = req.body.dataInicio;
    loan.dataFinal = req.body.dataFinal;

    loan.save();

    return res.status(201).json(loan);
}