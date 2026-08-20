// components/ui/Button.tsx
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
};

export default function Button({ href, onClick, variant = "primary", children, className = "", }: ButtonProps) {
  const base = "inline-block px-3 py-2 md:px-5 md:py-3 rounded-lg text-sm font-semibold item-center  ";
  const styles =
    variant === "primary"
      ? "bg-accent-2 text-bg hover:bg-accent-2/70 border border-line "
      : "border border-line text-ink hover:border-accent-2";
    const classes = `${base} ${styles} ${className}`;
  

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}