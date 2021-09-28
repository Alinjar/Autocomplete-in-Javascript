/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
  var nm=document.getElementById("shippingName");
  var z = document.getElementById("shippingZip");
  if(document.getElementById("same").checked)
    {
      document.getElementById("billingName").value=nm.value;
      document.getElementById("billingZip").value=z.value;
    }
  else
    {
       document.getElementById("billingName").value="";
      document.getElementById("billingZip").value="";
     
    }
}