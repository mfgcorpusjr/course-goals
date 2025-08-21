import { twMerge } from "tailwind-merge";

type HintInfoboxProps = {
  mode: "hint";
  message: string;
};

type WarningInfoboxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  message: string;
};

type InfoboxProps = HintInfoboxProps | WarningInfoboxProps;

export default function Infobox(props: InfoboxProps) {
  let className = "p-4 space-1 border rounded text-gray-500 text-center";

  if (props.mode === "warning") {
    className = twMerge(
      className,
      props.severity === "low"
        ? "border-green-500 text-green-500"
        : props.severity === "medium"
        ? "border-orange-500 text-orange-500"
        : "border-red-500 text-red-500"
    );
  }

  return (
    <div className={className}>
      {props.mode === "warning" && (
        <h3 className="text-lg font-semibold">Warning</h3>
      )}
      <p className="text-sm">{props.message}</p>
    </div>
  );
}
