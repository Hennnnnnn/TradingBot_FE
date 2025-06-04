export const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  step,
  placeholder,
  options,
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
  step?: string;
  placeholder?: string;
  options?: string[];
}) => (
  <div>
    <label className="block text-blue-200 font-medium mb-2">{label}</label>
    {options ? (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-blue-400 focus:outline-none transition-colors"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-black">
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
        step={step}
        placeholder={placeholder}
      />
    )}
  </div>
);
