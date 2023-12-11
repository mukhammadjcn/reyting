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
import NewTables from "src/pages/NewTables";
import OTMPASSPORT from "src/pages/OtmPassport";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            isAdmin() ? <Navigate to="/home?page=1&quater=1" /> : <Login />
          }
        />
        <Route
          path="/home"
          element={isAdmin() ? <Home /> : <Navigate to="/" />}
        >
          <Route index element={<NewTables />} />
          <Route path="info" element={<OTMPASSPORT />} />
        </Route>

        {/* Status page */}
        <Route path="/auth/oneId" element={<Status />} />

        {/* Not found page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
