import {
  Email,
  Facebook,
  Focatia,
  Instagram,
  Linkedin,
  MessageApp,
} from "../SVGicons";
import Orcamento from "./botaoOrcamento";

const Contato: React.FC = () => {
  return (
    <>
      {" "}
      <section className=" mt-32" id="contato">
        <h1 className="text-center text-spaceblue font-bold text-4xl sm:text-5xl mb-14 px-5 mx-3">
          Como podemos te ajudar?
        </h1>
        <div className="flex justify-center text-spaceblue">
          <div className="hidden lg:block mx-10">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">
              Ainda tem alguma dúvida?
            </h1>
            <h2 className="text-lg sm:text-xl mb-5">
              Entre em contato com a nossa equipe
            </h2>

            <div className="hover:scale-110 transition-all duration-300 my-2">
              <a
                href="mailto:contato@cjr.org.br"
                target="_blank"
                className="flex items-center"
              >
                <Email />
                <h1 className="ml-2">Via Email</h1>
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-300 my-2">
              <a href="" target="_blank" className="flex items-center">
                <MessageApp />
                <h1 className="ml-2">Via WhatsApp</h1>
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-300 my-2">
              <a
                href="https://www.instagram.com/cjr.unb/"
                target="_blank"
                className="flex items-center"
              >
                <Instagram />
                <h1 className="ml-2">Via Instagram</h1>
              </a>
            </div>
            <div className=" hover:scale-110 transition-all duration-300 my-2">
              <a
                href="https://www.linkedin.com/company/cjr-unb/mycompany/"
                target="_blank"
                className="flex items-center"
              >
                <Linkedin />
                <h1 className="ml-2">Via LinkedIn</h1>
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-300 my-2">
              <a
                href="https://www.facebook.com/unb.cjr/"
                target="_blank"
                className="flex items-center"
              >
                <Facebook />
                <h1 className="ml-2">Via Facebook</h1>
              </a>
            </div>
          </div>
          <div className="bg-offwhite w-1 rounded-xl hidden lg:block"></div>{" "}
          {/* divisoria */}
          <div id="small screen" className="flex flex-col overflow-x-hidden">
            <h1 className="text-2xl sm:text-3xl font-medium px-5 mb-2">
              Já tem uma ideia de projeto?
            </h1>
            <h2 className="text-lg sm:text-xl mb-5 px-5">
              Faça um orçamento e tire seu projeto do papel
            </h2>
            <div className="self-center lg:self-start px-5">
              <Orcamento />
            </div>
            <div className="mt-14 block lg:hidden">
              <h1 className="text-2xl sm:text-3xl font-medium px-5 mb-2">
                Ainda tem alguma dúvida?
              </h1>
              <h2 className="text-lg sm:text-xl mb-5 w-full px-5 max-w-lg">
                Envie sua dúvida para{" "}
                <a
                  href="mailto:contato@cjr.org.br"
                  target="_blank"
                  className="font-semibold"
                >
                  contato@cjr.org.br
                </a>{" "}
                e nossa equipe entrará em contato o mais rápido possível
              </h2>
            </div>
            <Focatia className="ml-0 sm:ml-20 mt-20" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
