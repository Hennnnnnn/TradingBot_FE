export type Config = {
  symbol: string;
  timeframe: string;
  plusDIThreshold: number;
  minusDIThreshold: number;
  adxMinimum: number;
  takeProfitPercent: number;
  stopLossPercent: number;
  leverage: number;
};

export type Order = {
  action: "BUY" | "SELL";
  symbol: string;
  timeframe: string;
  price_entry: string | number;
  leverage: number;
  tp_price: string | number;
  sl_price: string | number;
  timestamp: string;
};

export type Webhook = {
    symbol: string;
    plusDI: number,
    minusDI: number,
    adx: number,
    timeframe: string,
}