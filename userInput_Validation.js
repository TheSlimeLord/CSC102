function inputValidator(){
    //Grabs the User input
    nameFirst = document.getElementById("firstName").value
    nameLast = document.getElementById("lastName").value
    codeZip = document.getElementById("zipCode").value
    
    //Combines First and Last name together
    var nameFull = nameFirst + " " + nameLast; 
    

    //Check how many characters are used for the name and print results
    validation = document.getElementById("validation");
    if (nameFull.length > 20){
        validation.innerHTML = "Name contains too many characters";
        validPic.src = "Really.png";
        return;
    }
    
    // Checks if the Zip code is only 5 Digits
    if (codeZip < 10000 || codeZip >= 100000){
        validation.innerHTML = "Number is not 5 digits.";
        validPic.src = "Blank.png";
        return;
    }
    else{
        validation.innerHTML = "The secret message is: I love Honey";
        validPic.src = "Honey.png";
    }
    

}