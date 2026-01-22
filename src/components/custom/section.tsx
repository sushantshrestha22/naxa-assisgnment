import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
	children: React.ReactNode;
	className?: string;
}
export const Section: React.FC<SectionProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<section
			className={cn("pb-4 md:pb-8 pt-4 space-y-4 max-lg:text-center", className)}
			{...props}
		>
			{children}
		</section>
	);
};