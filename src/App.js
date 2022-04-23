import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Hotels from "./Components/Hotels/Hotels";
import Events from "./Components/Events/Events";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import NoMatch from "./Components/NoMtach/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="hotels" element={<Hotels />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
