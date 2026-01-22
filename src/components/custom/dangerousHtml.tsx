import React from "react";
import { cn } from "@/lib/utils";

interface DangerousHtmlProps extends React.ComponentProps<"p"> {
  className?: string;
  data: string;
}

const DangerousHtmlComponent: React.FC<DangerousHtmlProps> = ({
  className = "",
  data,
}) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: data || "" }}
      className={cn(
        " mx-auto leading-20 text-foreground max-lg:text-center text-[.785rem] xl:text-base",
        className,
      )}
    />
  );
};

export default DangerousHtmlComponent;
