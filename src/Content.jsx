import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <Login />
      <Signup />
      <h1>Welcome to Bookish!</h1>
      <ProductsIndex products={products} />
    </main>
  );
}