import React from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Head from "next/head";
import SignIn from "../components/SignIn";

function PreviousExpenses() {
  // Destructure user, loading, and error our of the hook
  const [user, loading, error] = useAuthState(firebase.auth());

  const [expenses, expensesLoading, expensesError] = useCollection(
    firebase.firestore().collection("expenses"),
    {}
  );

  return (
    <div>
      <Head>
        <title>Poprzednie wydatki - Moje Auto</title>
      </Head>
      {error && (
        <div>Error while loading data. Please contact administrator</div>
      )}
      {loading && <h4>Ładowanie...</h4>}
      {!user && <SignIn />}
      {user && (
        <div>
          <h1 className="h-full w-full m-4 flex flex-wrap items-start justify-center">
            Poprzednie wydatki
          </h1>

          {expensesLoading && "Ładowanie wydatków ..."}
          <div className="h-full w-full flex flex-wrap items-start justify-center rounded-tl grid-flow-col gap-2">
            {expenses?.docs?.map((doc) => (
              <div className="p-4 w-2/3 h-60 rounded-lg bg-gray-700 font-sans text-white text-base">
                <div className="">
                  Zużycie paliwa: <b>{doc.data().avgFuelUsage} l / 100 km</b>
                </div>
                <div className="">
                  Przebieg: <b>{doc.data().carMileage} km</b>
                </div>
                <div className="">
                  Data tankowania: <b>{doc.data().fillingDate}</b>
                </div>
                <div className="">
                  Ilość paliwa: <b>{doc.data().fuelAmount} l</b>
                </div>
                <div className="">
                  Cena paliwa: <b>{doc.data().fuelPrice} zł</b>
                </div>
                <div className="">
                  Stacja: <b>{doc.data().gasStation}</b>
                </div>
                <div className="">
                  Łączna suma: <b>{doc.data().totalPrice} zł</b>
                </div>
                <div className="">
                  Ilość przejechanych kilometrów:{" "}
                  <b>{doc.data().totalRun} km</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviousExpenses;
