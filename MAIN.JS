// Loe rohkem nupp
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("roundedButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Loe Rohkem!";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Loe Vähem!";
      moreText.style.display = "inline";
    }
}
// Reklaamid
var imageIndex = 0;
showImages();
var images,dots;

function showImages() {
    var i;
    images = document.getElementsByClassName("picture");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    imageIndex++;
    if (imageIndex> images.length) {
        imageIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        images[imageIndex-1].style.display = "block";  
        dots[imageIndex-1].className += " active";
        setTimeout(showImages, 8000);
}

function plusImages(position) {
    imageIndex +=position;
    if (imageIndex> images.length) {
        imageIndex = 1}

    else if(imageIndex<1){
        imageIndex = images.length
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[imageIndex-1].style.display = "block";  
    dots[imageIndex-1].className += " active";
}

function currentImage(index) {

    if (index> images.length) {
        index = 1
    }
    else if(index<1){
        index = images.length
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

// Email sisestusaken
function openForm() {
    document.getElementById("emailPopUp").style.display = "block";
}
  
function closeForm() {
    document.getElementById("emailPopUp").style.display = "none";
}

