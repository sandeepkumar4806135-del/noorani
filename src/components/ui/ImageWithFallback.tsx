/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Utensils } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  aspectRatioClass?: string; // e.g., 'aspect-[16/9]', 'aspect-[4/3]', 'aspect-square'
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  aspectRatioClass = "aspect-[4/3]",
  priority = false,
  className = "",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#F4EFE6] border border-[#E8DFC9] flex flex-col items-center justify-center p-4 text-center rounded-sm overflow-hidden select-none`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-full bg-[#15472A]/10 flex items-center justify-center text-[#15472A] mb-2">
          <Utensils className="w-5 h-5 opacity-80" />
        </div>
        <p className="font-serif text-xs font-semibold text-[#15472A] line-clamp-1">
          {fallbackTitle || alt || "Noorani Restaurant"}
        </p>
        <span className="text-[10px] text-[#7A8075] mt-0.5">Family Dining & Kitchen</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full ${aspectRatioClass} bg-[#F4EFE6] rounded-sm`}>
      {/* Soft skeleton placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F4EFE6] animate-pulse flex items-center justify-center">
          <Utensils className="w-6 h-6 text-[#15472A]/20" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
