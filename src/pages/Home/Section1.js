import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section relative overflow-hidden">
      {}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite, pulse 2s ${i * 0.2}s ease-in-out infinite`
          }}
        />
      ))}

      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative group">
              {}
              <div 
                className="absolute -inset-1 rounded-lg opacity-75 transition-opacity duration-1000 blur"
                style={{
                  background: 'linear-gradient(to right, #ff6b6b, #4834d4)',
                  animation: 'pulse 2s infinite'
                }}
              />
              
              <div className="position-relative" style={{
                animation: 'fadeInScale 0.8s ease-out forwards',
                opacity: 0,
                transform: 'scale(0.8) rotate(-10deg)'
              }}>
                <img 
                  src={Burger} 
                  style={{
                    width: '100%',
                    maxWidth: '550px',
                    height: 'auto',
                    transition: 'transform 0.5s ease',
                  }}
                  className="img-fluid" 
                  alt="Hero"
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1) rotate(5deg)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1) rotate(0deg)'}
                />
                
                <div className="price_badge" style={{
                  animation: 'spinIn 0.8s ease-out forwards',
                  opacity: 0,
                  transform: 'scale(0) rotate(-180deg)'
                }}>
                  <div className="badge_text">
                    <h4 className="h4_xs">Only</h4>
                    <h4 className="h3_lg">₹199</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="hero_text text-center" style={{
              animation: 'slideUp 0.6s ease-out forwards',
              opacity: 0,
              transform: 'translateY(50px)'
            }}>
              <h1 className="text-white" style={{
                background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'shine 5s linear infinite, glow 3s ease-in-out infinite'
              }}>
                Taste the Mania
              </h1>
              
              <h2 className="text-white" style={{
                animation: 'slideInLeft 0.6s ease-out 0.3s forwards',
                opacity: 0,
                transform: 'translateX(-50px)'
              }}>
                Fresh, Fast, Fantastic!
              </h2>
              
              <p className="text-white pt-2 pb-4" style={{
                animation: 'fadeIn 0.6s ease-out 0.6s forwards',
                opacity: 0
              }}>
                Indulge in delicious, handcrafted pizzas delivered straight to you, 
                bursting with flavor and made fresh with every order.
              </p>
              
              <Link 
                to="/shop" 
                className="btn order_now bounce_on_hover"
                style={{
                  animation: 'bounce 2s infinite alternate',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1) rotate(0deg)'}
              >
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style>
        {`

          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -50px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }

          @keyframes fadeInScale {
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          @keyframes spinIn {
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(255, 107, 107, 0.8); }
            50% { box-shadow: 0 0 25px rgba(72, 52, 212, 1); }
          }

          .hero_section {
            position: relative;
            overflow: hidden;
          }

          .price_badge {
            position: absolute;
            right: -20px;
            top: -20px;
          }

          /* Hover bounce effect for Order Now button */
          .bounce_on_hover:hover {
            animation: bounce_on_hover 1s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Section1;
