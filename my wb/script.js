function SwapImage() {  
    var image = document.getElementById("myImage");
    	var button = document.getElementById("myButton");
    if (image.src.match("https://www.w3schools.com/js/pic_bulboff.gif")) {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    	button.innerHTML = "Turn OFF Light";
    } else {
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    	button.innerHTML = "Turn ON Light";
    }  
}

function SwapImageHover(img) {
  img.src = (img.src.match(/off/)) ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif" ;
}