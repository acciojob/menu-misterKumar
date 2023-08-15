import React from 'react';

const Dish = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="dish" id={`menu-item-${category.toLowerCase()}`}>
      <p>Id :{id}</p>
      <img src={img} alt={title} />
      <div className="dish-info">
        <header>
          <h4>{title}</h4>
          <p className="price">${price}</p>
        </header>
        <p className="desc">{desc}</p>
      </div>
    </article>
  );
};

export default Dish;

