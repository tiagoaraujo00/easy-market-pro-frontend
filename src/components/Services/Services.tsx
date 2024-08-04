import { ServiceCard } from "../ServiceCard/ServiceCard";

export function Services() {
  return (
    <section>
      <div className="flex flex-col gap-6 md:flex-row">
        <h2 className="inline-block px-3 py-2 text-xl rounded-lg bg-primary_green text-zinc900">Serviços</h2>
        <p className="text-zinc-900 md:w-[50%]">
          Na nossa aplicação para pequenos varejistas, oferecemos uma gama de
          serviços para ajudar os empreendedores a crescer e ter sucesso. Esses
          serviços incluem:
        </p>
      </div>
      <div>
        <ServiceCard  />
      </div>
    </section>
  );
}
