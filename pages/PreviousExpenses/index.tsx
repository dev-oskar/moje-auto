import React from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";
import Head from "next/head";
import SignIn from "../components/SignIn";
import loadTranslations from "../_loadTranslations";

function PreviousExpenses() {
  const texts = loadTranslations();
  const [user, loading, error] = useAuthState(firebase.auth());
  const [dataset, datasetLoading, datasetError] = useCollection(
    firebase.firestore().collection("expenses"),
    {}
  );

  // const _getUserData = (userId: string) => {
  //   if ((!datasetLoading && !datasetError) && userId !== '') {

  //     return dataset?.docs?.map((doc) => JSON.stringify(doc.data()));
  //   } else {
  //     return (
  //       <>
  //         <p>Error while loading user expenses</p>{" "}
  //       </>
  //     );
  //   }
  // };

  return (
    <div>
      <Head>
        <title>{texts.previousExpenses.title}</title>
      </Head>
      {error && <div>{texts.messages.loadingFailed}</div>}
      {loading && <h4>{texts.messages.loading}</h4>}
      {!user && <SignIn />}
      {user && (
        <div>
          <h1 className="h-full w-full m-4 flex flex-wrap items-start justify-center">
            {texts.previousExpenses.subtitle}
          </h1>

          {datasetLoading && texts.previousExpenses.loading}
          <div className="h-full w-full flex flex-wrap items-start justify-center rounded-tl grid-flow-col gap-2">
            {dataset?.docs?.map((doc) => (
              <div className="p-4 w-2/3 h-60 rounded-lg bg-gray-700 font-sans text-white text-base">
                <div className="">
                  {texts.previousExpenses.fuelUsage}
                  <b>
                    {doc.data().avgFuelUsage}{" "}
                    {texts.previousExpenses.fuelUsageUnit}
                  </b>
                </div>
                <div className="">
                  {texts.previousExpenses.carMileage}{" "}
                  <b>
                    {doc.data().carMileage} {texts.previousExpenses.mileageUnit}
                  </b>
                </div>
                <div className="">
                  {texts.previousExpenses.fillingDate}{" "}
                  <b>{doc.data().fillingDate}</b>
                </div>
                <div className="">
                  {texts.previousExpenses.fuelAmount}{" "}
                  <b>
                    {doc.data().fuelAmount}{" "}
                    {texts.previousExpenses.capacityUnit}
                  </b>
                </div>
                <div className="">
                  {texts.previousExpenses.fuelPrice}{" "}
                  <b>
                    {doc.data().fuelPrice} {texts.previousExpenses.currency}
                  </b>
                </div>
                <div className="">
                  {texts.previousExpenses.gasStation}{" "}
                  <b>{doc.data().gasStation}</b>
                </div>
                <div className="">
                  {texts.previousExpenses.totalPrice}{" "}
                  <b>
                    {doc.data().totalPrice} {texts.previousExpenses.currency}
                  </b>
                </div>
                <div className="">
                  {texts.previousExpenses.totalRun}{" "}
                  <b>
                    {doc.data().totalRun} {texts.previousExpenses.mileageUnit}
                  </b>
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
