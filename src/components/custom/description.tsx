import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const descriptionVariants = cva("text-foreground leading-relaxed ", {
  variants: {
    variant: {
      default: "text-lg max-w-4xl text-foreground ",
      caption: "text-foreground capitalize text-sm sm:text-base max-w-2xl",
      small: "text-foreground text-base sm:text-lg max-w-3xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface DescriptionProps
  extends React.ComponentProps<"p">, VariantProps<typeof descriptionVariants> {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({
  className,
  children,
  variant = "default",
  ...props
}) => {
  return (
    <p className={cn(descriptionVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
};
