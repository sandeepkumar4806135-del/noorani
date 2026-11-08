/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - LAZY 3D MODEL VIEWER
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Loads Google's <model-viewer> web component dynamically ONLY if a valid
 * 3D model URL is provided in modelsConfig.heroModelUrl.
 * 
 * When heroModelUrl is empty (""), this component renders null and injects
 * zero external scripts.
 */

import React, { useEffect, useState } from "react";
import { modelsConfig } from "../../data/models";

interface ModelViewerProps {
  modelUrl?: string;
  posterUrl?: string;
  className?: string;
  alt?: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  modelUrl = modelsConfig.heroModelUrl,
  posterUrl = modelsConfig.posterUrl,
  className = "w-full h-80 rounded-md",
  alt = modelsConfig.alt
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // If no URL configured, render nothing
  if (!modelUrl) {
    return null;
  }

  useEffect(() => {
    // Only load model-viewer bundle if modelUrl is explicitly defined
    const scriptId = "google-model-viewer-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js";
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => {
      console.warn("Could not load model-viewer script from CDN");
    };
    document.head.appendChild(script);
  }, [modelUrl]);

  if (!isScriptLoaded) {
    return (
      <div className={`bg-[#FAF7F2] border border-[#E6DEC9] flex items-center justify-center ${className}`}>
        <span className="text-xs text-[#7E8578] font-mono">Loading 3D asset...</span>
      </div>
    );
  }

  // Type declaration for JSX custom element
  const ModelViewerElement = "model-viewer" as unknown as React.ElementType;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ModelViewerElement
        src={modelUrl}
        poster={posterUrl || undefined}
        alt={alt}
        auto-rotate
        camera-controls
        shadow-intensity={modelsConfig.shadowIntensity}
        exposure={modelsConfig.exposure}
        style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default ModelViewer;
