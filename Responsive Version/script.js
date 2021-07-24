const extensionList = [".jpg", ".jpeg"];
const button = document.querySelector('.imageButton');

button.addEventListener('click', () => {
    console.log("Image button is clicked.");
    let randomNumber = Math.floor((Math.random() * 7) + 1);
    let sourceImage = "images/profile";
    if (randomNumber < 4) {
        sourceImage += randomNumber + extensionList[0];
    } else {
        sourceImage += randomNumber + extensionList[1];
    }
    button.querySelector("img").src = sourceImage;

}, false);