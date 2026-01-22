import { Container } from "@/components/custom/container";
import DangerousHtmlComponent from "@/components/custom/dangerousHtml";
import { Heading } from "@/components/custom/heading";
import type { Service } from "@/lib/types/types";

interface ServiceSectionProps {
  data: Service;
  swipe?: boolean;
}

const ServiceSection = ({ data, swipe }: ServiceSectionProps) => {
  return (
    <div>
      <Container className="place-items-center grid lg:grid-cols-2 gap-10 px-10">
        <Container className={`space-y-6 max-lg:order-2 max-lg:place-items-center max-xl:px-10 ${swipe ? "order-2" : ""}`}>
          <img
            src={`${data?.photo}`}
            alt={data?.title}
            className="aspect-square w-13"
          />
          <Heading title={data?.title} variant="h4" />
          <DangerousHtmlComponent data={data?.description1} />
          <div className="bg-card  max-lg:max-w-md mx-auto p-6">
            <DangerousHtmlComponent data={data?.description2} />
          </div>
        </Container>
        <section className={`max-lg:order-1 ${swipe ? "order-1" : ""}`}>
          <img src={`${data?.icon}`} alt={data?.title} className="w-lg" />
        </section>
      </Container>
    </div>
  );
};

export default ServiceSection;
