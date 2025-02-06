let ingredients = 
vegetables: ["carrots", "celery", "spinach", "kale", "tomatoes", "onions", "potatoes", "cucumbers", "peppers", "broccoli"],
poultry: ["chicken", "turkey", "ham", "bacon", "beef", "lamb", "pork", "venison", "salami", "sausage"],
carbohydrates: ["rice", "pasta", "quinoa", "bread", "oats", "barley", "buckwheat", "whole wheat", "flax", "corn"]
};

let methods = ["grilled", "baked", "fried", "roasted", "boiled", "steamed", "broiled", "smoked", "marinated", "sauteed"];


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipe() {
  const ingredient = getRandomElement(ingredients);
  const method = getRandomElement(methods);

  
  let recipe = `Cook ${ingredient} by ${method}.`;


  const recipeDiv = document.getElementById('recipe');
      recipeDiv.innerHTML = recipe;
  }

document.getElementById('generateRecipeBtn').addEventListener('click', generateRecipe);
