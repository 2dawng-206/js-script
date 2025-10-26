function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // Change background image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

  // Change text
  document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
  console.log("Undo triggered!");
  
  // Reset background image
  document.getElementById("image").style.backgroundImage = "url('')";
  
  // Reset text
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
