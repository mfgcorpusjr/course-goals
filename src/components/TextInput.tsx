import { Input } from "@/components/ui/input";

import { type ComponentProps } from "react";

type InputProps = {
  label: string;
} & ComponentProps<"input">;

export default function TextInput({ label, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={rest.id} className="text-sm font-semibold uppercase">
        {label}
      </label>
      <Input {...rest} />
    </div>
  );
}
