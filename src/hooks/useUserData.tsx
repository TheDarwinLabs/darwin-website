import { fetcher } from "@/lib/fetcher";
import { useQuery, useMutation } from "@tanstack/react-query";

interface Product {
  product: string;
  waitingQueueNum: number;
}

interface User {
  email: string;
  products: Product[];
}

export function useUserData() {
  return useQuery<User>({
    queryKey: ["user", "info"],
    queryFn: () => fetcher("/api/user"),
    staleTime: 5 * 1000,
    gcTime: 15 * 60 * 1000,
    retry: false,
  });
}
