import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getContactInfo } from "../utils/constants/contact.constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const OurContact = () => {
  const t = useTranslations('contact');
  const contactInfo = getContactInfo(t);
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {t('description')}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <Card
                key={contact.id}
                className="group relative h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <CardHeader>
                  {/* Icon Container */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary/20 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {contact.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm md:text-base mb-3">
                    {contact.description}
                  </CardDescription>
                  <Link
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {contact.value}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
