import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Arrow = () => {
  // Define the path coordinates of the arrow

  const pathRef = useRef<SVGPathElement | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });
  useEffect(() => {
    const path = pathRef.current;
    if (isInView && path) {
      const length = path.getTotalLength();
      if (path.style) {
        path.style.opacity = "1";
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.style.animation = "draw 1s linear forwards";
      }
    }
  }, [isInView]);

  return (
    <svg
      className="w-64 h-64 sm:w-96 sm:h-96 absolute -top-16 -right-10 sm:top-32 sm:right-16"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      ref={ref}
    >
      <defs>
        <linearGradient id="SvgjsLinearGradient1003">
          <stop stopColor="hsl(277, 66%, 63%)" offset="0"></stop>
          <stop stopColor="hsl(245, 71%, 52%)" offset="1"></stop>{" "}
        </linearGradient>
      </defs>
      <g
        strokeWidth="15"
        stroke="url(#SvgjsLinearGradient1003)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(25, 400, 400)"
      >
        <path
          ref={pathRef}
          d="M176.2177734375 245.37613677978516Q774.2177734375 -48.623863220214844 573.2177734375 642.3761367797852 "
          markerEnd="url(#SvgjsMarker1907)"
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
            strokeWidth="1.6666666666666667"
            stroke="hsl(245, 71%, 52%)"
            strokeLinecap="round"
            transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
            strokeLinejoin="round"
          ></polyline>
        </marker>
      </defs>
    </svg>
  );
};

export default Arrow;
