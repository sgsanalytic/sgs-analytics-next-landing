import { useQuery } from "@tanstack/react-query";

export interface LottieQueryProps {
  lottieUrl: string;
}
export const useLottieQuery = ({ lottieUrl }: LottieQueryProps) => {
  const lottieQuery = useQuery({
    queryKey: ["lottie", lottieUrl],
    queryFn: async () => {
      const response = await fetch(lottieUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch lottie");
      }
      return response.json();
    },
    enabled: !!lottieUrl,
  });
  return {
    lottieQuery,
  };
};
