'use strict';

const Book_category = require('../models/books_category.model');

exports.create = function(req, res){
    const newCategory = new Book_category(req.body);
    if((req.body.constructor === Object && Object.keys(req.body).length === 0)){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Book_category.create(newCategory, function(err,category){
            if(err){
                res.send(err)
            }else{
                res.json({message: "add book category sucessfully", data: category });
            }
        })
    }
}