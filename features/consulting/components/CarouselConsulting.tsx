"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConsultingItem {
  id: string;
  title: string;
  content: string;
}

interface CarouselConsultingProps {
  items: ConsultingItem[];
}

export const CarouselConsulting = ({ items }: CarouselConsultingProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [progress, setProgress] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      const currentIndex = api.selectedScrollSnap();
      const totalSlides = api.scrollSnapList().length;
      const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
      setProgress(progressPercent);
    };

    // Initial progress
    updateProgress();

    // Listen to slide changes
    api.on("select", updateProgress);

    return () => {
      api.off("select", updateProgress);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent className="-ml-3 md:-ml-4">
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Card className="group h-full border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <CardHeader className="pb-3 pr-16">
                <CardTitle className="text-lg md:text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {item.content}
                </p>
              </CardContent>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-6 md:mt-8">
        <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" />

        {/* Progress Bar Indicator */}
        <div className="w-24 md:w-32 h-1 bg-border/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <CarouselNext className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
      </div>
    </Carousel>
  );
};
