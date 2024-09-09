// LoginSignup.js
import React, { useState } from 'react';
import LoginForm from "../Pages/LoginForm";
import SignupForm from "../Pages/Signup";
import '../Styles/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={toggleForm} className="toggle-button">
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginSignup;
