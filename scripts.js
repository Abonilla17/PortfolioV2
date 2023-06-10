function showAboutMe() {
    document.getElementById('about-me').style.display = "block";
    document.getElementById('education').style.display = "none";
    document.getElementById('experience').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('landing').style.display = "none";
    // var element = document.getElementById("about-me-a");
    // element.classList.add("active");
    // console.log(element);
}

function showEducation() {
    document.getElementById('experience').style.display = "none";
    document.getElementById('education').style.display = "block";
    document.getElementById('about-me').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('landing').style.display = "none";
    // var element = document.getElementById("education-a");
    // element.classList.add("active");
    // console.log(element);
}
function showExperience(){
    document.getElementById('education').style.display = "none";
    document.getElementById('experience').style.display = "block";
    document.getElementById('about-me').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('landing').style.display = "none";
    // var element = document.getElementById("experience-a");
    // element.classList.add("active");
    // console.log(element);
}
function showPortfolio(){
    document.getElementById('education').style.display = "none";
    document.getElementById('experience').style.display = "none";
    document.getElementById('about-me').style.display = "none";
    document.getElementById('portfolio').style.display = "block";
    document.getElementById('landing').style.display = "none";
    // var element = document.getElementById("contact-a");
    // element.classList.add("active");
    // console.log(element);
}
function navbarActive(){
    var navbarMenu = document.getElementById("navbar-menu");
    // navbarMenu.classList.add("is-active");
    var button = document.getElementById("hamburgerMenu");
    if (button.dataset.clicked === "true") {
        // Second button click action
        navbarMenu.classList.remove("is-active");
        button.dataset.clicked = "false";
      } else {
        // First button click action
        navbarMenu.classList.add("is-active");
        button.dataset.clicked = "true";
      }
}
function showLanding(){
    document.getElementById('education').style.display = "none";
    document.getElementById('experience').style.display = "none";
    document.getElementById('about-me').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('landing').style.display = "block";
}
