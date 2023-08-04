import React from "react";
import Hero from "../../Components/Hero";
import Banner from "../../Components/Banner";
import Info from "../../Components/UI/InfoSection";
import Categories from "../../Components/Categories";
import Footer from "../../Components/UI/Footer";

const Home = ({ openCart, setOpenCart }) => {
  return (
    <div>
      <Hero openCart={openCart} setOpenCart={setOpenCart} />
      <Categories />
      <Banner />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
