var currentHash;
var nextHash; //next page user wants to visit
var animationEnd;

var elements = [];
var midElementsIn = [];
var btmElementsIn = [];

var topElementsOut = [];
var midElementsOut = [];
var btmElementsOut = [];

$(document).ready(function() {

  currentHash = "loadingpage";
  location.hash = currentHash;

  //detect end of animation
  animationEnd = (function(el) {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));
  //$(this).addClass("animated fadeOutUp").one (animationEnd, function(){



});

$(window).on('load', function() {
  //on load
  console.log("loaded");
  $('.loading-text').addClass("animated fadeIn").css({"display":"block"});
  //on bg-video + images load change hash location to landing page
  setTimeout(function() {
    location.hash = "landingpage";
}, 2500);


  $('a[id]').click(function(e) {
    nextHash = this.id;
    window.location.hash = nextHash;
  });
});

//triggered on every hash change
function hashChange() {

  nextHash = location.hash; //set the new hash location as nextHash

  //do stuffs
  switch (nextHash) {
    case "#about":
      animate(currentHash, nextHash);
      break;
    case "#portfolio":
      animate(currentHash, nextHash);

      break;
    case "#landingpage":
      animate(currentHash, nextHash);
      break;
    case "#contact":
      animate(currentHash, nextHash);
      break;
  }
  currentHash = location.hash; //after animating - set the new hash as current one
}


//animates out currentHash and animates in nextHash on animation finish
function animate(currentHash, nextHash) {

  currentHash = currentHash.slice(1); //remove #
  nextHash = nextHash.slice(1); //remove #

  //getElements(currentHash);***

  $('.' +currentHash+'').fadeOut(300, function(){
    $('.'+nextHash+'').fadeIn(300, function(){
      console.log("nextHash: ", nextHash);
      if(nextHash === "landingpage"){

        $('.nav-landing-page').addClass("animated fadeInDown").css({"display":"block"});
        $('.landingpage .main-container').addClass("animated fadeIn").css({"display":"flex"});
      } // end of landing page

      if(nextHash === "portfolio"){
          //animation in
          $('.nav-portfolio').addClass("animated fadeInDown").css({"display":"flex"});
          $('.portfolio-container').addClass("animated fadeInUp").css({"display":"block"});


        }//end of portfolio

      if (nextHash === "about"){
        $('.nav-portfolio').addClass("animated fadeInDown").css({"display": "flex"});
        $('.about-text-wrapper').addClass("animated fadeIn").css({"display":"flex"});
        $('.img-container').addClass("animated fadeIn").css({"display":"block"});
      }//end of about

      if (nextHash ==="contact"){
        $('.contact-container p').addClass("animated fadeInDown").css({"display": "flex"});
        $('.contact-container .form-container').addClass("animated fadeIn").css({"display":"block"});
      }

    });
  });
}
//get elements depending on currentHash to animate in or out.
function getElements(hash) {

  //currentHash - animate out
  if (hash === "loadingpage") {
    // topElementsOut = [];
    // midElementsOut = ["#loading-container"];
    // btmElementsOut = [];
    elements = ["#loading-container img", "#loading-container p"];
  } else if (hash === "landingpage") {
    // topElementsOut = [];
    // midElementsOut = [
    //   "#hero-container",
    //   "#titles"
    // ];
    // btmElementsOut = ["#procceed"];
    elements = ["#hero-container", "#titles", "#procceed"];
  } else if (hash === "portfolio") {
    // topElementsOut = [
    //   ".nav-logo-portfolio",
    //   ".nav-links-portfolio"
    // ];
    // midElementsOut = [
    //   ".portfolio-hero",
    //   ".fashion-photos",
    //   ".makeup-photos",
    //   ".stylist-photos"
    // ];
    // btmElementsOut = [];
    elements = [".nav-logo-portfolio", ".nav-links-portfolio", ".portfolio-hero", ".photos"];

  } else if (hash === "about") {
    // topElementsOut = ["#portfolio"];
    // midElementsOut = [
    //   ".about-text"
    // ]
    // btmElementsOut = [
    //   "#made-by"
    // ]
    elements = [".nav-about", ".about-text h3", ".about-text p", ".about-text h6"];

  } else if (hash === "contact") {
    //   topElementsOut = [
    //     ".nav-logo",
    //     ".nav-links"
    //   ];
    //   midElementsOut = [];
    //   btmElementsOut = [];
    elements = [".nav-logo", ".nav-links", ".contact-container"];
  }
}
