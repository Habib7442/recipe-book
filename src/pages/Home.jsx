import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("chicken");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const options = {
          method: "GET",
          url: "https://edamam-recipe-search.p.rapidapi.com/search",
          params: { q: searchQuery },
          headers: {
            "X-RapidAPI-Key":
              "c0e246ed77mshdba2df7b051ab34p100b83jsn5c909f1d2157",
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setRecipes(response.data.hits);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const options = {
          method: "GET",
          url: "https://edamam-recipe-search.p.rapidapi.com/search",
          params: { q: searchQuery },
          headers: {
            "X-RapidAPI-Key":
              "c0e246ed77mshdba2df7b051ab34p100b83jsn5c909f1d2157",
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setRecipes(response.data.hits);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecipes();
  };

  console.log(recipes);
  return (
    <div className="home">
      <div className="container-fluid search-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <section className="container-fluid recipe-section">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
        ))}
      </section>
    </div>
  );
};

export default Home;
