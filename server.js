const mongoose = require("mongoose")
const recipe = require("./models/Recipe")
const dotenv = require("dotenv").config()

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("connected to DB")
    } catch (err) {
        console.log("Error: Issue connecting to Database")
    }
}
connectToDB()



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

// createRecipe()

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

// updateRecipe("68821662514456fb1759081a",  { prepTime: 100 })

async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await recipe.findByIdAndDelete(recipeId)
        console.log("recipe deleted successfully")
    } catch (err) {
        console.log("No recipe with this ID exists.")
    }
}

deleteRecipe('68821399419ed0602a5bfab0')
