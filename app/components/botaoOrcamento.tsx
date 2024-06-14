"use client";

import React, { useState } from "react";
import LoadingIcons from "react-loading-icons";
import { CSSTransition } from "react-transition-group";
import { ArrowSquare } from "./SVGicons";

interface OrcamentoProps {
  className: string;
}

const Orcamento: React.FC<OrcamentoProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading animation
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    conheceuPor: "",
    descricaoProjeto: "",
  });

  const toggleModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Show loading animation

    try {
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1000);
      } else {
        console.error(
          "Erro ao enviar mensagem para o Slack",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Slack", error);
    } finally {
    }
  };

  /*
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
*/

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
      <button
        className={`${className} transition-all duration-200 ease-out hover:scale-110 active:scale-95`}
        onClick={toggleModal}
      >
        <h1 className="mr-2">Faça seu diagnóstico gratuito</h1>
        <ArrowSquare />
      </button>

      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute bg-gray-900/60 inset-0 z-40"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              toggleModal(e);
              setTimeout(() => {
                isSubmitted ? setIsSubmitted(false) : "";
              }, 500);
            }}
          ></div>
          <div className="bg-white text-black py-5 px-10 rounded-lg flex flex-col z-50 mx-2 transition-transform transform duration-300 ease-in-out">
            <div className="flex flex-col">
              <div className="flex justify-between mt-3">
                <h1 className="text-4xl text-spaceblue font-semibold mb-1">
                  Atendimento CJR
                </h1>
                <button onClick={toggleModal}>
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
              </div>
              <h2 className="text-xl mb-3 text-mutedSpaceblue font-medium">
                Tire seu projeto do papel
              </h2>
              <h3
                className={`text-spaceblue text-lg mb-1 ${
                  isSubmitted ? "w-full max-w-md" : ""
                }`}
              >
                {isSubmitted
                  ? "Obrigado pela resposta, entraremos em contato o mais rápido possível!"
                  : "Por favor, responda esse pequeno questionário para podermos entrar em contato!"}
              </h3>
              <p className="text-spaceblue text-lg mb-3 w-full max-w-md">
                {isSubmitted
                  ? "Enquanto isso, sinta-se à vontade para nos conhecer um pouco mais em nosso Instagram. Estamos ansiosos para trabalhar com você!"
                  : ""}
              </p>
            </div>
            <div className="items-center flex flex-col">
              <a
                href="https://www.instagram.com/cjr.unb/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:cursor-pointer my-2 bg-green/70 p-3 w-fit gap-1 self-center items-center rounded-lg font-medium text-lg mb-5 transition-all duration-200 ease-out hover:scale-110 active:scale-95 ${
                  isSubmitted ? "flex" : "hidden"
                }`}
                onClick={() => {
                  setIsModalOpen(false);
                  setIsSubmitted(false);
                }}
              >
                Conheça nosso Instagram
                <ArrowSquare />
              </a>
              <button
                className={`bg-green/40 p-3 w-fit rounded-lg hover:bg-green/70 transition-all mb-5 duration-200 hover:scale-105 ${
                  isSubmitted ? "flex" : "hidden"
                }`}
                onClick={() => {
                  setIsModalOpen(false);
                  setTimeout(() => {
                    setIsSubmitted(false);
                  }, 300);
                }}
              >
                Continuar navegando
              </button>
            </div>

            <form
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
                placeholder="ex: 21912345678"
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
                rows={2}
                style={{ resize: "vertical" }}
                placeholder="Descreva seu projeto aqui..."
                className="my-2 rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className={`hover:cursor-pointer my-2 text-black bg-green/70 p-3 w-fit self-center rounded-lg font-medium text-lg transition-all duration-200 ease-out hover:scale-110 active:scale-95 ${
                  isSubmitting ? "hidden" : ""
                }`}
              >
                Enviar proposta
              </button>
              <LoadingIcons.TailSpin
                stroke="#27BD80"
                strokeWidth={2}
                className={`self-center my-2 ${
                  isSubmitting ? "block" : "hidden"
                }`}
              />
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Orcamento;
