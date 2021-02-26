import React from "react";

export default function PageHome() {
  return (
    <div>
      <h1>Home page!</h1>
      <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
    </div>
  );
}
