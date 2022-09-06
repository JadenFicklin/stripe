import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const { REACT_APP_STRIPE_PUBLISHABLE_TEST } = process.env;

const stripeTestPromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_TEST);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
