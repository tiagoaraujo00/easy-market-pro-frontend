import { Container } from "../components/Container/Container";
import logo from "../assets/logo/easymarket-logo-final.svg";
import signUp from "../assets/images/SignUp2.svg";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import CadastroForm from "../components/CadastroForm/CadastroForm";

export default function Cadastro() {
  return (
    <Container>
      <div className="flex flex-col h-screen pb-5">
        <div className="flex items-center justify-between w-full pt-4">
          <Link to="/">
            <img src={logo} alt="logo" width={120} />
          </Link>
          <p className="text-lg">
            Já possui uma conta? Faça{" "}
            <Link to="/login" className="font-semibold">
              login.
            </Link>
          </p>
        </div>
        <div className="flex flex-1 bg-white rounded-xl">
          <div className="flex flex-col items-center justify-around w-2/3 h-full bg-zinc-300 rounded-xl">
            <div className="flex flex-col items-center space-y-8">
              <h1 className="text-2xl font-bold">
                Impulsione o Potencial do Seu Negócio!
              </h1>
              <h2 className="font-semibold">
                Rastreamento de Vendas Simplificado
              </h2>
            </div>
            <img src={signUp} alt="imagem" width={300} />
            <p>Acesse insights do mercado onde estiver!</p>
          </div>
          <div className="flex flex-col items-center flex-1 pt-3 3xl:justify-center">
            <div className="flex flex-col items-center gap-2 p-3 3xl:mb-5">
              <h1 className="text-xl font-semibold 3xl:text-2xl">
                Se una à eficiência
              </h1>
              <p className="">Ganhe 14 dias de teste grátis ao se registrar!</p>
            </div>
            <CadastroForm />
            <h2 className="p-3 mt-3">Ou faça login com</h2>
            <div className="flex w-[80%] gap-2 pt-3">
              <Button variant="secondary">Google</Button>
              <Button variant="secondary">Facebook</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
