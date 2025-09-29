import { PropsWithChildren } from "react";

interface FieldProps {
  label: string;
}
type FieldWithChildren = PropsWithChildren<FieldProps>;

export default function Field({ label, children }: FieldWithChildren) {
  return (
    <label className="flex flex-col gap-1">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}
