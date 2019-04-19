/*eslint-env browser*/

/*//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper*/

var favRecipe = {
    title: "Guacamole",
    servings: 3,
    ingredients: ["3 Avocados", "1 lime", "1 teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 pinch ground Pepper"]
},
    i;

window.console.log(favRecipe.title);
window.console.log('Servings: ' + favRecipe.servings);
window.console.log('ingredients: ');
for (i = 0; i < favRecipe.ingredients.length; i += 1) {
    window.console.log(favRecipe.ingredients[i]);
}