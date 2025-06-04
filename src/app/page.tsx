"use client";
import React, { useEffect } from "react";
import { useConfig } from "./custom_hooks/useConfig";
import { useOrders } from "./custom_hooks/useOrders";
import { useApi } from "./custom_hooks/useApi";
import { ConfigurationForm } from "./components/ConfigurationForm";
import { ActiveConfiguration } from "./components/ActiveConfiguration";
import { OrdersHistory } from "./components/OrderHistory";
import { Header } from "./components/Header";
import { WebhookForm } from "./components/WebhookForm";
import { useWebhook } from "./custom_hooks/useWebhook";

const TradingStrategyApp = () => {
  const {
    config,
    activeConfig,
    setActiveConfig,
    handleInputChange,
    resetConfig,
  } = useConfig();
  const { orders, loadOrders, clearOrders } = useOrders();
  const { loading, message, loadActiveConfig, saveConfig, showMessage } =
    useApi();
  const { webhook, handleWebhookChange, execWebhook } = useWebhook();

  useEffect(() => {
    const initializeApp = async () => {
      const configData = await loadActiveConfig();
      if (configData) {
        setActiveConfig(configData);
      }
      loadOrders();
    };

    initializeApp();
  }, []);

  const handleExecWebhook = async () => {
    const success = await execWebhook();
    if (success) {
      await loadOrders();
    }
  };

  const handleSaveConfig = async () => {
    const savedConfig = await saveConfig(config);
    if (savedConfig) {
      setActiveConfig(savedConfig);
    }
  };

  const handleReset = () => {
    resetConfig();
    showMessage("Konfigurasi direset ke default");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <div className="grid lg:grid-cols-2 gap-8">
          <ConfigurationForm
            config={config}
            onInputChange={handleInputChange}
            onSave={handleSaveConfig}
            onReset={handleReset}
            loading={loading}
            message={message}
          />

          <div className="space-y-6">
            <ActiveConfiguration activeConfig={activeConfig} />
            <OrdersHistory
              orders={orders}
              onRefresh={loadOrders}
              onClear={clearOrders}
            />
          </div>
        </div>
        <div className="py-8">
          <WebhookForm
            webhook={webhook}
            onInputChange={handleWebhookChange}
            onExec={handleExecWebhook}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingStrategyApp;
