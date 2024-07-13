import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <p>You've got an error</p>
      <h1>404</h1>
      <Link to="/">Return home</Link>
    </>
  );
}
