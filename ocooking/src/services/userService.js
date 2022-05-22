import axios from "axios";


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

        // console.log(response);
        return response.data;
    }
};

export default userService;