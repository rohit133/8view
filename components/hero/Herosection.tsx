import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  /** optional image source; if omitted a simple placeholder box is shown */
  imageSrc?: string;
}

export function HeroSection({
  title,
  description,
  buttonText,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Hero image"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-200 h-64 w-full" />
          )}
        </div>
        {/* right half: text content */}
        <div className="lg:w-1/2 bg-[#2D4442] text-white flex flex-col justify-center p-12">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 mb-6 max-w-prose text-lg leading-relaxed">
            {description}
          </p>
          <button className="self-start rounded bg-white px-6 py-2 font-semibold text-teal-800 transition hover:bg-gray-100">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
