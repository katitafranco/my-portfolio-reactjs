import Header from "./components/Header";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
