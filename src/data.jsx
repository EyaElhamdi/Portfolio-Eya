import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jfif';
import project3Img from './assets/project3.jpg';

export const projects = [
  {
    id: 1,
    title: "Portfolio React",
    description: "Création d’un portfolio moderne en React et CSS.",
    longDesc: "Portfolio complet avec sections Accueil, Projets, Contact, Dark Mode et animations responsives.",
    image: project1Img,
    images: [project1Img],
    link: "https://github.com/EyaElhamdi",
    demo: "https://eya-portfolio.com",
    techs: "React, CSS, Chart.js",
    duration: "2 semaines",
    role: "Développeur front-end",
    tags: ["React", "Portfolio", "Web"],
  },
  {
    id: 2,
    title: "Projet web",
    description: "Gestion de tâches avec React et LocalStorage.",
    longDesc: "Projet web pour visualiser un site pizza .",
    image: project2Img,
    images: [project2Img],
    link: "https://github.com/EyaElhamdi/projet-web.git",
    demo: "https://eya-web.com",
    techs: "React, LocalStorage, CSS",
    duration: "1 semaine",
    role: "Développeur front-end",
    tags: ["React", "CSS", "Web"],
  },
  {
    id: 3,
    title: "App Weather",
    description: "Visualisation de météo.",
    longDesc: "Dashboard interactif pour visualiser le météo, l'état de la nature, la température.",
    image: project3Img,
    images: [project3Img],
    link: "https://github.com/EyaElhamdi/weather-main.git",
    demo: "https://weather-main.com",
    techs: "Angular, Chart.js, Bootstrap",
    duration: "3 semaines",
    role: "Développeur front-end",
    tags: ["CSS", "Température", "Weather"],
  },
];
