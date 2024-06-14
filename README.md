# Weather-and-Country-Info-App
      
Introduction
L'application "Weather and Country Info App” fournit aux utilisateurs des informations clés sur les pays et les conditions météorologiques actuelles de différentes villes. 
Ce projet est conçu pour renforcer les compétences en JavaScript, notamment l'utilisation de l'API Fetch, la manipulation du DOM, et l'intégration de services web externes. L'objectif est de fournir une interface conviviale qui offre des informations en temps réel de manière intuitive.


Spécifications (Fonctionnalités)
L'application web comprend les fonctionnalités suivantes :
Récupération des données météorologiques : Permet à l'utilisateur d'entrer le nom d'une ville et de récupérer les informations météorologiques actuelles via l'API OpenWeatherMap.
Récupération des informations sur les pays : Permet à l'utilisateur d'entrer le nom d'un pays et de récupérer le drapeau du pays et de l'afficher sur une carte via l'API Rest Countries et la bibliothèque Leaflet.
Interface utilisateur : Comprend une barre de navigation, des champs de saisie pour entrer le nom de la ville et du pays, des boutons pour déclencher la récupération des données, et des sections pour afficher les résultats.


   Présentation de l'API utilisée

* OpenWeatherMap API :
Cette API fournit des données météorologiques en temps réel pour les villes du monde entier. La documentation est disponible sur OpenWeatherMap.
Paramètres : 
q pour le nom de la ville.
 appid pour la clé API.
 units pour les unités de mesure (métriques).

* Rest Countries API :
Cette API est utilisée pour obtenir des informations sur les pays, y compris les drapeaux et les coordonnées géographiques.
Paramètres : Le nom du pays est passé directement dans l'URL.


   Explication des fonctions implémentées
* fetch :
La méthode fetch est utilisée pour effectuer des requêtes HTTP asynchrones. Elle permet de récupérer des données à partir d'API externes. 
Exemple la  Fonction getWeather :
→  Cette fonction récupère les informations météorologiques pour une ville donnée en utilisant l'API OpenWeatherMap.

* Manipulation du DOM
La manipulation du DOM (Document Object Model) permet de mettre à jour l'interface utilisateur avec les données récupérées. 
exemple la Fonction “ displayWeather”
→ Cette fonction affiche les informations météorologiques récupérées dans le DOM.

* Gestion des Événements
Les événements sont utilisés pour déclencher des actions lorsque l'utilisateur interagit avec l'application, par exemple en cliquant sur un bouton  ( country-info-button   ou  weather-info-button  ):

* Manipulation des Tableaux et Objets
Les réponses des API sont souvent sous forme de tableaux ou d'objets JSON. Nous accédons à ces données pour extraire et afficher les informations pertinentes.
Exemple la Fonction  “getCountryImage” :
→ Cette fonction récupère le drapeau d'un pays et ses coordonnées géographiques.

* Intégration de Bibliothèques Externes
La bibliothèque Leaflet est utilisée pour afficher une carte interactive.
la Fonction “ getCountryMap” :
→ Cette fonction affiche une carte avec la localisation du pays.


Conclusion
L'application "Weather and Country Info App" combine plusieurs technologies web pour offrir une expérience utilisateur intégrée et informative. Grâce à l'utilisation des API REST Countries et OpenWeatherMap, l'application permet aux utilisateurs d'obtenir des informations visuelles et météorologiques de manière simple et efficace. La manipulation du DOM et la gestion des événements assurent une interaction fluide et réactive avec l'application.

