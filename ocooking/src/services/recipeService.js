import axios from "axios";


const recipeService = {
    baseURI: 'http://localhost/spewp/oCooking/wp-backend-oCooking/public/wp-json/wp/v2',

    async loadRecipes() {
        // console.log('je vais charger les recettes');
        const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true');
        // console.log(response);
        return response.data;
    },
    async loadRecipesIngredients() {
        console.log('Je vais charger les recettes')
        // await permet de dire a javascript qu'avant de continuer son traitement, il va devoir attendre que la fonction se termine.
        // préciser await permet d'attendre mais sans bloquer javascript
        const response = await axios.get(recipeService.baseURI + '/ingredient?_embed=true');

        return response.data;
    },
    async loadRecipesTypes() {
        console.log('Je vais charger les types')
        // await permet de dire a javascript qu'avant de continuer son traitement, il va devoir attendre que la fonction se termine.
        // préciser await permet d'attendre mais sans bloquer javascript
        const response = await axios.get(recipeService.baseURI + '/type?_embed=true');

        return response.data;
    },
    async loadRecipesDifficulty() {
        console.log('Je vais charger les difficulty')
        // await permet de dire a javascript qu'avant de continuer son traitement, il va devoir attendre que la fonction se termine.
        // préciser await permet d'attendre mais sans bloquer javascript
        const response = await axios.get(recipeService.baseURI + '/difficulty?_embed=true');

        return response.data;
    },
    async getRecipesByType(selectedType) {
        console.log('Je vais charger les recettes par type')
        // On a decouvert que l'API WP nous permet de filtrer nos résultat
        // Exemple, pour récupérer toutes les recettes qui ont le type de recette d'id 14 (plat principal) j'irais sur le endpoint suivant /recipe?_embed=true&recipe-type=14
        const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&type=' + selectedType);

        return response.data;

    },
    async getRecipesByIngredient(selectedIngredient) {
        console.log('Je vais charger les recettes par ingredient')
        // On a decouvert que l'API WP nous permet de filtrer nos résultat
        // Exemple, pour récupérer toutes les recettes qui ont le ingredient de recette d'id 14 (plat principal) j'irais sur le endpoint suivant /recipe?_embed=true&recipe-type=14
        const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&ingredient=' + selectedIngredient);

        return response.data;

    },
    async getRecipesByDifficulty(selectedDifficulty) {
        console.log('Je vais charger les recettes par difficulty')
        // On a decouvert que l'API WP nous permet de filtrer nos résultat
        // Exemple, pour récupérer toutes les recettes qui ont le difficulty de recette d'id 14 (plat principal) j'irais sur le endpoint suivant /recipe?_embed=true&recipe-type=14
        const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true&Difficulty=' + selectedDifficulty);

        return response.data;

    },
    async getRecipesById(recipeId) {

        // On a decouvert que l'API WP nous permet de filtrer nos résultat
        // Exemple, pour récupérer toutes les recettes qui ont le difficulty de recette d'id 14 (plat principal) j'irais sur le endpoint suivant /recipe?_embed=true&recipe-type=14
        const response = await axios.get(recipeService.baseURI + '/recipe/' + recipeId + '?_embed=true');

        return response.data;

    },
};

export default recipeService;