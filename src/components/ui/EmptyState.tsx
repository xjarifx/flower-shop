import type { ReactNode } from "react";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <section className="bg-zinc-100 px-4 py-20">
      <div className="mx-auto max-w-400 text-center">
        <div className="rounded-3xl border border-zinc-300 bg-white/60 p-12">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-300/30">
            {icon}
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 uppercase">
            {title}
          </h1>
          <p className="mt-4 text-base text-zinc-700">{description}</p>
          {action && <div className="mt-8">{action}</div>}
        </div>
      </div>
    </section>
  );
}
