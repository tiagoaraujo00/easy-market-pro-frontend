import { Plus } from "lucide-react";
import { GasWaterProductsList } from "../../data/GasWaterProductsList";

export default function GasWater() {
  return (
    <main className="w-full p-5">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Visão geral dos produtos</h1>
        <button className="flex items-center gap-2 p-2 text-xl font-semibold rounded-lg justifi-center bg-primary_green">
          <Plus />
          Adicionar Produto
        </button>
      </header>
      <div className="flex gap-8">
        {GasWaterProductsList.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center mt-5 p-5 bg-white rounded-xl w-[50%] shadow-xl"
            >
              <div className="flex items-center gap-5">
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-lg font-medium">Preço atual: R${product.price}</p>
                  <p className="text-lg font-medium">Medida: {product.size}</p>
                  <p className="text-lg font-medium">
                    Quantidade em estoque: {product.StockQuantity}
                  </p>
                  <p className="text-lg font-medium">
                    Vendas no mês: {product.MonthSales}
                  </p>
                  <p className="text-lg font-medium">
                    Último reabastecimento: {product.LasRestockDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
