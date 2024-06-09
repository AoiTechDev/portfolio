"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { scaleLog } from "@visx/scale";
import { Text } from "@visx/text";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useTranslation } from "react-i18next";
import GradientText from "./common/effects/gradient-text";
import RadialBlur from "./common/effects/radial-blur";
import MotionComponent from "./common/motion/MotionComponent";
import { colors, totoAfricaLyrics } from "@/constants/words";

export interface WordData {
  text: string;
  value: number;
}

const Technologies = () => {
  const isSmallScreen = useMediaQuery(768);
  function wordFreq(text: string): WordData[] {
    const words: string[] = text.replace(/\./g, "").split(/\s/);
    const freqMap: Record<string, number> = {};

    for (const w of words) {
      if (!freqMap[w]) freqMap[w] = 0;
      freqMap[w] += 1;
    }
    return Object.keys(freqMap).map((word) => ({
      text: word,
      value: freqMap[word],
    }));
  }

  const words = wordFreq(totoAfricaLyrics);

  const fontScale = scaleLog({
    domain: [
      Math.min(...words.map((w) => w.value)),
      Math.max(...words.map((w) => w.value)),
    ],
    range: isSmallScreen ? [10, 70] : [10, 130],
  });
  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

  const fixedValueGenerator = () => 0.5;

  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="w-full max-w-7xl min-h-[80dvh] mx-auto relative sm:pt-24 text-white mt-32"
    >
      <div className="relative max-w-3xl mx-auto bg-grid-white/[0.05] py-8">
        <RadialBlur />

        <MotionComponent>
          <h2 className="text-center  w-full font-semibold text-6xl relative lg:text-[120px]">
            {t("skills:header")}
            {/* <Arrow /> */}
          </h2>
        </MotionComponent>

        <MotionComponent className="mt-10">
          <p className="text-balance text-center w-full max-w-2xl mx-auto brightness-110 px-4">
            {t("skills:use")} <GradientText text={t("skills:various")} />{" "}
            {t("skills:build")}
          </p>
        </MotionComponent>
      </div>
      <div className="wordcloud max-w-5xl mx-auto mt-10 w-full flex justify-center bg-grid-white/[0.1] items-center relative z-0">
        <RadialBlur className="z-20" />
        <RadialBlur className="z-20" />

        <Wordcloud
          words={words}
          width={isSmallScreen ? 360 : 1000}
          height={isSmallScreen ? 400 : 800}
          fontSize={fontSizeSetter}
          font={"Impact"}
          padding={2}
          spiral="archimedean"
          rotate={0}
          random={fixedValueGenerator}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <Text
                className="brightness-150"
                key={w.text}
                fill={colors[i % colors.length]}
                textAnchor={"middle"}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      </div>
    </section>
  );
};

export default Technologies;
