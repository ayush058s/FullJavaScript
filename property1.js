const mySubmit = document.getElementById("mySubmit");
const myVisa = document.getElementById("myVisa");
const myPaypal = document.getElementById("myPaypal");
const myRupay = document.getElementById("myRupay");
const myCheckBox = document.getElementById("myCheckBox");
const mySub = document.getElementById("mySub");
const myPay = document.getElementById("myPay");


mySubmit.onclick = function() {
    if(myCheckBox.checked){
       mySub.textContent = "You are subscribed"

    }
    else{
        mySub.textContent = "You are NOT subscribed"
    }
    if(myVisa.checked){
        myPay.textContent = "You are using Visa"
 
     }
     else if(myPaypal.checked){
         myPay.textContent = "You are using Paypal"
     } 
    else if(myRupay.checked){
        myPay.textContent = "You are using Rupay"
    }
    else{
         myPay.textContent = "Select the card"
    }
   

}