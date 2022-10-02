import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password); //Datos a enviar
  }
  return (
    <div className="signInScreen">
      <div id="InicioSesion">
        <p id="titleInicio">Iniciar Sesión</p>
        <form className="signInForm" onSubmit={handleSubmit}>
          <div className="Field">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="submitButton"
            type="submit"
            value="Iniciar Sesion"
          />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
