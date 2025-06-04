import { useState } from "react";
import { Config } from "../types/types";

export const useConfig = () => {
  const [config, setConfig] = useState<Config>({
    symbol: "BTCUSDT",
    timeframe: "5m",
    plusDIThreshold: 25,
    minusDIThreshold: 20,
    adxMinimum: 20,
    takeProfitPercent: 2,
    stopLossPercent: 1,
    leverage: 10,
  });

  const [activeConfig, setActiveConfig] = useState<Config | null>(null);

  const handleInputChange = (field: keyof Config, value: string) => {
    setConfig((prev) => ({
      ...prev,
      [field]:
        field.includes("Percent") ||
        field.includes("Threshold") ||
        field === "adxMinimum" ||
        field === "leverage"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const resetConfig = () => {
    setConfig({
      symbol: "BTCUSDT",
      timeframe: "5m",
      plusDIThreshold: 25,
      minusDIThreshold: 20,
      adxMinimum: 20,
      takeProfitPercent: 2,
      stopLossPercent: 1,
      leverage: 10,
    });
  };

  return {
    config,
    activeConfig,
    setActiveConfig,
    handleInputChange,
    resetConfig,
  };
};
