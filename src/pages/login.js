import React, { useState } from "react";
import coffeeImage from '../assets/welovecoffee.webp'; // Import the image
import "./login.css";

function Pedidos() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [borderRadiusClass, setBorderRadiusClass] = useState(""); // Track border-radius change class
  const [fadeClass, setFadeClass] = useState(""); // Track fade effect class

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(isLogin ? "Login Successful!" : "Account Created!");
    console.log(formData);
  };
  const toggleMode = () => {
    // Start fade-out transition
    setFadeClass("fade-out");
    // Switch mode after the fade-out completes
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFadeClass("fade-in"); // Fade back in after mode switch
    }, 500); // Match the fade-out duration
    // Apply border-radius change if switching to register mode
    if (!isLogin) {
      setTimeout(() => {
        setBorderRadiusClass("border-radius-changed");
      }, 600); // Match the transition duration
    }
  };

  return (
    <div className={`auth-container ${!isLogin ? "register-mode" : ""}`}>
      {/* Image as foreground for auth-container */}
      <img src={coffeeImage} alt="Coffee" className={`foreground-image ${borderRadiusClass}`}/>
      
      {/* Form Section */}
      <div className={`form-box ${isLogin ? "login-mode" : "register-mode"} ${fadeClass}`}>
        <h2 className={`text-switch ${fadeClass}`}>
          {isLogin ? "Logar" : "Registrar"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirmar Senha</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Logar" : "Registrar"}
          </button>
        </form>

        <button className="toggle-btn" onClick={toggleMode}>
          {isLogin ? "Ainda nao tem uma conta? Clique aqui!" : "Ja tem uma conta criada? Clique aqui!"}
        </button>
      </div>
    </div>
  );
}

export default Pedidos;