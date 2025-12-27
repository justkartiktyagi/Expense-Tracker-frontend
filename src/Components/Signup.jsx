import "./Auth.css";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
const Signup = ({ onClose }) => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await signup(name, email, password, confirmpassword);
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <div className="auth-header">
          <div className="auth-title">Create an account</div>
          <button className="auth-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              required
            />
          </div>

          <div className="auth-actions">
            <button type="button" className="auth-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="auth-submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
