function init() {
    var images = document.getElementsByTagName("img");
    for(var i=0; i<images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(event) {
    var divBigImage = document.getElementById("big_picture");
    divBigImage.innerHTML = "";
    var bigImage = document.createElement("img");
    bigImage.onerror = pictureNotFound;
    bigImage.src = "img/gallery/big/" + event.target.id + ".png";
    divBigImage.appendChild(bigImage);
}

function pictureNotFound() {
    alert("Изображение не найдено");
}

init();