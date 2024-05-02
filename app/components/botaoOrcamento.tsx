import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowSquare } from "./SVGicons";

interface OrcamentoProps {
  className: string;
}

const Orcamento: React.FC<OrcamentoProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setPhone(""); // Clear phone number when modal is opened
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = formatPhone(inputValue); // Format phone number
    setPhone(formattedValue);
  };

  const formatPhone = (value: string) => {
    // Format phone number as (xx) xxxxx-xxxx
    const formattedValue = value.replace(
      /^(\d{0,2})(\d{0,5})(\d{0,4})/,
      "($1) $2-$3"
    );
    return formattedValue.trim(); // Remove leading/trailing spaces
  };

  return (
    <>
      <a
        href="#"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => toggleModal(e)}
        className="flex self-center"
      >
        <motion.button
          className={className}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1 }}
        >
          <h1 className="mr-2">Faça um diagnóstico grátis</h1>
          <ArrowSquare />
        </motion.button>
      </a>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: isModalOpen ? 1 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => toggleModal(e)}
          ></div>
          <div className="bg-white text-black p-10 rounded-md z-10">
            {/* Modal content here */}
            <div className="mb-5">
              <h1>Atendimento CJR</h1>
              <h2>Tire seu projeto do papel</h2>
              <h3>
                Por favor, responda esse pequeno questionário para podermos
                entrar em contato!
              </h3>
            </div>
            <form action="submit" className="flex flex-col">
              Qual é o seu nome?
              <input
                type="text"
                required
                autoFocus
                placeholder="Coloque seu nome aqui..."
              />
              Qual é o seu email?
              <input type="email" placeholder="seu.email@exemplo.com" />
              Qual é o seu telefone?
              <input
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="(xx) xxxxx-xxxx"
                maxLength={15} // Limit input to 15 characters
                pattern="[0-9]*" // Only allow numeric input
                inputMode="numeric" // Open numeric keyboard on mobile
              />
              Se for para uma empresa, qual seria o nome dela?
              <input type="text" />
              Qual é o seu tipo de projeto?
              <select name="tipo" id="">
                <option value="" disabled selected>
                  Escolha uma opção
                </option>
                <option value="site">Site</option>
                <option value="app">Aplicativo</option>
                <option value="sistema">Sistema</option>
                <option value="consultoria">Consultoria</option>
              </select>
              Como você conheceu a CJR?
              <select name="conheceu por" id="">
                <option value="" disabled selected>
                  Escolha uma opção
                </option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">Linkedin</option>
                <option value="google">Google</option>
                <option value="outro">Outro</option>
              </select>
              Conte para nós sobre do que se trata o seu projeto.
              <textarea
                name=""
                id=""
                rows={3} // Set number of visible rows
                style={{ resize: "vertical" }} // Allow vertical resizing
                placeholder="Descreva seu projeto aqui..."
              ></textarea>
              <input
                type="submit"
                value="submit"
                className="hover:cursor-pointer"
              />
            </form>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                toggleModal(e)
              }
            >
              Close Modal
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Orcamento;
