import "tailwindcss/tailwind.css";
import "./styles/globals.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const Layout = ({ children }) => (
  <div className="h-screen w-full bg-white relative flex overflow-hidden ">
    <SideBar />
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      <main className="max-w-full h-full flex relative overflow-y-hidden">
        <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
          {children}
        </div>
      </main>
    </div>
  </div>
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
