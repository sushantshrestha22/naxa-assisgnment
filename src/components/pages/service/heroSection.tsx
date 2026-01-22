import { Container } from "@/components/custom/container";
import { Description } from "@/components/custom/description";
import { Heading } from "@/components/custom/heading";

const HeroSection = () => {
  return (
    <section className="relative min-h-100 sm:min-h-150 h-full top-0 right-0 bg-[url(/service_hero_bg.jpg)] bg-cover xl:bg-contain bg-right bg-no-repeat place-content-center py-10">
      <div className="bg-linear-to-r max-lg:hidden from-white via-white to-transparent absolute inset-0 h-full"></div>
      <Container className="h-full relative z-10 flex flex-col place-content-start space-y-6 ">
        <Heading
          variant="h6"
          title="Services"
          className="max-lg:text-start text-muted uppercase"
        />
        <Description
          variant="default"
          className="max-w-4xl text-4xl xl:text-5xl text-start tracking-normal leading-snug"
        >
          At<span className="text-primary"> NAXA</span>, we work on{" "}
          <span className="text-primary"> ideas</span>; ideas that can provide
          <span className="text-primary"> simple solutions</span> to
          <span className="text-primary"> complex problems</span>.
        </Description>
        <Description variant="small" className="font-semibold leading-relaxed">
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </Description>
      </Container>
    </section>
  );
};

export default HeroSection;
