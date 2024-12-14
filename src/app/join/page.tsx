"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function Join() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col items-center justify-end">
        <JoinWiatList />
        <Footer />
      </div>
    </>
  );
}

interface IFormInput {
  email: string;
  password: string;
}

const JoinWiatList = () => {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col items-center gap-[84px] flex"
    >
      <div className="w-full flex-col gap-6 flex">
        <div className="flex-col gap-2 flex text-center">
          <span className="text-black text-2xl font-semibold">
            Join the Future of Payments.
          </span>
          <span className="text-[#181818] text-sm leading-[18px]">
            Enter your email to secure your spot on the waitlist.
          </span>
        </div>
        <div className="flex-col items-start gap-8 flex">
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            <div className="px-2 text-[#757575] text-sm text-left leading-[23px]">
              Email
            </div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your Email"
                  className={cn(
                    "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px] focus-visible:outline-none focus-visible:ring-0",
                    errors.email ? "" : field.value ? "border-green-500" : ""
                  )}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("email");
                  }}
                />
              )}
            />
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            <div className="px-2 text-[#757575] text-sm text-left leading-[23px]">
              Password
            </div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter your Password"
                  className={cn(
                    "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px]  focus-visible:outline-none focus-visible:ring-0"
                  )}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex-col h-[100px] justify-start items-start gap-2 flex">
        <Button className="w-full h-[52px] text-black text-sm rounded-lg bg-[#cac9c9] hover:bg-[#cac9c9]">
          Join Waitlist
        </Button>
        <div className="text-[#606060] text-xs text-center leading-tight">
          <span>By continuing, you agree to </span>
          <span className="underline">Darwin Labs Terms of Service</span>
          <span> and</span>
          <span className="underline"> Privacy Policy</span>
        </div>
      </div>
    </form>
  );
};

const Joined = () => {
  return (
    <div className="w-[488px]  flex-col justify-start items-start gap-[79px] inline-flex mb-[196px]">
      <div className="w-full h-[73px] flex-col justify-start items-start gap-2 flex text-2xl  text-black text-center">
        <div className="w-full font-semibold">
          <span>{`You're `}</span>
          <span className="text-[#ff764a]">#30474 </span>
          <span>on the List!</span>
        </div>
        <div className="w-full text-[#181818] text-sm leading-[18px]">
          {`Thank you for joining the waitlist for Real Card. We're excited to bring you the future of payments soon!`}
        </div>
      </div>
      <div className="self-stretch h-[100px] flex-col justify-start items-center gap-2 flex">
        <div className="w-full text-center text-[#181818] text-sm leading-[18px]">
          Invite 1 friend to climb to #4499
        </div>
        <div className="w-full text-center text-[#181818] text-sm leading-[18px]">
          Your invite link
        </div>
        <div className="h-12 px-[30px] py-2 bg-[#dfdfdf] rounded-[11px] border border-[#757575] text-[#494949] flex-col justify-center items-center gap-2.5 flex">
          <div className="items-center flex gap-[34px]">
            <div className="text-[15px] leading-7">
              http://realcard.darwinlabs.xyz?m=1234
            </div>
            <SvgIcon name="copy" />
          </div>
        </div>
      </div>
    </div>
  );
};
