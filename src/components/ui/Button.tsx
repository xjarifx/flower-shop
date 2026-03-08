import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & (
  | {
      to: string;
      onClick?: never;
      type?: never;
      disabled?: never;
    }
  | {
      to?: never;
      onClick?: () => void;
      type?: "button" | "submit";
      disabled?: boolean;
    }
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-300 text-zinc-900 hover:opacity-85",
  secondary:
    "border-2 border-zinc-400 bg-transparent text-zinc-900 hover:opacity-75",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold uppercase transition-opacity";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={styles}>
        <span aria-hidden="true">•</span>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles} disabled:opacity-50`}
    >
      <span aria-hidden="true">•</span>
      {children}
    </button>
  );
}
