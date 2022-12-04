import { useState } from "react";
import "./App.css";
import ShowAnimal from "./Components/ShowAnimals/ShowAnimal";
import bird from "./assets/Images/bird.svg";
import cat from "./assets/Images/cat.svg";
import cow from "./assets/Images/cow.svg";
import dog from "./assets/Images/dog.svg";
import gator from "./assets/Images/gator.svg";
import horse from "./assets/Images/horse.svg";

const myAnimals = () => {
  const animalsArray = [bird, cat, cow, dog, gator, horse];
  return animalsArray[Math.floor(Math.random() * animalsArray.length)];
};
function App() {
  const [animals, setAnimals] = useState([]);
  const onButtonClick = () => {
    //event handler function
    // setcountAnimal(countAnimal + 1);
    setAnimals([...animals, myAnimals()]); //create new array with all old elements and add the new ones
  };
  // console.log(animals);
  const renderedAnimals = animals.map((animal, index) => {
    //create a list of components with each type={current element}
    return <ShowAnimal type={animal} key={index} />;
  });
  return (
    <main>
      <button onClick={onButtonClick}>Add Animal</button>
      <div className="animals__list">{renderedAnimals}</div>
    </main>
  );
}

export default App;
