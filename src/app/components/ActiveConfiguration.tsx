import { DollarSign } from "lucide-react";
import { Config } from "../types/types";
import { ConfigInfoItem } from "./ConfigInfoItem";

export const ActiveConfiguration = ({
  activeConfig,
}: {
  activeConfig: Config | null;
}) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
      <DollarSign className="text-green-400" />
      Konfigurasi Aktif
    </h2>
    {activeConfig ? (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <ConfigInfoItem label="Symbol" value={activeConfig.symbol} />
          <ConfigInfoItem label="Timeframe" value={activeConfig.timeframe} />
          <ConfigInfoItem
            label="+DI Threshold"
            value={activeConfig.plusDIThreshold}
          />
          <ConfigInfoItem
            label="-DI Threshold"
            value={activeConfig.minusDIThreshold}
          />
          <ConfigInfoItem label="ADX Min" value={activeConfig.adxMinimum} />
          <ConfigInfoItem
            label="Leverage"
            value={`${activeConfig.leverage}x`}
          />
          <ConfigInfoItem
            label="TP"
            value={`${activeConfig.takeProfitPercent}%`}
            color="text-green-300"
          />
          <ConfigInfoItem
            label="SL"
            value={`${activeConfig.stopLossPercent}%`}
            color="text-red-300"
          />
        </div>
      </div>
    ) : (
      <p className="text-gray-400">
        Belum ada konfigurasi aktif. Simpan konfigurasi terlebih dahulu.
      </p>
    )}
  </div>
);
