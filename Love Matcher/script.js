
    
            

    document.addEventListener("DOMContentLoaded", function () {  // Waits for the page to load before running the script
     
        var benderImage = "./images/bender.png";  // Pictures of chatracters
        var benderImage2 = "./images/bender2.png";
        var fryImage = "./images/fry.png";
        var leelaImage = "./images/leela.png";
        var zoidbergImage = "./images/zoidberg.png";
        var zoidbergImage2 = "./images/zoidberg2.png";  
    
            
        var finalBenderPic = document.querySelector(".container__characters__left img");   // Path of pictures
        var finalBenderPic2 = document.querySelector(".container__characters__right img");
        var finalfryPic = document.querySelector(".container__characters__right img");
        var finalLeelaPic = document.querySelector(".container__characters__left img");
        var finalZoidbergPic = document.querySelector(".container__characters__left  img");
        var finalZoidbergPic2 = document.querySelector(".container__characters__right img");
    
        
        var submitButton = document.getElementById("submit");  // Submit button
        var nameAInput = document.getElementById("nameA");    // Input fields
        var nameBInput = document.getElementById("nameB");    
        
        submitButton.addEventListener("click", function(e) { // Event listener for submit button
            
            e.preventDefault(); // Prevents the page from reloading
            var nameA = nameAInput.value;  // Gets the value of the input fields
            var nameB = nameBInput.value;  
            
            if (nameA === "" || nameB === "") {  // If the input fields are empty, an alert will pop up
                alert("Please write your name and your crush's name");
                return;  // Stops the function
            }
            
            var loveScore = Math.random() * 100;  // Generates a random number between 0 and 100
            loveScore = Math.floor(loveScore) + Math.floor((nameA.length + nameB.length)/5);  // Adds the length of the names to the random number
            
            if (loveScore > 70) {  // If the love score is higher than 70, the following will happen
                document.getElementById("loveScore").innerHTML = loveScore + "%";
                document.getElementById("loveWord").innerHTML = "You love each other like Bender loves beers and cigars!";
                finalBenderPic.setAttribute("src", "./images/bender.png");
                finalBenderPic2.setAttribute("src", "./images/bender2.png");
            } else if (loveScore > 30 && loveScore <= 70) {  // If the love score is between 30 and 70, the following will happen
                document.getElementById("loveScore").innerHTML = loveScore + "%";
                document.getElementById("loveWord").innerHTML = "You love each other like Fry loves Leela!";
                finalfryPic.setAttribute("src", "./images/fry2.png");
                finalLeelaPic.setAttribute("src", "./images/leela.png");
    
            } else {  // If the love score is lower than 30, the following will happen
                document.getElementById("loveScore").innerHTML = loveScore + "%";
                document.getElementById("loveWord").innerHTML = "You love each other like Zoidberg loves his own stench!";
                finalZoidbergPic.setAttribute("src", "./images/zoidberg.png");
                finalZoidbergPic2.setAttribute("src", "./images/zoidberg2.png");
            }
        });
    });