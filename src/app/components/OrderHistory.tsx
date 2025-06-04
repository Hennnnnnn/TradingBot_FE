import { RefreshCw, TrendingUp, X } from "lucide-react";
import { Order } from "../types/types";
import { OrderCard } from "./OrderCard";

export const OrdersHistory = ({
  orders,
  onRefresh,
  onClear,
}: {
  orders: Order[];
  onRefresh: () => void;
  onClear: () => void;
}) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
        <TrendingUp className="text-yellow-400" />
        Riwayat Order
      </h2>
      <div className="flex gap-2">
        <button
          onClick={onClear}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white p-2 rounded-lg transition-all duration-200 flex items-center gap-2"
        >
          <X className="w-4 h-4" />
          <span className="text-m font-medium">Clear History</span>
        </button>

        <button
          onClick={onRefresh}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="max-h-96 overflow-y-auto space-y-3">
      {orders.length > 0 ? (
        orders.map((order, index) => <OrderCard key={index} order={order} />)
      ) : (
        <p className="text-gray-400 text-center py-8">
          Belum ada order yang dieksekusi
        </p>
      )}
    </div>
  </div>
);
