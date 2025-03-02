"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, encryptStr } from "@/lib/utils";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import Divider from "@/components/divider";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { queryClient } from "@/providers/ReactQueryProvider";
import { fetcher } from "@/lib/fetcher";
import { useToast } from "@/hooks/use-toast";

interface IFormInput {
  email: string;
  passwd: string;
}

export default function SignIn() {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      passwd: "",
    },
  });
  const router = useRouter();
  const { toast } = useToast();

  const signinMutation = useMutation({
    mutationFn: async (data: IFormInput) => {
      const response = await fetcher("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || "Signup failed");
      // }

      return response;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["user", "info"],
      });
      router.push(`/account`);
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signinMutation.mutate({ ...data, passwd: encryptStr(data.passwd) });
  };

  return (
    <>
      <Header olnyLogo />
      <div className="w-full min-h-screen flex flex-col items-center justify-end px-5 md:px-0">
        <div className="flex-1 flex items-center pt-[96px] pb-10 w-full md:w-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col items-center gap-[34px] flex w-full md:w-[420px]"
          >
            <div className="w-full flex-col gap-6 flex">
              <div className="flex-col gap-2 flex text-center">
                <span className="text-black text-2xl font-semibold">
                  Sign In
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
                          "px-7 h-12 bg-[#dfdfdf] text-base rounded-[11px] focus-visible:outline-none focus-visible:ring-0 shadow-none focus:border-[#757575]",
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
                  <div className="px-2 text-[#757575] text-base text-left leading-[23px]">
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
                            "px-7 h-12 bg-[#dfdfdf] text-base rounded-[11px]  focus-visible:outline-none focus-visible:ring-0 shadow-none focus:border-[#757575]",
                            errors.passwd
                              ? ""
                              : field.value
                              ? "border-green-500"
                              : ""
                          )}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="w-full text-sm flex items-center justify-between">
              <div className="items-top flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgotPwd" className=" underline">
                Forgot password?
              </Link>
            </div>
            <Button
              disabled={signinMutation.isPending || !isValid}
              className={cn(
                "w-full h-[52px] text-white text-sm rounded-lg",
                isValid
                  ? "bg-[#ff764a] hover:bg-[#FFA58A]"
                  : "bg-[#cac9c9] hover:bg-[#cac9c9]"
              )}
            >
              Sign in
            </Button>
            <Divider lineColor="#111111" text="Or" />
            <div className="text-sm">
              {`Don't have an account? `}
              <Link href="/signup" className="text-[#ff764a] font-bold">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

