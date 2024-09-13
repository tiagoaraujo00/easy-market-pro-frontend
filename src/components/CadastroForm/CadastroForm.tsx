import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cadastroSchema } from "../../schemas/cadastroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

export default function CadastroForm() {
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {
    navigate("/dashboard");
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<cadastroSchema>({
    resolver: zodResolver(cadastroSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[80%] gap-6"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Seu nome completo"
          id="name"
          className="w-full p-2 font-bold border border-black rounded-md outline-none"
          {...register("name")}
        />
        {errors.name && (
          <p className="absolute text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="Seu email"
          id="email"
          className="w-full p-2 font-bold border border-black rounded-md outline-none"
          {...register("email")}
        />
        {errors.email && (
          <p className="absolute text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Sua senha"
          id="password"
          className="w-full p-2 font-bold border border-black rounded-md outline-none"
          {...register("password")}
        />
        {errors.password && (
          <p className="absolute text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Confirme sua senha"
          id="confirmPassword"
          className="w-full p-2 font-bold border border-black rounded-md outline-none"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="absolute text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="terms"
          className="flex items-center justify-start gap-2"
        >
          <input
            type="checkbox"
            id="terms"
            className="size-4"
            {...register("terms")}
          />
          Aceito os termos de uso
        </label>
        {errors.terms && (
          <p className="absolute text-sm text-red-500">
            {errors.terms.message}
          </p>
        )}
      </div>
      <Button>Cadastre-se</Button>
    </form>
  );
}
