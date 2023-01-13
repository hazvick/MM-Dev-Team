
let ingredientPrices = {
    "gurka": 12,
    "tomat": 13
}




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
                <div class="container mx-auto mb-10">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full mx-2 sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <div href="javascript:void(0)" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" data-flipped="false">
                                <div class="front">
                                    <div class="relative pb-48 overflow-hidden">
                                        <img class="absolute inset-0 h-full w-full object-cover" src="${recipe.img}" alt="">
                                    </div>
                                    <div class="p-4">
                                        <span class="inline-block px-2 py-1 leading-none bg-gray-200 text-gray-800 rounded-full font-semibold uppercase tracking-wide text-xs">${recipe.difficulty}</span>
                                        <h2 class="mt-2 mb-2  font-bold">${recipe.name}</h2>
                                        <p class="text-sm">${recipe.description}</p>
                                        <div class="mt-3 flex items-center">
                                            <span class="text-sm font-semibold">≈</span>&nbsp;<span class="font-bold text-xl">${recipe.price}</span>&nbsp;<span class="text-sm font-semibold">SEK</span>
                                        </div>
                                    </div>
                                    <div class="p-4 border-t border-b text-xs text-gray-700">
                                        <span class="flex items-center mb-1">
                                            <i class="fa-solid fa-user-group mr-2 text-gray-900"></i> ${recipe.portions} portioner
                                        </span>
                                        <span class="flex items-center mb-1">
                                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> ${recipe.preparationTime} minutes
                                        </span>
                                        <span class="flex items-center">
                                            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> ${recipe.calories} kcal, fat ${recipe.fat}g, carbs ${recipe.carbs}g, protein ${recipe.protein}g
                                        </span>        
                                    </div>
                                    <button id="accordion-button" class="w-full p-4 border-t border-b text-xs text-gray-700" onclick="acc()">Visa ingredienser och instruktioner.</button>
                                    <div class="relative">
                                        <div class="overflow-hidden hidden" id="accordion-content" aria-hidden="true">
                                            <div class="p-4 flex text-sm text-gray-600">
                                                <ul class="text-xs">
                                                    ${recipe.ingredients.map(ingredient => `<li class="w-40">${ingredient.name}</li>`).join('')}
                                                </ul>
                                                <ul class="text-xs">
                                                    ${recipe.instructions.map((instruction, index) => `<li>${index + 1}. ${instruction}</li><br>`).join('')}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                recipeContainer.appendChild(recipeItem);
            });
        })
        .catch(error => console.log(error));
}