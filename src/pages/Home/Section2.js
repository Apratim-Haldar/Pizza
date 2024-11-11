import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Experience the authentic taste of our classic pizzas, made with time-honored recipes, premium ingredients, and perfected techniques. Simple yet unforgettable, these originals bring you the timeless flavor you love.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `At Pizzamania, quality is our top priority. We use only the finest ingredients, from fresh vegetables to premium cheeses, ensuring every pizza delivers a rich, satisfying taste in every bite.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Craving pizza? We’ve got you covered! With our speedy delivery service, your favorite pizzas arrive hot and fresh at your doorstep in no time. Quality taste, delivered fast.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The Pizza tastes better when you eat it with your family</h2>
              <p>
              At Pizzamania, we believe that every meal is a reason to celebrate togetherness. Our pizzas are made with love, crafted to bring families and friends closer with each bite.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;