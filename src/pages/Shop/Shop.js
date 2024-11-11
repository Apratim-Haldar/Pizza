import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.css';

const Shop = () => {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [filters, setFilters] = useState({
    size: '',
    crust: '',
    priceRange: [0, 2000],
  });

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/get-pizzas');
        setPizzas(response.data);
        setFilteredPizzas(response.data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = pizzas;

    if (filters.size) {
      filtered = filtered.filter(pizza => pizza.size === filters.size);
    }

    if (filters.crust) {
      filtered = filtered.filter(pizza => pizza.crust === filters.crust);
    }

    filtered = filtered.filter(pizza => pizza.price >= filters.priceRange[0] && pizza.price <= filters.priceRange[1]);

    setFilteredPizzas(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleAddToCart = async (pizzaId) => {
    try {
      await axios.post('http://localhost:8000/api/orders/cart', {
        pizzaId,
        quantity: 1,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  return (
    <div className="container">
      <h1 className="title">Pizza Shop</h1>
      <div className="filters">
        <select name="size" value={filters.size} onChange={handleFilterChange} className="filter">
          <option value="">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <select name="crust" value={filters.crust} onChange={handleFilterChange} className="filter">
          <option value="">All Crusts</option>
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
          <option value="stuffed">Stuffed</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <input
          type="range"
          name="priceRange"
          min="0"
          max="50"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters({ ...filters, priceRange: [0, e.target.value] })}
          className="filter"
        />
        <span className="price">₹{filters.priceRange[1]}</span>
      </div>
      <div className="pizza-grid">
        {filteredPizzas.map(pizza => (
          <div key={pizza._id} className="pizza-card">
            <img src={pizza.imageUrl} alt={pizza.name} className="pizza-image" />
            <h2 className="pizza-name">{pizza.name}</h2>
            <p className="pizza-description">{pizza.description}</p>
            <p className="pizza-details">Size: {pizza.size}</p>
            <p className="pizza-details">Crust: {pizza.crust}</p>
            <p className="pizza-price">Price: ₹{pizza.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(pizza._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;