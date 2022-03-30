import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import SignIn from "../components/SignIn";

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
        <title>Dodaj wydatek - Moje Auto</title>
      </Head>
      {loading && <h4>Loading...</h4>}
      {!user && <SignIn />}
      {user && (
        <form
          className="bg-white m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-semibold mb-4">Dodaj wydatek</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avgFuelUsage"
            >
              Średnie zużycie paliwa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avgFuelUsage"
              type="text"
              {...register("avgFuelUsage", { required: true })}
            />
            {errors.avgFuelUsage?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="carMileage"
            >
              Przebieg samochodu
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="carMileage"
              type="number"
              {...register("carMileage", { required: true })}
            />
            {errors.carMileage?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fillingDate"
            >
              Data tankowania
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fillingDate"
              type="date"
              {...register("fillingDate", { required: true })}
            />
            {errors.fillingDate?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuelAmount"
            >
              Ilość paliwa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fuelAmount"
              type="number"
              {...register("fuelAmount", { required: true })}
            />
            {errors.fuelAmount?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuelPrice"
            >
              Cena paliwa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fuelPrice"
              type="number"
              {...register("fuelPrice", { required: true })}
            />
            {errors.fuelPrice?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gasStation"
            >
              Stacja benzynowa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gasStation"
              type="text"
              {...register("gasStation", { required: true })}
            />
            {errors.gasStation?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalPrice"
            >
              Cena całości
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalPrice"
              type="number"
              {...register("totalPrice", { required: true })}
            />
            {errors.totalPrice?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalRun"
            >
              Ilość przejechanych km
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalRun"
              type="number"
              {...register("totalRun", { required: true })}
            />
            {errors.totalRun?.type === "required" && "Pole wymagane"}
          </div>
          <br />
          <button className="sidebar-btn w-full">Dodaj</button>
        </form>
      )}
    </div>
  );
}

export default AddExpense;
