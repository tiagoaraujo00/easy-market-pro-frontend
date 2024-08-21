import mainFormimg from "../../assets/images/main-form-img.svg";

export default function ContactUs() {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center gap-6 mb-5 md:flex-row">
        <h2 className="self-center px-3 py-2 text-2xl font-semibold rounded-lg max-w-fit bg-primary_green text-zinc-900">
          Fale conosco
        </h2>
        <p className="text-zinc-900 md:w-[50%]">
          Fale Conosco: <br /> Vamos conversar sobre as Soluções para o Seu
          Negócio
        </p>
      </div>
      <div className="flex w-full rounded-3xl bg-zinc-300 p-7">
        <form className="flex-1">
          <div className="flex gap-10">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="oi"
              >
                <input
                  name="type"
                  type="radio"
                  checked
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-zinc-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="oi"
                />
                <span className="absolute transition-opacity opacity-0 pointer-events-none text-primary_green top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="oi"
              >
                Nos mande um Oi!
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="orcamento"
              >
                <input
                  name="type"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-zinc-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="orcamento"
                />
                <span className="absolute transition-opacity opacity-0 pointer-events-none text-primary_green top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="orcamento"
              >
                Faça um orçamento
              </label>
            </div>
          </div>
          <div className="pl-3 mt-5 w-[75%] space-y-5">
            <label htmlFor="nome" className="flex flex-col">
              Nome
              <input
                type="text"
                name="nome"
                id="nome"
                className="p-1 py-2 border border-black rounded-md outline-none"
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email
              <input
                type="text"
                name="email"
                id="email"
                className="p-1 py-2 border border-black rounded-md outline-none"
              />
            </label>
            <label htmlFor="duvida" className="flex flex-col">
              Sua dúvida aqui
              <textarea
                rows={6}
                name="duvida"
                id="duvida"
                className="p-1 border border-black rounded-lg outline-none resize-none"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full py-4 text-xl font-normal rounded-lg text-zinc-200 bg-zinc-900"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="overflow-x-hidden translate-x-7">
          <img
            src={mainFormimg}
            alt="Form"
            className="size-[30rem] translate-x-56"
          />
        </div>
      </div>
    </section>
  );
}
