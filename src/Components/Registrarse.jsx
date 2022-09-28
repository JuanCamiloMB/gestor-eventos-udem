import React, { useState } from "react";
import User from "../Models/User";

export const Registrarse = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SIIIIIIIIIIIIII")
    const Usuario = new User(); /*Como enviaremos el usuario en json?*/ 
    Usuario.mail = mail;
    Usuario.username = username;
    Usuario.password = password;
    Usuario.rol = rol;
  };

  return (
    <div className="signUpScreen">
      <div id="Registro">
      <p>Registro</p>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <div className="Field">
          <label htmlFor="mail">Correo</label>
          <input
            type="text"
            id="mail"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
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
        <div className="Field">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="text"
            id="confirmPassord"
            name="confirmPassword"
            value={confirmacion}
            onChange={(e) => setConfirmacion(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>Cual es el rol?</label>
          <label htmlFor="cliente">Cliente</label>
          <input
            type="radio"
            id="cliente"
            name="rol"
            value="cliente"
            onChange={(e) => setRol(e.target.value)}
            defaultChecked
          />
          <label htmlFor="logistico">Logistico</label>
          <input
            type="radio"
            id="logistico"
            name="rol"
            value="logistico"
            onChange={(e) => setRol(e.target.value)}
          />
          <label htmlFor="admin">Administrador</label>
          <input
            type="radio"
            id="admin"
            name="rol"
            value="admin"
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
        <input className="submitButton" type="submit" value="Registrar" />
      </form>
      </div>
    </div>
  );
};
