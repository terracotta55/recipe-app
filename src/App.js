import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const YOUR_APP_ID = "19d99524";
const YOUR_APP_KEY = "29bd038505c8b3bac7d93e48eb0be433";
// const YOUR_APP_KEY = "624a1106ed075cbb4d7e85f1dcfe9311";
// const API_KEY = "f653f67522513510e20a1928507fbe51";

class App extends Component {
  state = {
    webData: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const data = await api_call.json();
    this.setState({ webData: data.hits });
    console.log(this.state.webData);
  };

  componentDidMount() {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ webData: recipes });
  }

  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.webData);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Finder</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes webHits={this.state.webData} />
      </div>
    );
  }
}

export default App;
