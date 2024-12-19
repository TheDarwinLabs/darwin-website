"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, encryptStr } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface IFormInput {
  newpasswd: string;
  confirmPasswd: string;
}

interface IFormData {
  newpasswd: string;
  verifyToken: string;
}

export default function ResetPwdPage() {
  return (
    <>
      <Header olnyLogo />
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPwd />
      </Suspense>
    </>
  );
}

const ResetPwd = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      newpasswd: "",
      confirmPasswd: "",
    },
  });

  const searchParams = useSearchParams();
  const verifyToken = searchParams.get("token") ?? "";
  const password = watch("newpasswd");
  const confirmPasswd = watch("confirmPasswd");

  const passwordRules = [
    { label: "At least 8 characters", isValid: password.length >= 8 },
    { label: "Number or symbol", isValid: /[0-9!@#$%^&*]/.test(password) },
    {
      label: "Lower or uppercase letter",
      isValid: /[a-z]/.test(password) && /[A-Z]/.test(password),
    },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.isValid);

  const resetMutation = useMutation({
    mutationFn: async (data: IFormData) => {
      const response = await fetch("/api/passwd/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      return response.json();
    },
    onSuccess: () => {},
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    resetMutation.mutate({
      newpasswd: encryptStr(data.newpasswd),
      verifyToken,
    });
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-end">
      <div className="flex-1 flex items-center pt-[96px] pb-8">
        {resetMutation.isSuccess ? (
          <div className="w-full md:w-[487px] flex-col justify-start items-center gap-7 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-center text-black text-2xl font-semibold">
                Reset password
              </div>
              <div className="self-stretch text-center text-[#181818] text-sm font-normal leading-[18px]">
                Your password has changed!
              </div>
            </div>
            <SvgIcon name="success"></SvgIcon>
            <Button
              asChild
              className="bg-[#ff764a] hover:bg-[#ff764a] h-[52px] w-full text-black"
            >
              <Link href="/signin">Go to login</Link>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[417px] flex-col items-center gap-[34px] flex "
          >
            <div className="w-full flex-col gap-6 flex">
              <div className="flex-col gap-2 flex text-center">
                <span className="text-black text-2xl font-semibold">
                  Reset password
                </span>
              </div>
              <div className="flex-col items-start gap-8 flex">
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <Controller
                    name="newpasswd"
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                    render={({ field }) => (
                      <div className="w-full">
                        <Input
                          {...field}
                          type="password"
                          placeholder="Password"
                          className={cn(
                            "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px]  focus-visible:outline-none focus-visible:ring-0",
                            errors.newpasswd
                              ? ""
                              : isPasswordValid
                              ? "border-green-500"
                              : ""
                          )}
                        />
                        <div
                          className={cn(
                            "mt-2 space-y-1 grid grid-cols-2 transition-all",
                            password.length ? "grid" : "hidden"
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
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <Controller
                    name="confirmPasswd"
                    control={control}
                    rules={{
                      required: "Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <div className="w-full">
                        <Input
                          {...field}
                          type="password"
                          placeholder="Confirm Password"
                          className={cn(
                            "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px]  focus-visible:outline-none focus-visible:ring-0"
                          )}
                        />
                      </div>
                    )}
                  />
                  <div
                    className={cn(
                      "flex items-center  gap-2",
                      confirmPasswd.length ? "flex" : "hidden"
                    )}
                  >
                    {confirmPasswd === password ? (
                      <SvgIcon name="circle-check" />
                    ) : (
                      <div
                        className={`w-[18px] h-[18px] rounded-full border-[2px] border-gray-300 m-[1px]`}
                      />
                    )}
                    <span
                      className={`text-sm ${
                        confirmPasswd === password
                          ? "text-[#212121]"
                          : "text-[#757575]"
                      }`}
                    >
                      Passwords must match
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              disabled={resetMutation.isPending || !isValid || !isPasswordValid}
              className={cn(
                "w-full h-[52px] text-black text-sm rounded-lg bg-[#ff764a] hover:bg-[#ff764a]",
                isValid && isPasswordValid
                  ? "bg-[#ff764a] hover:bg-[#ff764a]"
                  : "bg-[#cac9c9] hover:bg-[#cac9c9]"
              )}
            >
              Reset Password
            </Button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};