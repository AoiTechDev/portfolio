import React from "react";

const GradientText = ({ text }: { text: string }) => {
  return <span className="bg-gradient-to-r text-nowrap from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text">{text}</span>;
};

export default GradientText;
