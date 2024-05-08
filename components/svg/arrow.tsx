import React from "react";

const Arrow = () => {
  // Define the path coordinates of the arrow

  return (
    <svg
      className="w-64 h-64 sm:w-96 sm:h-96 absolute -top-16 -right-10 sm:top-32 sm:right-16"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient id="SvgjsLinearGradient1003">
          <stop stopColor="hsl(277, 66%, 63%)" offset="0"></stop>
          <stop stopColor="hsl(245, 71%, 52%)" offset="1"></stop>{" "}
        </linearGradient>
      </defs>
      <g
        stroke-width="15"
        stroke="url(#SvgjsLinearGradient1003)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="rotate(25, 400, 400)"
      >
        <path
          d="M176.2177734375 245.37613677978516Q774.2177734375 -48.623863220214844 573.2177734375 642.3761367797852 "
          marker-end="url(#SvgjsMarker1907)"
        ></path>
      </g>
      <defs>
        <marker
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          viewBox="0 0 10 10"
          orient="auto"
          id="SvgjsMarker1907"
        >
          <polyline
            points="0,5 5,2.5 0,0"
            fill="none"
            stroke-width="1.6666666666666667"
            stroke="hsl(245, 71%, 52%)"
            stroke-linecap="round"
            transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
            stroke-linejoin="round"
          ></polyline>
        </marker>
      </defs>
    </svg>
  );
};

export default Arrow;
