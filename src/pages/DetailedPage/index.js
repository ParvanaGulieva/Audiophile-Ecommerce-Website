import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Info from "../../Components/UI/InfoSection";
import Footer from "../../Components/UI/Footer";
import Categories from "../../Components/Categories";
import SuggestedProducts from "../../Components/DetailedProduct/SuggestedProducts";
import Gallery from "../../Components/DetailedProduct/Gallery";
import Features from "../../Components/DetailedProduct/Features";
import Details from "../../Components/DetailedProduct/Details";

const DetailedPage = ({ openCart, setOpenCart, data }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);

  const selectedProduct = data.find((item) => item.id === Number(id));
  // console.log(selectedProduct);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = selectedProduct.name;
  }, [selectedProduct.name]);

  return (
    <>
      <Navbar
        openCart={openCart}
        setOpenCart={setOpenCart}
        style={{ backgroundColor: "var(--color-black)" }}
      />
      <p className="link" onClick={() => navigate(-1)}>
        Go back
      </p>
      <Details selectedProduct={selectedProduct} />
      <Features selectedProduct={selectedProduct} />
      <Gallery selectedProduct={selectedProduct} />
      <SuggestedProducts selectedProduct={selectedProduct} data={data} />
      <Categories />
      <Info />
      <Footer />
    </>
  );
};

export default DetailedPage;
