import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  const context = useContext(AuthContext);
  if (!context) throw new Error();
  const { user } = context;
  console.log("🚀 ~ Login ~ user:", user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
