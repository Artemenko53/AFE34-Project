import { useState, useEffect } from "react";
import { fetchJoke } from "../../api";
import css from "./JokerPage.module.css";
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
    <div className={css.joke_container}>
      <h1>Hello! Click on button to get a joke!</h1>
      <div className={css.joke_content}>
        <p>{joke}</p>
      </div>
      <button type="button" className={css.search} onClick={getJoke}>
        Search a joke
      </button>
    </div>
  );
};

export default Jokes;
