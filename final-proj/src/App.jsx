import React from "react";
import "./App.css";
import Jokes from "./pages/JokerPage/JokerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./pages/MyPage/MyPage";
import ErrorPage from "./error404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="base">
        <Routes>
          <Route path="/" element={<Jokes />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
