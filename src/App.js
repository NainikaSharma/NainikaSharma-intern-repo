import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import UserForm from "./UserForm";
import Parent from "./Parent";
import MemoExample from "./MemoExample";
import UseEffectDemo from "./UseEffectDemo";
import Counter from "./Counter";
import CounterMessage from "./CounterMessage";
import FormList from "./components/FormList";
import ReduxCounter from "./ReduxCounter"; // Redux
import HelloWorld from "./HelloWorld";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (
    
    <Router>
      <h1 className="text-4xl font-bold text-blue-500">
  Tailwind is working!
</h1>
<div>
      <HelloWorld name="Nainika" />
    </div>

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
          <Link to="/counter" style={{ marginRight: "10px" }}> Counter</Link>
          <Link to="/list" style={{ marginRight: "10px" }}>Form List</Link>
          <Link to="/redux-counter" style={{ marginRight: "10px" }}>Redux Counter</Link>
          <Link to="/buggy-counter" style={{ marginRight: "10px" }}>Buggy Counter</Link>
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
          <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<FormList />} />
          <Route path="/redux-counter" element={<><ReduxCounter /><CounterMessage /></>}/>
          <Route path="/buggy-counter" element={<BuggyCounter />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;