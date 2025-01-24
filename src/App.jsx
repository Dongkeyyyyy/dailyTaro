import { useState } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import PickTarot from "./pages/PickTarot";
import Result from "./pages/Result";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tarot" element={<PickTarot></PickTarot>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
