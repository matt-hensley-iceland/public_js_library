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
