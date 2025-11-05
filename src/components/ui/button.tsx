import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
};

export function Button({ asChild, href, className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-2xl shadow-sm text-sm font-semibold transition";
  const brand =
    "bg-modera-gold text-modera-green hover:brightness-95 disabled:opacity-60";

  if (asChild && href && React.isValidElement(children)) {
    // Clone anchor child and merge classes
    return React.cloneElement(children as React.ReactElement, {
      href,
      className: `${base} ${brand} ${className} ${(children as any).props?.className || ""}`
    });
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${brand} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${brand} ${className}`} {...props}>
      {children}
    </button>
  );
}
