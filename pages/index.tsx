import Head from "next/head";
import React from "react";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import loadTranslations from "./_loadTranslations";

function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const texts = loadTranslations();

  return (
    <div className="w-full h-2/5">
      <Head>
        <title>{texts.home.title}</title>
      </Head>
      {!user && <SignIn />}
      {user && (
        <div className="md:container md:mx-auto">
          <h1>{texts.home.title}</h1>
          <h2>{texts.home.greeting}</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
