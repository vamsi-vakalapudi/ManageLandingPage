let hamByClose=document.querySelector('.hamburger-exchange');
let closeByHam=document.querySelector('.close-exchange');
let col1=document.querySelector('.a1');
let col2=document.querySelector('.a2');
let cola=document.querySelector('.sec2');
hamByClose.addEventListener('click',function(){
  hamByClose.classList.replace('d-block','d-none');
  closeByHam.classList.replace('d-none','d-block');
})
closeByHam.addEventListener('click',function(){
  hamByClose.classList.replace('d-none','d-block');
  closeByHam.classList.replace('d-block','d-none');
})

window.addEventListener('resize',function(){
  if (window.innerWidth<='991'){
    cola.classList.replace('overlay-2','overlay-mobile');
  }
})
let slidesLg=document.getElementById('slides');
var slideIndex = 0; 
showSlides(); // call showslide method 
function showSlides() 
{ 
    let i; 
  
    // get the array of divs' with classname image-sliderfade 
    let slides = document.getElementsByClassName("image-sliderfade");  
      
    // get the array of divs' with classname dot 
    let dots = document.querySelectorAll(".dot");  
  
   for  (i = 0; i < slides.length; i++) { 
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";  
    } 
   
     // increase by 1, Global variable 
    slideIndex++;  
   
     // check for boundary 
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
   
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); 
    } 
   
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex-1].classList.add('move'); 
    dots[slideIndex - 1].className += " active"; 
    function dotClick(){
      dots.forEach(function(elem){
        elem.addEventListener('click',function(){
        slides[slideIndex - 1].style.display='none';
          if (elem.classList.contains('0')){
            slides[0].style.display='block';
          } else if (elem.classList.contains('1')){
            slides[1].style.display='block';
          } else if (elem.classList.contains('2')){
            slides[2].style.display='block';
          } else {
            slides[3].style.display="block";
          }
        })
      })
    }
    // Change image every 2 seconds 
    var x=setTimeout(showSlides, 2000);  
    dotClick();
}

function onClick(){
  let dots = document.querySelectorAll(".dot");  

  dots.forEach(function(elem){
    elem.addEventListener('click',function(){
      elem.style.backgroundColor = "crimson";
    })
  })
}

  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);