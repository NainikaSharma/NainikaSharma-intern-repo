import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import UserForm from "./UserForm";
import Parent from "./Parent";
import MemoExample from "./MemoExample";
import UseEffectDemo from "./UseEffectDemo";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>

        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/home" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <Link to="/form" style={{ marginRight: "10px" }}>Form</Link>
          <Link to="/memo" style={{ marginRight: "10px" }}>useMemo</Link>
          <Link to="/callback" style={{ marginRight: "10px" }}>useCallback</Link>
          <Link to="/effect">useEffect</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/memo" element={<MemoExample />} />
          <Route path="/callback" element={<Parent />} />
          <Route path="/effect" element={<UseEffectDemo />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;