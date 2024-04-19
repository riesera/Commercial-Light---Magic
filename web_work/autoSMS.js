widget.on("submit", () => {
    
    //Form variables
    const name = document.getElementById("62ce755cf34f4").value; //Text Box
    const zipCode = document.getElementById("lsm27551").value; //Text Box
    const tvSize = document.getElementById("lriepv3l"); //Drop Down
    
    //Changes the text message based on if they need a mount or not
    const needMount = document.getElementById("lrif6rcb"); //Drop Down
    let needMountMessage = "I already have a mount. ";
    if(needMount.options[needMount.selectedIndex].text.trim().toLowerCase().startsWith("yes")){
        needMountMessage = "I need a mount. ";
    }

    const specialMessage = document.getElementById("62ce755cf3b57").value; //Text Box
    
    //SMS Message
    const smsMessage = "Hi, my name is" + name + " and I would like a quote. " + 
    "I live in the " + zipCode + "zipcode. " + 
    "My TV is " + tvSize.options[tvSize.selectedIndex].text + ". " +
    needMountMessage + ". " + 
    "Additional details are: " + specialMessage; 
    
    console.log(smsMessage);
    
    //Link to the message
    const smsLink = "sms:xxxxxxxxxx?&body=" + encodeURIComponent(smsMessage);

    //Define the waitForElement function
    function waitForElement(selector) {
        return new Promise((resolve) => {
            const intervalId = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(intervalId);
                    resolve(element);
                }
            }, 100); //Check every 100 milliseconds
        });
    }
  
    waitForElement('.ButtonBase__Ellipsis-sc-p43e7i-5')
    .then(element => {
      
        console.log("Element is now available", element);
    
        // Add a click event listener to the parent element
        element.addEventListener('click', function(event) {
            console.log("I got here....");
            event.preventDefault();
            console.log("I did it rawr");
            window.location.href = smsLink;
            
        });
    })
    .catch(error => {
      console.error("Error while waiting for element: ", error);
      
    });
  
});

