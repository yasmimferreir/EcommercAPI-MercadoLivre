import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import featchProducts from "../../Api/featchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    featchProducts("iphone").then((response) => {
      setProducts(response);

      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
