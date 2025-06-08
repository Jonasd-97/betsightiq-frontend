// components/ui/badge.jsx

export function Badge({ children, variant = "default", className }) {
  const baseStyle = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const variantStyle = variant === "outline"
    ? "border border-gray-300 text-gray-700"
    : "bg-blue-100 text-blue-800";

  return (
    <span className={`${baseStyle} ${variantStyle} ${className || ''}`}>
      {children}
    </span>
  );
}
