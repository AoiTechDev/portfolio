"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import ProjectSection from "@/components/common/ProjectSection/ProjectSection";
import { ProjectSectionType } from "@/types/types";

const Hero = ({
  title,
  stack,
  year,
  description,
  links,
  image,
  order,
}: ProjectSectionType) => {
  const router = useRouter();
  return (
    <ProjectSection
      title={title}
      stack={stack}
      year={year}
      description={description}
      links={links}
      image={image}
      order={order}
      back={
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <IoIosArrowBack className="text-xl" />
          <span>Back</span>
        </motion.div>
      }
    />
  );
};

export default Hero;
