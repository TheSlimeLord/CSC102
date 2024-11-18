// Get the screen Height and Width
var maxWidth = window.innerWidth;
var maxHeight = window.innerHeight;
var imgWidth = 200;
var imgHeight = 200;
var intervalID;

function moveImage(){
    //Makes the image Move
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    intervalID = setInterval(teleportImage, 500);


}

function stopImage(){
    // Stops the image from moving

    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalID);
}

function teleportImage(){
    var img = document.getElementById("memeImg");
    img.style.left = randomNumber(maxWidth - imgWidth) + "px";
    img.style.top = randomNumber(maxHeight - imgHeight) + "px";
}

function randomNumber(maximum){
    //Adjust random number from 0 to 1, to 0 to maximum.
    randNum = Math.random() * maximum;
    //Remove the Decimal
    randNumNoDeci = Math.floor(randNum);
    return randNumNoDeci;
}