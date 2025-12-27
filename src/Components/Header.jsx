import "./Header.css";
import { useState, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { token, user, logout } = useContext(AuthContext);

  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <h1 className="header-title">💰 My Expense Tracker</h1>
          <p className="header-subtitle">Keep your budget in check</p>
        </div>

        <div className="auth-buttons">
          {!token ? (
            <>
              <button
                className="btn-outline"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="btn-primary"
                onClick={() => setShowSignup(true)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span className="welcome-text">Hi, {user?.name || "User"}</span>
              <button className="btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </header>
  );
};

export default Header;
