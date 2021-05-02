export const state = () => ({
  data: {
    title: "Hermes Dev",
    description: "Développeur Front-end & Back-end. Spécialisé dans le web . Création, Optimisation et maintenance D'Applications,Sites web , Bases de données et API.Mon objectif est  l'automatisation de vos tâches tout en Boostant vos business en œuvrant à monter votre contenue aux premiers résultats des moteurs de reverches (SEO).",
    navLink: [{
      name: "À Ppropos",
      href: "/about",
      svg: "bi bi-info-circle-fill"
    }, {
      name: "Qualifications",
      href: "/skill",
      svg: "bi bi-file-person-fill"
    },
    {
      name: "Projets",
      href: "/projects",
      svg: "bi bi-braces"
    }, {
      name: "Contact",
      href: "/contact",
      svg: "bi bi-person-lines-fill"
    }
    ],

    social: [{
      link: "https://www.linkedin.com/in/hermes-dev-b287041a5/",
      svg: "bi bi-linkedin"
    },
    {
      link: "https://github.com/sosso21",
      svg: "bi bi-github"
    }, {
      link: "https://www.facebook.com/Hermes-Dev-105317471485647",
      svg: "bi bi-facebook"
    }, {
      link: "https://www.instagram.com/hermes_dev/?hl=fr",
      svg: "bi bi-instagram"
    }, {
      link: "https://twitter.com/sofianesosso21",
      svg: "bi bi-twitter"
    }
    ],
    pages: {
      about: {
        title: "À Propos",
        avatar: {
          src: "/hermes.png",
          alt: "avatar hermes dev created by Moh Most"

        },
        contact: {
          title: "Coordonnées ",
          items: {
            name: "Sofiane Gherab",
            town: "Commune et Chef lieu : Mâtkas.",
            state: "Département de Tizi Ouzou",
            cp: 15154,
            contry: "Algérie,(Dz)",
            phone: "+213 559 205 748",
            email: "hermesdev9@gmail.comm"
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
            les framework et leurs mystères
            Le secret de leurs pouvoirs` ,

          }
        }
      },
      experience: {
        title: "Qualifications",
        education: {
          title: "expériences",
          items: [ {
            title: "Développement Web",
            description: "Milliers d'heures de Travaille, de recherches en Autodidacte .Apprentissage de nombeaux Languages, Réalisation de Projet ...ect",
          },{
            title: "Sécurité informatique",
            description: "Centaine d'heurs de travaille , d'apprentissage de languages de programation, d'utilisation de Linux. Apprentissage en Autodidacte et Pinteste sur les Machines de CTF comme; RootME ,HackTheBox..ect ",
          },
            {
              title: "Licence 2 électrotechnique UMMTO",
              description: " Filière Orienté vers le domaine électrique. Le module informatique traite du language MATHLAB.",
            },
            {
              title: "Maintenance Informatique - Institue Expression",
              description: " Formation Maintenance, Réparation de matériels informatique et bureautique."
            },
            {
              title: "Ecole IVT",
              description: "Formation aux marchées financiers, Créations d'algorithmes liées au trading."
            }
          ],
        },
          techno : {
            title:"Technologies",
            class:["secondary","primary","success"],
            text:"Les Langages , framwork et outils  ci-dessous sont estimer selon leur métrise et leurs préférences via le barème colorimétrique suivant:",
            bareme:[
              {
                note:0,
                remarque:"Moyen"
              }, {
                note:1,
                remarque:"Bon"
              }, {
                note:2,
                remarque:"Excellent"
              }
            ],
            items:[
             {
               name:"Java",
               note:0,
               img:false
             },
             {
              name:"Bash/Batch",
              note:1,
              img:false
            },
            {
             name:"Mathlab",
             note:0,
             img:false
           },
           {
            name:"Python",
            note:0,
            img:false
          },
          {
           name:"HTML/CSS",
           note:2,
           img:false
         },
          {
           name:"PHHP",
           note:1,
           img:false
         },
         {
          name:"SQL",
          note:2,
          img:[
            "https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql.png",
            "https://www.valentina-db.com/images/sqlite/SQLitelogo_641x400.png"
          ]
        },
        {
         name:"JavaScript Simple",
         note:1,
         img:[
           "https://jf-blog.fr/wp-content/uploads/2015/09/jquery.gif"
         ]
       },
       {
        name:"React JS",
        note:2,
        img:[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
          "https://codingthesmartway.com/wp-content/uploads/2019/02/gatsby-logo.png"
        ]
      },
      {
       name:"Node js",
       note:2,
       img:[
        "https://expressjs.com/images/express-facebook-share.png", 
        "https://habrastorage.org/getpro/habr/post_images/3a9/b5c/98c/3a9b5c98c384865ed6f78994cf9c0444.gif",
        "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-logo-hero_c94026101f.svg"
       ]
     },
     {
      name:"MongoDB",
      note:2,
      img:false
    },
    {
     name:"Git",
     note:1,
     img:false
   },
   {
    name:"Vue JS",
    note:2,
    img:["https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png"]
  },
  {
   name:"SCSS",
   note:2,
   img:false
 }
             

            ]
          }
          
      },
      project: {
        title: "Projets",
        modal: {
          "github": { svg: "bi bi-github", text: "voir le répertoire Github" },
          "host": { svg: "bi bi-link-45deg", text: "voir le site" }
        },
        items: [
          {
            name: "Falcon",
            img: "/project/falcon.jpg",
            description: "Boutique e-Commerce , front en  react , back node js koa ( plus précisément avec strapi) , Base de données MongoDB. le projet a pris plus de 6 mois. Cela dit il ne sera exploité au mons avant la version suivante qui exploiteras les avantage de nuxt js , ajoutons à cela qu'on devras intégrer un multi thàme, un multi-langue. ",
            github: "https://github.com/sosso21/falcon-client-react-app",
            host: "https://falcon-com.web.app"
          },
          {
            name: "Maroua Shopping",
            img: "/project/maroua.jpg",
            description: "Boutique e-Commerce en PHP, JS , et une base données MySAQL.",
            github: "https://github.com/sosso21/php-TP/tree/master/Salfise%20Shop",
            host: false
          },
          {
            name: "Site vitrine pour un Coiffeur",
            img: "/project/amar.jpg",
            description: "Projet  simple en Vue (nuxt js)",
            github: "https://github.com/sosso21/vitrine-amar-coiffeur",
            host: "https://amar-coiffeur.web.app"
          },
          {
            name: "Espace Administrateur Pour boutique E-commerce",
            img: "/project/falcon-admin.jpg",
            description: "Projet en vue js . ce site permet très facilement de générer les différents champs pour la base de données, il permet de calculer facilement les prix , les marges . Il permet aussi de générer les publications Instagram et facebook et les images à exploiter . la prochaine version intégreras une automatisation des publications. ",
            github: "https://github.com/sosso21/vue-falcon-dev-tool",
            host: "https://falcon-image.web.app"
          },
          {
            name: "Hermes dev - version 1.0",
            img: "/project/hermes-dev-react.jpg",
            description: "Portfolio en  React. le site a été mis à jour pour un soucis de SEO  , ajoutant à cela que le système de pourcentage de maitrise des technologies a été retirer , la version actuel est en vue js ( nuxt )",
            github: "https://github.com/sosso21/react-hermes-dev-portfolio.git",
            host: "https://hermes-dev-fr.web.app"
          },
          {
            name: "Application de messagerie",
            img: "/project/messanger.jpg",
            description: "messagerie crée avec node js - socket.io et un client en React . ",
            github: "https://github.com/sosso21/messagerie-socket-io",
            host: false
          },
          {
            name: "Malware - Projet 66",
            img: "/project/projet66.PNG",
            description: "Payload en bash - pyrhon - java . permet de prendre le controle d'un oridinateur à distence, récupérer des frappes de clavier , les images de la webcam à des intérvalles régulier et aussi d'effectuer une escalades de privilèges sur la sible. il est indétectable par les antivirus , les parfeu et autre sécurité tout en restant percistant , bref c'est une vrai saloperie xD . il est possible de l'intégrer dans une vision d'exploitation en le connectant à un server ou un FTP. ",
            github: "https://github.com/sosso21/project66",
            host: false
          },
          {
            name: "Robot de trading",
            img: "/project/trading.jpg",
            description: " outils codé en Java .  Indicateurs technique  en trading utilisable sur ProRealTime constitué d'un timer permettant de rentrer dans une position au meilleur moment , un proscreener qui permet d'afficher les marchées intéressant, un robot automatique prenant des positions de manière autonome , un indicateur de tendance  utiliser pour indiquer les meilleurs optique et tendance à suivre sur un marchée. ",
            github: false,
            host: false
          }
        ]
      }
    }
  }
})
