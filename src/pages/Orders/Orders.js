import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/orders/get-orders', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete('http://localhost:8000/api/orders/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        data: { orderId },
      });
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleUpdateOrder = async (orderId, orderItems) => {
    try {
      const response = await axios.put('http://localhost:8000/api/orders/update', {
        orderId,
        orderItems,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setOrders(orders.map(order => order._id === orderId ? response.data : order));
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">My Orders</h1>
      <div className="orders-grid">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <h2 className="order-id">Order ID: {order._id}</h2>
            <p className="order-total">Total Price: ${order.totalPrice}</p>
            <div className="order-items">
              {order.orderItems.map(item => (
                <div key={item.pizza._id} className="order-item">
                  <p>{item.pizza.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              ))}
            </div>
            <button className="delete-order" onClick={() => handleDeleteOrder(order._id)}>Delete Order</button>
            <button className="update-order" onClick={() => handleUpdateOrder(order._id, order.orderItems)}>Update Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;