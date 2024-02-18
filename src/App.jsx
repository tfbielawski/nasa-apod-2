import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      {/* assign routes to components */}
        <Routes>
          {/* Use 'exact' to ensure '/' goes to Home*/}
          <Route path="/" element={<Home />} exact />
          <Route path="/nasaphoto" element={<NasaPhoto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
