const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="h-screen w-full bg-gray-200 flex items-center justify-center"
    >
      <div className="text-center text-black p-4">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg">Feel free to reach out via LinkedIn!</p>
        <a
          href="https://www.linkedin.com/in/katitafranco"
          className="mt-4 text-xl text-red-500"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};
export default ContactSection;
