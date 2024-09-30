import React, { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.attributes.image} alt={product.attributes.title} />
            <h3>{product.attributes.title}</h3>
            <p>Price: ${product.attributes.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;