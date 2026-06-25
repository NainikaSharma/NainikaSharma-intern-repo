import React, { useState } from "react";

import Login from "./Login";
import UserForm from "./UserForm";
import Parent from "./Parent";
import MemoExample from "./MemoExample";
import UseEffectDemo from "./UseEffectDemo";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div style={{ padding: "20px" }}>
      {/* Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("form")}>Form</button>
        <button onClick={() => setPage("callback")}>useCallback</button>
        <button onClick={() => setPage("memo")}>useMemo</button>
        <button onClick={() => setPage("effect")}>useEffect</button>
      </div>

      {/* Pages */}
      {page === "login" && <Login />}
      {page === "form" && <UserForm />}
      {page === "callback" && <Parent />}
      {page === "memo" && <MemoExample />}
      {page === "effect" && <UseEffectDemo />}
    </div>
  );
}

export default App;