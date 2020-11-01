const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books.controller.js');
const bookCategoryController = require('../controllers/books_category.controller.js')
const authorController = require('../controllers/author.controller.js')
const publisherController = require('../controllers/publisher.controller.js')
const userController = require('../controllers/users.controller.js')

// create a new book
router.post('/admin/addBooks', bookController.create)
router.get('/allBooks', bookController.findAll)
router.get('/admin/getBookById/:id', bookController.findById)
router.put('/admin/updateBook/:id', bookController.update)
router.delete('/admin/deleteBooks/:id', bookController.delete)

// create a book_category
router.post('/admin/addBookCategory', bookCategoryController.create)

// create an author
router.post('/admin/addAuthor',authorController.create)

// create a Publisher
router.post('/admin/addPublisher', publisherController.create)
// User module
router.post('/register',userController.register )
router.post('/login', userController.login)
router.get('/users/getAllBooks/:role', bookController.findAll)
router.get('findAllBookDetails/:book_author', bookController.findAllBookDetails)
router.post('userBuyBook/:id', bookController.userBuyBook)

module.exports = router