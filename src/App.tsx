import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Login, Status, NotFound, Home, Development } from "./pages";
import "src/styles/App.scss";
import { isAdmin } from "./server/Host";
import React from "react";
import MainContextProvider from "./hooks";

const App: React.FC = () => {
  return (
    <Router>
      <MainContextProvider>
        {/* All pages rendered here */}
        <Routes>
          {/* Login page for admins*/}
          <Route
            path="home"
            element={isAdmin() ? <Home /> : <Navigate to="/login" />}
          ></Route>

          <Route
            path="login"
            element={isAdmin() ? <Navigate to="/home" /> : <Login />}
          />

          {/* Status page */}
          <Route path="/qabul.jsp" element={<Status />} />

          {/* Not found page */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </MainContextProvider>
    </Router>
  );
};

export default App;
