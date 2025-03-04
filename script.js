let ingredients = ["carrots, chicken and broccoli", "celery", "spinach", "kale", "tomatoes", "onions", "potatoes", "cucumbers", "peppers", "ham, mushrooms and pineapple"];
let methods = ["grilled", "baked", "fried", "roasted", "boiled", "steamed", "broiled", "smoked", "marinated", "sauteed"];


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipe() {
  const ingredient = getRandomElement(ingredients);
  const method = getRandomElement(methods);

  
  let recipe = `Cook ${ingredient} ${method}.`;


  const recipeDiv = document.getElementById('recipe');
      recipeDiv.innerHTML = recipe;
  }

document.getElementById('generateRecipeBtn').addEventListener('click', generateRecipe);
