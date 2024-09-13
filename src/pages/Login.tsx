import loginImage from "../assets/images/loginImage.png";
import logo from "../assets/logo/easymarket-logo-final.svg";
import Button from "../components/Button/Button";
export default function Login() {

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }
  return (
    <div className="w-[50%] h-[80%] overflow-hidden fixed inset-0 m-auto flex justify-start bg-white rounded-xl drop-shadow-xl">
      <img src={loginImage} alt="login" className="rounded-xl" width={500} />
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        <img src={logo} alt="logo" width={300} />
        <form className="w-2/3 space-y-5 text-lg">
          <label htmlFor="email" className="flex flex-col">
            Email
            <input type="text" name="email" id="email" className="modal-input" placeholder="Email" />
          </label>
          <label htmlFor="password" className="flex flex-col">
            Senha
            <input type="text" name="password" id="password" className="modal-input" placeholder="Senha" />
          </label>
          <label htmlFor="remember" className="flex items-center gap-1 md:text-base">
          <input type="checkbox" name="remember" id="remember" className="size-4" />
            Me mantenha conectado
          </label>
          <Button onClick={handleLogin }>Entrar</Button>
        </form>
      </div>
    </div>
  );
}
