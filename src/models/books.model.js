'use strict';

const dbConn = require('./../../config/db.config');

var Book = function(books){
    this.book_name = books.book_name,
    this.book_category = books.book_category,
    this.book_details = books.book_details
    this.book_author = books.book_author,
    this.book_publisher = books.book_publisher,
    this.thumbnail = books.thumbnail,
    this.book_isbn = books.book_isbn,
    this.book_status = books.book_status,
    this.created_at = new Date(),
    this.updated_at = new Date()   
};
Book.create = function (newBook, result) {
    dbConn.query("INSERT INTO books set ?", newBook, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.affectedRows);
      result(null, res.insertId);
    }
    });
};

Book.delete = function(id, result){
    dbConn.query("DELETE FROM books WHERE id = ?", [id], function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Book.findAll = function(result){
    dbConn.query("SELECT * FROM books", function(err,res){
        if(err){
            result("error: ", err)
        }else{
            result(null,res)
        }
    });
};
Book.findAvailableBooks = function(result){
    dbConn.query("SELECT * FROM books WHERE book_status = 0", function(err,res){
        if(err){
            result("error: ", err)
        }else{
            result(null,res)
        }
    });
}

Book.findById = function(id, result){
    dbConn.query("SELECT * FROM books WHERE id = ? ", [id],  function(err, res){
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Book.update = function(id, books, result){
    dbConn.query("UPDATE books SET book_name = ?, book_category = ?, book_details=? , book_author=?, book_publisher=?, thumbnail=?, book_isbn=?,book_status=? WHERE id = ?",
    [books.book_name, books.book_category, books.book_details, books.book_author, books.book_publisher,books.thumbnail,books.book_isbn,books.book_status,id],function(err,res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Book.findAllBookDetails = function(book_author, result){
    dbConn.query("SELECT a.book_name,a.book_details, a.book_isbn, a.thumbnails, a.book_status,b.author_name, b.author_detais, c.category_name, d.publisher_name, d.publisher_details FROM books a,author b, category c, publisher d WHERE a.book_author = ",[book_author] ,function(err,res){
        if (err){
            result(err, null)
        }else{
            result(null,res);
        }
    })
}

// Book.userBuyBook = function()
Book.userBuyBook = function(id, books, result){
    dbConn.query("UPDATE books SET book_name = ?, book_category = ?, book_details=? , book_author=?, book_publisher=?, thumbnail=?, book_isbn=?,book_status=1, WHERE id = ?",
    [books.book_name, books.book_category, books.book_details, books.book_author, books.book_publisher,books.thumbnail,books.book_isbn,id],function(err,res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

module.exports = Book;
