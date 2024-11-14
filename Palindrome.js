function palindromeChecker(){
    // Grabbing the users input
    wordToCheck = document.getElementById("userInput").value.toLowerCase();
    wordToCheck = wordToCheck.replace(/\s+/g, '');

    //Reverse the string to see if its the same.
    var splitString = wordToCheck.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");


    // Check if they're the same backwards, and give a color.
    output = document.getElementById("output");
    if (wordToCheck == reverseString){
        output.innerHTML = "That is a Palindrome.";
        document.body.style.backgroundColor = "Green";
    }
    else{
        output.innerHTML = "That is not a Palindrome.";
        document.body.style.backgroundColor = "red";
    }

    // Image reaction for if its correct or not.
    outputpic = document.getElementById("outputpic");
    if (wordToCheck == reverseString){
        outputpic.src = "Thumbsup.png";
    }
    else{
        outputpic.src = "Fingerwag.png"
    }

}