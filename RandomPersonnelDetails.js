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

function getAuthToken(cosmosContainerUrl, cosmosDbMasterKey, nowUtcString) {
    var url = cosmosContainerUrl.trim(); 
    var strippedurl = url.replace(new RegExp('^https?://[^/]+/'),'/');
    var strippedparts = strippedurl.split("/");
    var truestrippedcount = (strippedparts.length - 1);
    var resourceId = "";
    var resType = "";
    
    if (truestrippedcount % 2)
    {
        resType = strippedparts[truestrippedcount];
    
        if (truestrippedcount > 1)
        {
            var lastPart = strippedurl.lastIndexOf("/");
            resourceId = strippedurl.substring(1,lastPart);
        }
    }
    else
    {
        resType = strippedparts[truestrippedcount - 1];
        strippedurl = strippedurl.substring(1);
        resourceId = strippedurl;
    }
    
    var verb = "post";
    var date = nowUtcString.toLowerCase();
    var key = CryptoJS.enc.Base64.parse(cosmosDbMasterKey);
    
    var text = (verb || "").toLowerCase() + "\n" + 
                   (resType || "").toLowerCase() + "\n" + 
                   (resourceId || "") + "\n" + 
                   (date || "").toLowerCase() + "\n" + 
                   "" + "\n";
    
    var signature = CryptoJS.HmacSHA256(text, key);
    
    var base64Bits = CryptoJS.enc.Base64.stringify(signature);
    
    var MasterToken = "master";
    var TokenVersion = "1.0";

    return encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + base64Bits);
}
