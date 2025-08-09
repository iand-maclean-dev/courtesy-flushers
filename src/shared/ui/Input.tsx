import React, { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

const base: React.CSSProperties = {
  display: "block",
  width: "100%",
  borderRadius: "var(--radius-md)",
  border: "1px solid var(--color-border)",
  padding: "var(--space-2) var(--space-3)",
  color: "var(--color-fg)",
  background: "var(--whiteColor, #fff)",
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ invalid = false, style, ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={invalid}
        style={{
          ...base,
          borderColor: invalid ? "#ef4444" : "var(--color-border)",
          ...(style || {}),
        }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
