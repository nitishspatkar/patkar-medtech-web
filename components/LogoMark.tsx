export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="12"
        cy="16"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        className="text-pdl-accent"
      />
      <rect
        x="14"
        y="7"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        className="text-pdl-accent-2"
      />
    </svg>
  );
}
