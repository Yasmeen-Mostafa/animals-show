import { useState } from "react";
import "./ShowAnimal.css";
import heart from "../../assets/Images/heart.svg";
const ShowAnimal = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <figure className="show__animal" onClick={handleClick}>
      <img className="animal" src={type} />
      <img
        className="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </figure>
  );
};
export default ShowAnimal;
