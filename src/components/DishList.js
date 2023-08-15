import React from 'react';
import Dish from './Dish';

const DishList = ({ dishes }) => {
  return (
    <section className="dish-list">
      {dishes.map((dish) => {
        return <Dish key={dish.id} {...dish} />;
      })}
    </section>
  );
};

export default DishList;

