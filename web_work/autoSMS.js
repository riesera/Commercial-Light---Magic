widget.on("submit", () => {
    
    //Let's define the form variables here for use later
    const zipCode = document.getElementById("lsm27551").value;
    console.log("The zipcode is ", zipCode);
    const smsMessage = "Hi I live in " + zipCode; //Craft the message
    console.log(smsMessage);
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
