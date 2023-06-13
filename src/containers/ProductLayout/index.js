import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { useFetch } from "../../hooks";
function ProductLayout() {
  const { productID } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:4000/api/products/${productID}`
  );
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error Occured</h1>}
      {!loading && !error && data && <ProductCard product={data} />}
    </>
  );
}
export default ProductLayout;
