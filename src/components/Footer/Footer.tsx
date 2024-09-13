import linkedin from "../../assets/images/linkedin.svg";
import x from "../../assets/images/x.svg";
import { Facebook } from "lucide-react";
import logoWhite from "../../assets/logo/easyMarketWhite.png";
import Button from "../Button/Button";
import Title from "../Title/Title";

export default function Footer() {
  return (
    <footer className="px-8 mt-20 bg-primary_dark rounded-t-3xl">
      <div className="flex items-center justify-between min-w-full mb-8 md:py-2">
        <div>
          <img src={logoWhite} alt="logo" width={120} />
        </div>
        <nav className="items-center hidden gap-24 text-lg md:flex text-zinc-200">
          <a href="*" className="">
            Recursos
          </a>
          <a href="*" className="">
            Home
          </a>
          <a href="*" className="">
            Notícias
          </a>
          <a href="*" className="">
            Contato
          </a>
        </nav>
        <div className="flex gap-4">
          <img src={linkedin} alt="social" className="text-zinc-950" />
          <img src={x} alt="social" className="text-zinc-950" />
          <Facebook className="text-zinc-100" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="space-y-5 text-zinc-200">
          <Title>Entre em contato</Title>
          <p>Email: info@easymarket.com.br</p>
          <p>Telefone: (xx) xxxx-xxxx</p>
          <p>
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="flex items-center rounded-lg bg-zinc-600 w-[50%] justify-center">
          <form className="flex items-center space-x-5">
            <input
              type="text"
              name="news"
              id="news"
              className="p-3 px-8 text-lg bg-transparent border-2 rounded-md outline-none text-zinc-200 border-zinc-200"
            />
            <Button type="submit" variant="secondary" className="p-2">
              Receba notícias no seu Email
            </Button>
          </form>
        </div>
      </div>
      <div className="h-[2px] my-8 rounded-lg bg-zinc-400" />
      <div className="flex justify-between pb-8 text-zinc-100">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}
