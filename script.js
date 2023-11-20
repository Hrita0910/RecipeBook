function addRecipe() {
    var recipeForm = document.getElementById('recipeForm');
    var recipeList = document.getElementById('recipeList');

    
    var recipeName = document.getElementById('recipeName').value;
    var ingredients = document.getElementById('ingredients').value;
    var instructions = document.getElementById('instructions').value;

    
    var recipeElement = document.createElement('div');
    recipeElement.className = 'recipe';
    recipeElement.innerHTML = `
        <h2>${recipeName}</h2>
        <h3>Ingredients:</h3>
        <p>${ingredients}</p>
        <h3>Instructions:</h3>
        <p>${instructions}</p>
    `;

    
    recipeList.appendChild(recipeElement);

    recipeForm.reset();
}
