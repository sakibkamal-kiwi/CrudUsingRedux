import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Component/Add";
import Update from "./Component/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
