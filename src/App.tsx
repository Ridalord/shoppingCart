import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {

  return (
    <Router basename="shoppingCart">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </Router>
  )
}

export default App
