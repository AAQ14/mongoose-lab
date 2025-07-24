const mongoose = require("mongoose")
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: {
        type: String,
        required: false
    },
    prepTime: {
        type: Number,
        required: false
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Hard', 'Medium'],
        default: 'Easy'

    }
})

//model 
const recipe = mongoose.model("Recipe", recipeSchema)

module.exports = recipe