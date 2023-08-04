import React, { useEffect } from "react";
import Header from "../../Components/UI/Header";
import Products from "../../Components/Products";
import Categories from "../../Components/Categories";
import Info from "../../Components/UI/InfoSection";
import Footer from "../../Components/UI/Footer";

const Earphones = ({ openCart, setOpenCart, data }) => {
  const products = data.filter((item) => item.category === "earphones");
  // console.log(products);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Audiophile | Earphones";
  }, []);

  return (
    <div>
      <Header title="earphones" openCart={openCart} setOpenCart={setOpenCart} />
      <Products products={products} />
      <Categories />
      <Info />
      <Footer />
    </div>
  );
};

export default Earphones;
