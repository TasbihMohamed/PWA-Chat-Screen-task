import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { setAllData } from "../redux/actions/productsActions";
import HomeTemplate from "../Templates/HomeTemplate";

const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  const data = useSelector((state) => state.allDataReducer.data);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://3.111.128.67/assignment/chat?page=0")
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(setProducts(response.data.chats));
    dispatch(setAllData(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

//   console.log("Products :", products);
//   console.log("test :", data);
  return <HomeTemplate data={data} products={products} />;
};

export default Home;
