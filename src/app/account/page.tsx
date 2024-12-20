"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SvgIcon from "@/components/SvgIcon";
import { cn, productList } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/providers/ReactQueryProvider";
import { useAuth } from "@/providers/AuthProvider";
import { fetcher } from "@/lib/fetcher";
import { useToast } from "@/hooks/use-toast";
import CopyToClipboard from "@/components/copyToClipboard";

const tabs = [
  { title: "Dashboard", icon: "app", component: Dashboard },
  { title: "Settings", icon: "setting", component: Settings },
  { title: "Terms", icon: "terms", link: "/terms" },
  { title: "Services", icon: "file-check", link: "" },
  { title: "Documentation", icon: "app" },
];

const Account = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  const [active, setActive] = useState(0);
  const ActiveComponent = tabs[active]?.component;

  const onTabClick = (index: number) => {
    if (tabs[index].link) {
      router.push(tabs[index].link);
      return;
    }
    setActive(index);
  };

  if (loading) return;

  return (
    <>
      <Header olnyLogo />
      <div className="w-full min-h-screen flex flex-col pt-[96px]  px-5 md:px-0 ">
        <div className="flex-1 flex gap-7 pb-[88px]">
          <div className="hidden flex-col sm:flex sm:w-[90px] md:w-[260px] lg:w-[380px] xl:w-[560px] text-[17px] py-1">
            {tabs.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "flex py-5 pr-4 justify-end gap-2 rounded-tr-xl rounded-br-xl cursor-pointer",
                  active === index ? "bg-[#FFDEBD]" : ""
                )}
                onClick={() => onTabClick(index)}
              >
                <SvgIcon name={item.icon}></SvgIcon>
                <div className="w-[150px] hidden md:block">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 sm:pr-[43px]">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

function Dashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [inviteCode, setInviteCode] = useState("");

  const inviteUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${location.origin}?m=${inviteCode}`;
    }
    return ``;
  }, [inviteCode]);

  const joinMutation = useMutation({
    mutationFn: async (product: string) => {
      const response = await fetcher<{ queueNum: number; inviteCode: string }>(
        "/api/user/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product }),
        }
      );

      return response;
    },
    onSuccess: async (res) => {
      await queryClient.invalidateQueries({
        queryKey: ["user", "info"],
      });
      setInviteCode(res.inviteCode);
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const onClickItem = (item: { href: string; product: string }) => {
    if (user?.email) {
      joinMutation.mutate(item.product);
    }
  };
  return (
    <div className="">
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] p-5 text-[17px] flex gap-2 items-center">
        <div className="bg-[#d49e80] rounded-full w-[46px] h-[46px] flex items-center justify-center uppercase">
          {user?.email.substring(0, 1)}
        </div>
        <span className="flex-1">{user?.email}</span>
      </div>
      <div className="text-[28px] font-medium mt-8 mb-5">Your Application</div>
      <div className="flex gap-6 flex-col sm:flex-row">
        {productList.map((item, index) => {
          const product = user?.products.find(
            (t) => t.product === item.product
          );
          return (
            <div
              key={index}
              className="bg-white rounded-[18px] overflow-hidden flex-1"
            >
              <div className="h-[150px] relative ">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover"
                ></Image>
              </div>
              <div className="px-6 pb-6 pt-[18px] flex flex-col gap-3">
                <div className="text-[#0d0d0d] text-2xl font-medium leading-[34px] flex items-center gap-3">
                  {product ? item.productName : item.title}
                  {!!product && (
                    <span className="flex text-[#ff764a] text-xs px-[7px] py-0.5 bg-white rounded border border-[#ff764a] justify-center items-center">
                      Applied
                    </span>
                  )}
                </div>
                {product ? (
                  <div className="text-sm">
                    <div>
                      {`You're `}
                      <span className="text-[#ff764a] font-bold">
                        #{product.waitingQueueNum}
                      </span>{" "}
                      on the List!
                    </div>
                    <div>Share the link to invite friends!</div>
                  </div>
                ) : (
                  <div className="text-[#212121] text-sm font-normal leading-snug">
                    {item.desc}
                  </div>
                )}
                {product ? (
                  <div className="p-2.5 bg-[#dfdfdf] rounded-lg border border-[#757575] justify-between text-xs items-center gap-2.5 flex">
                    <span>{inviteUrl}</span>
                    <CopyToClipboard textToCopy={inviteUrl}></CopyToClipboard>
                  </div>
                ) : (
                  <Button
                    className="self-start w-[136px] h-10 rounded-[99px] bg-[#ff764a] hover:bg-[#ff764a] text-black"
                    onClick={() => onClickItem(item)}
                  >
                    {item.button}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Settings() {
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
      await queryClient.invalidateQueries({
        queryKey: ["user", "info"],
      });
      logout();
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
  };
  return (
    <div>
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] p-7 text-[17px] flex flex-col gap-9">
        <div className="flex gap-[53px] items-center">
          <span className="w-[144px]">Email Address</span>
          <span>{user?.email}</span>
        </div>
        <Link href="/account/resetPwd" className="flex gap-[53px] items-center">
          <span className="w-[144px]">Passwords</span>
          <span className="flex-1">******</span>
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

export default Account;
