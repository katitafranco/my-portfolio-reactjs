/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 */

import ContactForm from "../components/ContactForm";
const ContactSection = () => {
  return (
    <section id="contacto" className="h-auto  w-full bg-lightamber py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Contáctame</h2>
        <p className="mb-8 text-lg">
          Puedes enviarme un mensaje a través de este formulario.
        </p>

        {/* Aquí insertamos el componente ContactForm */}
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
