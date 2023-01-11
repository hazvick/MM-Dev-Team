


/**
 * Söker genom recept baserat på ingrediens.
 * Använder först toLowerCase() sen jämför med includes().
 * Använder sen .some() för att se om minst ett element är lika med input.
 * Använder sen filter för att filtrera till de recept.
 * Användning av toLowerCase() minskar buggchansen.
 */
function search() {
    // Get the search input value
    var searchInput = document.getElementById("searchInput").value;

    // Retrieve the JSON data from the file
    fetch("recipies.json")
        .then(response => response.json())
        .then(data => {
            // Filter the data based on the search input
            var results = data.filter(recipe => {
                return recipe.ingredients.some(ingredient => {
                    return ingredient.name.toLowerCase().includes(searchInput.toLowerCase());
                });
            });

            console.log(results);

            // Get the container element where the recipe list will be displayed
            var recipeContainer = document.getElementById("recipe-container");

            // Clear the container
            recipeContainer.innerHTML = "";

            // Create a new list element for each recipe
            results.forEach(recipe => {
                var recipeItem = document.createElement("li");
                recipeItem.innerHTML = `
                <a href="#" class="flex flex-row mx-auto mb-4 ml-2 mr-2 items-center bg-white border rounded shadow-md hover:bg-gray-100">
                    <img class="object-cover rounded w-36 h-36 ml-4 mt-2 mr-2 mb-2" src="${recipe.img}" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${recipe.name}</h5>
                        <p class="mb-3 font-normal text-gray-700">${recipe.description}</p>
                        <div class="grid grid-flow-col auto-cols-max">
                            <span class="w-28 h-8 bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                <svg class="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                                ${recipe.preparationTime} minutes
                            </span>
                            <span class="w-28 h-8 bg-orange-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                <svg class="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"/></svg>
                                ${recipe.calories} kcal
                            </span>
                            <span class="w-28 h-8 bg-green-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                <svg class="w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                                ${recipe.difficulty}
                            </span>
                        </div>
                    </div>
                </a>
                `;
                recipeContainer.appendChild(recipeItem);
            });
        })
        .catch(error => console.log(error));
}
