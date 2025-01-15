"use client";

export const runtime = "edge";

import { useToast } from "@/hooks/use-toast";
import { fetcher } from "@/lib/fetcher";
import { productList } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { queryClient } from "@/providers/ReactQueryProvider";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CopyToClipboard from "@/components/copyToClipboard";
import { Button } from "@/components/ui/button";
import SvgIcon from "@/components/SvgIcon";
import Link from "next/link";

export default function DashBoardPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [inviteCode, setInviteCode] = useState("");

  const { mutate, data, isError } = useMutation({
    mutationFn: async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() < 0.8;
          if (isSuccess) {
            resolve("Card issued successfully!");
          } else {
            reject(new Error("Failed to issue card. Please try again."));
          }
        }, 1000);
      });
    },
    onSuccess: () => {},
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  console.log(data);

  useEffect(() => {
    setInviteCode(user?.inviteCode ?? "");
  }, [user]);

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

  const getCard = () => {
    mutate();
  };

  return (
    <div className="w-[1020px] mx-auto">
      <div className="text-[28px] font-medium ">Your Account</div>
      <div className="mt-3 bg-white rounded-[18px] p-5 text-[17px] flex gap-2 items-center">
        <div className="bg-[#d49e80] rounded-full w-[46px] h-[46px] flex items-center justify-center uppercase">
          {user?.email.substring(0, 1)}
        </div>
        <span className="flex-1">{user?.email}</span>
      </div>
      <div className="text-[28px] font-medium mt-8 mb-5">Real Card</div>
      <div className="mt-3 bg-white rounded-[18px] p-5 flex items-center">
        {isError ? (
          <div className="flex-1">
            <SvgIcon name="card"></SvgIcon>
            <div className="text-[#212121] text-2xl font-bold my-[14px]">
              Get your Real Card
            </div>
            <div className="text-[#212121]">
              Your Real Card application is now open！here to get your card
            </div>
          </div>
        ) : data ? (
          <div className="flex gap-6 items-center flex-1">
            <div className="w-[293px] h-[185px] relative">
              <Image
                src="/images/realcard.jpg"
                fill
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>Available for Card</div>
              <div className="">
                <span className="">$</span>
                <span className="text-5xl font-bold mx-[10px]">8520.00</span>
                <span className="">USDC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex">
                  <SvgIcon name="darwin" className="w-7"></SvgIcon>
                  <SvgIcon name="iost" className="-translate-x-3 w-7"></SvgIcon>
                </div>
                <span className="text-[34px] font-bold flex-1">+ 262.3</span>
                <span className="text-[#757575]">USDC</span>
                <SvgIcon name="chevron-down" className="w-6"></SvgIcon>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <SvgIcon name="re-card"></SvgIcon>
            <div className="text-[#212121] text-2xl font-bold my-[14px]">
              Get your Real Card
            </div>
            <div className="text-[#212121]">
              Your Real Card application is now open！here to get your card
            </div>
          </div>
        )}

        {isError ? (
          <div>
            <Button
              className="rounded-full border-[#ff764a] text-[#ff764a] hover:bg-white hover:text-[#ff764a]"
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        ) : data ? (
          <div>
            <Button
              className=" rounded-full border-[#ff764a] text-[#ff764a] hover:bg-white hover:text-[#ff764a]"
              variant="outline"
              asChild
            >
              <Link href="/account/realcard">Check My Card</Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button className="btn hover:bg-[#FFA58A]" onClick={getCard}>
              Get My Card
            </Button>
            <Button
              className=" rounded-full border-[#ff764a] text-[#ff764a] hover:bg-white hover:text-[#ff764a]"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        )}
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
                    className="self-start w-[136px] h-10 rounded-[99px] bg-[#ff764a] hover:bg-[#FFA58A] text-white"
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
