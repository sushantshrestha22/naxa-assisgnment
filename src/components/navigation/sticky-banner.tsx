import { ArrowRight } from "lucide-react";

const StickBanner = () => {
  return (
    <div className="bg-accent  leading-relaxed tracking-normal text-center h-10 place-content-center  font-semibold  transition-transform flex items-center justify-center space-x-2">
      <section className="text-center max-sm:text-xs text-sm flex gap-2 items-center w-auto group  hover:text-primary underline">
        Check out our pioneering GEO AI and product for intelligent geospatial
        solutions!
        <ArrowRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-in-out inline-block" />
      </section>
    </div>
  );
};

export default StickBanner;
