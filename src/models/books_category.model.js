'use strict';

const dbConn = require("./../../config/db.config");

var Book_category = function(category){
    this.category_name = category.category_name,
    this.created_at = new Date(),
    this.updated_at = new Date()
};

Book_category.create = function(newCategry, result){
    dbConn.query("INSERT INTO books_category set ?", newCategry, function(err,res){
        if (err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res.insertId);
        }
    });
}

module.exports = Book_category;