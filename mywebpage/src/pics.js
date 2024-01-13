// FrontPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function FrontPage() {
  const [product, setProduct] = useState([]);

  async function fetchdata() {
    const response = await axios.get('http://localhost:7000/');
    setProduct(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container d-flex flex-wrap gap-5 justify-content-center">
      {product.map((v) => {
        return (
          <div key={v.name} className="card">
            <img src={v.img} alt={v.name} />
            <p>{v.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FrontPage;
