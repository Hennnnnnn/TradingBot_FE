import { RefreshCw, Save, Settings } from "lucide-react";
import { Config } from "../types/types";
import { InputField } from "./InputField";

export const ConfigurationForm = ({
  config,
  onInputChange,
  onSave,
  onReset,
  loading,
  message,
}: {
  config: Config;
  onInputChange: (field: keyof Config, value: string) => void;
  onSave: () => void;
  onReset: () => void;
  loading: boolean;
  message: string;
}) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
      <Settings className="text-blue-400" />
      Konfigurasi Strategi
    </h2>

    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Symbol"
          value={config.symbol}
          onChange={(value) => onInputChange("symbol", value)}
          placeholder="BTCUSDT"
        />
        <InputField
          label="Timeframe"
          value={config.timeframe}
          onChange={(value) => onInputChange("timeframe", value)}
          options={["1m", "5m", "15m", "1h", "4h", "1d"]}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <InputField
          label="+DI Threshold"
          value={config.plusDIThreshold}
          onChange={(value) => onInputChange("plusDIThreshold", value)}
          type="number"
          step="0.1"
        />
        <InputField
          label="-DI Threshold"
          value={config.minusDIThreshold}
          onChange={(value) => onInputChange("minusDIThreshold", value)}
          type="number"
          step="0.1"
        />
        <InputField
          label="ADX Minimum"
          value={config.adxMinimum}
          onChange={(value) => onInputChange("adxMinimum", value)}
          type="number"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <InputField
          label="Take Profit (%)"
          value={config.takeProfitPercent}
          onChange={(value) => onInputChange("takeProfitPercent", value)}
          type="number"
          step="0.1"
        />
        <InputField
          label="Stop Loss (%)"
          value={config.stopLossPercent}
          onChange={(value) => onInputChange("stopLossPercent", value)}
          type="number"
          step="0.1"
        />
        <InputField
          label="Leverage"
          value={config.leverage}
          onChange={(value) => onInputChange("leverage", value)}
          type="number"
          step="1"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onSave}
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Menyimpan...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Simpan Konfigurasi
            </>
          )}
        </button>
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.includes("berhasil")
              ? "bg-green-500/20 text-green-300 border-green-500/30"
              : "bg-red-500/20 text-red-300 border-red-500/30"
          } border`}
        >
          {message}
        </div>
      )}
    </div>
  </div>
);
