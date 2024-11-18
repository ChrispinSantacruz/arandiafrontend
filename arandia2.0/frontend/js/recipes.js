const API_URL = 'http://localhost:8080/recipes';

document.addEventListener('DOMContentLoaded', () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(recipes => {
      const recipeList = document.getElementById('recipe-list');
      recipeList.innerHTML = recipes
        .map(
          recipe => `
          <div class="recipe">
            <h3>${recipe.titulo}</h3>
            <p>${recipe.instrucciones}</p>
          </div>
        `
        )
        .join('');
    })
    .catch(err => console.error(err));
});
