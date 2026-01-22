export type fetchOptionType = {
  path: string;
  queryKey?: string;
  queryKeyID?: string;
  enabled?: boolean;
  retry?: boolean;
};

export interface Service {
  id: number;
  title: string;
  description1: string;
  description2: string;
  photo: string;
  icon: string;
  service_order: number;
}
