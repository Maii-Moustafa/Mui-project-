

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "./components/shared/layout";
import Home from "./pages/home";

import Loading from "./containers/loading";

function App() {
  const [isLoading, setLoading] = useState(false);
const [animationEnd ,setAnimationEnd ]= useState(false)
  //  ------------- Loading -------------
  // useEffect(() => {
  //   setLoading(true);

  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //     setAnimationEnd(true)
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //     setLoading(false);
     
  //   };
  // }, []);
  // if (isLoading) {
  //   return <Loading animationEnd /> ;
  // }

  return (
    <ParallaxProvider>
      <Layout>
    
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="groups" element={<Groups />} />
      <Route path="groups/create" element={<AddGroup />} />
      <Route path="groups/:id" element={<GroupDetails />} /> */}
        </Routes>
      </Layout>
    </ParallaxProvider>
  );
}

export default App;
