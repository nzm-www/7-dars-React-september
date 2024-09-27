// import React, { useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = () => {
//     fetch("https://strapi-store-server.onrender.com/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <button onClick={fetchProducts}>Fetch Products</button>
//       <div>
//         {products.map((product) => (
//           <div key={product.id} className="card">
//             <img
//               src={product.attributes.image}
//               alt={product.attributes.title}
//             />
//             <h2>{product.attributes.title}</h2>
//             <p>{product.attributes.description}</p>
//             <p>Price: ${product.attributes.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Products from "./components/Products/products";
import { FaMoon } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <h2 className="logo">C</h2>
            <div className="navbarr">
              <NavLink to="/">
                <ul>
                  <li className="liststile">Home</li>
                </ul>
              </NavLink>{" "}
              <br />
              <NavLink to="/about">
                {" "}
                <ul>
                  <li className="liststile">About</li>
                </ul>
              </NavLink>{" "}
              <br />
              <NavLink to="/products">
                {" "}
                <ul>
                  <li className="liststile">Products</li>
                </ul>
              </NavLink>{" "}
              <br />
              <NavLink to="/card">
                {" "}
                <ul>
                  <li className="liststile">Card</li>
                </ul>
              </NavLink>{" "}
              <br />
            </div>
            <div className="icons">
              <FaMoon />
              <MdShoppingCart />
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
