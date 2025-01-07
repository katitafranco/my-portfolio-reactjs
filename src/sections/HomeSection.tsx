// HomeSection.tsx
/* const HomeSection = () => (
  <section
    id="home"
    className="min-h-screen w-full flex flex-col items-center justify-center bg-wine text-white"
  >
    <h1 className="text-6xl font-bold">Katita Franco</h1>
    <p className="mt-4 text-2xl">Welcome to my portfolio!</p>
  </section>
);
export default HomeSection;

 */

import backgroundImage from "../assets/codigo2.jpg";

const HomeSection = () => (
  <section
    id="inicio"
    className="h-screen w-full bg-cover bg-center flex items-center justify-center "
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
    }}
  >
    <div
      className="text-center text-white   
    px-4 py-4 mx-16 bg-gradient-to-r from-blue-500/20 to-yellow-500/20"
    >
      {" "}
      {/* /* bg-gradient-to-r from-blue-500/20 to-yellow-500/20"*/}
      <h1 className="text-4xl md:text-6xl font-bold  text-shadow-yellow ">
        Bienvenidos a Mi Portafolio
      </h1>
      <p className="mt-4  md:text-2xl font-bold text-shadow-yellow mx-4 px-4 ">
        "Soy una desarrolladora con experiencia previa en tecnologías como .NET,
        C# y SQL Server. <br /> En los últimos tiempos, me he enfocado en
        aprender y trabajar con React y React Native, buscando ofrecer
        soluciones modernas y eficientes en el desarrollo de aplicaciones web y
        móviles. Mis proyectos actuales son un reflejo de este aprendizaje
        continuo y mi dedicación por mejorar."
      </p>
    </div>
  </section>
);

export default HomeSection;
