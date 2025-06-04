This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Features

- **Real-time Strategy Configuration**: Easily adjust trading parameters
- **ADX & Directional Indicator Strategy**: Trend-following approach with customizable thresholds
- **Risk Management**: Built-in take profit, stop loss, and leverage controls
- **Order History Tracking**: Monitor trading performance and results
- **Manual Webhook Testing**: Test strategy logic with custom indicator values
- **Multiple Timeframes**: Support for various chart timeframes

## 🎛️ Interface Components

### 1. Konfigurasi Strategi (Strategy Configuration)

Configure your trading strategy parameters:

**Symbol Configuration:**
- **Symbol**: Trading pair selection (default: BTCUSDT)
- **Timeframe**: Chart timeframe for analysis (default: 5m)

**Technical Indicator Thresholds:**
- **+DI Threshold**: Positive Directional Indicator threshold value (default: 25)
- **-DI Threshold**: Negative Directional Indicator threshold value (default: 20)
- **ADX Minimum**: Minimum ADX value required for trade signals (default: 20)

**Risk Management Parameters:**
- **Take Profit (%)**: Percentage profit target for closing positions (default: 2%)
- **Stop Loss (%)**: Percentage loss limit for closing positions (default: 1%)
- **Leverage**: Trading leverage multiplier (default: 10x)

**Action Buttons:**
- **Simpan Konfigurasi** (Save Configuration): Applies and saves the current strategy settings
- **Reset**: Resets all parameters to default values

### 2. Konfigurasi Aktif (Active Configuration)

Displays the currently active trading configuration:

- **Symbol**: Currently selected trading pair (BTCUSDT)
- **Timeframe**: Active timeframe (5m)
- **+DI Threshold**: Active positive DI threshold (25)
- **-DI Threshold**: Active negative DI threshold (20)
- **ADX Min**: Active minimum ADX value (20)
- **Leverage**: Active leverage setting (10x)
- **TP**: Active take profit percentage (2%)
- **SL**: Active stop loss percentage (1%)

### 3. Riwayat Order (Order History)

Shows recent trading activity and results:

**Current Order Example:**
- **Type**: BUY BTCUSDT
- **Timeframe**: 5m
- **Entry Price**: $104,872.02
- **Leverage**: 10x
- **Take Profit**: $107,014.46
- **Stop Loss**: $103,502.30
- **Timestamp**: 6/5/2025, 2:54:23 AM

**Controls:**
- **Clear History**: Removes all order history
- **Refresh**: Updates the order display

### 4. Eksekusi Webhook (Webhook Execution)

Manual execution interface for testing webhook functionality:

**Parameters:**
- **Symbol**: Trading pair input (BTCUSDT)
- **Plus DI**: Current +DI value (27.5)
- **Minus DI**: Current -DI value (15)
- **ADX**: Current ADX value (20)
- **Timeframe**: Execution timeframe (5m)

**Action:**
- **Eksekusi** (Execute): Manually triggers the trading logic with specified indicator values