import { PageBreak } from "@/app/components/SVGicons";

const OndeEstamos: React.FC = () => {
  return (
    <>
      <section className="mt-20" id="onde-estamos">
        <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
          ONDE ESTAMOS
        </h1>
        <PageBreak />
        <div className="inline">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.3149773053856!2d-47.87033587641903!3d-15.758954734690969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bb894f5a993%3A0xb832dbad9818d740!2sCJR%20-%20Empresa%20J%C3%BAnior%20de%20Computa%C3%A7%C3%A3o!5e1!3m2!1spt-BR!2sbr!4v1734903576225!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-96"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default OndeEstamos;
