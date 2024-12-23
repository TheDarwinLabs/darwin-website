"use client";
import Divider from "@/components/divider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCountdown from "@/hooks/useCountdown";
import { cn, encryptStr } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { fetcher } from "@/lib/fetcher";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";

interface IFormInput {
  email: string;
  passwd: string;
  inviteCode?: string;
}

export default function SignUpPage() {
  return (
    <>
      <Header olnyLogo />
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    </>
  );
}

const SignUp = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const inviteCode = searchParams.get("m") ?? "";

  const [isSend, setIsSend] = useState(false);
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      passwd: "",
    },
  });

  const { timeLeft, startCountdown } = useCountdown({
    initialTime: 60,
    onComplete: () => {
      console.log("Countdown completed!");
    },
  });

  const password = watch("passwd");

  const passwordRules = [
    { label: "At least 8 characters", isValid: password.length >= 8 },
    { label: "Number or symbol", isValid: /[0-9!@#$%^&*]/.test(password) },
    {
      label: "Lower or uppercase letter",
      isValid: /[a-z]/.test(password) && /[A-Z]/.test(password),
    },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.isValid);

  const signupMutation = useMutation({
    mutationFn: async (data: IFormInput) => {
      const response = await fetcher("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response;
    },
    onSuccess: () => {
      setIsSend(true);
      startCountdown();
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signupMutation.mutate({
      ...data,
      passwd: encryptStr(data.passwd),
      inviteCode,
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-end px-5 md:px-0">
      <div className="flex-1 flex items-center pt-[96px] pb-8 w-full  md:w-auto">
        {isSend ? (
          <div className="w-full md:w-[487px] flex-col justify-start items-center gap-[87px] inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-center text-black text-2xl font-semibold">
                {`You're almost there...`}
              </div>
              <div className="self-stretch text-center text-[#181818] text-sm font-normal leading-[18px]">
                We’ve just sent you an email – open it and click on the
                confirmation link to get varified.
              </div>
            </div>
            <SvgIcon name="email"></SvgIcon>
            <div className="flex-col items-center gap-2 flex">
              <Button
                disabled={timeLeft > 0 || signupMutation.isPending}
                onClick={handleSubmit(onSubmit)}
                className={cn(
                  "h-[52px] text-black text-sm tracking-wider inline-block px-6",
                  timeLeft > 0
                    ? "bg-[#cac9c9] hover:bg-[#cac9c9]"
                    : " bg-transparent hover:bg-transparent border border-[#ff764a] text-[#ff764a]"
                )}
              >
                Resend Confirmation Email ({timeLeft}s)
              </Button>
              <div className="text-[#606060] text-xs leading-tight text-center mt-[14px]">
                {`Didn't receive the email? Check your spam or junk folder, or
            click the button to resend a new confirmation email.`}
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col items-center gap-[34px] flex "
          >
            <div className="w-full flex-col gap-6 flex">
              <div className="flex-col gap-2 flex text-center">
                <span className="text-black text-2xl font-semibold">
                  Sign up and get started
                </span>
                <span className="text-[#181818] text-sm leading-[18px]">
                  Sign up today and start earning real returns.
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
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your Email"
                        className={cn(
                          "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px] shadow-none focus-visible:outline-none focus-visible:ring-0 focus:border-black",
                          errors.email
                            ? ""
                            : field.value
                            ? "border-green-500 focus:border-green-500"
                            : ""
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
                    name="passwd"
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                    render={({ field }) => (
                      <div className="w-full">
                        <Input
                          {...field}
                          type="password"
                          placeholder="Enter your Password"
                          className={cn(
                            "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px] shadow-none focus-visible:outline-none focus-visible:ring-0 focus:border-black",
                            errors.passwd
                              ? ""
                              : isPasswordValid
                              ? "border-green-500 focus:border-green-500"
                              : ""
                          )}
                        />
                        <div
                          className={cn(
                            "mt-2 space-y-1 grid grid-cols-2 transition-all",
                            password.length ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {passwordRules.map((rule, index) => (
                            <div
                              key={index}
                              className="flex items-center  gap-2"
                            >
                              {rule.isValid ? (
                                <SvgIcon name="circle-check" />
                              ) : (
                                <div
                                  className={`w-[18px] h-[18px] rounded-full border-[2px] border-gray-300 m-[1px]`}
                                />
                              )}
                              <span
                                className={`text-sm ${
                                  rule.isValid
                                    ? "text-[#212121]"
                                    : "text-[#757575]"
                                }`}
                              >
                                {rule.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <Button
                type="submit"
                disabled={
                  signupMutation.isPending || !isValid || !isPasswordValid
                }
                className={cn(
                  "w-full h-[52px] text-black text-sm rounded-lg ",
                  isValid && isPasswordValid
                    ? "bg-[#ff764a] hover:bg-[#FFA58A]"
                    : "bg-[#cac9c9] hover:bg-[#cac9c9]"
                )}
              >
                Create My Account
              </Button>
              <div className="text-[#606060] text-xs text-center leading-tight">
                <span>By continuing, you agree to </span>
                <Link href="/terms" className="underline">
                  Darwin Labs Terms of Service
                </Link>
                <span> and </span>
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <Divider lineColor="#111111" text="Or" />
            <div className="text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#ff764a] font-bold">
                Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};