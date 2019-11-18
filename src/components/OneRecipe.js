import React from "react";
import { Link } from "react-router-dom";

const YOUR_APP_ID = "19d99524";
const YOUR_APP_KEY = "624a1106ed075cbb4d7e85f1dcfe9311";

class OneRecipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const response = await request.json();
    this.setState({ activeRecipe: response.hits[0].recipe });
    console.log(this.state.activeRecipe);
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              src={recipe.image}
              className="active-recipe__img"
              alt={recipe}
            />
            <h3 className="active-recipe__title">{recipe.label}</h3>
            <h4 className="active-recipe__ingredients">
              Ingredients: <span>{recipe.ingredientLines.join(", ")}</span>
            </h4>
            <h4 className="active-recipe__source">
              Source: <span>{recipe.source}</span>
            </h4>
            <h4 className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.url}>{recipe.url}</a>
              </span>
            </h4>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default OneRecipe;
