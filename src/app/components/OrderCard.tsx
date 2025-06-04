import { Order } from "../types/types";

export const OrderCard = ({ order }: { order: Order }) => (
  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2">
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            order.action === "BUY"
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {order.action}
        </span>
        <span className="text-white font-medium">{order.symbol}</span>
      </div>
      <span className="text-gray-400 text-xs">{order.timeframe}</span>
    </div>
    <div className="grid grid-cols-2 text-sm gap-2">
      <div>
        <span className="text-blue-300">Entry: </span>
        <span className="text-white">
          ${parseFloat(order.price_entry.toString()).toFixed(2)}
        </span>
      </div>
      <div>
        <span className="text-blue-300">Leverage: </span>
        <span className="text-white">{order.leverage}</span>
      </div>
      <div>
        <span className="text-green-300">TP: </span>
        <span className="text-white">
          ${parseFloat(order.tp_price.toString()).toFixed(2)}
        </span>
      </div>
      <div>
        <span className="text-red-300">SL: </span>
        <span className="text-white">
          ${parseFloat(order.sl_price.toString()).toFixed(2)}
        </span>
      </div>
    </div>
    <div className="text-xs text-gray-400 mt-2">
      {new Date(order.timestamp).toLocaleString()}
    </div>
  </div>
);

