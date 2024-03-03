document.addEventListener('click', function(event) {  
  document.querySelector('.nav-menu').classList.remove('show');  
});


document.querySelector('.menu-btn').addEventListener('click', (event) => {
  event.stopPropagation();
  document.querySelector('.nav-menu').classList.toggle('show');
  
});




  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.cards-news', {delay: 500})
  ScrollReveal().reveal('.banner-one', {delay: 500})
  ScrollReveal().reveal('.banner-two', {delay: 500})
