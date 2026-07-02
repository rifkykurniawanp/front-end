"use client";

import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";
import type { HighlightItem } from "../types";
import { HighlightIcon } from "./HighlightIcon";

interface HighlightCardProps {
  item: HighlightItem;
  index: number;
}

export function HighlightCard({ item, index }: HighlightCardProps) {
  return (
    <ark.div
      className={cn(
        "group flex flex-col items-start gap-4",
        "p-6 md:p-7",
        "rounded-2xl",
        "bg-white/60 backdrop-blur",
        "border border-teal-100/60",
        "transition-all duration-300",

        // hover
        "hover:bg-white hover:shadow-lg hover:-translate-y-1"
      )}
      style={{ animationDelay: `${index * 120}ms` } as React.CSSProperties}
    >
      {/* ICON */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          "bg-teal-50 text-teal-600",
          "transition-all duration-300",
          "group-hover:bg-teal-600 group-hover:text-white"
        )}
      >
        <HighlightIcon name={item.icon} size={22} />
      </div>

      {/* TEXT */}
      <div className="space-y-2">
        <p className="text-lg font-semibold text-slate-900 leading-snug">
          {item.title}
        </p>

        <p className="text-sm leading-relaxed text-slate-600">
          {item.description}
        </p>
      </div>
    </ark.div>
  );
}