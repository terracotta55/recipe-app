import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.webHits.map(hit => {
        return (
          <div
            className="col-md-4"
            key={hit.recipe.calories}
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img src={hit.recipe.image} alt={hit.recipe.label} />
            </div>
            <div className="recipe__text">
              <h5 className="recipes__title">
                {hit.recipe.label.length < 20
                  ? `${hit.recipe.label}`
                  : `${hit.recipe.label.substring(0, 25)}...`}
              </h5>
              <p className="recipes__subtitle">
                Calories: <span>{Math.round(hit.recipe.calories)}</span> kCal
              </p>
              <p className="recipes__subtitle">
                Source: <span>{hit.recipe.source}</span>
              </p>
            </div>
            <button className="recipe__buttons">
              <Link
                to={{
                  pathname: `/recipe/${hit.recipe.calories}`,
                  state: { recipe: hit.recipe.label }
                }}
              >
                View Recipe
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
