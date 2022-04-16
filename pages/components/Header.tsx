import React from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoWarningOutline } from "react-icons/io5";
import loadTranslations from "../_loadTranslations";

function Header() {
  const texts = loadTranslations();

  // Destructure user, loading, and error our of the hook
  const [user, loading, error] = useAuthState(firebase.auth());

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function (oResponse) {
        console.log("Signed out");
      });
  };

  if (error) {
    return <div>Błąd podczas autoryzacji!</div>;
  }

  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      <div className="w-full flex items-center relative justify-center">
        <p className="text-white ml-20">Moje Auto</p>
      </div>
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="flex flex-col items-end ">
          {!user && (
            <div className="inline-flex items-center">
              <IoWarningOutline className="mr-4" />
              {texts.messages.unsignedUser}
            </div>
          )}
          {!!loading && <div>Ładowanie...</div>}
          {!!user && (
            <div className="inline-flex items-center">
              {!user.photoURL && <p>{user.displayName}</p>}
              {user.photoURL && (
                <img
                  alt={`${user.displayName} ${user.email}`}
                  className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 mr-2"
                  src={user.photoURL}
                />
              )}
              <button
                className="text-md bg-blue-400 p-2 rounded-md"
                onClick={() => logout()}
              >
                {texts.header.signOut}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
