'use strict';

const Publisher = require('../models/publisher.model')

exports.create = function(req, res){
    console.log(req.body);
    const newPublisher = new Publisher(req.body)
    // console.log(newPublisher);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, message: "req is not be an empty"})
    }else{
        Publisher.create (newPublisher, function(err, data) {
            if (err){
                res.send(err);
            }else{
                res.json({message: "Publisher added successfully", data: data})
            }
        })
    }
}
