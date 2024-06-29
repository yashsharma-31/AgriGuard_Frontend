import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import PreHeader from "../components/preheader/preheader";
import Body from "../components/body/body";
const Home = () => {
  return (
    <>
      <Navbar />
      <PreHeader />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
