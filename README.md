Recipe Book Web Application
This is a simple web-based Recipe Book application that allows users to add, view, and search for their favorite recipes. It's built as a front-end application using standard web technologies.

Features:
Add New Recipes: Users can input the recipe name, an optional image URL, a list of ingredients, and detailed preparation steps.

View All Recipes: All saved recipes are displayed in a responsive grid format.

Recipe Details: Clicking on any recipe card opens a pop-up modal displaying its full details, including a larger image, complete ingredients list, and all preparation steps.

Delete Recipe: An option to delete a recipe is available within its detail view.

Search Functionality: Users can search for recipes by entering keywords that match recipe names or ingredients.

Data Persistence: All recipes are saved locally in the browser's Local Storage. This ensures that recipes remain available even if the user closes the browser or refreshes the page.

User-Friendly Interface: The application is designed with a clear and intuitive layout, making it easy to navigate and use.

Technologies Used:
HTML5: For structuring the content and defining the elements of the web application.

CSS3: For styling the application, making it visually appealing, and ensuring responsiveness across different screen sizes.

JavaScript (Vanilla JS): For all interactive functionalities, including form handling, dynamic content generation, modal management, search logic, and persistent data storage using localStorage.

How to Set Up and Run Locally:
Clone or Download the Repository:

If you have Git installed, open your terminal or command prompt and run:

git clone https://github.com/YOUR_USERNAME/Recipe-Book.git

(Replace YOUR_USERNAME with your actual GitHub username, e.g., satvik55).

Alternatively, you can download the project as a ZIP file from GitHub and extract it to your desired location.

Navigate to the Project Directory:
Open your terminal or command prompt and change your current directory to the Recipe Book folder:

cd "Recipe Book"

Open index.html:
Simply open the index.html file in your preferred web browser (e.g., Google Chrome, Mozilla Firefox). You can do this by double-clicking the file in your file explorer or by dragging it directly into an open browser window.

The application should now be running in your browser, ready for you to add your favorite recipes!

Project Structure:
Recipe Book/
├── index.html
├── style.css
├── script.js
└── README.md

index.html: The main HTML file that defines the structure of the web application.

style.css: Contains all the CSS rules for styling the application, including layout, colors, and responsive design.

script.js: Contains all the JavaScript logic for handling user interactions, managing recipes, implementing search, and using local storage for persistence.

README.md: This file, providing a description of the project, its features, technologies used, and instructions for setup.

Author:
Satvik (satvik55)