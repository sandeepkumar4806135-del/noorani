/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-md";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 min-h-[40px] sm:min-h-[36px] gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] gap-2",
    lg: "text-base px-6 py-3.5 min-h-[48px] gap-2.5 font-semibold"
  }[size];

  const variantClasses = {
    // Primary warm chili red button
    primary:
      "bg-[#C52C24] hover:bg-[#A9221A] text-white shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#C52C24]",
    // Deep restaurant green button
    secondary:
      "bg-[#15472A] hover:bg-[#0E341F] text-white shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#15472A]",
    // Rich gold button
    gold:
      "bg-[#D49B28] hover:bg-[#B9841C] text-[#141715] font-semibold shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#D49B28]",
    // Outline green
    outline:
      "border border-[#15472A] text-[#15472A] hover:bg-[#15472A] hover:text-white transition-colors focus-visible:outline-[#15472A]",
    // Outline light (for dark sections)
    "outline-light":
      "border border-[#FAF7F2]/40 text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#141715] transition-colors focus-visible:outline-[#FAF7F2]",
    // Subtle ghost
    ghost:
      "text-[#15472A] hover:bg-[#15472A]/10 active:bg-[#15472A]/15 focus-visible:outline-[#15472A]"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal && !href.startsWith("tel:") && !href.startsWith("mailto:") ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
