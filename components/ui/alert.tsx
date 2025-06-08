'use client';

export function Alert({ title, description }: { title: string; description: string; }) {
  return (
    <div className="rounded-md border border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <strong className="font-bold">{title}</strong>
      <span className="block">{description}</span>
    </div>
  );
}