import {
  Stethoscope,
  HeartPulse,
  CalendarCheck,
  ShieldCheck,
  BookOpen,
  Building2,
  LucideProps,
} from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  "calendar-check": CalendarCheck,
  "shield-check": ShieldCheck,
  "book-open": BookOpen,
  "building-2": Building2,
};

interface HighlightIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function HighlightIcon({
  name,
  className,
  size = 24,
}: HighlightIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return (
    <Icon
      size={size}
      className={cn("stroke-current", className)}
      strokeWidth={1.75}
    />
  );
}