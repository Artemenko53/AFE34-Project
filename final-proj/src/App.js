import "./App.css";
import jokeValue from "./joker";

function App() {
  return (
    <div className="base">
      <header>
        <a href="./App.js">
          <svg
        </a>
      </header>
      <main>
        <h1>Hello! Click on button to get a joke!</h1>
        <input value={jokeValue} readOnly className="jokeInput"></input>
        <button type="button" className="search">
          Search a joke
        </button>
        <h4 className="legal">
          ©️ Website created with{" "}
          <a href="https://chucknorris.io" rel="noreferrer" target="_blank">
            chucknorris.io
          </a>
        </h4>
      </main>
    </div>
  );
}

export default App;
