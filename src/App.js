import Navbar from "./components/navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import React from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Alerts from "./Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1000);
  };

  const enableDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="textutils" mode={mode} toggle={enableDarkMode} />
      <Alerts alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path="about/" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
