import React from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  step?: number | string;
  min?: number;
  className?: string;
  "aria-invalid"?: boolean;
}

export default function NumberInput({
  value,
  onChange,
  step = 0.01,
  min = 0,
  className,
  ...rest
}: NumberInputProps) {
  return (
    <input
      className={className ?? "input"}
      type="number"
      inputMode="decimal"
      step={step}
      min={min}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      {...rest}
    />
  );
}
