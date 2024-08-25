import { X } from "lucide-react";

export default function CallSchedulingModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="px-6 py-5 space-y-5 rounded-xl shadow-shape bg-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecione a data</h2>
            <button type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
