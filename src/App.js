import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Project/Navbar";
import HomePage from "./Project/HomePage";
import SignUp from "./Project/SignUp";
import LoginPage from "./Project/LoginPage";
import ForYou from "./Project/ForYou";
import Footer from "./Project/Footer";
import Fruits from"./Project/Fruits";
import Meats from "./Project/Meats";
import Chocolates from "./Project/Chocolates";
import Dairy from "./Project/Dairy";
import Beverages from "./Project/Beverages";
import Snacking from "./Project/Snacking";
import Harpic from "./Project/Harpic";
import Homeapp from "./Project/Homeapp";
import Spreads from "./Project/Spreads";
import { AuthProvider } from "./Project/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="foryou" element={<ForYou/>} />
          <Route path="products/fruits&vegetables" element={<Fruits />} />
          <Route path="products/meats" element={<Meats />} />
          <Route path="products/chocolates" element={<Chocolates />} />
          <Route path="products/bakery&dairy" element={<Dairy />} />
          <Route path="products/beverages" element={<Beverages />} />
          <Route path="products/snacking" element={<Snacking />} />
          <Route path="products/harpic" element={<Harpic />} />
          <Route path="products/cleaning&household" element={<Homeapp />} />
          <Route path="products/spreads" element={<Spreads />} />
           </Routes>
           <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
