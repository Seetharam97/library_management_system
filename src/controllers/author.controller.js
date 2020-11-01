'use strict';

const Author = require('../models/author.model');

exports.create = function(req,res){
    console.log(req);
    const new_author = new Author(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: "req is an empty"})
    }else{
        Author.create(new_author,function(err,author){
             if(err){
                 res.send(err)
             }else{
                 res.json({message: "author details added successfully", data: new_author})
             }
        })
    }
}