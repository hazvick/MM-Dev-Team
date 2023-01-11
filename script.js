var selectedIcon = null;

function changeColor(element) {
    if (selectedIcon) {
        selectedIcon.classList.remove("text-green-600");
    }
    element.children[0].classList.add("text-green-600");
    selectedIcon = element.children[0];
}


/recipe/namnPåRecept
/ingredient/namnPåRåvara
/nutrient/namnPåVitamin

kalcium