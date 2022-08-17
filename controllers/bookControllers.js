import Book from "../models/Book"

//GET all books

const allBooks = async (req, res) => {
    try {
        const books = await Book.find()

        res.status(200).json({
            success: true,
            books
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
       
}

// Create new book = /api/books

const newBook = async (req, res) => {

    try {
        const book = await Book.create(req.body);
        
    res.status(200).json({
        success: true,
        book
    })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}

// Get book details = /api/books/[id]

const getSingleBook = async (req, res) => {

    try {
        const book = await Book.findById(req.query.id);

        if(!book) {
            return res.status(404).json({
                success: false,
                error: "Book not found with this ID"
            })

        }

        res.status(200).json({
            success: true,
            book
        })
        
    
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}
// Update book details = /api/books/[id]

const updateSingleBook = async (req, res) => {

    try {
        let book = await Book.findById(req.query.id);

        if(!book) {
            return res.status(404).json({
                success: false,
                error: "Book not found with this ID"
            })

        }

        book = await Book.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            
        })

        res.status(200).json({
            success: true,
            book
        })
        
    
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}
// Delete images associated with book

// Delete book details = /api/books/[id]

const deleteSingleBook = async (req, res) => {

    try {
        const book = await Book.findById(req.query.id);

        if(!book) {
            return res.status(404).json({
                success: false,
                error: "Book not found with this ID"
            })

        }

        await book.remove()

        res.status(200).json({
            success: true,
            message: "Book is deleted"
        })
        
    
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}

export {
    allBooks,
    newBook,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook
}