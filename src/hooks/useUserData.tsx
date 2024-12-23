import { fetcher } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";

interface Product {
  product: string;
  waitingQueueNum: number;
}

export interface User {
  email: string;
  inviteCode: string;
  products: Product[];
}

export function useUserData() {
  return useQuery<User>({
    queryKey: ["user", "info"],
    queryFn: () => fetcher("/api/user"),
    staleTime: 5 * 1000,
    gcTime: 5 * 1000,
    retry: false,
  });
}
