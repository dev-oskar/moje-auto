import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import SignIn from "../components/SignIn";
import loadTranslations from "../_loadTranslations";

type Inputs = {
  avgFuelUsage: string;
  carMileage: string;
  createdBy: string;
  fillingDate: string;
  fuelAmount: string;
  fuelPrice: string;
  gasStation: string;
  totalPrice: string;
  totalRun: string;
};

function AddExpense() {
  const texts = loadTranslations();
  // Destructure user, loading, and error our of the hook
  const [user, loading, error] = useAuthState(firebase.auth());

  const db = firebase.firestore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    debugger;
    formData.createdBy = user.uid;
    db.collection("expenses").doc().set(formData);
  };

  return (
    <div className="w-full">
      <Head>
        <title>{texts.addExpense.title}</title>
      </Head>
      {loading && <h4>{texts.messages.loading}</h4>}
      {!user && <SignIn />}
      {user && (
        <form
          className="bg-white m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-semibold mb-4">{texts.addExpense.addExpense}</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avgFuelUsage"
            >
              {texts.addExpense.avgFuelUsage}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avgFuelUsage"
              type="text"
              {...register("avgFuelUsage", { required: true })}
            />
            <p className="form-error-msg">
              {errors.avgFuelUsage?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="carMileage"
            >
              {texts.addExpense.carMileage}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="carMileage"
              type="number"
              {...register("carMileage", { required: true })}
            />
            <p className="form-error-msg">
              {errors.carMileage?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fillingDate"
            >
              {texts.addExpense.fillingDate}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fillingDate"
              type="date"
              {...register("fillingDate", { required: true })}
            />
            <p className="form-error-msg">
              {errors.fillingDate?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuelAmount"
            >
              {texts.addExpense.fuelAmount}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fuelAmount"
              type="number"
              {...register("fuelAmount", { required: true })}
            />
            <p className="form-error-msg">
              {errors.fuelAmount?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuelPrice"
            >
              {texts.addExpense.fuelPrice}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fuelPrice"
              type="number"
              {...register("fuelPrice", { required: true })}
            />
            <p className="form-error-msg">
              {errors.fuelPrice?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gasStation"
            >
              {texts.addExpense.gasStation}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gasStation"
              type="text"
              {...register("gasStation", { required: true })}
            />
            <p className="form-error-msg">
              {errors.gasStation?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalPrice"
            >
              {texts.addExpense.totalPrice}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalPrice"
              type="number"
              {...register("totalPrice", { required: true })}
            />
            <p className="form-error-msg">
              {errors.totalPrice?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalRun"
            >
              {texts.addExpense.totalRun}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalRun"
              type="number"
              {...register("totalRun", { required: true })}
            />
            <p className="form-error-msg">
              {errors.totalRun?.type === "required" &&
                texts.messages.fieldRequired}
            </p>
          </div>
          <br />
          <button className="form-btn w-full">
            {texts.addExpense.addButton}
          </button>
        </form>
      )}
    </div>
  );
}

export default AddExpense;
