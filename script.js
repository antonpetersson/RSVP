var listOfParties;



/* get parties from the json file and store it in a javascript variable */
fetch("./fester.json")
.then(function(response) {
    return response.json();
})
.then(function(parties) {
    listOfParties = parties;
    createUIFromLoadedParties();
});

/** Uses the loaded parties data to create a visible party list on the website */
function createUIFromLoadedParties() {
    var main = document.getElementById("main");
    main.className = "mainClass";

    //Looping through listOfPartoes and adding party to main div
    for(var i = 0; i < listOfParties.length; i++){
        var party = createParty(listOfParties[i]);
        main.appendChild(party);
       
    }
}

    //Creating function that pulls the parties and adding..
    function createParty(listOfParties) {
    var party = document.createElement("div")
    party.className = "partyClass";

    //.. title
    var getTitle = document.createElement("h1");
    getTitle.innerText = listOfParties.title;
    getTitle.className = "titleClass"
    party.appendChild(getTitle);

    //.. date
    var getDate = document.createElement("p");
    getDate.innerText = listOfParties.date;
    getDate.className = "dateClass"
    party.appendChild(getDate);

    //.. time
    var getTime = document.createElement("p");
    getTime.innerText = listOfParties.startTime + " - " + listOfParties.endTime;
    getTime.className = "timeClass"
    party.appendChild(getTime);
    
    //.. location
    var getLocation = document.createElement("p");
    getLocation.innerText = listOfParties.location;
    getLocation.className = "locationClass"
    party.appendChild(getDate);

    //.. image
    var getImage = document.createElement("img");
    getImage.src = "bild/" + listOfParties.image;
    getImage.className = "imageClass"
    party.appendChild(getImage);

    //.. description
    var getDescription = document.createElement("p");
    getDescription.innerText = listOfParties.description;
    getDescription.className = "descriptionClass"
    party.appendChild(getDescription);

    //.. price
    var getPrice = document.createElement("p");
    getPrice.innerText = listOfParties.price + " kr";
    getPrice.className = "priceClass"
    party.appendChild(getPrice);

    

    

    


      //returning what to function created out from the function
      return party;
      
      
  
  }