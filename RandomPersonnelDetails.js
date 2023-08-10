function getRandomTitle() {
    const TITLES = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
    let indexOfRandomTitle = Math.floor(Math.random() * TITLES.length); 
    
    return TITLES[indexOfRandomTitle];
} 

function getRandomDateOfBirth() 
{ 
    const lowerBound = new Date(1950, 0, 1);
    let upperBound = new Date(2003, 11, 31); 
    let randomDate = new Date(lowerBound.getTime() + Math.random() * (upperBound.getTime() - lowerBound.getTime()));
    yearComponent = randomDate.getFullYear();
    monthComponent = String(randomDate.getMonth() + 1).padStart(2, "0");
    dayComponent = String(randomDate.getDate()).padStart(2, "0"); 
    
    return `${yearComponent}-${monthComponent}-${dayComponent}`; 
}

function generateRandomPostcode() {
    var postcode = "";
    var digits = "0123456789";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Generate random letters for the first part of the postcode
    for (var i = 0; i < 3; i++) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        postcode += letters[randomIndex];
    }

    // Insert space after the first part of the postcode
    postcode += " ";

    // Generate random digits and letters for the second part of the postcode
    for (var j = 0; j < 3; j++) {
        var randomIndex = Math.floor(Math.random() * (digits.length + letters.length));
        if (randomIndex < digits.length) {
            postcode += digits[randomIndex];
        } else {
            postcode += letters[randomIndex - digits.length];
        }
    }

    return postcode;
}