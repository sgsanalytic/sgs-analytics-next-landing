"use client";
import { LottieView } from "./LottieView";
import { useLottieQuery } from "../hooks";

export const LottieCustomProyecjt = (
  props: React.HTMLAttributes<HTMLDivElement> = {}
) => {
  const { lottieQuery } = useLottieQuery({
    lottieUrl: "/Lotties/project_config.json",
  });

  const { data: animationData, isLoading, isError, error } = lottieQuery;

  return (
    <LottieView
      {...props}
      animationData={animationData}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};
