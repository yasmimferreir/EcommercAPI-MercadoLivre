import React, { useContext } from "react";
import "./Products.css";
import { useEffect } from "react";
import featchProducts from "../../Api/featchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../Context/AppContext";

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  console.log(products);

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
