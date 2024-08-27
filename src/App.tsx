import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import Dashboard from "./pages/Dashboard";

import Layout from "./components/Layout";
import Tasks from "./pages/Tasks";
import CompletedTasks from "./pages/CompletedTasks";
import InProgress from "./pages/InProgress";
import Todo from "./pages/Todo";
import Team from "./pages/Team";
import Trash from "./pages/Trash";

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
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        />
        <Route
          path="/completed-tasks"
          element={
            <Layout>
              <CompletedTasks />
            </Layout>
          }
        />
        <Route
          path="/inprogress-tasks"
          element={
            <Layout>
              <InProgress />
            </Layout>
          }
        />
        <Route
          path="/todo-tasks"
          element={
            <Layout>
              <Todo />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/trash"
          element={
            <Layout>
              <Trash />
            </Layout>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
