/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */
/* 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Asegúrate de que este archivo exista y contenga tus estilos de Tailwind

// Encuentra el contenedor donde se renderizará tu aplicación
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Renderiza el componente principal
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
