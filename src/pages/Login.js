import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Add phone number state
  const [error, setError] = useState("");

  const signIn = async (email, password) => {
    const response = await fetch("http://localhost:8000/api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid email or password");
      } else {
        throw new Error("Sign-in failed");
      }
    }
    const data = await response.json();
    localStorage.setItem("authToken", data.accessToken); // Store accessToken in localStorage
    return data;
  };

  const signUp = async (username, email, password, phoneNumber) => {
    const response = await fetch("http://localhost:8000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, phoneNumber }),
    });
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("User already exists");
      } else {
        throw new Error("Sign-up failed");
      }
    }
    const data = await response.json();
    localStorage.setItem("authToken", data.accessToken); // Store accessToken in localStorage
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        const data = await signIn(email, password);
        console.log("Logged in:", data);
        navigate("/"); // Navigate to dashboard on successful sign-in
      } else {
        const data = await signUp(username, email, password, phoneNumber);
        console.log("Signed up:", data);
        navigate("/"); // Navigate to dashboard on successful sign-up
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px" }}>
        <div className="mb-3 text-center">
          <h2 className="text-primary">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </h2>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Sign in" : "Sign Up"}
          </button>
        </form>
        <div className="mt-3 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError(""); // Clear error message when switching modes
            }}
          >
            {isLogin
              ? "Need an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
        <div className="text-center">
          <Link to="/" className="text-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;