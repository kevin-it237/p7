L'objectif est de construire un réseau social d'entreprise.

# Installation

**Backend :**
- Créer un fichier .env pour remplir les variables d'environnements:
 - DB_HOST=""
 - DB_DB=""
 - DB_USER=""
 - DB_PASSWORD=""
 - PORT=3000
 - TOKEN="RANDOM_TOKEN_SECRET"

- Cd dossier `Backend`, installer Node et toute les dépendances avec `npm install`
- Lancer le serveur avec `npm run dev`
- npx prisma studio pour accéder au tableau prisma studio 


**Frontend :**
- Créer un fichier .env pour remplir les variables d'environnements:
  - CLIENT_URL=http://localhost:4200
  - PORT=4200

- Cd dossier `Frontend`, installer les dépendances avec `npm install`
- Lancer React avec la commande `npm start`

**Pour créer un compte admin :**

Créer un compte normal en vous inscrivant sur l'application

ensuite dans la base de données taper la commande suivante :

UPDATE user SET isAdmin = ‘1’ WHERE id = ‘(l’id du compte à transformer en admin)’;

Par défaut le serveur client est accessible en local via le port 4200: http://localhost:4200/
