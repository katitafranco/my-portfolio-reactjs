import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <section
        id="home"
        className="h-screen bg-wine text-white flex items-center justify-center"
      >
        <h1 className="text-5xl">Welcome to Home</h1>
      </section>
      <section
        id="projects"
        className="h-screen bg-gray-800 text-white flex items-center justify-center"
      >
        <h1 className="text-5xl">Projects Section</h1>
      </section>
      <section
        id="contact"
        className="h-screen bg-black text-white flex items-center justify-center"
      >
        <h1 className="text-5xl">Contact Section</h1>
      </section>
    </div>
  );
};

export default App;
