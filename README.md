# ExpressServer

Toute aide pour améliorer ce template et le maintenir à jour est la bienvenue :heart:

## Dépendances

- NodeJS

## :sunny: Pré-requis

- Pour commencer à utiliser ce projet, créer un fichier de configuration `.env.local` dans le dossier racine
en prenant comme exemple le fichier `.env.local.example`.
Il y a la possibilité d'avoir plusieurs fichiers `.env.*` comme `.env.development`, `.env.test` et `.env.production`,
permettant également d'écraser des variables définies individuellement dans le fichier `.env.*.local` approprié.

## :punch: Utilisation
<details>
  <summary>Initialiser le serveur Node</summary>
  <p>

- Installation des dépendances : `yarn`
- Lancement de votre serveur local : `yarn start`
- Le serveur sera disponible sur le port que vous avez configuré
Par défaut à cette adresse : [http://localhost:3000](http://localhost:3000)

    </p>
  </details>

---

## Commit

Les commits sont soumis à une règle commitlint qui doit être respectée comme ceci : 
```sh
type(scope?): subject
```

Le type doit être choisis parmis : 
- feat
- fix
- docs
- style
- refactor
- test
- revert

Le scope est optionnel, c'est en un mot la catégorie de choses qui a été touchée, et le sujet c'est le "message" du commit, tout en minuscule

Avec la commande ci-dessous, des prompts vont s'afficher afin de vous aider à créer un commit valide :

```shell
$ yarn commit
```

Pour avoir un prompt en cas d'erreur au moment du commit, vous pouvez installer [git-cz](https://www.npmjs.com/package/git-cz) en global sur votre poste

## Versionning automatique

Lors d'un push sur Master, une release PR est automatiquement créée, il suffit de la valider pour que la version du projet ainsi que le changelog soient automatiquement mis à jour (à condition d'utiliser la convention de nommage de commit : `type(scope?): subject` cf au dessus).


---

 ## Liste des scripts

Installe les dépendances nécessaires au bon fonctionnement du projet...
Ces derniers se trouvent dans le fichier `package.json`, et vont venir s’installer dans le dossier `node_modules`.
```sh
yarn
```

Va compiler nos fichiers dans une version qui est nécessaire pour le développement de l’application. Également, grâce à un serveur que l’on va appeler « watcher », l’application va pouvoir se recharger automatiquement lorsque nous effectuons une modification. De cette façon, nous allons voir les modifications de façon quasi instantanée.
```sh
yarn dev
```

Compile et prépare les fichiers sources pour la production.
```sh
yarn build
```

Lance l'application en production, mais nécessite d'avoir fait un build au préalable
```sh
yarn start
```

Vient exécuter tous les tests, une fois. Toutefois, il est possible de tester un fichier en particulier en le passant en tant que paramètre. Par exemple : `yarn test tests/monfichier/xxx/xxx.test.js`
```sh
yarn test
```

Lorsque cette commande est exécutée, le script va faire le tour de l’application (selon les arguments qu’on lui a donné) afin de vérifier que le projet est conforme aux règles ESlint présentes dans le fichier .eslintrc.
```sh
yarn lint
```

Va formater le code de l’application de façon universelle.
```sh
yarn pretty
```