import { useState } from "react";
import { Config } from "../types/types";

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const loadActiveConfig = async () => {
    try {
      const response = await fetch(`${API_URL}/config`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
    return null;
  };

  const saveConfig = async (config: Config) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/config`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      });

      if (response.ok) {
        showMessage("Konfigurasi berhasil disimpan!");
        setLoading(false);
        return config;
      } else {
        showMessage("Gagal menyimpan konfigurasi");
        setLoading(false);
        return null;
      }
    } catch (error) {
      showMessage(
        "Error: " + (error instanceof Error ? error.message : "Unknown error")
      );
      setLoading(false);
      return null;
    }
  };

  return { loading, message, loadActiveConfig, saveConfig, showMessage };
};
