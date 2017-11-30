$(document).ready(function(){
    //Globala variablar
    var listOfParties;
    
   
    
    //Fadar in formuläret på första sidan
    
    $(".formWrap").hide();
    $(".formWrap").fadeIn(1500);
    $("#wrapper").hide()
    
    /*fetch("./users.json")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(userList) {
        var users = ("/.users.json");
    });
    
    $(".buttonForm").click(function(){
    
        var userName = users.username;
        var passWord = users.password;
    
        if(userName === $(".mailForm").val() && passWord === $(".passwordForm").val()){
            console.log("hej");
    }
    
    });
    
    */
    
    
        
    
    
    
    
    
    
    
    
    
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
        var partyListContainer = document.getElementById("partyListContainer");
        partyListContainer.className = "partyListContainerClass";

        var highlightedPartyContainer = document.getElementById("boxInfo");
        highlightedPartyContainer.classname = "highlightedPartyContainerClass";
       
       
    
        //Looping through listOfParties and adding party to partyListContainer div
        for(var i = 0; i < listOfParties.length; i++){
    
           /* .boxInfo.innerHtml*/
            var party = createParty(listOfParties[i]);
            var highlightedParty = createHighlightedParty(listOfParties[i]);
        
    
    
    
    
    
    
    
    
           $("#partyId1").click(function(){
                console.log("hej 1");
                $("#wrapper").show()
                $("#highlightedId1").show()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedIdundefined").hide()

                $("#partyId1").hide()
                $("#partyId2").show()
                $("#partyId3").show()
    
            }); 
    
            $("#partyId2").click(function(){
                console.log("hej 1");
                $("#wrapper").show()
                $("#highlightedId1").hide()
                $("#highlightedId2").show()
                $("#highlightedId3").hide()
                $("#highlightedIdundefined").hide()

                $("#partyId1").show()
                $("#partyId2").hide()
                $("#partyId3").show()
                 
         
     
             }); 
    
             $("#partyId3").click(function(){
                console.log("hej 1");
                $("#wrapper").show()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").show()
                $("#highlightedIdundefined").hide()

                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").hide()
                 
         
     
             }); 
            
            partyListContainer.appendChild(party);
            highlightedPartyContainer.appendChild(highlightedParty);

            
           
        }
    }
    
    
    
    //Creating function that pulls the parties and adding..
        function createParty(listOfParties) {
            var party = document.createElement("div");
            party.className = "partyClass";
            party.id = "partyId" + listOfParties.id;
            var partyRSVP
    
            //.. title
            var getTitle = document.createElement("h1");
            getTitle.innerText = listOfParties.title;
            getTitle.className = "titleClass";
            party.appendChild(getTitle);
    
            //.. date
            var getDate = document.createElement("p");
            getDate.innerText = listOfParties.date;
            getDate.className = "dateClass";
            party.appendChild(getDate);
    
            //.. time
            var getTime = document.createElement("p");
            getTime.innerText = listOfParties.startTime + " - " + listOfParties.endTime;
            getTime.className = "timeClass";
            party.appendChild(getTime);
            
            //.. location
            var getLocation = document.createElement("p");
            getLocation.innerText = listOfParties.location;
            getLocation.className = "locationClass";
            party.appendChild(getDate);
    
            //.. image
            var getImage = document.createElement("img");
            getImage.src = "bild/" + listOfParties.image;
            getImage.className = "imageClass";
            $(party).css("background-image", "url(" + getImage.src + ")");
                
                
    
            //.. description
            var getDescription = document.createElement("p");
            getDescription.innerText = listOfParties.description;
            getDescription.className = "descriptionClass";
            party.appendChild(getDescription);
    
            //.. price
            var getPrice = document.createElement("p");
            getPrice.innerText = listOfParties.price + " kr";
            getPrice.className = "priceClass";
            party.appendChild(getPrice);
    
          //returning what to function created out from the function
          return party;
      }





      //Funktion för att få upp info och kunna tacka ja.
      function createHighlightedParty(listOfParties){
          var highlightedParty = document.createElement("div");
          highlightedParty.className = "highlightedClass";
          highlightedParty.id = "highlightedId" + listOfParties.id;

            //Title
            var getHighlightedTitle = document.createElement("h1");
            getHighlightedTitle.innerText = listOfParties.title;
            getHighlightedTitle.className = "highlightedTitleClass";
            highlightedParty.appendChild(getHighlightedTitle);

          //returning what to function created out from the function
          return highlightedParty;


      }


    
    });