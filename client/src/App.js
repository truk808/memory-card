import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React from "react";
import './style/app.css'

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
