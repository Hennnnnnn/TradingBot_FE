export const ConfigInfoItem = ({
  label,
  value,
  color = "text-white",
}: {
  label: string;
  value: string | number;
  color?: string;
}) => (
  <div className="bg-white/5 p-3 rounded-lg">
    <span className="text-blue-300 font-medium">{label}:</span>
    <span className={`${color} ml-2`}>{value}</span>
  </div>
);