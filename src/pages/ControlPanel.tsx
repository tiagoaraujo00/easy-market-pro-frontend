import { Mail, Sun } from "lucide-react";
import { Container } from "../components/Container/Container";
import { ControlPanelItems } from "../utils/ControlPanelItems";
import { Outlet } from "react-router-dom";
import logo2 from "../assets/logo/easymarket-logo-final.svg";

export default function ControlPanel() {
  return (
    <Container>
      <main className="flex w-full h-screen py-10">
        <div className="flex flex-col mr-10 bg-white rounded-lg w-60">
          {ControlPanelItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2 p-3 font-semibold border-b border-zinc-300"
              >
                <Icon size={35} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col flex-1 bg-inherit rounded-xl">
          <div className="flex items-center justify-between p-5 bg-white mb-7 rounded-xl">
            <img src={logo2} alt="logo" width={90  } />
            <form className="w-full">
              <input
                type="text"
                placeholder="Buscar"
                name="search"
                id="search"
                className="p-2 w-[30%] font-semibold border outline-none rounded-xl border-zinc-400"
              />
            </form>
            <div className="flex items-center gap-5">
              <Sun />
              <Mail />
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div> 
          <div className="flex-1 bg-white rounded-xl">
            <Outlet />
          </div>
        </div>
      </main>
    </Container>
  );
}
