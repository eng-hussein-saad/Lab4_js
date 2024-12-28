var photoIndex = 0;
var i = 0;
var interval = null;
//to show the first photo only and hide the remaining once we load the page.
function showPhotos() {
  var photos = document.getElementsByClassName("photo");
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  photoIndex++;
  if (photoIndex > photos.length) {
    photoIndex = 1;
  }
  photos[photoIndex - 1].style.display = "block";
}

function startSlideshow() {
  if (!interval) {
    interval = setInterval(showPhotos, 200);
  }
}
function stopSlideshow() {
  clearInterval(interval);
  interval = null;
  showPhotos();
}



