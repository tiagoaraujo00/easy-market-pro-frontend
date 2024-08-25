import Title from "../Title/Title";

export function CaseStudies() {
  return (
    <section className="mt-20">
      <div className="flex flex-col gap-6 mb-5 md:flex-row">
        <Title>Impacto</Title> 
        <p className="text-zinc-900 md:w-[50%]">
          Descubra Exemplos Reais do Nosso Sucesso Comprovado com Pequenos
          Varejistas através de Nossos Estudos de Caso
        </p>
      </div>
      <div className="flex items-start justify-center w-full space-x-16 md:py-16 bg-primary_dark rounded-3xl text-zinc-200">
        <p className="w-[22%]">
          Para um pequeno mercado de bairro, implementamos um sistema de gestão
          de estoque que resultou em uma redução de 40% nas perdas por produtos
          vencidos e um aumento de 30% na eficiência operacional.
        </p>
        <div className="w-px h-40 ml-3 bg-zinc-200 mx-7"/>
        <p className="w-[25%]">
          Em uma padaria local, introduzimos um programa de fidelidade digital
          que aumentou a retenção de clientes em 35% e as vendas semanais em
          20%.
        </p>
        <div className="w-px h-40 ml-3 bg-zinc-200 mx-7"/>
        <p className="w-[25%]">
          Para um varejista de bairro, desenvolvemos uma campanha de marketing
          digital direcionada que aumentou o tráfego no site em 60% e as vendas
          online em 40%.
        </p>
      </div>
    </section>
  );
}
