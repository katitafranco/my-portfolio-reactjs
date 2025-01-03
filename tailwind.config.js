/** @type {import('tailwindcss').Config} */
/* export default {
  content: [
    "./index.html", */
//  "./src/**/*.{js,ts,jsx,tsx}", // Agrega aquí los archivos .tsx
/*  ],
  theme: {
    extend: {
      colors: {
        wine: "#8B0000", // Color rojo vino personalizado
        lightGray: "#f5f5f5", // Color para contraste en tema oscuro
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Fuente base
      },
    },
  },
  plugins: [],
};
 */

module.exports = {
  content: [
    "./index.html", // Asegúrate de que esto esté aquí
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que esto cubra todos los archivos donde uses Tailwind
  ],
  theme: {
    extend: {
      colors: {
        wine: "#9b1c2e", // Color rojo vino
        lightGray: "#f1f1f1", // Gris claro personalizado
      },
      container: {
        center: true, // Opcional, si quieres centrar el contenido
        padding: "2rem", // Ajusta según sea necesario
      },
    },
  },
  plugins: [],
};
