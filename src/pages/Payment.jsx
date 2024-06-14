
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../components/Payment/CheckoutForm";
import { pathName } from "../utils/URL";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51NEhV0JdurVlYNgyUsZvXP2Fn7e9mhSMFLtz8iUJpCWKfRyd530LNqFjTN4XjAOhLdFQ9WQZ2aYP4iEwF2EoZhDz003lGw2wVt");
const Payment = () => {
  const {id} = useParams()
  console.log(id);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${pathName}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId:id }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [id]);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

      
    return (
        <div>
             {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </div>
    );
};

export default Payment;