"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Brain, Shield } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroModernProps {
  badge?: string;
  heading: string;
  subheading?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
}

const HeroModern = ({
  badge = "Custom Digital Solutions",
  heading = "Better Tools. Better Medicine.",
  subheading = "Healthcare IT built for clinical reality",
  imageSrc = "/images/hero-illustration.jpg",
  imageAlt = "Healthcare digitalization",
  features = [
    {
      icon: <Brain className="h-auto w-5" />,
      title: "Clinical Understanding",
      description:
        "Built by physicians and engineers who understand the real complexity of healthcare practice.",
    },
    {
      icon: <Shield className="h-auto w-5" />,
      title: "Privacy by Design",
      description:
        "GDPR and Swiss nDSG compliance baked in from day one, not retrofitted at the end.",
    },
    {
      icon: <Activity className="h-auto w-5" />,
      title: "Sustainable Solutions",
      description:
        "Systems built to last, maintained over time, and designed to evolve with your needs.",
    },
  ],
}: HeroModernProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    // Animate heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate features with stagger
    const visibleFeatures = featuresRef.current.filter(Boolean);
    if (visibleFeatures.length > 0) {
      gsap.from(visibleFeatures, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: visibleFeatures[0],
          start: "top 75%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto overflow-hidden">
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <Badge variant="outline">{badge}</Badge>
          <h1
            ref={headingRef}
            className="heading-display max-w-4xl text-4xl md:text-5xl lg:text-6xl"
          >
            {heading}
          </h1>
          {subheading && (
            <p className="max-w-2xl text-lg text-muted md:text-xl">
              {subheading}
            </p>
          )}
        </div>

        <div ref={imageRef} className="relative mx-auto max-w-screen-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[500px] w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl"></div>
          {/* Decorative dot patterns */}
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-12 flex max-w-screen-lg flex-col md:flex-row md:mt-16">
          {features.map((feature, index) => (
            <div key={index}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                ref={(el) => {
                  if (el) featuresRef.current[index] = el;
                }}
                className="flex grow basis-0 flex-col rounded-lg bg-light-bg p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal text-cream">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold text-dark">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroModern };
