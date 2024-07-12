import { useState, useEffect } from "react";
import { fetchJoke } from "./api";
import "./App.css";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const { joke } = await fetchJoke();
    setJoke(joke);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="joke-container">
      <div className="joke-content">
        <p>{joke}</p>
      </div>
      <button type="button" className="search" onClick={getJoke}>
        Search a joke
      </button>
    </div>
  );
};

export default Jokes;
