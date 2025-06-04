import { TrendingUp } from "lucide-react";

export const Header = () => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
      <TrendingUp className="text-blue-400" />
      Trading Strategy Simulator
    </h1>
    <p className="text-blue-300">ADX & Directional Indicator Strategy</p>
  </div>
);