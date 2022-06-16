import React from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Head from "next/head";
import SignIn from "../components/SignIn";
import loadTranslations from "../_loadTranslations";

function PreviousExpenses() {
  // Destructure user, loading, and error our of the hook
  const [user, loading, error] = useAuthState(firebase.auth());

  const [expenses, expensesLoading, expensesError] = useCollection(
    firebase.firestore().collection("expenses"),
    {}
  );

  const texts = loadTranslations();

  return (
    <div className="w-full h-2/5">
      <Head>
        <title>Panel użytkownika</title>
      </Head>
      {!user && <SignIn />}
      {user && (
        <div className="md:container md:mx-auto">
          <h1>
            {texts.userPanel.welcomeMessage}, {user.displayName}
          </h1>
        </div>
      )}
    </div>
  );
}

export default PreviousExpenses;
