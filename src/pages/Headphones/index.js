import React, { useEffect } from "react";
import Header from "../../Components/UI/Header";
import Products from "../../Components/Products";
import Categories from "../../Components/Categories";
import Info from "../../Components/UI/InfoSection";
import Footer from "../../Components/UI/Footer";

const Headphones = ({ openCart, setOpenCart, data }) => {
  const products = data.filter((item) => item.category === "headphones");
  // console.log(products);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Audiophile | Headphones";
  }, []);

  return (
    <div>
      <Header
        title="headphones"
        openCart={openCart}
        setOpenCart={setOpenCart}
      />

      <Products products={products} />
      <Categories />
      <Info />
      <Footer />
    </div>
  );
};

export default Headphones;
