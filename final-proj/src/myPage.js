import "./myPage.css";
import logo from "./img/logo.jpg";

function App() {
  return (
    <div className="base">
      <header>
        <a href="#">
          <img src={logo} alt="logo" width="56px" height="56px" />
          <h2>Chuck Jokes</h2>
        </a>
        <a href="#">My page</a>
      </header>
      <main>
        <h1>Зайцев Артем</h1>
        <a href="https://classroom.google.com/c/NjIxNzEzMDc0ODU2" rel="class">
          AFE 34
        </a>
        <a href="https://github.com/Artemenko53">GitHub</a>
        <a href="https://trello.com/b/sJ6ikzYa/artem-zaitsev-afe34-project">
          Trello
        </a>
      </main>
    </div>
  );
}

export default App;
