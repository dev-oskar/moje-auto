// components/Auth.tsx
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/clientApp";
import loadTranslations from "../_loadTranslations";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/UserPanel",
  // We will display GitHub as auth providers.
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  const texts = loadTranslations();

  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{texts.signIn.header}</h1>
      <p>{texts.signIn.subHeader}</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
