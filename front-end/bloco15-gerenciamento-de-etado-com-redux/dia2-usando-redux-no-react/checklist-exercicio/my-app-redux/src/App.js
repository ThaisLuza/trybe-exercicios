import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";

import Player from "./components/Player";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Player />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
