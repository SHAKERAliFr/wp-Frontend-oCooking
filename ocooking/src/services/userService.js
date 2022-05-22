// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';
import storage from '../plugins/storage.js';

const userService = {

    baseURI: 'http://localhost/spewp/oCooking/wp-backend-oCooking/public/wp-json/jwt-auth/v1',

    login: async function (login, password) {
        const response = await axios.post(
            userService.baseURI + '/token',
            {
                username: login,
                password: password
            }
        ).catch(
            // gestion des erreurs
            // si j'ai une erreur je vais atterir dans le .catch
            function () {
                console.log('on a une erreur');
                return false;
            }
        )
        return response.data;
    },

    isConnected: async function () {
        const userData = storage.get('userData');
        if (userData != null) {
            const token = userData.token;
            if (token) {
                let options = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                };
                const response = await axios.post(
                    userService.baseURI + '/token/validate',
                    null,
                    options
                ).catch(
                    function () {
                        // token n'est pas valide
                        return false;
                    }
                );
                return response.data;
            }
        }
        return false;
    }



};

// Pour rendre le recipeService utilisable (importable) par d'autre composants il faut IMPERATIVEMENT l'exporter : 
export default userService;