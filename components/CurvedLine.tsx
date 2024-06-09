"use client";
import React from "react";

const CurvedLine = () => {
  return (
    <div className="w-full min-h-[40vh]  flex justify-center items-center">
      <svg
        height="325"
        viewBox="0 0 1898 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_7_29"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1898"
          height="325"
        >
          <rect width="1898" height="325" fill="url(#paint0_linear_7_29)" />
        </mask>
        <g mask="url(#mask0_7_29)">
          <g filter="url(#filter0_f_7_29)">
            <path
              d="M54 211C720.809 10.763 1110.32 10.6599 1850.5 211"
              stroke="url(#paint1_linear_7_29)"
              stroke-width="29"
              stroke-linecap="round"
            />
          </g>
          <path
            d="M54 247.216C720.809 46.9795 1110.32 46.8763 1850.5 247.216"
            stroke="#151515"
            stroke-width="51"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_7_29"
            x="5.19616"
            y="11.9836"
            width="1894.11"
            height="247.82"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="17.15"
              result="effect1_foregroundBlur_7_29"
            />
          </filter>
          <linearGradient
            id="paint0_linear_7_29"
            x1="0"
            y1="162.5"
            x2="1898"
            y2="162.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.495" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_7_29"
            x1="952.25"
            y1="60.7836"
            x2="952.25"
            y2="211"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A855F7" />
            <stop offset="1" stop-color="#0038FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CurvedLine;
