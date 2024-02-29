function validateForm() {
    const name  = document.forms["inquiry-form"]["full-name"].value;
    const birthDate  = document.forms["inquiry-form"]["birth-date"].value;
    const gender  = document.forms["inquiry-form"]["gender"].value;
    const messages  = document.forms["inquiry-form"]["messages"].value;
    

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("tidak boleh ada yang kosong");
        return false;
    }
setSenderUI(name, birthDate, gender, messages);{
    document.getElementById("full-name").innerHTML = name;
    document.getElementById("birth-date").innerHTML = birthDate;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("messages").innerHTML = messages;
    
   
}

return false;
}   
onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}

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

function submitform(e) {
    
    
    var name = document.getElementById('name').value;
    const birth  = document.forms["inquiry-form"]["birth-date"].value;
    const gender  = document.forms["inquiry-form"]["gender"].value;
    const pesaninput  = document.forms["inquiry-form"]["messages"].value;
    
    
   
    document.getElementById('full-name').innerText = name;
    document.getElementById('birth-date').innerText = birth;
    document.getElementById('gender').innerText = gender;
    document.getElementById('messages').innerText = pesaninput;



}