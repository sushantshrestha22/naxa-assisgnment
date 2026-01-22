import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ServiceSortByOrder<T extends { service_order: number }>(
  data: T[],
): T[] {
  return data.sort((a, b) => a.service_order - b.service_order);
}
