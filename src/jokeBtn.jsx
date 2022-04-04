// import Qoute from "./qouteBlock";
import Qoute from "./qouteBlock";
import { useState } from "react";
import { useEffect } from "react";

const Button = (prop) => {
  useEffect(() => {
    generate();
  }, []);
  const [qoute, setqoute] = useState("Click");

  const generate = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((res) => setqoute(res.joke));
  };
  return (
    <div className="game-container">
      <div className="qoute-block">
        <p>{qoute}</p>
      </div>
      <div onClick={generate} className="joke-button">
        <h1>New Joke</h1>
      </div>
    </div>
  );
};
export default Button;
