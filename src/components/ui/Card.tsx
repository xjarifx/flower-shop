import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
