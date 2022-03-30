import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-2/5">
      <Head>
        <title>Moje Auto</title>
      </Head>
      {/* <div className="mx-auto my- w-2/6"> */}
      <div className="md:container md:mx-auto">
        <h1>Moje Auto</h1>
        <h2>Zacznij śledzić swoje wydatki!</h2>
      </div>
    </div>
  );
}
