// hooks/useWebhook.ts
import { useState } from "react";
import { Webhook } from "../types/types";

export const useWebhook = () => {
  const [webhook, setWebhook] = useState<Webhook>({
    symbol: "",
    plusDI: 0,
    minusDI: 0,
    adx: 0,
    timeframe: "",
  });
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  const handleInputChange = (field: keyof Webhook, value: string) => {
    setWebhook((prev) => ({
      ...prev,
      [field]: ["plusDI", "minusDI", "adx"].includes(field)
        ? value.trim() === ""
          ? 0
          : parseFloat(value)
        : value,
    }));
  };

  const execWebhook = async () => {
    const payload = {
      symbol: webhook.symbol,
      plusDI: webhook.plusDI,
      minusDI: webhook.minusDI,
      adx: webhook.adx,
      timeframe: webhook.timeframe,
    };

    try {
      const response = await fetch(`${API_URL}/webhook`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        console.log("Success");
      } else {
        console.log("Error");
      }

      return response.status === 200;
    } catch (error) {
      console.log(error);
    }
  };

  return { webhook, handleWebhookChange: handleInputChange, execWebhook };
};
