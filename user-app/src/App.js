import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/userDetails";
import UserList from "./components/userList";
import Home from "./components/home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <UserList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
