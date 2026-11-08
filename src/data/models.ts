/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - OPTIONAL 3D MODEL ASSET CONFIGURATION
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Optional 3D Model Slot (PREPARED BUT OFF BY DEFAULT).
 * 
 * To activate 3D interactive model preview:
 * 1. Obtain a verified, photorealistic .glb / .gltf 3D model of a dish
 *    (e.g. authentic Mughlai biryani or tandoori handi).
 * 2. Ensure the 3D model has a commercial or permissive license allowing web distribution.
 * 3. Place the file in /public/assets/models/dish.glb or host it on a fast CDN.
 * 4. Set heroModelUrl below to the model path (e.g. "/assets/models/biryani.glb").
 * 
 * When heroModelUrl is empty (""), ModelViewer renders nothing, and no external
 * scripts or heavy 3D runtimes are loaded. The website is completely functional
 * and visually rich without it.
 */

export interface ModelConfig {
  heroModelUrl: string;
  posterUrl?: string;
  alt: string;
  exposure: number;
  shadowIntensity: number;
}

export const modelsConfig: ModelConfig = {
  // Empty by default: keeps website ultra-fast and prevents loading external 3D libraries
  heroModelUrl: "",
  posterUrl: "",
  alt: "Interactive 3D model of Noorani specialty dish",
  exposure: 1.0,
  shadowIntensity: 1.2
};

export default modelsConfig;
