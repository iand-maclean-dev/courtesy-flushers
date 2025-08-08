import React, { ButtonHTMLAttributes, forwardRef } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const stylesByVariant: Record<
  NonNullable<Props["variant"]>,
  React.CSSProperties
> = {
  primary: {
    background: "var(--color-primary)",
    color: "#fff",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-2) var(--space-4)",
  },
  secondary: {
    background: "var(--color-accent)",
    color: "#fff",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-2) var(--space-4)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-fg)",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-2) var(--space-3)",
  },
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{ ...stylesByVariant[variant], ...style }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
