import "./App.css";
/*import About from "./components/About";*/
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
{
  /*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";*/
}

function App() {
  const [mode, setMode] = useState("light"); //dark or light mode
  const [alert, setAlert] = useState(null); // for alerts

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils | Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils | White Mode";
    }
  };

  return (
    <>
      {/*<Router>*/}
      <Navbar
        title="TextUtils"
        About="About textUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<Routes>
            <Route exact path="/about" element={<About />} /> */}

        {/*<Route
              exact
              path="/" />
              element=*/}
        <TextForm
          heading="Enter text to analyze below "
          mode={mode}
          showAlert={showAlert}
        />

        {/* </Routes> */}
      </div>
      {/*</Router> */}
    </>
  );
}

export default App;
