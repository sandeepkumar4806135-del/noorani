/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - FLAT GARNISH & SPICE SVG ILLUSTRATIONS
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Clean, flat vector garnishes in restaurant palette:
 * Red chili (#C52C24), mint leaf (#15472A), cardamom (#6E8B3D),
 * star anise (#8C4A2F), cinnamon stick (#A0522D), lemon wedge (#E8C872),
 * and curry leaf (#1E613A).
 */

import React from "react";

export const RedChiliSVG: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M24 16C32 20 34 26 31 34C28 42 22 55 24 67C26 78 35 86 46 88C56 90 64 83 69 74C74 65 72 52 68 41C64 30 58 20 48 14C44 11 36 9 32 10"
      stroke="#1E613A"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* Chili stem */}
    <path
      d="M30 14C24 10 18 11 12 14"
      stroke="#1E613A"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Chili body */}
    <path
      d="M32 22C42 28 54 36 60 48C66 60 67 72 61 80C55 88 45 88 38 82C31 76 28 66 28 54C28 42 30 30 32 22Z"
      fill="#C52C24"
    />
    {/* Chili highlight */}
    <path
      d="M37 32C42 40 46 50 46 62"
      stroke="#E85E56"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

export const MintLeafSVG: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M18 82C18 82 22 54 42 36C62 18 84 16 84 16C84 16 82 38 64 58C46 78 18 82 18 82Z"
      fill="#15472A"
    />
    <path
      d="M18 82C36 68 56 46 84 16"
      stroke="#E8C872"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* Secondary veins */}
    <path d="M40 60C48 56 56 58 56 58" stroke="#E8C872" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M52 48C60 44 68 46 68 46" stroke="#E8C872" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const CardamomSVG: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 12C36 28 32 50 38 72C42 86 50 90 50 90C50 90 58 86 62 72C68 50 64 28 50 12Z"
      fill="#5E7D37"
    />
    {/* Cardamom pod ribs */}
    <path d="M50 14V88" stroke="#D49B28" strokeWidth="2.5" opacity="0.75" />
    <path d="M42 28C40 45 42 62 46 78" stroke="#466025" strokeWidth="2" />
    <path d="M58 28C60 45 58 62 54 78" stroke="#466025" strokeWidth="2" />
    <circle cx="50" cy="12" r="3" fill="#D49B28" />
  </svg>
);

export const StarAniseSVG: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="#7A3F24" stroke="#D49B28" strokeWidth="1.5">
      {/* 8-point botanical star */}
      <path d="M50 50L50 18C47 24 45 34 50 50Z" />
      <path d="M50 50L73 27C67 32 59 38 50 50Z" />
      <path d="M50 50L82 50C76 47 66 45 50 50Z" />
      <path d="M50 50L73 73C68 67 62 59 50 50Z" />
      <path d="M50 50L50 82C53 76 55 66 50 50Z" />
      <path d="M50 50L27 73C33 68 41 62 50 50Z" />
      <path d="M50 50L18 50C24 53 34 55 50 50Z" />
      <path d="M50 50L27 27C32 33 38 41 50 50Z" />
    </g>
    {/* Center seed pod core */}
    <circle cx="50" cy="50" r="8" fill="#582C18" stroke="#D49B28" strokeWidth="2" />
    <circle cx="50" cy="30" r="3" fill="#D49B28" />
    <circle cx="70" cy="50" r="3" fill="#D49B28" />
    <circle cx="50" cy="70" r="3" fill="#D49B28" />
    <circle cx="30" cy="50" r="3" fill="#D49B28" />
  </svg>
);

export const CinnamonStickSVG: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="rotate(-30 50 50)">
      <rect x="22" y="42" width="56" height="16" rx="4" fill="#8C4A28" />
      <path d="M22 46H78" stroke="#A95F37" strokeWidth="2" />
      <path d="M22 52H78" stroke="#5A2E16" strokeWidth="2" />
      <ellipse cx="23" cy="50" rx="3" ry="8" fill="#5A2E16" stroke="#D49B28" strokeWidth="1" />
    </g>
  </svg>
);

export const LemonWedgeSVG: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Rind */}
    <path
      d="M20 70C20 40 45 18 75 18V70H20Z"
      fill="#D49B28"
    />
    {/* Pith inner curve */}
    <path
      d="M26 66C26 42 46 24 71 24V66H26Z"
      fill="#FAF7F2"
    />
    {/* Pulp Segments */}
    <path d="M32 62C34 50 44 38 66 30V62H32Z" fill="#F4CA44" />
    {/* Segment dividers */}
    <path d="M66 62L42 38" stroke="#FAF7F2" strokeWidth="2.5" />
    <path d="M66 62L52 32" stroke="#FAF7F2" strokeWidth="2" />
    <path d="M66 62L36 50" stroke="#FAF7F2" strokeWidth="2" />
  </svg>
);

export const CurryLeafSVG: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 80C30 65 35 45 50 30C65 15 80 12 80 12C80 12 75 28 60 45C45 62 20 80 20 80Z"
      fill="#1A5C34"
    />
    <path
      d="M20 80C36 62 55 40 80 12"
      stroke="#D49B28"
      strokeWidth="2"
      opacity="0.6"
    />
  </svg>
);
