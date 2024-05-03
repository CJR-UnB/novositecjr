import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowSquare } from "./SVGicons";

interface OrcamentoProps {
  className: string;
}

const Orcamento: React.FC<OrcamentoProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    conheceuPor: "",
    descricaoProjeto: "",
  });

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data:", formData);
    try {
      const response = await axios.post(
        "https://hook.us1.make.com/w1shsh8qtkjjaehtjpj6k9lqrhgbfh28",
        formData
      );
      console.log("webhook response:", response.data);
      setIsSubmitted(true); // Set isSubmitted to true upon successful form submission
    } catch (error) {
      console.error("webhook error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <h1 className="mr-2">Faça seu diagnóstico gratuito</h1>
          <ArrowSquare />
        </motion.button>
      </a>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 transition-all duration-300"
          initial={{ opacity: 0, scale: 1 }} // Initial animation properties
          animate={{ opacity: 1, scale: 1 }} // Animation properties to animate to
          exit={{ opacity: 0, scale: 0.8 }} // Exit animation properties
          transition={{ duration: 0.3 }} // Animation duration
        >
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              isSubmitted ? setIsSubmitted(false) : "";
              toggleModal(e);
            }}
          ></div>
          <motion.div className="bg-white text-black p-10 rounded-xl z-10 flex flex-col">
            <div className="mb-5">
              <div className="flex justify-between">
                <h1 className="text-4xl text-spaceblue font-semibold">
                  Atendimento CJR
                </h1>
                <button
                  className={isSubmitted ? "hidden" : "flex"}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    toggleModal(e)
                  }
                >
                  Close Modal
                </button>
              </div>
              <h2 className="text-xl mb-5  text-mutedSpaceblue font-medium">
                Tire seu projeto do papel
              </h2>
              <h3 className="text-spaceblue text-lg">
                {isSubmitted
                  ? "Obrigado pela resposta, entraremos em contato o mais rápido possível!"
                  : "Por favor, responda esse pequeno questionário para podermos entrar em contato!"}
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}
              className={`hover:cursor-pointer my-2 bg-green/70 p-3 w-fit self-center rounded-lg font-semibold text-lg ${
                isSubmitted ? "flex" : "hidden"
              }`}
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }} // Set isSubmitted to true upon button click
            >
              Voltar para o site
            </motion.button>
            <motion.form
              initial={{ opacity: 0, scale: 0.8 }} // Initial animation properties
              animate={{ opacity: 1, scale: 1 }} // Animation properties to animate to
              exit={{ opacity: 0, scale: 0.8 }} // Exit animation properties
              transition={{ duration: 0.3 }} // Animation duration
              onSubmit={handleSubmit}
              className={`flex-col text-md font-semibold text-spaceblue ${
                isSubmitted ? "hidden" : "flex"
              }`}
            >
              Qual é o seu nome?
              <input
                type="text"
                required
                autoFocus
                placeholder="Coloque seu nome aqui..."
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                name="nome"
                onChange={handleChange}
              />
              Qual é o seu email?
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                required
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                name="email"
                onChange={handleChange}
              />
              Qual é o seu telefone?
              <input
                type="tel"
                placeholder="ex: 21 912345678"
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                name="telefone"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={handleChange}
              />
              Como você conheceu a CJR?
              <select
                name="conheceuPor"
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                onChange={handleChange}
              >
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
                name="descricaoProjeto"
                rows={3} // Set number of visible rows
                style={{ resize: "vertical" }} // Allow vertical resizing
                placeholder="Descreva seu projeto aqui..."
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                onChange={handleChange}
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1 }}
                type="submit"
                className="hover:cursor-pointer my-2 bg-green/70 p-3 w-fit self-center rounded-lg font-semibold text-lg "
                onClick={() => setIsSubmitted(true)} // Set isSubmitted to true upon button click
              >
                Enviar proposta
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Orcamento;
