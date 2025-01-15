"use client";

export const runtime = "edge";

import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fetcher } from "@/lib/fetcher";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetcher("/api/user/logout", {
        method: "POST",
      });

      return response;
    },
    onSuccess: async () => {
      // await queryClient.invalidateQueries({
      //   queryKey: ["user", "info"],
      // });
      // logout();
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });
  const onLogout = () => {
    logoutMutation.mutate();
    Cookies.remove("token");
    logout();
  };
  return (
    <div className="w-full max-w-[1020px] mx-auto">
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] px-2 py-4 sm:p-7 text-sm sm:text-[17px] flex flex-col gap-9">
        <div className="flex sm:gap-[53px] items-center">
          <span className="w-[144px]">Email Address</span>
          <span>{user?.email}</span>
        </div>
        <Link
          href="/account/resetPwd"
          className="flex sm:gap-[53px] items-center"
        >
          <span className="w-[144px]">Passwords</span>
          <span className="flex-1 text-left ">******</span>
          <SvgIcon name="right"></SvgIcon>
        </Link>
      </div>
      <Button
        variant="ghost"
        className="underline mx-auto block mt-10 text-[17px] hover:bg-transparent "
        onClick={onLogout}
        disabled={logoutMutation.isPending}
      >
        Sign out
      </Button>
    </div>
  );
}
