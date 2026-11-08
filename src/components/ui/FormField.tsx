/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  min?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  children?: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 3,
  min,
  error,
  required = false,
  helpText,
  children,
  className = ""
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-[#353A32] flex items-center justify-between"
      >
        <span>
          {label}
          {required && <span className="text-[#C52C24] ml-1">*</span>}
        </span>
      </label>

      {children ? (
        children
      ) : multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="w-full bg-white border border-[#DCD3C0] rounded-md px-3.5 py-2.5 text-base sm:text-sm text-[#1F241C] placeholder-[#8A9184] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          required={required}
          className="w-full bg-white border border-[#DCD3C0] rounded-md px-3.5 py-2.5 text-base sm:text-sm text-[#1F241C] placeholder-[#8A9184] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
        />
      )}

      {error ? (
        <p className="text-xs text-[#C52C24] font-medium mt-0.5" role="alert">
          {error}
        </p>
      ) : helpText ? (
        <p className="text-[11px] text-[#71776D] mt-0.5">{helpText}</p>
      ) : null}
    </div>
  );
};

export default FormField;
