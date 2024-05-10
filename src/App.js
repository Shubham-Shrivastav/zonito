import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
