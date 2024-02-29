
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";


slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display ;
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function submitform() {
    
  
    var name = document.getElementById('name').value;
    const birth  = document.forms["inquiry-form"]["birth-date"].value;
    const gender  = document.forms["inquiry-form"]["gender"].value;
    const pesaninput  = document.forms["inquiry-form"]["messages"].value;
    

   
    document.getElementById('full-name').innerText = name;
    document.getElementById('birth-date').innerText = birth;
    document.getElementById('gender').innerText = gender;
    document.getElementById('messages').innerText = pesaninput;
    
    
    document.getElementById('datestamp').innerHTML = Date();

  }
  
  