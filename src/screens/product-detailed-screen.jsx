import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailedScreen = () => {
  const dynamicPath = useParams();  // 
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [dynamicPath]); 

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productsId}`);
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <>
      <h4>Product Details</h4>
      <h1>{data.title}</h1>
      <h2>
        <img src={data.image} alt={data.title} width={500} height={300} />
      </h2>
      <p>{data.description}</p>
      <h3>{data.category}</h3>
    </>
  );
};
