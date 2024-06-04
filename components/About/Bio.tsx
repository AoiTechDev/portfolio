"use client";
import codding from "@/assets/codding.png";
import { useLocaleFromStorage } from "@/hooks/useLocaleFromStorage";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import GradientText from "../common/effects/gradient-text";
import MotionComponent from "../common/motion/MotionComponent";
import { WobbleCard } from "../ui/wobble-card";

const Bio = () => {
  const { t } = useTranslation();
  
  
  const locale = useLocaleFromStorage();

  return (
    
    <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center">
      <div className="order-2 lg:order-1  flex-1 gap-10 flex h-full flex-col">
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[240px] bg-grid-white/[0.05]  flex justify-start items-center     rounded-2xl">
          {/* <RadialBlur /> */}
          <MotionComponent className="pl-4">
            <p className="text-2xl sm:text-3xl font-semibold text-balance text-start">
              {locale === "en" ? (
                <>
                  {t("about:tech")}{" "}
                  <GradientText text={t("about:enthusiast")} />{" "}
                </>
              ) : (
                <>
                  <GradientText text={t("about:enthusiast")} />{" "}
                  {t("about:tech")}
                </>
              )}{" "}
              {t("about:tect_passion")}
            </p>
          </MotionComponent>
        </WobbleCard>
        <WobbleCard className=" h-full min-h-[180px] sm:min-h-[240px] rounded-2xl  relative bg-grid-white/[0.05]">
          {/* <RadialBlur /> */}
          <MotionComponent className="space-y-2 pl-4">
            <p className="opacity-70 uppercase font-mono">{t("about:scoop")}</p>
            <p className="text-2xl sm:text-3xl  font-semibold  text-start bottom-4 left-4 text-balance">
              {t("about:matchmaking")}{" "}
              <GradientText text={t("about:hackathon")} />
            </p>
          </MotionComponent>
        </WobbleCard>
      </div>
      <div className="order-1 rounded-2xl overflow-hidden relative lg:order-2   flex justify-center items-center">
        <MotionComponent className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10">
          <p className="text-2xl sm:text-3xl  font-semibold  text-start  text-balance">
            {t("about:priority1")} <GradientText text={t("about:colab")} />{" "}
            {t("about:priority2")}{" "}
            <GradientText text={t("about:communication")} />
          </p>
        </MotionComponent>
        <Image src={codding} alt="" className=" " />
      </div>
    </div>
  );
};

export default Bio;
 