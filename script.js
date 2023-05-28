const navbar = document.querySelector('.main-nav'); 

    window.addEventListener('scroll', function () {
      console.log(window.pageYOffset); 
    })
    const scrollLinks = document.querySelectorAll('.nav-link'); 

    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault() ;
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); 
        console.log(id); 
        const element = document.getElementById(id); 
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height; 
        let position = element.offsetTop; 
        console.log(position); 
        window.scrollTo({
          left: 0,
          top: position,
        });
      });
    });