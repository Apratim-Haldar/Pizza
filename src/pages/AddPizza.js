import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const PizzaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    size: 'small',
    price: '',
    toppings: '',
    crust: 'thin',
    imageUrl: '',
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post('http://localhost:8000/api/admin/add-pizzas', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Pizza uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading pizza:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Upload Pizza</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter pizza name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDescription" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter pizza description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSize" className="mb-3">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    as="select"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formPrice" className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter pizza price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formToppings" className="mb-3">
                  <Form.Label>Toppings</Form.Label>
                  <Form.Control
                    type="text"
                    name="toppings"
                    placeholder="Enter pizza toppings"
                    value={formData.toppings}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCrust" className="mb-3">
                  <Form.Label>Crust</Form.Label>
                  <Form.Control
                    as="select"
                    name="crust"
                    value={formData.crust}
                    onChange={handleChange}
                    required
                  >
                    <option value="thin">Thin</option>
                    <option value="thick">Thick</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formImageUrl" className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="imageUrl"
                    placeholder="Enter image URL"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formIsAvailable" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="isAvailable"
                    label="Available"
                    checked={formData.isAvailable}
                    onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Upload Pizza
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PizzaForm;