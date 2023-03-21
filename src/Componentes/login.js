import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Introduce una dirección de correo electrónico válida";
    }

    // Validación de longitud de contraseña
    if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    // Si hay errores, los establecemos en el estado de errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Enviar formulario si no hay errores
      // Aquí puedes hacer una llamada a una API para iniciar sesión
      console.log("Inicio de sesión exitoso!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div>
        <h1>VALIDACION DE LOGIN</h1>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit" className="btn">Iniciar sesión</button>
    </form>
  );
};

export default Login;
