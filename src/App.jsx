/* eslint-disable no-unused-vars */
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import EditPost from "./components/editPost/EditPost";
import CreatePost from "./components/createPost/CreatePost";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* {showLogin && <LoginPopUp setShowLogin={setShowLogin} />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
