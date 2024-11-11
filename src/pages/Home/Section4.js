import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good PIZZA!</h2>
              <p>
              At Pizzamania, we believe pizza is more than food; it's an experience that unites everyone. Enjoy a meal that sparks smiles, laughter, and lasting memories with every slice. From cozy family nights to lively gatherings, our pizzas bring people together for unforgettable moments and shared joy.
              </p>
              <ul>
                <li>
                  <p>
                  Fresh Ingredients: Only the finest toppings for an unforgettable taste.
                  </p>
                </li>
                <li>
                  <p>Perfect Crust: Crafted to be crispy outside, soft inside.</p>
                </li>
                <li>
                  <p>
                  Flavors for Everyone: From classic to adventurous, there's a pizza for every palate.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;