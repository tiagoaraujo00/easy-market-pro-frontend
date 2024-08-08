import hero from '../../assets/images/hero-img.svg';

export function Hero() {
  return (
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
        <button
          type="button"
          className="w-full py-5 text-lg bg-black px-9 rounded-xl text-zinc-100 md:w-[300px]"
        >
          Fale com um Consultor
        </button>
      </div>
      <img src={hero} alt="hero img" width={470} />
    </section>
  );
}
