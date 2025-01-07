import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/emailjsConfig";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (form) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID, // Tu ID de servicio
          EMAILJS_TEMPLATE_ID, // Tu ID de plantilla
          form,
          EMAILJS_PUBLIC_KEY // Tu ID de usuario
        )
        .then(
          (result) => {
            console.log("Mensaje enviado: ", result.text);
            setStatusMessage("Mensaje enviado correctamente");
            setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
          },
          (error) => {
            console.log("Error al enviar el mensaje: ", error.text);
            setStatusMessage("Hubo un error al enviar el mensaje");
          }
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full p-4 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          className="w-full p-4 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          className="w-full p-4 border border-gray-300 rounded-md"
          rows={5}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
      {statusMessage && <p className="mt-4 text-xl">{statusMessage}</p>}
    </form>
  );
};

export default ContactForm;
