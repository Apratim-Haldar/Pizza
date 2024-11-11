import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import PizzaForm from "./pages/AddPizza";
import Shop from "./pages/Shop/Shop";
import { UserDetailsProvider } from "./contexts/UserDetailsContext"; // Import the UserDetailsProvider

function App() {
  return (
    <UserDetailsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addPizza" element={<PizzaForm />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </UserDetailsProvider>
  );
}

export default App;