export const state = () => ({
  data: {
    title: "Hermes Dev",
    description:
      "Développeur Front-end & Back-end. Spécialisé dans le web. Création, optimisation et maintenance d'applications, sites web, bases de données et API. Mon objectif est d'automatiser vos tâches tout en boostant votre business en œuvrant pour positionner votre contenu parmi les premiers résultats des moteurs de recherche (SEO).",
    navLink: [
      {
        name: "À Propos",
        href: "/about",
        svg: "bi bi-info-circle-fill",
      },
      {
        name: "Qualifications",
        href: "/skill",
        svg: "bi bi-file-person-fill",
      },
      {
        name: "Projets",
        href: "/projects",
        svg: "bi bi-braces",
      },
      {
        name: "Contact",
        href: "/contact",
        svg: "bi bi-person-lines-fill",
      },
    ],
    social: [
      {
        link: "https://www.linkedin.com/in/",
        svg: "bi bi-linkedin",
      },
      {
        link: "https://github.com/abdelkaderchabani",
        svg: "bi bi-github",
      },
      {
        link: "https://www.facebook.com/",
        svg: "bi bi-facebook",
      },
      {
        link: "https://www.instagram.com",
        svg: "bi bi-instagram",
      },
      {
        link: "https://twitter.com/",
        svg: "bi bi-twitter",
      },
    ],
    pages: {
      about: {
        title: "À Propos",
        avatar: {
          src: "https://hermes-dev-fr.web.app/mini-hermes.jpg",
          alt: "avatar hermes dev created by Moh Most",
        },
        contact: {
          title: "Coordonnées",
          items: {
            name: "Abdelkader Chabani",
            town: "Oran",
            state: "Département de Oran",
            cp: 15154,
            country: "Algérie, (Dz)",
            phone: "+213 553 548 205",
            email: "hermesdev9@gmail.com",
          },
          joke: {
            title: "Découvrez mes ambitions",
            text: `
            Un jour être le meilleur codeur
            se battre sans répit
            faire tout pour être vainqueur
            gagner les défis
            parcourir la terre entière
            Traquant avec espoir
            les frameworks et leurs mystères
            Le secret de leurs pouvoirs`,
          },
        },
      },
      experience: {
        title: "Qualifications",
        education: {
          title: "Expériences",
          items: [
            {
              title: "Développement Web",
              description:
                "Des milliers d'heures de travail et de recherche en autodidacte. Apprentissage de nombreux langages, réalisation de projets, etc.",
            },
            {
              title: "Sécurité informatique",
              description:
                "Des centaines d'heures de travail, d'apprentissage de langages de programmation et d'utilisation de Linux. Apprentissage en autodidacte et participation à des CTF comme RootME, HackTheBox, etc.",
            },
            {
              title: "Licence 2 en électrotechnique à l'UMMTO",
              description:
                "Filière orientée vers le domaine électrique. Le module informatique traite du langage MATLAB.",
            },
            {
              title: "Maintenance Informatique - Institut Expression",
              description:
                "Formation en maintenance et réparation de matériels informatiques et bureautiques.",
            },
            {
              title: "École IVT",
              description:
                "Formation aux marchés financiers et création d'algorithmes liés au trading.",
            },
          ],
        },
        techno: {
          title: "Technologies",
          class: ["secondary", "primary", "success"],
          text: "Les Langages, frameworks et outils ci-dessous sont estimés selon leur maîtrise et leurs préférences via le barème colorimétrique suivant :",
          bareme: [
            {
              note: 0,
              remarque: "Moyen",
            },
            {
              note: 1,
              remarque: "Bon",
            },
            {
              note: 2,
              remarque: "Excellent",
            },
          ],
          items: [
            {
              name: "Java",
              note: 0,
              img: false,
            },
            {
              name: "Bash/Batch",
              note: 1,
              img: false,
            },
            {
              name: "Matlab",
              note: 0,
              img: false,
            },
            {
              name: "Python",
              note: 0,
              img: [
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg",
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
              ],
            },
            {
              name: "HTML/CSS",
              note: 2,
              img: [
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
              ],
            },
            {
              name: "PHP",
              note: 1,
              img: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
              ],
            },
            {
              name: "SQL",
              note: 2,
              img: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql.png",
                "https://www.valentina-db.com/images/sqlite/SQLitelogo_641x400.png",
              ],
            },
            {
              name: "JavaScript",
              note: 1,
              img: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                "https://jf-blog.fr/wp-content/uploads/2015/09/jquery.gif",
              ],
            },
            {
              name: "React.js",
              note: 2,
              img: [
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
              ],
            },
            {
              name: "Node.js",
              note: 2,
              img: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",

                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
                "https://habrastorage.org/getpro/habr/post_images/3a9/b5c/98c/3a9b5c98c384865ed6f78994cf9c0444.gif",
                "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-logo-hero_c94026101f.svg",
              ],
            },
            {
              name: "Astro",
              note: 2,
              img: false,
            },

            {
              name: "MongoDB",
              note: 2,
              img: false,
            },
            {
              name: "Git",
              note: 1,
              img: false,
            },
            {
              name: "Vue.js",
              note: 2,
              img: [
                "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",
                "https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png",
              ],
            },
            {
              name: "Angular",
              note: 0,
              img: [],
            },
            {
              name: "SCSS",
              note: 2,
              img: false,
            },
          ],
        },
      },
      project: {
        title: "Projets",
        modal: {
          github: { svg: "bi bi-github", text: "voir le répertoire GitHub" },
          host: { svg: "bi bi-link-45deg", text: "voir le site" },
        },

        items: [
          {
            name: "Falcon",
            img: "/project/falcon.jpg",
            description:
              "Boutique e-Commerce, front en React, back en Node.js avec Koa (plus précisément avec Strapi), base de données MongoDB. Le projet a pris plus de 6 mois. Cependant, il ne sera exploité au moins avant la version suivante qui exploitera les avantages de Nuxt.js. De plus, nous devrons intégrer un système de thèmes multiples et de langues multiples.",
            github:
              "https://github.com/abdelkaderchabani/falcon-client-react-app",
            host: "https://falcon-com.web.app",
          },
          {
            name: "Maroua Shopping",
            img: "/project/maroua.jpg",
            description:
              "Boutique e-Commerce en PHP, JS et une base de données MySQL.",
            github:
              "https://github.com/abdelkaderchabani/php-TP/tree/master/Salfise%20Shop",
            host: false,
          },
          {
            name: "Site vitrine pour un coifeur",
            img: "/project/amar.jpg",
            description: "Projet simple en Vue.js (Nuxt.js).",
            github: "https://github.com/abdelkaderchabani/vitrine-amar-coifeur",
            host: "https://amar-coifeur.web.app",
          },
          {
            name: "Espace Administrateur pour boutique E-commerce",
            img: "/project/falcon-admin.jpg",
            description:
              "Projet en Vue.js. Ce site permet de générer facilement les différents champs pour la base de données. Il permet également de calculer les prix et les marges de manière simple. De plus, il génère les publications Instagram et Facebook ainsi que les images à exploiter. La prochaine version intégrera une automatisation des publications.",
            github: "https://github.com/abdelkaderchabani/vue-falcon-dev-tool",
            host: "https://falcon-image.web.app",
          },
          {
            name: "Hermes dev - version 1.0",
            img: "/project/hermes-dev-react.jpg",
            description:
              "Portfolio en React. Le site a été mis à jour pour des raisons de SEO. De plus, le système de pourcentage de maîtrise des technologies a été retiré. La version actuelle est en Vue.js (Nuxt.js).",
            github:
              "https://github.com/abdelkaderchabani/react-hermes-dev-portfolio.git",
            host: "https://hermes-dev-fr.web.app",
          },
          {
            name: "Application de messagerie",
            img: "/project/messanger.jpg",
            description:
              "Messagerie créée avec Node.js, Socket.IO et un client en React.",
            github: "https://github.com/abdelkaderchabani/messagerie-socket-io",
            host: false,
          },
          {
            name: "Malware - Projet 66",
            img: "/project/projet66.PNG",
            description:
              "Payload en Bash, Python et Java. Permet de prendre le contrôle d'un ordinateur à distance, de récupérer les frappes de clavier, les images de la webcam à intervalles réguliers et d'effectuer une élévation de privilèges sur la cible. Il est indétectable par les antivirus, les pare-feu et autres mesures de sécurité, tout en restant persistant. Bref, c'est une vraie saloperie xD. Il est possible de l'intégrer dans une vision d'exploitation en le connectant à un serveur ou un FTP.",
            github: "https://github.com/abdelkaderchabani/project66",
            host: false,
          },
          {
            name: "Robot de trading",
            img: "/project/trading.jpg",
            description:
              "Outil codé en Java pour le trading. Il utilise des indicateurs techniques sur ProRealTime, tels qu'un timer permettant de rentrer dans une position au meilleur moment, un proscreener qui affiche les marchés intéressants, un robot automatique prenant des positions de manière autonome, et un indicateur de tendance pour indiquer les meilleures opportunités et tendances à suivre sur un marché.",
            github: false,
            host: false,
          },
        ],
      },
    },
  },
});
