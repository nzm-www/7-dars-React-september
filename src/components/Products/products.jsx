import React, { useEffect, useState } from "react";
import "./products.css";
function Products() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 30)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <div>
        <div className="first">
          <div className="top">
            <b>
              <p>Search Products</p>
              <input className="input" type="text" />
            </b>
            <b>
              <p>Select Category</p>
              <select className="select">
                <option value="">all</option>
                <option value="">Suda</option>
              </select>
            </b>
            <b>
              <p>Select Company</p>
              <select className="select">
                <option value="">all</option>
                <option value="">Suda</option>
              </select>
            </b>
            <b>
              <p>Sort By</p>
              <select className="select">
                <option value="">a-z</option>
                <option value="">Suda</option>
              </select>
            </b>
          </div>
          <div className="buttonm">
            <div class="custom-radio-group">
              <form>
                <label class="radio-label">
                  <input
                    type="radio"
                    name="band"
                    value="am"
                    checked=""
                    class="radio-input"
                  />
                  <span>AM</span>
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    name="band"
                    value="fm"
                    class="radio-input"
                  />
                  <span>FM</span>
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    name="band"
                    value="sw"
                    class="radio-input"
                  />
                  <span>SW</span>
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    name="band"
                    value="mw"
                    class="radio-input"
                  />
                  <span>MW</span>
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    name="band"
                    value="lw"
                    class="radio-input"
                  />
                  <span>LW</span>
                </label>
              </form>
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="text">Agree</span>
            </label>
            <button className="btn">Search</button>
            <button className="btn2">Search</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        {photos.map((photo) => (
          <div key={photo.id} className="card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
