import React, { useState } from 'react';
import DishList from './DishList';
import CategoryFilter from './CategoryFilter';
import dishesData from './Data';

const allCategories = ['all', ...new Set(dishesData.map((dish) => dish.category))];

const DishApp = () => {
  const [dishes, setDishes] = useState(dishesData);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setDishes(dishesData);
      return;
    }
    const filteredDishes = dishesData.filter((dish) => dish.category === category);
    setDishes(filteredDishes);
  };

  return (
    <main>
      <section className="menu section" id='main'>
        <h1 className="title">Our Menu</h1>
        <CategoryFilter categories={categories} filterItems={filterItems} />
        <DishList dishes={dishes} />
      </section>
    </main>
  );
};

export default DishApp;

