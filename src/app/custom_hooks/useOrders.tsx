import { useState } from "react";
import { Order } from "../types/types";

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://tradingbotbe-production.up.railway.app";
  const loadOrders = async () => {
    try {
      const response = await fetch(`${API_URL}/orders`);
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  const clearOrders = async () => {
    try {
      const response = await fetch(`${API_URL}}/orders`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Clear order berhasil");
        setOrders([]);
      } else {
        console.log("Clear order gagal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { orders, loadOrders, clearOrders };
};
