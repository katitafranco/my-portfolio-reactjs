// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-wine text-white py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Katiuska Franco. All rights reserved.
      </p>
      <p className="text-sm">
        Image credits:{" "}
        <a href="https://source-of-image.com" className="underline">
          Source Name
        </a>
      </p>
      <p>
        Foto de{" "}
        <a href="https://unsplash.com/es/@timothycuenat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Timothy Cuenat
        </a>{" "}
        en{" "}
        <a href="https://unsplash.com/es/fotos/un-primer-plano-de-una-pantalla-de-computadora-con-muchas-lineas-de-codigo-NH0pmKaZeuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
        <p>
          Foto de{" "}
          <a href="https://unsplash.com/es/@ngeshlew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Lewis Kang'ethe Ngugi
          </a>{" "}
          en{" "}
          <a href="https://unsplash.com/es/fotos/computadora-portatil-negra-encendida-f5pTwLHCsAg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </p>
    </footer>
  );
};

export default Footer;
