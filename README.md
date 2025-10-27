# RecipeBook
# The Secret Ingredient

# Project Overview:
"The Secret Ingredient" is a responsive, web-based recipe book designed to provide users with a simple and intuitive platform to manage their favorite recipes. This project was built to demonstrate proficiency in core web technologies and showcase a complete, functional front-end application with data persistence.

**Live Demo:** [https://vutukuruyeshwanth.github.io/RecipeBook/recipe_book/](https://vutukuruyeshwanth.github.io/RecipeBook/recipe_book/)

# Features:
1. User-Friendly Interface: The application is built with a clean, modern design that is easy to navigate on both desktop and mobile devices.
2.Dynamic Recipe Management: Users can easily add new recipes, including a title, a list of ingredients, and preparation steps.
3. Image Uploads: The application supports uploading local image files, which are stored securely in the browser's local storage as a Base64 string.
4. Data Persistence: All recipes are saved in the browser's localStorage and will persist even after the browser is closed or the page is refreshed.
5. Alphabetical Search and Sort: A powerful search bar allows users to quickly find recipes by name or ingredient. The results are automatically sorted in alphabetical order.
6. Detailed Recipe View: Clicking on a recipe card opens a clean, modal window displaying all the recipe details.
7. In-App Redirect Logic: Refreshing the main recipe page automatically redirects the user back to the landing page, creating a specific, intentional user flow. This behavior is managed using sessionStorage.
8. Recipe Deletion: To give users full control over their recipe collection, a delete option was added. A small 'x' button appears when a user hovers over a recipe card. This feature allows users to easily remove unwanted recipes from the list and from local storage, with a confirmation prompt to prevent accidental deletions.

## Technologies Used
* **HTML5:** For the structure and content of the website.
* **CSS3:** For all styling, layout, and responsive design.
* **JavaScript:** (Assumed) To power the interactive features like adding and searching for recipes.

# How to Use the Website:
1. Clone the Repository:
git clone https://github.com/vutukuruyeshwanth/RecipeBook.git

2. Open the Project:
Open the index.html file in your web browser.
Click "Go to Recipes" to navigate to the main application.

3. Adding a Recipe:
On the Recipes page, fill out the form with the recipe details.
Click the "Choose File" button to upload an image.
Click "Add Recipe." The recipe will be saved in your browser's local storage, and an alert will confirm the successful addition.

4. Searching for a Recipe:
The Recipes page initially displays a quote. To see your recipes, use the search bar.
Type a keyword (e.g., "biryani" or "chicken"). The matching recipes will appear automatically, sorted alphabetically.

5. Viewing Details:
Click on a recipe card to view the full details in a pop-up modal.

6. Deleting a Recipe:
Hover over a recipe card to reveal a red 'x' button in the corner.
Click the 'x' button and confirm the deletion. An alert will notify you of the successful deletion.

# Future Enhancements:
Adding an "Edit" button to modify existing recipes.
Implementing categories or tags for filtering.
Building a feature to print recipe details.

## Getting Started
To run this project locally:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/vutukuruyeshwanth/RecipeBook.git](https://github.com/vutukuruyeshwanth/RecipeBook.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd RecipeBook/recipe_book
    ```
3.  Open the `index.html` file in your favorite web browser to see the home page, or open `Recipes.html` to see the main application.

## Contact
For any questions or feedback regarding this project:
* **Email:** [thesecretingredient31@gmail.com](mailto:thesecretingredient31@gmail.com)
* **Phone:** +91 8019483579

---

# Project Structure
/RecipeBook/
├── images/
│   └── Logo.png
├── index.html
├── recipes.html
├── style.css
└── README.md
