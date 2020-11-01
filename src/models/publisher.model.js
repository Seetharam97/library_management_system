'use strict';

const dbConn = require('./../../config/db.config')

var Publisher  = function(publisher){
    this.publisher_name = publisher.publisher_name,
    this.publisher_details = publisher.publisher_details,
    this.created_at = new Date(),
    this.updated_at = new Date()
}

Publisher.create = function(newPublish, result){
    dbConn.query("INSERT INTO publisher set ?", newPublish, function(err,res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.affectedRows)
            result(null, res.insertId);
        }
    })
}

module.exports = Publisher;