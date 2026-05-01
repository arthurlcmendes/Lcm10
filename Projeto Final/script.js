function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function searchRecipes() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        const text = recipe.innerText.toLowerCase();
        recipe.style.display = text.includes(input) ? "block" : "none";
    });
}