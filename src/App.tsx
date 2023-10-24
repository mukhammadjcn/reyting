import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Login, Status, NotFound, Home } from "./pages";
import "src/styles/App.scss";
import { isAdmin } from "./server/Host";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route
          index
          element={isAdmin() ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="home"
          element={isAdmin() ? <Home /> : <Navigate to="/" />}
        ></Route> */}

        <Route index element={<Login />} />
        <Route path="home" element={<Home />}></Route>

        {/* Status page */}
        <Route path="/code" element={<Status />} />

        {/* Not found page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
