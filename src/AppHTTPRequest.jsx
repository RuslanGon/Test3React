import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


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

useEffect(() => {
    async function fetchProducts () {
        const {data} = await axios.get('https://dummyjson.com/products')
        // console.log(data);
        setProducts(data.products)
    }
    fetchProducts()
}, [])

  return (
    <div>
        <h1>Product market</h1>
        <ul>

            {Array.isArray(products) && products.map(product => {
                return ( <li key={product.id}>
                    <img width={200} src="" alt={product.title} />
                    <h2>Title {product.title}</h2>
                    <p>Description {product.description}</p>
                    <h3>price {product.price}</h3>
                    <p>Rating {product.rating}</p>
                    <p>Brand {product.brand}</p>
                </li>)
            })}
           
        </ul>
    </div>
  )
}

export default AppHTTPRequest