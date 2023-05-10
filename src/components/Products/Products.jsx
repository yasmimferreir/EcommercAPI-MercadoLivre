import React from "react";
import "./Products.css";
import { useState,useEffect } from "react";
import featchProducts from "../../Api/featchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    featchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products);
  

  return(
    <>
      <section className="products container">
        <ProductCard data={{}}/>
      </section>
    </>
  );

}

export default Products;
