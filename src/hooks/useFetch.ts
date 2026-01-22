import { useQuery } from "@tanstack/react-query";
import { useAxios } from "./useAxios";
import type { fetchOptionType } from "../lib/types/types";

export const useFetch = (options: fetchOptionType) => {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: options.queryKeyID
      ? [options.queryKey, options.queryKeyID]
      : [options.queryKey],
    queryFn: async () => {
      const response = await axiosInstance.get(options.path);
      return response?.data;
    },
    enabled: options?.enabled ?? true,
    retry: options?.retry ?? 3,
  });
};
