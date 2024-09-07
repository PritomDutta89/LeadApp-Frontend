/* eslint-disable no-unused-vars */
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import EditPost from "./components/editPost/EditPost";
import CreatePost from "./components/createPost/CreatePost";
import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from "./context/DataContext";

const queryClient = new QueryClient();

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/editPost/:id" element={<EditPost />} />
            <Route path="/createPost" element={<CreatePost />} />
          </Routes>
          <Footer />
        </DataProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
