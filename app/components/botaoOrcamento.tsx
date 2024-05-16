import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowSquare } from "./SVGicons";

interface OrcamentoProps {
  className: string;
}

const Orcamento: React.FC<OrcamentoProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        "https://hook.us1.make.com/kpqx58untrlts3fd1u8f83qj3ab7u4ev",
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
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-40">
            <div
              className="absolute inset-0 bg-gray-900 opacity-50 z-40"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                isSubmitted ? setIsSubmitted(false) : "";
                toggleModal(e);
              }}
            ></div>
            <motion.div
              className={`bg-white text-black py-5 px-10 rounded-xl flex flex-col z-50 w-full max-w-3xl ${
                isSubmitted ? "" : ""
              }`}
              initial={{ opacity: 0, scale: 1 }} // Initial animation properties
              animate={{ opacity: 1, scale: 1, scaleX: 1 }} // Animation properties to animate to
              exit={{ opacity: 0 }} // Exit animation properties
              transition={{ ease: "easeOut", duration: 0.4 }} // Animation duration
              layout
              key="modal"
            >
              <motion.div className="flex flex-col" layout>
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center mb-5"
                >
                  <ellipse cx="16" cy="15.5" rx="16" ry="15.5" fill="#001830" />
                  <g clip-path="url(#clip0_5287_26)">
                    <path
                      d="M17.7734 21.1277H11.411V28H17.8123V21.1581C17.7978 21.1502 17.7847 21.14 17.7734 21.1277Z"
                      fill="#27BD80"
                    />
                    <path
                      d="M20.9223 10.8855L17.7864 14.2529V21.1277L21 17.7154V10.8564L20.9223 10.8855Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M20.7347 4H14.3333V10.8564H20.7347V4Z"
                      fill="#27BD80"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5287_26">
                      <rect
                        width="10"
                        height="24"
                        fill="white"
                        transform="translate(11 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <motion.div layout className="flex justify-between">
                  <h1
                    className={`text-4xl text-spaceblue font-semibold mb-1 flex `}
                  >
                    Atendimento CJR
                  </h1>
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      toggleModal(e)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                  </button>
                </motion.div>
                <h2 className="text-xl mb-3  text-mutedSpaceblue font-medium">
                  Tire seu projeto do papel
                </h2>
                <h3
                  className={`text-spaceblue text-lg mb-1 ${
                    isSubmitted ? "w-full max-w-md " : ""
                  }`}
                >
                  {isSubmitted
                    ? "Obrigado pela resposta, entraremos em contato o mais rápido possível!"
                    : "Por favor, responda esse pequeno questionário para podermos entrar em contato!"}
                </h3>
                <p className="text-spaceblue text-lg mb-3">
                  {isSubmitted
                    ? "Enquanto isso, sinta-se à vontade para nos conhecer um pouco mais em nosso Instagram. Estamos ansiosos para trabalhar com você!"
                    : ""}
                </p>
              </motion.div>
              <motion.div className="items-center flex flex-col">
                <motion.a
                  href="https://www.instagram.com/cjr.unb/"
                  target="_blank"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 1 }}
                  className={`hover:cursor-pointer my-2 bg-green/70 p-3 w-fit gap-1 self-center items-center rounded-lg font-medium text-lg mb-5 ${
                    isSubmitted ? "flex" : "hidden"
                  }`}
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                  }} // Set isSubmitted to true upon button click
                >
                  Conheça nosso Instagram
                  <ArrowSquare />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  className={`bg-green/40 p-3 w-fit rounded-lg hover:bg-green/70 transition-all mb-5 ${
                    isSubmitted ? "flex" : "hidden"
                  }`}
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                  }} // Set isSubmitted to true upon button click
                >
                  Continuar navegando
                </motion.button>
              </motion.div>
              <motion.form
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
                  className="hover:cursor-pointer my-2 text-black bg-green/70 p-3 w-fit self-center rounded-lg font-medium text-lg"
                >
                  Enviar proposta
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Orcamento;
