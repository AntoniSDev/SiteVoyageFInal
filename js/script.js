














// js pour menu hamb , en test
// ajout de la class .mobile-menu dans la class .nav-links lors d'un clic sur la class .hamb //

        const menuHamburger = document.querySelector(".hamb")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

// fin js pour menu hamb   









//script slide show w3c

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// fin script slide show w3c