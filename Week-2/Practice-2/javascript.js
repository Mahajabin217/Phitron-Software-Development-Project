const searchBtn = document.getElementById('searchBtn');
const itemContainer = document.getElementById('itemContainer');

searchBtn.addEventListener('click', () => {
    const query = document.getElementById('search').value.trim();

    // Search meal by first letter
    if (query.length === 1) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
            .then(response => response.json())
            .then(data => {
                itemContainer.innerHTML = '';
                if (data.meals) {
                    data.meals.forEach(meal => {
                        itemContainer.innerHTML += `
                            <div class="meal-card">                              
                                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
                                <h2>${meal.strMeal}</h2>
                            </div>
                        `;
                        mealCard.addEventListener('click', () => {
                            // Show the meal instructions when card is clicked
                            alert(meal.strInstructions);
                        });
                        itemContainer.appendChild(mealCard);
                    });
                } else {
                    itemContainer.innerHTML = '<p>Not Found!</p>';
                }
            });
    }
});
