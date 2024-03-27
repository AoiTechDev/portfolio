import React from "react";
import dashboardMock from "@/assets/dashboard-desktop-mock.png";
import Image from "next/image";

const DashboardMock = () => {
  return (
    <div className="w-full h-[50%] lg:h-full relative my-32 lg:mt-32 flex justify-start items-start bg-gray-800   ">
      <Image
        fill
        src={dashboardMock}
        alt="mealfulness landing page"
        className="object-contain scale-100"
      />
    </div>
  );
};

export default DashboardMock;
