import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import Loader from "./componetns/Loader/Loader";
import ErrorMasage from "./componetns/ErrorMesage/ErrorMasage";
import { reguestProducts } from "./servises/api";
import ProductList from "./componetns/ProductList/ProductList";


// [
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//     "images": [
//       "https://cdn.dummyjson.com/product-images/1/1.jpg",
//       "https://cdn.dummyjson.com/product-images/1/2.jpg",
//       "https://cdn.dummyjson.com/product-images/1/3.jpg",
//       "https://cdn.dummyjson.com/product-images/1/4.jpg",
//       "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//     ]
const AppHTTPRequest = () => {

const [products, setProducts] = useState(null)
const [isLoading, setIsLoding] = useState(false)
const [isError, setIsError] = useState(null)

useEffect(() => {
    async function fetchProducts () {
try{
    setIsLoding(true)
    // const {data} = await axios.get('https://dummyjson.com/products')
     const data = await reguestProducts()

    setProducts(data.products)
}catch(error) {
    setIsError(true)
} finally{
    setIsLoding(false)
}

    }
    fetchProducts()
}, [])

  return (
    <div>
      <h1>Product shop</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMasage />}
      <ProductList products={products} />
    </div>
  );
}

export default AppHTTPRequest