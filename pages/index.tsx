import Head from "next/head";
import React from "react";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import SignIn from "./components/SignIn";

function Home() {

  const [user, loading, error] = useAuthState(firebase.auth());

  const [expenses, expensesLoading, expensesError] = useCollection(
    firebase.firestore().collection("expenses"),
    {}
  );

  return (
    <div className="w-full h-2/5">
      <Head>
        <title>Moje Auto</title>
      </Head>
      {/* <div className="mx-auto my- w-2/6"> */}
      {!user && <SignIn />}
      {user && (
      <div className="md:container md:mx-auto">
        <h1>Moje Auto</h1>
        <h2>Zacznij śledzić swoje wydatki!</h2>
      </div>
      )}
    </div>
  );
}

export default Home;
