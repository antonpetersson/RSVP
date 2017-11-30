$(document).ready(function(){
    //Globala variablar
    var listOfParties;
    
    
    
    
    //Fadar in formuläret på första sidan
    
    $(".formWrap").hide();
    $(".formWrap").fadeIn(1500);
    $("#wrapperNk").hide()
    $("#wrapperHf").hide()
    $("#wrapperDf").hide()
    
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
        
       
       
    
        //Looping through listOfParties and adding party to partyListContainer div
        for(var i = 0; i < listOfParties.length; i++){
    
           /* .boxInfo.innerHtml*/
            var party = createParty(listOfParties[i]);
            
    
    
    
    
    
    
    
    
           $("#partyId1").click(function(){
              
                $("#wrapperNk").show(500);
                $("#wrapperHf").hide()
                $("#wrapperDf").hide();
                
        
    
            }); 
    
            $("#partyId2").click(function(){
            
                $("#wrapperHf").show(500);
                $("#wrapperNk").hide();
                $("#wrapperDf").hide();
                 
         
     
             }); 
    
    
             $("#partyId3").click(function(){
             
                 $("#wrapperDf").show(500);
                 $("#wrapperNk").hide();
                 $("#wrapperHf").hide();
                 
         
     
             }); 
            
            partyListContainer.appendChild(party);
            
           
        }
    }
    
    
    
    //Creating function that pulls the parties and adding..
        function createParty(listOfParties) {
            var party = document.createElement("div")
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
    
    });