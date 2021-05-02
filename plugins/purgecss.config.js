module.exports = {
    content: [
        
       // "../dist/*.html",
        //  "../dist/*.js",
       "../dist/projects/*.html",
       //   "../dist/**/*.js",
        
        '../components/*.vue',
        '../layouts/*.vue',
        '../pages/*.vue',
        '../store/*.js',
        '../plugins/*.js'
    ],
    
 css: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
     output: "../node_modules/bootstrap/dist/css/bootstrap.css",
     /*
     //purger les icons
    output : "../node_modules/bootstrap-icons/font/bootstrap-icons.css",
    css : ["../node_modules/bootstrap-icons/font/bootstrap-icons.css"],
  // "font-face":false,
    */
    safelist:[ 
// icon 
/*
"bi-cart4",
"bi-cloud-slash-fill",
"bi-arrow-down",
"bi-arrow-up",
*/


// navbar
        "navbar-dark",
        "navbar-expand-lg",
        "navbar-brand",
        "navbar",
        "responsive-navbar-nav",
        "navbar-toggler-icon",
        "justify-content-end",
        "navbar-collapse",
        "collapse",
        "navbar-nav",
        "nav-link",
        // modal 
        "modal-open",
        "fade",
        "modal-backdrop",
        "show",
        "modal-large",
        "modal",
        "modal-dialog",
        "modal-90w",
        "modal-content",
        "modal-body",
        "modal-title",
        "close",
        "sr-only",
        "big-img",
        "react-slideshow-container",
        "nav",
        "default-nav",
        "react-slideshow-wrapper slide",
        "images-wrap",
        "active",
        "parentSolde","imgSpan",
        "nav",
        "default-nav ",
        "indicators",
        "each-slideshow-indicator",
        "active",
        "small-img",
        "big-box-description"
        
]
  }

  /* 
  purgecss --css build/static/css/*.css --content build/index.html build/static/js/*.js --output build/static/css

  purgecss --config ./purgecss.config.js

  */