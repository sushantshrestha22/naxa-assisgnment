import { Container } from "@/components/custom/container";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceSkeleton = () => {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2  gap-10">
      <Skeleton className="h-full w-full" />
      <section className="space-y-4 w-full">
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-40" />
      </section>
    </Container>
  );
};

export default ServiceSkeleton;
