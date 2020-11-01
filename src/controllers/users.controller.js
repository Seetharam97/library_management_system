const bcrypt = require('bcrypt');
const User = require('../models/users.model');

exports.register =async function(req, res){
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10)
    const data = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "username": req.body.username,
        "email": req.body.email,
        "mobilenumber": req.body.mobilenumber,
        "password": encryptedPassword,
        "role": 0,
        "created_at": new Date(),
        "updated_at": new Date()
    }
    const newUser = new User(data);
    if (req.body.constructor === Object&&Object.keys(req.body).length === 0){
        res.status(400).send({error: true, message: "req is not an empty"})
    }else{
        User.register(newUser, function(err, users){
            if (err){
                console.log("error appear")
                res.json({error:400, message: "error occured"});
            }else{
                res.json({message: "User register successfully"})
            }
        })
    }
}

exports.login = function(req, res){
    var data = {
        "email": req.body.email,
        "password": req.body.password
    }
    console.log(data);
    User.login(data, function(err, users){
        console.log(users);
        if(err){
            res.send(err);
        }else{
            res.json({message: "login Successful", record: users})
        }
    });
};

