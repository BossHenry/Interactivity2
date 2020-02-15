function billingFunction() {
    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
       document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
      }
      function verifyFunction() {
        let a = document.getElementById("shippingName").value;
        let b = document.getElementById("billingName").value
        let x =  document.getElementById("shippingZip").value
        let y = document.getElementById("billingZip").value
        
        if(a==b && x==y){
            alert("The information is the same. You may proceed");
        
        }
        else{
            alert("The billing information and shipping information is different. Click ok to continue");
        }
          }

    
