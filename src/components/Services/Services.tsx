import { ServiceCard } from "../ServiceCard/ServiceCard";
import { serviceList } from "../../data/serviceList";
import Title from "../Title/Title";

export function Services() {
  return (
    <section className="">
      <div className="flex flex-col gap-6 md:flex-row">
        <Title>Serviços</Title>
        <p className="text-zinc-900 md:w-[50%]">
          Na nossa aplicação para pequenos varejistas, oferecemos uma gama de
          serviços para ajudar os empreendedores a crescer e ter sucesso. Esses
          serviços incluem:
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3 md:mt-5">
        {serviceList.map((service) => (
          <ServiceCard
            key={service.title}
            bgColor={service.bgColor}
            title={service.title}
            img={service.img}
          />
        ))}
      </div>
    </section>
  );
}
