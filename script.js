
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
                                    <div class="flex flex-row p-4 border-t border-b text-xs text-gray-700">
                                        <span class="flex items-center">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"/></svg>
                                            ${recipe.portions} portioner
                                        </span>
                                        <span class="flex items-center ml-4">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                                            ${recipe.preparationTime} minuter     
                                    </div>
                                    <div class="flex flex-row p-4 border-t border-b text-xs text-gray-700">
                                        <span class="flex items-center">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                                            ${recipe.calories} kcal
                                        </span>    
                                        <span class="flex items-center ml-4">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4c-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7L37.9 435.2 9.4 406.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5C136.1 296.2 180.9 231 223.3 169.3l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9c33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1c27.5-24.3 63.4-45.2 117.3-60.6l0 0 .2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2c-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2C327.8 365.9 275.5 442 142.3 508.6c-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"/></svg>
                                            ${recipe.fat}g fett
                                        </span>  
                                        <span class="flex items-center ml-4">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z"/></svg>
                                            ${recipe.carbs}g kolhyd.
                                        </span>  
                                        <span class="flex items-center ml-4">
                                            <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"/></svg>
                                            ${recipe.protein}g protein 
                                        </span>  
                                    </div>
                                    <button id="accordion-button" class="w-full p-4 border-t border-b text-xs text-gray-700" onclick="acc()"><b>Visa ingredienser och instruktioner.</b></button>
                                    <div class="relative">
                                        <div class="overflow-hidden hidden" id="accordion-content" aria-hidden="true">
                                            <div class="p-4 flex text-sm text-gray-600">
                                                <ul class="text-xs">
                                                    ${recipe.ingredients.map(ingredient => `<li class="w-40 mb-1">${ingredient.name}</li>`).join('')}
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