"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef, type HTMLAttributes } from "react";
import type { ComponentProps } from "react";

interface CardProps extends Omit<ComponentProps<typeof motion.div>, 'children'> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-gray-200 shadow-sm",
      glass: "bg-white/10 backdrop-blur-lg border border-white/20",
      gradient: "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          variants[variant],
          hover && "hover:shadow-lg hover:shadow-gray-500/20",
          className
        )}
        whileHover={hover ? { y: -4 } : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold text-gray-900", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-gray-600", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };