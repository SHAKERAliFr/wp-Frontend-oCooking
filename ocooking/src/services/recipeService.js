import axios from "axios";


const recipeService = {
    baseURI: 'http://localhost/spewp/oCooking/wp-backend-oCooking/public/wp-json/wp/v2',

    async loadRecipes() {
        // console.log('je vais charger les recettes');
        const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true');
        // console.log(response);
        return response.data;
    }

};

export default recipeService;