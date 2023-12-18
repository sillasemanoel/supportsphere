// Dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Pages
import AuthPage from "../pages/auth/auth";
import HomePage from "../pages/home/home";

export default function AppRouter() {
  const tokenLocalStorage = !!localStorage.getItem("token");
  const tokenSessionStorage = !!sessionStorage.getItem("token");
  const token = tokenLocalStorage || tokenSessionStorage;

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            token ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/home"
          element={token ? <HomePage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/"
          element={token ? <Navigate to="/home" replace /> : <AuthPage />}
        />
      </Routes>
    </Router>
  );
}
