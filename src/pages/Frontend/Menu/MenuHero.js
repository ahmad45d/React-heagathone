import React from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from "../../../Assets/p1.jpg";

const MenuHero = () => {
  // Hardcoded data for the featured product
  const product = {
    id: 1,
    name: 'Great Lighting Keyboard',
    price: '$129.99',
    imageUrl: {p1} // Replace with your image URL
  };

  const navigate = useNavigate()

  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Savor Every Slice, One Delicious Pizza at a Time.</h1>
          <p>Whether you're craving a classic cheese slice for a quick lunch, a loaded pizza for a family gathering, or a gourmet pie for a special night, our menu has the perfect pizza for every occasion.</p>
          <button className="cta-button" onClick={()=>{navigate("/product/6053576088")}}>Order Now</button>
        </div>
        <div className="banner-image">
          <img src={p1} width={"500px"} height={"500px"} alt={product.name} />
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
