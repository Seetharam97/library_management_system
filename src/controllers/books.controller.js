'use strict';

const Book = require('../models/books.model')

exports.create = function(req, res) {
    const new_book = new Book(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Book.create(new_book, function(err, books) {
      if (err){
      res.send(err);
      }else{
      res.json({message:"books added successfully!",data:books});
      }
    });
    }
};

exports.delete = function(req, res){
    console.log("delete in controller")
    Book.delete(req.params.id, function(err, books){
        if(err){
            res.send(err);
        }
        else{
            res.json({message: "Book deleted successfully"});
        }
    });
};

exports.findAll = function(req, res){
    var role =req.params.role
    if (role == 0){
    console.log("findAll in controller")
    Book.findAll(function(err, books){
        if (err){
            res.send(err);
        }else{
            res.json({message: "books", data: books})
        }
    });
}else{
    Book.findAvailableBooks(function(err, books){
        if (err){
            res.send(err);
        }else{
            res.json({message: "books", data: books})
        }
    });

}
};

exports.findById = function(req, res){
    console.log("find by id");
    Book.findById(req.params.id, function(err, books){
        if(err){
            res.send(err);
        }else{
            res.json({message: "Book", data: books})
        }
    });
};

exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }
    else {
        Book.update(req.params.id, new Book(req.body), function(err,books){
            if(err){
                res.send(err)
            }else{
                res.json({message: "Successfully updated", data: books})
            }
        })
      }
}
exports.findAllBookDetails = function(req, res){
    Book.findAllBookDetails(req.params.book_author, function(err, books){
        if(err){
            res.send(err);
        }else{
            res.json({message: "Book", data: books})
        }
    });
};

exports.userBuyBook = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }
    else {
        Book.userBuyBook(req.param.id, new Book(req.body),function(err, books){
            if(err){
                res.send(err)
            }else{
                res.json({message: "You got a book", data: books})
            }
        })
    }
}
