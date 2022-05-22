# Découverte vuejs

## INSTALLATION

Je peut créer la base de mon projet avec la commande

```
vue ui
```

- Apres avoir tapé cette commande dans le terminal, une fenetre s'ouvre et nous propose de créer un projet vue

  - Je dois me placer au bon endroit, donner un nom au projet, préciser que je gestionnaire de dépendances va etre npm et **SURTOUT** penser a décocher l'option "initialiser un depo git" pour ne pas faire une mise en abyme.
  - Par la suite je peux selectionner un preset ou faire une installation manuelle (option séléctionnée en cours) :
    - On rajoute l'option "préprocessor CSS"
    - Vue 2
    - Dart-SASS pour le préproc
    - Errors only pour le linter

- Apres création du projet un dossier est généré.
  dans ce dernier j'ai un dossier - assets - public - src

Dans le dossier public on trouve le index.html qui sera le "point d'entrée" pour l'utilisateur

Dans le dossier src je trouve :

- un main.js : qui a été génré grace a l'installation, ce dernier va lier le fichier VUE principal avec la div d'id app dans notre "point d'entrée"
- App.vue : ficher principal de notre application

## DECOUVERTE

- 3 grandes sections dans tous les fichiers .vue :

  - template, qui ne pourrra avoir **Qu'un seul** enfant direct.
  - script, "moteur" de notre composant
  - style, pour mettre en place les regles CSS (il est possible de faire directement du SCSS grace a l'attribut

  ```
  <style scoped lang="scss">
  ```

  Le mot clé "scoped" permet d'indiquer que toutes les régles css ne serton appliqués qu'au composant dans lequel je me situe !

- Je dois préciser le nom du composant dans lequel je me situe grâce a la section name dans la partie script :

```js
export default {
  name: "AppClick",
};
```

- Je peux appeler un composant dans un autre :

  - dans la partie script je fais l'import du composant tout en le nommant
  - ```js
    import ClickCounter from "./components/ClickCounter.vue";
    ```
  - Puis toujours dans la partie script je vais indiquer dans la section components le nom du/des composant(s) que je vais utiliser

    ```js
    import ClickCounter from "./components/ClickCounter.vue";
    export default {
      name: "AppClick",
      components: {
        ClickCounter,
      },
    };
    ```

  - Je peux en suite utiliser le component dans la partie template en suivant la syntaxe :

  ```
  <NomDuComposant/>
  ```

## PROPS ET DATA

Dans un composant je peux fabriquer deux types de "petites boites" : - les props : qui sont des "propriétés publiques" et je pourrais y acceder depuis l'exterieur du composant. - les datas : qui sont des "propriétés privés" (on y accede depuis le compsant)

Dans ClickCounter.vue (partie script)

```js
export default {
  name: "ClickCounter",
  components: {},
  // les props sont des "propriétés publiques"
  props: {
    label: String,
  },
  // les "data" en vuejs correspondent au propriétés protected de la poo classique
  data() {
    return {
      clickCount: 0,
    };
  },
};
```

Dans AppClick.vue

```js
<template>
  <div id="app">
    <h1>APP CLICK</h1>
    <ClickCounter label="J'aime le php" />
    <ClickCounter label="J'aime le JS" />
  </div>
</template>
```

Ci dessus, depuis le composant AppClick.vue je viens remplir la props du composant ClickCounter

## SYNTAXE MUSTACHE

Pour afficher le contenu d'une props ou data dans la partie template je vais utiliser la syntaxe mustache :

```js
<template>
  <button>
    {{ label }}, votre de vote : {{ clickCount }}
  </button>
</template>
```

## EVENTS

Pour poser un écouter d'evenement sur élement je vais utliser la notation suivante

```
<element @NomDeLEvent="NomDeLaMethodeAExecuter">
```

Ou la notation suivante qui est similaire :

```
<element v-on:event="NomDeLaMethodeAExecuter">
```

Exemple concret :

```js
<button
      @click="handleClick"
>
```

Je vais retrouver cette methode dans la partie "methods" de ma section script :

```js
export default {
  name: "ClickCounter",
  components: {},

  props: {
    label: String,
  },
  data() {
    return {
      clickCount: 0,
    };
  },
  methods: {
    handleClick: function (evt) {
      evt.preventDefault();
      this.clickCount++;
    },
  },
};
```

Ci dessus j'ai été contraint de faire un evt.preventDefault(); Car notre cadre est tellemnt strict qu'il nous est impossible de déclarer une variable/parametre/composant dans l'utiliser !

Pour intéragir avec mes data depuis une methode, je devrais utiliser le mot clé "this"

```js
 methods: {
      handleClick: function(evt){
          evt.preventDefault();
          this.clickCount++;
      }
  }
```

## ATTRIBUTS

Avec la notation :

```
<element :html_attribute="variable_javascript">
```

Je peux donner un attribut a un élément et lui donner une valeur grace à une "variable" javascript

Attention si j'utilise cette syntaxe SANS les ":", je vais remplir l'attribut avec du texte

exemple

```
<article :class="variable_javascript">
```

Ci dessus l'article aura pour classe le contenu de la "variable_javascript"

```
<article class="variable_javascript">
```

Ci dessus l'article aura pour classe "variable_javascript"

## COMPUTED

Je peux, dans la partie script, fabriquer des fonctions dans une section "computed".
Ces fonctions pourront etre appellées coté template pour dynamiser un attribut html.

exemple coté template :

```html
<template>
  <article :class="classArticle">...</article>
</template>
```

dans la balise article je vais déterminer la classe de manière dynamique ! En effet avec la syntaxe

```
:class="classArticle"
```

je peux indiquer une fonction existante dans la section computed

```js
  computed: {
      classArticle(){
        if(this.click%2==0){
            return "pair";
        }else{
            return"impair";
        }
      }
  }
```

Et coté template, le nom de cette fonction va etre remplacé par ce que cette dernière va nous renvoyer !

**ATTENTION** Dans un premier temps nous avions vu que la syntaxe suivante :

```
:attribut="qqchose"
```

Nous permet de remplir un attribut html avec le contenu d'une "variable" javascript qui s'appelerait "qqchose"

Mais nous venons de découvrir qu'il est possible d'indiquer une fonction computed plutot qu'une variable !

**ATTENTION** je ne vais pas pouvoir intéragir "proprement" avec mes data dans les fonctions computed

## V-IF

L'instruction v-if me permet de déterminer l'affiche ou non d'un élement

exemple coté template :

```
<p v-if="estPair">JE SUIS PAIR</p>
<p v-if="estImpair">JE SUIS IMPAIR</p>
```

Si la data "estPair" est considéré comme "true" alors le paragraphe correspondant sera affiché, dans le cas contraire ce paragraphe ne serait pas affiché !

## V-FOR

L'inustruction v-for permet de mettre en place une boucle

```html
<balise v-for="n in 10" :key="n"> itération numéro {{ n }} </balise>
```

**ATTENTION** je suis obligé d'indiquer un identifiant numérique unique pour chaque tour de boucle grace a l'instruction ":key" (cette étape est OBLIGATOIRE)
(analogie, c'est comme si on voulait poser des "étiquettes" sur chaque tour de boucle)

Autre exemple qui nous permet de parcourir un tableau de recettes (recipies)

```
<li
    v-for="recipe in recipes"
    :key="recipe.id"
>
    <RecipeCard :recipeProps="recipe" />
</li>
```

## ROUTER

Il existe un systeme de routing avec vuejs !
Pour pouvoir le mettre en place :

- Soit j'ai coché l'option "router" dans vue ui, dans ce cas le router est déjà installé !
- Soit je n'ai pas encore installé le router et je vais, dans mon projet vueJs, taper la commande suivante :

```
vue add router
```

**MEGA ATTENTION** il faut **IMPERATIVEMENT** faire un commit avant de taper cette commande, en effet cette dernière va detruire le contenu du fichier App.vue !

Apres installation du router, je découvre un nouveau dossier/fichier(router/index.js) + deux ligne de codes qui sont ajoutés coté main.js + un dossier views dans lequel je vais placer tous mes composant qui sont utilisés dans mes routes.

**ATTENTION** a ne pas confondre une view d'un component (view = .vue associé a une URL dans router.js, components = .vue qui sont utilisés dans d'autres .vue)

Par soucis d'organisation, je fabrique un dossier /plugins, je déplace /router/index.js dans ce dernier, je le renomme "router.js" et pour terminer je modifie l'import du router dans le fichier main.js.

```js
import router from "./plugins/router";
```

Dans le fichier router.js je vais trouver mes **ROUTES**

```js
{
  path: '/',
  component: RecipeList,
  name: 'home'
}
```

Ces routes permettent d'associer une **URL** avec un **COMPOSANT**

**ATTENTION** de penser a faire l'import des composants utilisés dans les routes dans le fichier router.js

Question : Mais ou va se charger le composant qui correpond a l'url demandée par l'utilisateur ?

Dans le fichier App.vue nous découvrons un nouvel outil :

```
<router-view/>
```

Ce dernier sera remplacé par le composant qui correspond a l'URL demandé par l'utilisateur.

## Générer un lien a partir d'une route

En S05/S06, dans notre MVC, nous avions découvert un outil qui permet de générer les liens a partir d'un nom de route ($router->generate('nom-de-la-route')).
Nous avons un mécanisme équivalent avec notre router vuerJs

```
<router-link
  :to="{
      name: 'nom-de-la-route'
  }"
>
Texte lien
</router-link>
```

**ATTENTION** si la route est dynamique

```
{
  path: '/recipe/:partieDynamique',
  component: Recipe,
  name: 'recipe'
}
```

J'utiliserais la syntaxe suivante :

```html
<router-link
  :to="{
      name:'recipe',
      params: {
          id: valeurDeLaPartieDynamique
      }
  }"
>
  Texte Lien
</router-link>
```

## CUSTOM EVENTS

Lorsque j'ajoute un écouteur d'events sur un élément dans un composant, exemple @click sur un button, les composants parents de ce dernier **ne sont pas au courant** de l'existance de cet event !

On imagine un composant <Article/> dans un composant <App/>
Si je clic sur un bouton dans un composant <Article/>, le composant parent <App/> n'est pas au courant qu'on a cliqué sur le bouton de l'article.

Pour permettre "l'écoulement" de cet event vers le composant parent, nous allons emettre un event custom !

Pour ce faire j'utilise l'insctruction suivante :

```js
this.$emit("nom-event-custom", donnesATransmettre);
```

exemlpe, quand je clic sur le bouton dans mon composant article :

```js
handleClick(evt){
  evt.preventDefault();
  this.$emit(
      'article-clic-event',
      this.click // on transporte le nombre de clic
  );
}
```

dans le composant parent, il ne me reste plus qu'a "écouter" l'event "article-clic-event"

dans App, coté template :

```js
<Article v-on:article-clic-event="MethodeAExecuter" />
```

Dans la partier script, section methods, il ne me reste plus qu'a écrire la methode "MethodeAExecuter"

```js
methods:{
  MethodeAExecuter(DonnesTransmisesParLeCustomEvent){

  }

}
```

## EVENT BUBBLING

Dans l'idéal on fera remonter l'event sur toute la chaine des parents !

## V-MODEL

Il existe une instruction magique grace à laquelle nous allons pouvoir lier **la value d'un élement HTML de formulaire** avec une **DATA** vuejs.

coté template :

```html
<input v-model="uneData" />
```

coté script :

```js
data(){
  return{
    uneData:'',
  };
},
```

Dès que je vais taper du texte dans mon input (et donc changer sa value) le contenu de la data sera automatique mis a jour (avec les nouvelles valeurs tapés par l'utilsateur dans l'input)

## AXIOS

Axios est une dépendance que nous avons installés grace a npm

```
npm install axios
```

Cet outil va nous permettre de faire des requettes AJAX !
Pour rappel, en S07, nous avions fait des requettes AJAX en utilisant :

```
- fetch ( https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch )
- then ( https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then )
```

Pour réaliser une requete avec axios, il faut dans un premier temps l'importer :

```
// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';
```

Puis j'utiliserais la syntaxe suivante :

```
axios.methodeHTTP(
  endpoint,
  corpsRequete,
  options
)
```

exemple :

```
axios.get(
  'https://swapi.dev/api/people'
)
```

Dans l'exemple ci dessus je ne donne qu'un argument, et c'est tout a fait normal, j'utilise la methode HTTP "get" je ne vais donc pas transmettre de donnes a mon API

autre exemple :

```js
const response = await axios.post(
  userService.baseURI + "/token", // endpoint
  {
    // corps de ma requete
    username: login,
    password: password,
  }
);
```

Dans l'exemple ci dessus je vais envoyer des donnés a l'API par le bias de ma requete !

autre exemple :

```js
let options = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
const response = await axios.post(
  userService.baseURI + "/token/validate",
  null,
  options
);
```

Dans l'exemple ci dessus, je vais ajouter une entrée au header de ma requete sans avoir de "corps" pour la requete.
Pour rappel, nous sommes obligès de transmettre le token dans le header de la requete

### CATCH

Je peux peux enchainer ma requete axios avec un .catch, si une erreur est détectée, je vais executer la fonction qui se trouve dans ce dernier.
exemple :

```js
const response = await axios
  .post(userService.baseURI + "/token", {
    username: login,
    password: password,
  })
  .catch(
    // gestion des erreurs
    // si j'ai une erreur je vais atterir dans le .catch
    function () {
      console.log("on a une erreur");
      return false;
    }
  );
```

### AWAIT / ASYNC

Lorsque j'utilise axios, je vais faire une requete asynchrone, en effet il peut se passer un certain temps avant d'avoir une reponse de mon API, et pour ne pas bloquer l'execution du script en attendant cette reponse nous utiliserons toujours le mot clé **await** avant une requete AXIOS.

exemple :

```js
const response = await axios.get(endpoint);
```

**ATTENTION** si cette instruction se situe dans une methode, il nous faut impérativement placer le mot clé **async** avant le nom de cette dernière

exemple :

```js
async loadRecipes(){
  const response = await axios.get(endpoint);
  return response.data;
}
```
