import React from "react";

type BadgeVariants = "default" | "success" | "error" | "warning" | "info";

type BadgeSize = "small" | "medium";


interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariants;
  size?: BadgeSize;
};


const variantStyles : Record<BadgeVariants, string> = {
    default: "text-(--accent) bg-(--accent-bg)",
    success: "bg-green-300 text-green-800",
    error: "bg-red-300 text-red-800",
    warning: "bg-yellow-300 text-yellow-800",
    info: "bg-blue-300 text-blue-800",
};


const sizeStyles : Record<BadgeSize, string> = {
  small : "p-1.5 text-xs",
  medium : "p-1.5 text-sm",
};



function Badge ( { variant = "default", size= "medium", className, children, ...props } : BadgeProps ) {

  const styles = `inline-flex items-center rounded-full justify-center font-medium leading-none whitespace-nowrap
  ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`;

  // const classes = [
  //   "inline-flex",
  //   "items-center",
  //   "justify-center",
  //   "rounded-full",
  //   "whitespace-nowrap",
  //   "font-medium",
  //   "leading-none",
  //   variantStyles[variant],
  //   sizeStyles[size],
  //   className,
  // ]
  //   .filter(Boolean)
  //   .join(" ");




  return (
    <span className={styles} {...props}>
      {children}
    </span>
  );
}


export type {
  BadgeProps,
  BadgeVariants,
  BadgeSize
};


export {Badge};
