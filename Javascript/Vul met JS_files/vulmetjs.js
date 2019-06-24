document.title = ("Dit is de paginatitel");

document.write("Dit is de subkop");

var img = document.createElement("img");
 
img.src = "Images/aap.jpg";
var src = document.getElementById("aap1");
 
src.appendChild(img);

var img = document.createElement("img");
 
img.src = "Images/aap1.jpg";
var src = document.getElementById("aap2");
 
src.appendChild(img);