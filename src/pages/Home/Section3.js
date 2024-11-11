import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Margherita",
    paragraph: "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese.",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Schezwan Margherita",
    paragraph: "Your very own Margherita, now with a spicy twist! Loaded with our signature schezwan sauce & mozzarella cheese.",
    rating: 4.1,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Awesome American Cheesy",
    paragraph: "Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika.",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Mexican Fiesta",
    paragraph: "Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn.",
    rating: 4.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Sizzling Schezwan Chicken",
    paragraph: "Loaded with our signature spicy schezwan sauce, juicy schezwan chicken meatballs.",
    rating: 4.5,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Tandoori Paneer",
    paragraph: "It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, with delicious Tandoori Sauce.",
    rating: 5,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Chicken Tikka Supreme",
    paragraph: "A divine combination of delicious Chicken Tikka & Malai Chicken Tikka, Onion, with flavourful pan sauce.",
    rating: 4.2,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Triple Chicken Feast",
    paragraph: "Spicy Schezwan Chicken Meatball, flavourful Herbed Chicken, juicy Chicken Sausage, with classic pan sauce.",
    rating: 4.0,
    price: 89.12,
  },
  
];

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2 className="">OUR CRAZY PIZZAS</h2>
            <p className="para zoom_in">
              Bold flavors, unique toppings, and unexpected combinations – our crazy pizzas are crafted to thrill every adventurous pizza lover.
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
              className="card_3d_effect"
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0 scale_on_hover">
              <h4 className="mb-0 slide_in_left">GET YOUR FREE</h4>
              <h5 className="slide_in_left">CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0 swing_on_hover">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2 scale_on_hover">
              <h4 className="mb-0 slide_in_right">GET YOUR FREE</h4>
              <h5 className="slide_in_right">Add-ons</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0 swing_on_hover">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          @keyframes rotateText {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes zoomIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes swing {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(15deg); }
          }

          @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes spin {
            0% { transform: rotateY(0); }
            100% { transform: rotateY(360deg); }
          }

          /* Animation Classes */
          .rotating_text {
            animation: rotateText 5s linear infinite;
          }

          .zoom_in {
            animation: zoomIn 1.5s ease forwards;
          }

          .card_3d_effect {
            perspective: 1000px;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .card_3d_effect:hover {
            transform: rotateY(20deg) scale(1.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }

          .spin_effect {
            animation: spin 20s linear infinite;
          }

          .slide_in_left {
            animation: slideInLeft 1s ease forwards;
          }

          .slide_in_right {
            animation: slideInRight 1s ease forwards;
          }

          .scale_on_hover:hover {
            transform: scale(1.2);
            transition: transform 0.3s ease;
          }

          .swing_on_hover:hover {
            animation: swing 0.5s ease alternate infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Section3;
