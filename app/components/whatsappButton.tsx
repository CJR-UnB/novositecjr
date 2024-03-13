import { WhatsappImage } from "./SVGicons";

const Whatsapp: React.FC = () => {
  return (
    <>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed flex bottom-4 right-4 z-50"
      >
        <WhatsappImage className="h-20 w-20 md:h-24 md:w-24" />
      </a>
    </>
  );
};

export default Whatsapp;
