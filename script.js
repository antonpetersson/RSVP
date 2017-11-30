$(document).ready(function(){
    
    //Globala variablar
    var listOfParties;
    var users;

    //Hämtar users.json och sparar i en variabel (users)
    fetch("./users.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(ourUsers) {
        users = ourUsers;
    });
<<<<<<< HEAD
=======






    $(".div2").hide();
    $(".div3").hide();

    $(".knapp1").click(function(){
        $(".div1").slideDown("1000");
        $(".div2").hide();
        $(".div3").hide();
    });

    $(".knapp2").click(function(){
        $(".div2").slideDown("1000");
        $(".div1").hide();
        $(".div3").hide();
    });

    $(".knapp3").click(function(){
        $(".div3").slideDown("1000");
        $(".div1").hide();
        $(".div2").hide();
    });




>>>>>>> parent of 2bc4e2f... småändringar
    //Kollar om json objekten sparas i varialbeln
  /*  function createUserList() {
        console.log(users);*/

        $(".buttonForm").click(function(){
        for(var i = 0; i < users.length; i++){
            
                /*console.log(users[i].username)*/
            
            if( $(".mailForm").val() == users[i].username && $(".passwordForm").val() == users[i].password){

                $(".formWrap").hide();
                $(".loginForm").hide();
                $(".testar").show();

                sessionStorage.saveUser = users[i].username;
                
                console.log(sessionStorage.saveUser);

                }else{
                console.log();
                
                }
            
            }
        })
//}
   
    
    //Fadar in formuläret på första sidan
    
    $(".formWrap").hide();
    $(".formWrap").fadeIn(1500);
    $("#wrapper").hide();
    $(".testar").hide();

        
    
    
    
    
    
    
    
    
    
    /* get parties from the json file and store it in a javascript variable */
    fetch("./fester.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(parties) {

        listOfParties = parties;
       // json stringify
       var json_str = JSON.stringify(listOfParties);
       sessionStorage.listOfParties = json_str;
        
        createUIFromLoadedParties();
    });
    
    /** Uses the loaded parties data to create a visible party list on the website */
    function createUIFromLoadedParties() {
        var partyListContainer = document.getElementById("partyListContainer");
        partyListContainer.className = "partyListContainerClass";

        var highlightedPartyContainer = document.getElementById("boxInfo");
        highlightedPartyContainer.classname = "highlightedPartyContainerClass";

        var guestListContainer = document.getElementById("guestListBox");
        guestListContainer.classname = "guestListContainerClass";
       
       
    
        //Looping through listOfParties and adding party to partyListContainer div
        for(var i = 0; i < listOfParties.length; i++){
    
           /* .boxInfo.innerHtml*/
            var party = createParty(listOfParties[i]);
            var highlightedParty = createHighlightedParty(listOfParties[i]);
            
        
    
    //console.log (listOfParties[i].id)
    
            $("#partyId1").click(function(){
                $("#wrapper").show()
                $("#highlightedId1").show()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedIdundefined").hide()

                $("#partyId1").hide()
                $("#partyId2").show()
                $("#partyId3").show()
                createGuestList(1);
            }); 
    
            $("#partyId2").click(function(){
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
            ///FIXA ANTON guestListContainer.appendChild();

            
           
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
/*
      function createGuestList(val){
        var partyArray = JSON.parse(sessionStorage.listOfParties);

            console.log(val)
       
       
        guestList = "<ul>";
        for(var i = 0; i < partyArray.length; i++) { 
            if(partyArray[i].id == val){
                console.log(hej);

            }



            guestList += "<li>" + partyArray[val].guests + "</li>"
        }
        guestList += "</ul>"
        console.log(guestList);
          
      }
  */
    });
    