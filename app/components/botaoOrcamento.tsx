import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowSquare } from "./SVGicons";

interface OrcamentoProps {
  className: string;
}

const Orcamento: React.FC<OrcamentoProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      setIsModalOpen(false);
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
            <div className="mb-5">
              <div className="flex justify-between">
                <h1>Atendimento CJR</h1>
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    toggleModal(e)
                  }
                >
                  Close Modal
                </button>
              </div>
              <h2>Tire seu projeto do papel</h2>
              <h3>
                Por favor, responda esse pequeno questionário para podermos
                entrar em contato!
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              Qual é o seu nome?
              <input
                type="text"
                required
                autoFocus
                placeholder="Coloque seu nome aqui..."
                className="my-2"
                name="nome"
                onChange={handleChange}
              />
              Qual é o seu email?
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                required
                className="my-2"
                name="email"
                onChange={handleChange}
              />
              Qual é o seu telefone?
              <input
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
                className="my-2"
                name="telefone"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={handleChange}
              />
              Como você conheceu a CJR?
              <select
                name="conheceuPor"
                className="my-2"
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
                className="my-2"
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="hover:cursor-pointer my-2">
                submit
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Orcamento;
