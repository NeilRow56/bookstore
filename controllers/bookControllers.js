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

export {
    allBooks,
    newBook
}