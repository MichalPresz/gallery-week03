const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

// the clue for using arrow keys or left and right buttons
let imageIndex = 0; // this currently does nothing, but is a start

// get some images
const images = [
  {
    url: "https://cdn.esahubble.org/archives/images/screen/heic0910h.jpg",
    alt: "Nebula",
  },
  {
    url: "https://cdn.esahubble.org/archives/images/screen/heic0515a.jpg",
    alt: "Nebula",
  },
  {
    url: "https://cdn.esahubble.org/archives/images/screen/heic1307a.jpg",
    alt: "Nebula",
  }, 
];

// put those images onto the page as thumbnails
function createThumbnails() {
  images.forEach(function (image) {
    // create an img DOM node
    const img = document.createElement("img");

    // add the src and alt to the img
    img.src = image.url;
    img.alt = image.alt;

    // put the img onto the page
    thumbContainer.appendChild(img);

    // make it so when we click the image something happens
    img.addEventListener("click", function () {
      createBigImage(image);
    });
  });
}

// display the large image
function createBigImage(image) {
  // clear out the display image div first (by setting it to be nothing)
  displayImage.innerHTML = "";

  // create our img
  const bigImg = document.createElement("img");

  // set the src and alt
  bigImg.src = image.url;
  bigImg.alt = image.alt;

  // add it to the page
  displayImage.appendChild(bigImg);
}


// actually do the things
createThumbnails();
createBigImage(images[0]);