import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
        
    },
    author: {
        type: String,
        required: true,
        maxlength: 60,
        
    },
    price: {
        type: Number,
        required: true,
        
    },
    imageUrl: {
        type: String,
        required: true,
        
    },
    featured: {
        type: Boolean
        
        
    },
    
    
},
{timestamps: true}
)

export default mongoose.models.Book || mongoose.model("Book", bookSchema)