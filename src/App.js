import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Hotels from "./Components/Hotels/Hotels";
import Events from "./Components/Events/Events";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import NoMatch from "./Components/NoMtach/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Users from "./Components/Admin/Users/Users";
import UsersById from "./Components/Admin/Users/UsersById";
import AdminBlogs from "./Components/Admin/AdminBlogs";
import AdminHotels from "./Components/Admin/AdminHotels/AdminHotels";
import PostHotels from "./Components/Admin/AdminHotels/PostHotels";
import AdminEvents from "./Components/Admin/AdminEvents/AdminEvents";
import PostEvents from "./Components/Admin/AdminEvents/PostEvents";
import AdminPrivateRoute from "./Components/Admin/AdminPrivateRoute/AdminPrivateRoute";
import AdminEventsById from "./Components/Admin/AdminEvents/AdminEventsById";
import Profile from "./Components/Profile/Profile";
import EventsBooking from "./Components/Events/EventsBooking";
import Bookings from "./Components/Admin/Bookings/Bookings";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const token = sessionStorage.getItem("token");
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={token ? <Navigate to="/admin/users" /> : <Admin />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="hotels" element={<Hotels />} />
            <Route path="event-booking/:id" element={<EventsBooking />} />
          </Route>
          <Route path="/admin" element={<AdminPrivateRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/:id" element={<UsersById />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/hotels" element={<AdminHotels />} />
            <Route path="/admin/hotels/post" element={<PostHotels />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/events/:id" element={<AdminEventsById />} />
            <Route path="/admin/events/post" element={<PostEvents />} />
            <Route path="/admin/bookings" element={<Bookings />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
