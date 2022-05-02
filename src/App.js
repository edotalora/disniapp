import React from "react";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
