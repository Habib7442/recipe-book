import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [ingredients, setIngredients] = useState(
    recipe.ingredientLines.slice(0, 4)
  );

  const [recipes, setRecipes] = useState([recipe]);

  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title className="title">{recipe.label}</Card.Title>
          <Card.Text className="ing">
            <ul>
              {ingredients.map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </Card.Text>
          <Link to={`post/${recipe.label}`} state={recipes}>
            <Button className="button">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
