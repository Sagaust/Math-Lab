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
import Quiz from "./Quiz";

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
    <>
      <div className={styles.container}>
        <h1 className="my-4">Maths Corner</h1>
        <div className="row mt-4">
          <div className="col-md-8">
            <CardList cardData={cardData} />
          </div>
          <div className="col-md-4">
            <div className="category-buttons">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className="btn btn-primary mb-2 mr-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-md-12">
            <Quiz />
          </div>
        </div>
      </div>
    </>
  );
};

export default Math;
