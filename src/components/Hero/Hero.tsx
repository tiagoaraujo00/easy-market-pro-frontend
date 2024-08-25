import { useEffect, useState } from "react";
import hero from "../../assets/images/hero-img.svg";
import Button from "../Button/Button";
import { X } from "lucide-react";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <section className="items-start mt-16 mb-10 space-y-8 md:justify-between md:flex md:mb-16">
        <div className="md:w-[48%] space-y-9">
          <h1 className="text-5xl font-bold text-zinc-900">
            A Tecnolgia que impulsiona seu negócio!
          </h1>
          <p className="md:w-[93%] text-zinc-900 text-xl">
            Uma solução intuitiva para mercados de bairro, nossa aplicação
            facilita a gestão de estoque, precificação e finanças, ajudando a
            aumentar a eficiência e os lucros.
          </p>
          <Button onClick={() => setIsOpen(true)} type="button" size="middle">
            Fale com um Consultor
          </Button>
        </div>
        <img src={hero} alt="hero img" width={470} />
      </section>
      {isOpen && (
        <>
          <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black/20" />
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-1/3 px-6 py-5 space-y-5 rounded-xl bg-zinc-100">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold">Agende um horário</h2>
                  <div className="flex items-center justify-center p-1 border-2 rounded-md border-primary_dark">
                    <button type="button" onClick={closeModal}>
                      <X className="size-5 text-primary_dark" />
                    </button>
                  </div>
                </div>
                <form action="" className="space-y-5">
                  <label htmlFor="name" className="flex flex-col">
                    Nome
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="modal-input"
                    />
                  </label>
                  <label htmlFor="email" className="flex flex-col">
                    Email
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="modal-input"
                    />
                  </label>
                  <label htmlFor="number" className="flex flex-col">
                    Número de telefone
                    <input
                      type="text"
                      name="number"
                      id="number"
                      className="modal-input"
                    />
                  </label>
                  <label htmlFor="date" className="flex flex-col">
                    Data da reunião
                    <input
                      type="text"
                      name="date"
                      id="date"
                      placeholder="dd/mm/aaaa"
                      className="modal-input"
                    />
                  </label>
                  <label htmlFor="obs" className="flex flex-col">
                    Observações (opcional)
                    <textarea
                      name="obs"
                      id="obs"
                      cols={20}
                      className="resize-none modal-input"
                    ></textarea>
                  </label>
                  <Button type="submit">Enviar</Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
