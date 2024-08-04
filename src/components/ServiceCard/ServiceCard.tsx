export function ServiceCard() {
  return (
    <div className="flex items-center justify-between w-[30%] mt-10 py-4 bg-red-800 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-400"></div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">
            Gestão de Estoque
          </h3>
          <p className="text-zinc-900">
            Mantenha o controle do seu estoque e nunca fique sem produtos.
          </p>
        </div>
      </div>
    </div>
  );
}
