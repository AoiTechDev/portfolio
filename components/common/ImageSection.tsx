"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const ImageSection = ({
  src,
  alt,
  width,
  height,
  className,
  index,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? 100 : -100 }
      }
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      ref={ref}
      className={cn(
        "lg:flex-1 px-6 lg:px-8 flex justify-center items-center ",
        className
      )}
    >
      <div className="mt-16 flow-root lg:mt-24">
        <div className="-m-2 rounded-xl bg-slate-50/5 p-2 ring-1 ring-inset ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            quality={100}
            className="rounded-lg bg-white p-2 lg:p-8  shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSection;
