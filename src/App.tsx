import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Login, Status, NotFound, Home, Members, News, NewsID } from "./pages";
import "src/styles/App.scss";
import { isAdmin } from "./server/Host";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      {/* All pages rendered here */}
      <Routes>
        {/* Login page for admins*/}
        <Route path="home" element={isAdmin() ? <Home /> : <Navigate to="/" />}>
          <Route path="news">
            <Route index element={<News />} />
            <Route path=":newsID" element={<NewsID />} />
          </Route>
          <Route path="members" element={<Members />} />
        </Route>

        <Route
          index
          element={isAdmin() ? <Navigate to="/home" /> : <Login />}
        />

        {/* Status page */}
        <Route path="/qabul.jsp" element={<Status />} />

        {/* Not found page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
