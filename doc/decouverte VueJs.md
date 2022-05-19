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

## PROPS ET DATA

Dans un composant je peux fabriquer deux types de "petites boites" : - les props : qui sont des "propriétés publiques" et je pourrais y acceder depuis l'exterieur - les datas : qui sont des "propriétés privés"

Dans ClickCounter.vue

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

## Events

Pour poser un écouter d'evenement sur élement je vais utliser la notation suivante

```
<element @NomDeLEvent="NomDeLaMethodeAExecuter">
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

Je peux donner un attribut a un élément et lui donner une valeur grace a une varaible javascript
