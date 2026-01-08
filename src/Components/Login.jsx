import "./Auth.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Login = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError(null);
    try {
      await login(email, password);
      onClose();
    } catch (err) {
      if (err?.body?.errors && Array.isArray(err.body.errors)) {
        const msgs = err.body.errors.map((e) => e.msg).join(" \n");
        setError(msgs);
      } else if (err?.body?.message) {
        setError(err.body.message);
      } else if (err?.message) {
        setError(err.message);
      } else {
        setError(JSON.stringify(err));
      }
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <div className="auth-header">
          <div className="auth-title">Welcome back</div>
          <button className="auth-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required />
          </div>

          {error && <div className="form-error">{error}</div>}
          <div className="auth-actions">
            <button type="button" className="auth-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="auth-submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
