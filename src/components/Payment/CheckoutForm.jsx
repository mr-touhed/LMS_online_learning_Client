import { useEffect, useState } from "react";
import "./style.css"
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Container } from "@mui/material";
import { pathName } from "../../utils/URL";
import { send_token } from "../../utils/tools";
import { useNavigate, useParams } from "react-router-dom";

export default function CheckoutForm() {
  const {id} = useParams();
  const navigate = useNavigate()
 
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!stripe || !elements) {
      
      return;
    }

    setIsLoading(true);

    const {paymentIntent,error} = await stripe.confirmPayment({
      elements,
      
      redirect:"if_required"
    });

   
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    }
    
    if(paymentIntent.status === "succeeded"){
      //
          const response = await fetch(`${pathName}/inset-enroll`,{
            method:"POST",
            headers:send_token(),
            body:JSON.stringify({payment_courseId:id})
          })
          const result = await response.json();

          if(result.status){
            navigate("/dashboard/enroll-courses", {replace:true})
            return setIsLoading(false);
          }
          
    }
   
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <Container sx={{height:"80vh", maxWidth:"500px", display:"flex", justifyContent:"center", alignItems:"center"}}>
<form  id="payment-form" onSubmit={handleSubmit}>

<PaymentElement id="payment-element" options={paymentElementOptions} />
<button disabled={isLoading || !stripe || !elements} id="submit">
  <span id="button-text">
    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
  </span>
</button>
{/* Show any error or success messages */}
{message && <div id="payment-message">{message}</div>}
</form>
    </Container>
  );
}

















