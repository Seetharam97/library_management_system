const bcrypt = require('bcrypt')
const dbConn = require('./../../config/db.config');

var User = function(users){    
    this.first_name = users.first_name,
    this.last_name = users.last_name,
    this.username = users.username,
    this.email = users.email,
    this.mobilenumber = users.mobilenumber,
    this.password = users.password,
    this.role = users.role,
    this.created_at = new Date(),
    this.updated_at = new Date()
}

User.register = function(newUser, result){
    dbConn.query("INSERT INTO users set ?", newUser, function(err,res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.affectedRows)
            result(null, res.insertId);
        }
    })
}

// User.login = async function(data, result){
//     const email = data.email;
//     const password = data.password;
//     dbConn.query("SELECT * FROM users WHERE email = ?",[email], function(err,res){
//         if(err){
//             res.send({"code": 400, "message": "failed"})
//         }else{
//             if(result.length>0){
//                 // process.exit(1);
//                 console.log(result.length)
//                 const comparision = await bcrypt.compare(password. result[0].password)
//             if(comparision){
//                 result(null, res)
//           }
//         }
//         }
//     })
// }
module.exports = User;
