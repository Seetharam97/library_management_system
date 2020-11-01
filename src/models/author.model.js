'use strict';

const dbConn =  require('./../../config/db.config');

var Author = function(author){
    this.author_name = author.author_name;
    this.author_details = author.author_details;
    this.created_at = new Date();
    this.updated_at = new Date();   
};

Author.create = function(newAuthor, result){
    dbConn.query("INSERT INTO author set ?", newAuthor, function(err,res){
        if(err){
            result(err)
        }else{
            console.log(res.insertId);
            result(newAuthor);
        }
    })
}

module.exports = Author;