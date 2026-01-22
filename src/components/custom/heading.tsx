import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-3xl sm:text-4xl font-bold tracking-wider text-foreground max-lg:text-center",
  {
    variants: {
      variant: {
        default:
          "text-3xl sm:text-4xl font-bold tracking-wider mb-6",
        h1: "text-5xl sm:text-6xl font-extrabold tracking-wider text-xl",
        h2: "text-4xl sm:text-5xl font-extrabold tracking-wider",
        h4: "text-2xl xl:text-3xl font-semibold",
        h5: "text-xl xl:text-2xl font-semibold tracking-normal",
        h6: "text-sm sm:text-base font-semibold tracking-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface HeadingProps
  extends React.ComponentProps<"h2">, VariantProps<typeof headingVariants> {
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  title,
  variant = "default",
  ...props
}) => {
  const Tag =
    variant === "h1"
      ? "h1"
      : variant === "h2"
        ? "h2"
        : variant === "default"
          ? "h3"
          : variant === "h4"
            ? "h4"
            : variant === "h5"
              ? "h5"
              : variant === "h6"
                ? "h6"
                : "h2";
  return (
    <Tag className={cn(headingVariants({ variant, className }))} {...props}>
      {title}
    </Tag>
  );
};
