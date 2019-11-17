import React from "react";

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
            <div className="recipe__box">
              <img src={hit.recipe.image} alt={hit.recipe.label} />
            </div>
            <div className="recipe__text">
              <h5>{hit.recipe.label}</h5>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
