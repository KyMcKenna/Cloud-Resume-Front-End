function getLoadCount(){

    // call an AWS gateway API, that then calls an AWS Lambda
    // to read and then update AWS DynamoDB item showing load count

    // Note call is synchronous, delays should be minimal
    var req = new XMLHttpRequest();  
    req.open('GET', 
    "https://l3rri8o1fi.execute-api.us-east-1.amazonaws.com/Prod/count", 
    false);   
    req.send();  
    if(req.status == 200)
        {  
            len = req.responseText.length;
            // response text has opening and closing double quotes
            console.log(req.responseText.substring(1, len-1));
            // set field in footer
            document.getElementById("numberofvisits").textContent = 
                req.responseText.substring(10, len-2);
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