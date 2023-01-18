// ajout de la class .mobile-menu dans la class .nav-links lors d'un clic sur la class .hamb //

        const menuHamburger = document.querySelector(".hamb")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
