import React, { useState } from "react";
import CardList from "./CardList";
import algebra from "./JSON/algebra.json";
import calculus from "./JSON/calculus.json";
import geometry from "./JSON/geometry.json";
import number from "./JSON/number.json";
import probability from "./JSON/probability.json";
import statistics from "./JSON/statistics.json";
import trigonometry from "./JSON/trigonometry.json";
import styles from "./Math.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardStyles.css";
import { Container, Button, Row } from "react-bootstrap";
import ThreeShapes from "./ThreeShapes";
import MathFormulaeCards from "./MathFormulaeCards"

const Math = () => {
  const [cardData, setCardData] = useState(algebra);
  const cardDataArray = [
    algebra,
    calculus,
    geometry,
    number,
    probability,
    statistics,
    trigonometry
  ];
  const categories = [
    "Algebra",
    "Calculus",
    "Geometry",
    "Number",
    "Probability",
    "Statistics",
    "Trigonometry"
  ];

  const handleCategoryClick = (index) => {
    setCardData(cardDataArray[index]);
  };

  return (
    <Container>
        <h1 className="my-4">Maths Corner</h1>
        <Row>
        <div className="row mt-4 category">
          <div className="col-md-8">
            <CardList cardData={cardData} />
          </div>
          <div className="col-md-4">
            <div className="category-buttons">
              {categories.map((category, index) => ( 
                <Row style={{ width: "10rem", height: "2rem", marginTop: "1rem"}}>
                  <Button variant="outline-success"
                    key={index}
                    onClick={() => handleCategoryClick(index)}
                    style={{ backgroundColor: "var(--green)", boxShadow: "var(--shadow)" }}
                  >
                    {category}
                  </Button> 
                </Row>
              ))}
            </div>
          </div>
        </div>
        <div>
            <div className="mt-4">
          <div className="col-md-12">
          <MathFormulaeCards />
          </div>
        </div>
         </div>
   <div className="row">      
        
          <div className="col-md-6">
            <Quiz />
          </div>
        
        
          <div className="col-md-6">
          <h2> Exploring 3D Shapes</h2>
            <ThreeShapes />
          </div>
      
    </div>
    
      </Row>
    </Container>
  );
};

export default Math;
