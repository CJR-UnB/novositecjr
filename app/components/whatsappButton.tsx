import { WhatsappImage } from "./SVGicons";

const Whatsapp: React.FC = () => {
  return (
    <>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed flex bottom-5 right-7 z-50"
      >
        <WhatsappImage />
      </a>
    </>
  );
};

export default Whatsapp;
