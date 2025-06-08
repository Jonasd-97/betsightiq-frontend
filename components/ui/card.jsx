// components/ui/card.jsx

export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border bg-white p-6 shadow-md ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="mb-4 border-b pb-2 font-bold text-xl">
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return (
    <h2 className="text-2xl font-semibold mb-2">
      {children}
    </h2>
  );
}

export function CardContent({ children }) {
  return (
    <div className="text-gray-700">
      {children}
    </div>
  );
}

export function CardDescription({ children }) {
  return (
    <p className="text-gray-500 text-sm">
      {children}
    </p>
  );
}
