import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { queryKey } from "../../lib/enums/enum";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setServices } from "../../features/serviceSlice";
import ServiceSection from "@/components/pages/service/serviceSection";
import { Container } from "@/components/custom/container";
import ServiceSkeleton from "@/components/common/skeleton/service_skeleton";

const ServicePage = () => {
  const serviceData = useSelector((state: RootState) => state.service.services);
  const dispatch = useDispatch();

  const { data, refetch, isFetching, isLoading } = useFetch({
    path: `/api/${queryKey.SERVICES}`,
    queryKey: queryKey.SERVICES,
  });

  useEffect(() => {
    if (!isFetching && !isLoading && data) {
      dispatch(setServices(data));
    }
  }, [isFetching, isLoading]);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading || isFetching) {
    return <ServiceSkeleton />;
  }

  return (
    <Container className="space-y-20 py-20">
      {serviceData.map((service, idx) => (
        <ServiceSection key={service.id} data={service} swipe={idx % 2 === 0} />
      ))}
    </Container>
  );
};

export default ServicePage;
