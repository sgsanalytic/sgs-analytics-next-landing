"use client";
import React from "react";
import { useLottie } from "lottie-react";
import { Loader2 } from "lucide-react";

export interface LottieViewProps extends React.HTMLAttributes<HTMLDivElement> {
  animationData?: Record<string, unknown> | null;
  isLoading?: boolean;
  isError?: boolean;
  error?: Error | null;
}

export const LottieView = ({
  animationData,
  isLoading = false,
  isError = false,
  error = null,
  className = "",
  ...props
}: LottieViewProps) => {
  const { View } = useLottie(
    {
      animationData: animationData || {},
      loop: true,
    },
    {
      height: "100%",
      width: "100%",
    }
  );

  if (isError) {
    return (
      <div
        {...props}
        className={`flex items-center justify-center text-muted-foreground w-full h-full ${className}`}
      >
        <p>
          Error al cargar la animación:{" "}
          {error instanceof Error ? error.message : "Error desconocido"}
        </p>
      </div>
    );
  }

  if (isLoading || !animationData) {
    return (
      <div
        {...props}
        className={`flex items-center justify-center w-full h-full ${className}`}
      >
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div {...props} className={`w-full h-full ${className}`}>
      {View}
    </div>
  );
};
