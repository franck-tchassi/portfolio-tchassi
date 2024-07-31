import kasa1 from './assets/images/kasa/kasa1.webp'
import kasa2 from './assets/images/kasa/kasa2.webp'
import kasa3 from './assets/images/kasa/kasa3.webp'
import kasa4 from './assets/images/kasa/kasa4.webp'

import gremoire1 from './assets/images/gremoire/accueil.webp'
import gremoire2 from './assets/images/gremoire/ajouter.webp'
import gremoire3 from './assets/images/gremoire/signup.webp'
import gremoire4 from './assets/images/gremoire/single.webp'

import sophie4 from './assets/images/sophie/login.webp'
import sophie1 from './assets/images/sophie/sophie1.webp'
import sophie2 from './assets/images/sophie/sophie2.webp'
import sophie3 from './assets/images/sophie/sophie3.webp'

import kasa from './assets/images/kasa/kasa2.webp'
import gremoire from './assets/images/gremoire/signup.webp'
import sophie from './assets/images/sophie/login.webp'


export const travaux = [
    {
        id:"1",
        title: "Front-end du site kaza",
        description: "Pour Kasa, un leader de la location d'appartements entre particuliers en France, j'ai pris en charge la refonte totale de leur site web en utilisant React. Malgré l'absence temporaire du back-end, j'ai réussi à développer l'ensemble de l'application, les composants React, et les routes React Router en mobile first.",
        tags: ["React", "Sass", "Vite", "Javascript"],
        pictures: [
            kasa1,
            kasa2,
            kasa3,
            kasa4
        ],
        image: kasa,
        category: "front-end"

        
    },
    {
        id:"2",
        title: "Développement du back-end d'un site de notation de livres",
        description: "J'ai développé le back-end d'un site web de notation de livres, permettant aux utilisateurs de créer des comptes, d'ajouter des livres, et de laisser des évaluations détaillées. Le site offre une gestion complète des utilisateurs, des livres, et des notes grâce à une API RESTful robuste construite avec Node.js et Express. L'intégration de MongoDB assure une gestion efficace des données, tandis que les fonctionnalités d'authentification sécurisée garantissent la protection des informations des utilisateurs. Ce projet démontre mon expertise en développement back-end, gestion de bases de données et création d'API RESTful.",
        tags: ["Node.js", "Express.js", "MongoDB", "API REST", "Back-End"],
        pictures: [
           gremoire1,
           gremoire2,
           gremoire3,
           gremoire4
        ],
        image: gremoire,
        category: "back-end"
        
    },
    {
        id:"3",
        title: "Front-end du site Sophie Bluel",
        description: "j'ai contribué à la conception du site portfolio de Sophie Bluel, architecte d'intérieur. Mon rôle en tant que développeur front-end a impliqué la création de la page de présentation, de la page de connexion de l'administrateur, et d'une modale d'upload de médias.",
        tags: ["HTLM", "CSS", "Javascript", "Github", "Swagger"],
        pictures: [
            sophie4,
            sophie1,
            sophie2,
            sophie3
        ],
        image: sophie,
        category: "front-end"
        
    }
]

