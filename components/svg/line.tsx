"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Line = () => {
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
    if (pathRef.current) {
      const bbox = pathRef.current.getBBox();
      const svg = pathRef.current.ownerSVGElement;
      if (svg) {
        const viewBoxX = bbox.x - (svg.viewBox.baseVal.width - bbox.width) / 2;
        const viewBoxY =
          bbox.y - (svg.viewBox.baseVal.height - bbox.height) / 2;

        svg.setAttribute(
          "viewBox",
          `${viewBoxX} ${viewBoxY} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`
        );
      }
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1000 300"
        
      >
        <path
          d="M32.9341320563218 33.532933652043994C151.49700144617367 36.12774413788384 742.9141424068671 37.12574777964816 744.3113483954331 49.101796567083056C745.7085543839992 61.077845354517954 49.900192694749535 91.41717157725559 41.317367987718285 105.38922637665337C32.734543280687035 119.36128117605115 683.233561631924 124.35129175547824 692.8144001532456 132.93412536346978C702.3952386745673 141.51695897146132 140.71857241480163 145.90818287893202 98.80239911564797 156.8862280246026C56.886225816494324 167.86427317027315 384.23153348454446 191.81636820201143 441.31736035832375 198.8023962374932 "
          fill="none"
          strokeWidth="15"
          stroke='url("#SvgjsLinearGradient1003")'
          strokeLinecap="round"
          className="path z-30"
          ref={pathRef}
        ></path>
        <defs>
          <linearGradient id="SvgjsLinearGradient1003">
            <stop stopColor="hsl(277, 66%, 63%)" offset="0"></stop>
            <stop stopColor="hsl(245, 71%, 52%)" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Line;
