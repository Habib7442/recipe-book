import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Single = () => {
  const location = useLocation();
  const state = location.state;
  const ingredientsArray = Object.entries(state[0].ingredients).map(
    ([key, value]) => ({
      foodCategory: value.foodCategory,
      image: value.image,
      text: value.text,
    })
  );

  const postId = location.pathname.split("/")[2];
  console.log(ingredientsArray);
  return (
    <div className="single">
      <img src={state[0]?.image} />

      <h1>{state[0]?.label}</h1>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <div className="ingredients-card">
          {ingredientsArray.map((value) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img className="ing-image" variant="top" src={value.image} />
              <Card.Body>
                <Card.Title className="food-cat">{value.foodCategory}</Card.Title>
                <Card.Text className="food-text">
                  {value.text}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Single;
