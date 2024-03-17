import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import StorePage from "./components/StorePage/StorePage";


function App() {

  return (
    <Router basename="shoppingCart">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  )
}

export default App
