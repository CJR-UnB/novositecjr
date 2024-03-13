import {
  Email,
  Facebook,
  Focatia,
  Instagram,
  Linkedin,
  MessageApp,
} from "../SVGicons";
import Orcamento from "../botaoOrcamento";

const Contato: React.FC = () => {
  return (
    <>
      {" "}
      <section className="mt-32">
        <h1 className="text-center text-navyblue font-bold text-5xl mb-14 mx-3">
          Como podemos te ajudar?
        </h1>
        <div className="flex justify-center text-navyblue">
          <div className="hidden lg:block mx-10">
            <h1 className="text-3xl font-medium mb-2">
              Ainda tem alguma dúvida?
            </h1>
            <h2 className="text-xl mb-5">
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
          <div className="bg-offwhite w-1 rounded-xl hidden lg:block"></div>
          <div className="flex flex-col mx-10">
            <h1 className="text-3xl font-medium mb-2">
              Já tem uma ideia de projeto?
            </h1>
            <h2 className="text-xl mb-5">
              Faça um orçamento e tire seu projeto do papel
            </h2>
            <div className="self-center lg:self-start">
              <Orcamento />
            </div>
            <div className="mt-14 block lg:hidden">
              <h1 className="text-3xl font-medium mb-2">
                Ainda tem alguma dúvida?
              </h1>
              <h2 className="text-xl mb-5 w-full max-w-lg">
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
            <div className=" ml-40 mt-20">
              <Focatia />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
