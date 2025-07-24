const mongoose = require("mongoose")

async function connectToDB() {
    try {
        await mongoose.connect("mongodb+srv://amna:R77-mmn@cluster0.r5cujz5.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to DB")
    } catch (err) {
        console.log("Error: Issue connecting to Database")
    }
}
connectToDB()

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
        type: [String],
        enum: ['Easy', 'Hard', 'Medium'],
        default: 'Easy'

    }
})

//model 
const recipe = mongoose.model("Recipe", recipeSchema)

async function createRecipe(newRecipe) {
    try {
        const newRecipe = {
            name: "Um Ali",
            ingredients: ["Puff Pastry", "Milk"],
            instructions: "bake at 180C",
            prepTime: 120,
            difficulty: "Medium"
        }

        const createdRecipe = await recipe.create(newRecipe)
        console.log(createRecipe)
    } catch (err) {
        console.log("Failed to create recipe.")
    }
}

createRecipe()

async function getAllRecipes() {
   try{
     const allRecipes = await recipe.find()
        console.log(allRecipes)
    allRecipes.forEach((recipe)=>{
        console.log(`${recipe.name} is an ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`)
    })
   }catch(err){
    console.log(err)
   }
}

getAllRecipes()

async function updateRecipe(recipeId, newRecipeData) {
    try{
    const updatedRecipe = await recipe.findByIdAndUpdate(recipeId, newRecipeData)
    console.log("recipe updated successfully")
    }catch(err){
        console.log("recipe is not updated......")
    }
}


async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await recipe.findByIdAndDelete(recipeId)
        console.log("recipe deleted successfully")
    } catch (err) {
        console.log("No recipe with this ID exists.")
    }
}

deleteRecipe('68808a716be8717f9161ceac')