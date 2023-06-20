import UserRegistration from "./pages/Register/UserRegistration";
import UserLogin from "./pages/Login/UserLogin";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppBar from "./components/AppBar";

function App() {
  return (
    <>
    <AppBar/>
        <Router>
              <Routes>
                  <Route path="/" element={<UserLogin/>}>
                  </Route>

                  <Route path="/login" element={<UserLogin/>}>
                  </Route>

                  <Route path="/register" element={<UserRegistration/>}>
                  </Route>
              </Routes>
          </Router>
    </>
  )
}

export default App
