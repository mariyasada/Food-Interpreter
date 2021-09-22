import React, { useState } from "react";
import "./styles.css";
// object declaration
const foodDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍓": "Strawberry",
  "🥝": "Kiwi",
  "🍅": "Tomato",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🍕": "Pizza",
  "🍭": "Lollipop",
  "🥑": "Avacado",
  "🍞": "Bread",
  "🍟": "Freanch fries",
  "🍔": "Hamburger",
  "🌮": "Taco",
  "🥪": "Sandwich"
};

const foods = Object.keys(foodDictionary);

export default function App() {
  const [food, setFood] = useState("");
  const [meaning, setMeaning] = useState("Translation will be here....");

  function foodChangeHandler(event) {
    var inputfood = event.target.value;
    setFood(inputfood);

    if (inputfood in foodDictionary) {
      setMeaning(foodDictionary[inputfood]);
    } else {
      setMeaning("Food is not present in database");
    }
  }
  function foodclickHandler(inputfood) {
    setMeaning(foodDictionary[inputfood]);
  }

  return (
    <div className="App">
      <h1>Food Interpreter</h1>
      <input
        style={{ width: "85%", height: "30px" }}
        placeholder="search your food here"
        value={food}
        onChange={foodChangeHandler}
      ></input>
      <h2>{food}</h2>
      <h3>{meaning}</h3>

      {foods.map((food) => {
        return (
          <span
            onClick={() => foodclickHandler(food)}
            key={food}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {food}{" "}
          </span>
        );
      })}
    </div>
  );
}
