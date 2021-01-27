
    function getLoadCount(){

        // call an AWS gateway API, that then calls an AWS Lambda
        // to read and then update AWS DynamoDB item showing load count

        // Note call is synchronous, delays should be minimal
        var req = new XMLHttpRequest();  
        req.open('GET', 
        "https://cimk9zx0ch.execute-api.ap-southeast-2.amazonaws.com/beta", 
        false);   
        req.send();  
        if(req.status == 200)
            {  
                len = req.responseText.length;
                // response text has opening and closing double quotes
                console.log(req.responseText.substring(0));
                // set field in footer
                document.getElementById("loadcount").textContent = 
                    req.responseText.substring(0);
            }
        else {
            // NOT OK response, so log in console
            console.log(req.status)
        }//end if
    }// end getLoadCount

    // read and write visit count into footer, then increment count in DB
    window.onload = function(){

            // side effects
            // getLoadCount() updates field in footer, increments count in DB
            getLoadCount();
        }; //end window.onload



