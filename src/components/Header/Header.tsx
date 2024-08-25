import { Menu } from "lucide-react";
import logo from "../../assets/logo/easymarket-logo-final.svg";
import { useState } from "react";
import Button from "../Button/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="flex items-center justify-between min-w-full md:py-2">
        <div className="md:pr-12">
          <img src={logo} alt="logo" width={150} height={150} />
        </div>
        <nav className="items-center hidden gap-24 text-xl md:flex md:flex-1">
          <div className="nav-link">Home</div>
          <div className="nav-link">Recursos</div>
          <div className="nav-link">Notícias</div>
          <div className="nav-link">Contato</div>
        </nav>
        <div className="hidden md:flex md:gap-8">
          <button
            type="button"
            className="text-xl text-zinc-900 hover:text-zinc-700"
          >
            Login
          </button>
          <Button>Cadastre-se</Button>
        </div>
        <button type="button" className="md:hidden" onClick={handleMenu}>
          <Menu />
        </button>
      </div>
      {isOpen && (
        <nav
          className={`right-0 flex flex-col items-center gap-4 text-xl transform transition-transform ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <div className="nav-link">Home</div>
          <div className="nav-link">Recursos</div>
          <div className="nav-link">Notícias</div>
          <div className="nav-link">Contato</div>
          <div className="nav-link">Login</div>
          <button type="button" className="nav-link">
            Cadastre-se
          </button>
        </nav>
      )}
    </header>
  );
}
