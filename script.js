$(document).ready(function(){
    
    //Globala variablar
    var listOfParties;
    var users;

    //Hämtar users.json och sparar i en variabel (users)
    fetch("./kunder.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(ourUsers) {
        users = ourUsers;
    });

    $("#partyListContainer").hide();
    $("#footer").hide();
    $("#header").hide();
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


  //Fadar in formuläret på första sidan
  
  $(".forgotPassword").hide();
  $(".formWrap").hide();
  $(".formWrap").fadeIn(1500);
  $("#wrapper").hide();
  $(".testar").hide();

  if(sessionStorage.saveUser != null ){
    thisUserIsLoggedIn();
    }else{

        $(".buttonForm").click(function(){
        for(var i = 0; i < users.length; i++){
            
            //Om password och username stämmer loggas användare in och sparas i sessionstorage
            if( $(".mailForm").val() == users[i].username && $(".passwordForm").val() == users[i].password){

                thisUserIsLoggedIn();
                sessionStorage.saveUser = users[i].username;


            //annars visas glömt lösenord
                }else{
                    $(".formWrap").hide();
                    $(".forgotPassword").show();
                }
            }
        })
    }
    
    //loggar ut användare
    $(".logOutButton").click(function(){
        sessionStorage.removeItem("saveUser");
        location.reload();
    });

    function thisUserIsLoggedIn(){
        $("#main").hide();
        $("#partyListContainer").fadeIn(1500);
        $("#footer").show();
        $("#header").show();
    }
   
    

    
    
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
            
    
            $("#partyId0").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").show()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
                
                
                $("#partyId0").hide()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()


                $(window).scrollTop(0);

                createGuestList(0);
            }); 
    
            $("#partyId1").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").show()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
                
                $("#partyId0").show()
                $("#partyId1").hide()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()

                $(window).scrollTop(0);

                createGuestList(1);
             }); 
    
             $("#partyId2").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").show()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()


                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").hide()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()

                $(window).scrollTop(0);

                createGuestList(2);
            }); 
            $("#partyId3").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").show()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()

                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").hide()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()

                $(window).scrollTop(0);
                
                createGuestList(3);
            }); 
            $("#partyId4").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").show()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").hide()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()
                
                $(window).scrollTop(0);

                createGuestList(4);
            }); 
            $("#partyId5").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").show()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").hide()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()
                
                $(window).scrollTop(0);

                createGuestList(5);
            }); 
            $("#partyId6").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").show()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").hide()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").show()
                
                $(window).scrollTop(0);

                createGuestList(6);
            }); 
            $("#partyId7").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").show()
                $("#highlightedId8").hide()
                $("#highlightedId9").hide()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").hide()
                $("#partyId8").show()
                $("#partyId9").show()
                
                $(window).scrollTop(0);

                createGuestList(7);
            }); 
            $("#partyId8").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").show()
                $("#highlightedId9").hide()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").hide()
                $("#partyId9").show()
                
                $(window).scrollTop(0);

                createGuestList(8);
            }); 
            $("#partyId9").click(function(){
                $("#wrapper").hide()
                $("#wrapper").slideDown(200)
                $("#highlightedId0").hide()
                $("#highlightedId1").hide()
                $("#highlightedId2").hide()
                $("#highlightedId3").hide()
                $("#highlightedId4").hide()
                $("#highlightedId5").hide()
                $("#highlightedId6").hide()
                $("#highlightedId7").hide()
                $("#highlightedId8").hide()
                $("#highlightedId9").show()
              
                $("#partyId0").show()
                $("#partyId1").show()
                $("#partyId2").show()
                $("#partyId3").show()
                $("#partyId4").show()
                $("#partyId5").show()
                $("#partyId6").show()
                $("#partyId7").show()
                $("#partyId8").show()
                $("#partyId9").hide()
                
                $(window).scrollTop(0);

                createGuestList(9);
            }); 

            partyListContainer.appendChild(party);
            highlightedPartyContainer.appendChild(highlightedParty); 
        }
    }

    $(".knappJa").click(function(){
        console.log("ja")
        /*var parsePartyArray = JSON.parse(sessionStorage.listOfParties);
        
                       
            parsePartyArray.push( "Hej" );
                       
                        //printCarsList();
        
                        var json_str = JSON.stringify(parsePartyArray);
                        sessionStorage.listOfParties = json_str;
        
            createGuestList();
            */
    });
    
    
    
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
            //Date
            var getHighlightedDate = document.createElement("p");
            getHighlightedDate.innerText = listOfParties.date;
            getHighlightedDate.className = "highlightedDateClass";
            highlightedParty.appendChild(getHighlightedDate);
            //Time
            var getHighlightedTime = document.createElement("p");
            getHighlightedTime.innerText = listOfParties.startTime + " - " + listOfParties.endTime;
            getHighlightedTime.className = "highlightedTimeClass";
            highlightedParty.appendChild(getHighlightedTime);
            //Image
            var getHighlightedImage = document.createElement("img");
            getHighlightedImage.src = "bild/" + listOfParties.image;
            getHighlightedImage.className = "highlightedImageClass";
            $(highlightedParty).css("background-image", "url(" + getHighlightedImage.src + ")");
            //Location
            var getHighlightedLocation = document.createElement("p");
            getHighlightedLocation.innerText = listOfParties.location;
            getHighlightedLocation.className = "highlightedLocationClass"
            highlightedParty.appendChild(getHighlightedLocation);
            //Description
            var getHighlightedDescription = document.createElement("p");
            getHighlightedDescription.innerText = listOfParties.description;
            getHighlightedDescription.className = "highlightedDescriptionClass";
            highlightedParty.appendChild(getHighlightedDescription);
            //Price
            var getHighlightedPrice = document.createElement("p");
            getHighlightedPrice.innerText = listOfParties.price + " kr";
            getHighlightedPrice.className = "highlightedPriceClass";
            highlightedParty.appendChild(getHighlightedPrice);
          
          
          
            //returning what to function created out from the function
          return highlightedParty;


      }

    function createGuestList(val){
        var partyArray = JSON.parse(sessionStorage.listOfParties);       
       
        
        guestList = "<h1>Gästlista:</h1><ul class='guestListUl'>";
        
        for(var i = 0; i < 5 /*partyArray.length*/; i++) { 
            guestList += "<li>" + partyArray[val].guests[i] + "</li>"
        }     
        guestList += "</ul>"
        
        $("#guestListBox").html(guestList);
      }
  
    });
    