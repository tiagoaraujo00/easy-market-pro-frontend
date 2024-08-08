import { ServiceCardProps } from "./serviceCard.interface";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  title,
  img,
  bgColor,
}: Readonly<ServiceCardProps>) {
  const titleBgColor =
    bgColor === "bg-primary_green" || bgColor === "bg-primary_dark"
      ? "bg-white"
      : "bg-primary_green";

  const textColor = bgColor === "bg-primary_dark" ? "text-white" : "text-black";
  const buttonColor = bgColor === "bg-primary_dark" ? "bg-white" : "bg-black";
  const buttoonTextColor = buttonColor === "bg-white" ? "text-black" : "text-primary_green";
  return (
    <div
      className={`flex items-center gap-8 p-9 ${bgColor} rounded-3xl border border-black shadow-[0px_5px_0px_0px_black]`}
    >
      <div className="flex flex-col justify-between w-1/2 h-full">
        <h3
          className={`p-1 text-xl font-semibold text-black rounded-md ${titleBgColor} max-w-fit`}
        >
          {title}
        </h3>
        <button className="flex items-center gap-3 max-w-fit">
          <ArrowUpRight
            size={30}
            className={`rounded-full ${buttonColor} ${buttoonTextColor}`}
          />
          <p className={`${textColor}`}>Leia mais...</p>
        </button>
      </div>
      <img src={img} alt={title} className="w-[50%]" />
    </div>
  );
}
