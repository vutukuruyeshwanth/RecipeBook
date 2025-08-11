window.onload = function() {
    if (sessionStorage.getItem('fromHome') !== 'true') {
        window.location.herf = 'index.html';
    }

    sessionStorage.removeItem('fromHome');   vf
}

// Get DOM elements
const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('recipeModal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.querySelector('.close-button');

let recipes = [];

// --- Storage Functions ---

// Save recipes to localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Load recipes from localStorage
function loadRecipes() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
    }
}

//--- Delete Function ---
function deleteRecipe(index) {
    if (confirm('Are you sure you want to delete this recipe?'))
    {
        recipes.splice(index,1);//remove 1 item at specific index
        saveRecipes(); // save the updated list to local storage 
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm)) || 
        recipe.ingredient.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
        displayRecipes(recipes); // Re-render the list to update the UI 
        alert('Recipe deleted successfully!');
    }
}

// --- Display Functions ---

// Render a single recipe card
function createRecipeCard(recipe, index) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="${recipe.name}">
        <button class="delete-button">&times;</button>
    `;
    
    // Add event listener to the delete button
    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the card's click event from firing
        deleteRecipe(index);
    });

    // Add event listener to the card itself (excluding the button)
    card.addEventListener('click', () => showRecipeDetails(recipe));
    
    return card;
}

// Display all recipes in the grid
function displayRecipes(recipeArray) {
    recipeList.innerHTML = ''; // Clear previous recipes

    if (searchBar .value.trim() === '') {
        recipeList.innerHTML = '<p class="text-center">"The secret ingredient is always love." Search for your culinary masterpieces.</p>';
    }

    else if (recipeArray.length === 0) {
        recipeList.innerHTML = '<p>No recipes found. Add a new recipe to get started!</p>';
    } else {
        recipeArray.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipeList.appendChild(card);
        });
    }
}

// Show the detailed recipe view in a modal
function showRecipeDetails(recipe) {
    modalDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        
        <h3>Preparation Steps:</h3>
        <p>${recipe.steps.replace(/\n/g, '<br>')}</p>
    `;
    modal.style.display = 'block';
}

// --- Event Handlers ---

// Handle form submission to add a new recipe
recipeForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('recipeIngredients').value.split('\n').filter(item => item.trim() !== '');
    const steps = document.getElementById('recipeSteps').value;
    const imageFile = document.getElementById('recipeImage').files[0];

    // Validation
    if (!name || !imageFile || ingredients.length === 0 || !steps) {
        alert('Please fill in all fields.');
        return;
    }

    // Use FileReader to convert the image file to a Base64 string
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageDataUrl = event.target.result; // This is the Base64 string

        // Create a new recipe object with the image data
        const newRecipe = { name, image: imageDataUrl, ingredients, steps };
        recipes.push(newRecipe);

        // Save and update UI
        saveRecipes();
        displayRecipes(recipes);

        // Clear the form
        recipeForm.reset();

        alert('Recipe Added Succesfully!');
    };

    reader.readAsDataURL(imageFile); // Start reading the file
});

// Handle search functionality
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );

    filteredRecipes.sort((a,b) => a.name.localeCompare(b.name));
    displayRecipes(filteredRecipes);
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// --- Initialization ---

// Load recipes from storage and display them on page load
function init() {
    loadRecipes();
    displayRecipes(recipes);
}


init();
