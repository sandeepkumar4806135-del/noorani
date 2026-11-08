/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full"
  }[size];

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
