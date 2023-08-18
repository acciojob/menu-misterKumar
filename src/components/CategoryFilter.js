import React from 'react';

const CategoryFilter = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            id={`filter-btn-${index + 1}`}
            data-test-id={`filter-btn-${category.toLowerCase()}`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

