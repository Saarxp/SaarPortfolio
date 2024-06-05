import { RouterProvider } from "react-router-dom";
import router from "./router/router";
// import { useEffect, useState } from "react";
// import Preloader from "./components/preloader/Preloader";
// import Footer from "./components/footer/Footer";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4270);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading && <Preloader opacity={loading ? `opacity` : ``} />} */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
