const express = require('express');
const app = express();
const fs = require('fs');
const os = require("os");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


mongoose.Promise = global.Promise;


NODE_TLS_REJECT_UNAUTHORIZED='0'




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());	

// api routes
// app.use('/lib/users', require('./users/user.controller'));
// app.use('/lib/admin', require('./admin/admin.controller'));

app.get('/', (req, res) => {
    res.json({"message": "Hello World"});
  });
// books routes
const booksRoutes = require('./src/routes/library.routes')
app.use('/api/v1/books', booksRoutes)
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
