// ce module va permettre d'intéragir avec le local storage

// dans la view Login.vue, apres authentification de l'utilisateur, je récupère (en ligne 59) un OBJET userData qui contient le token.
// Je vais donc utiliser dans Login.vue cet utilitaire storage.js pour "sauvegarder" UserData dans localstorage ! 

const storage = {
    // methode qui va nous permettre d'enregistrer une nouvelle entrée dans LocalStorage
    set: function (key, value) {
        // lorsque je vais utiliser storage.js dans Login.vue, je vais utiliser la methode set pour enregister UserData.
        // OR, userData est un OBJET et il est impossible de stocker un objet en localstorage, il nous faudra donc le convertir en JSON (texte brut) pour pouvoir PAR LA SUITE le storer ! 

        //1 - je transforme value en JSON
        const json = JSON.stringify(value);
        //2 - Pour le storer ! 
        localStorage.setItem(key, json)
    },

    get: function (key) {
        // Je vais récupérer un JSON ! 
        // 1- Je récupère l'entrée dans ue variable
        const json = localStorage.getItem(key);
        // 2- je convertis cette entrée en OBJET
        const value = JSON.parse(json);
        // 3- je renvois cet OBJET
        return value;


    },
    // unset permettant de supprimer une entrée de localstorage
    unset: function (key) {
        localStorage.removeItem(key);
    }

};


export default storage;