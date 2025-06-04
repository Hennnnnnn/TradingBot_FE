// components/WebhookForm.tsx
import React from "react";
import { InputField } from "./InputField";
import { Webhook } from "../types/types";

export const WebhookForm = ({
  webhook,
  onInputChange,
  onExec,
}: {
  webhook: Webhook;
  onInputChange: (field: keyof Webhook, value: string) => void;
  onExec: () => void;
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
        Eksekusi Webhook
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Symbol"
          value={webhook.symbol}
          onChange={(v) => onInputChange("symbol", v)}
        />
        <InputField
          label="Plus DI"
          type="number"
          value={webhook.plusDI.toString()}
          onChange={(v) => onInputChange("plusDI", v)}
        />
        <InputField
          label="Minus DI"
          type="number"
          value={webhook.minusDI.toString()}
          onChange={(v) => onInputChange("minusDI", v)}
        />
        <InputField
          label="ADX"
          type="number"
          value={webhook.adx.toString()}
          onChange={(v) => onInputChange("adx", v)}
        />
        <InputField
          label="Timeframe"
          value={webhook.timeframe}
          onChange={(v) => onInputChange("timeframe", v)}
          options={["1m", "5m", "15m", "1h", "4h", "1d"]}
        />
      </div>
      <div className="py-4">
        <button
          onClick={onExec}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          Eksekusi
        </button>
      </div>
    </div>
  );
};
