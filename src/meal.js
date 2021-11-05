function nameMenuItem(name) {
  return `Delicious ${name}`
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
};

function addIngredients(ingredient, ingredients) {
  if(ingredients.includes(ingredient)) {}
  else {ingredients.push(ingredient)}
  return ingredients
};

function formatPrice(price) {
  return `$${price}`
};

function decreasePrice(price) {
  return price * 0.90
};

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


