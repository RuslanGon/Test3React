import "./App.css";


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
  return (
    <div>
        <h1>Product market</h1>
        <ul>
            <li>
                <img width={200} src="" alt="title" />
                <h2>Title</h2>
                <p>Description</p>
                <h3>price</h3>
                <p>Rating</p>
                <p>Brand</p>
            </li>
        </ul>
    </div>
  )
}

export default AppHTTPRequest