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

const HomeSection = () => (
  <section
    id="home"
    className="h-screen w-full bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('../assets/codigo.jpg')" }}
  >
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        Bienvenido a mi portafolio ;)
      </h1>
      <p className="mt-4 text-lg md:text-2xl">
        Modern and Sophisticated Designs
      </p>
    </div>
  </section>
);

export default HomeSection;
