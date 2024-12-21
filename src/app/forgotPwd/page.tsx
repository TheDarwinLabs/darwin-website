"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import SvgIcon from "@/components/SvgIcon";
import { fetcher } from "@/lib/fetcher";
import { useToast } from "@/hooks/use-toast";

interface IFormInput {
  email: string;
}

export default function ForgotPwd() {
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const sendMutation = useMutation({
    mutationFn: async (data: IFormInput) => {
      const response = await fetcher("/api/user/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response;
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    sendMutation.mutate(data);
  };

  return (
    <>
      <Header olnyLogo />
      <div className="w-full min-h-screen flex flex-col items-center justify-end  px-5 md:px-0">
        <div className="flex-1 flex items-center pt-[96px] w-full md:w-auto">
          {sendMutation.isSuccess ? (
            <div className="w-full md:w-[487px] flex-col justify-start items-center gap-[87px] inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-center text-black text-2xl font-semibold">
                  Forgot your password?
                </div>
                <div className="self-stretch text-center text-[#181818] text-sm font-normal leading-[18px]">
                  We’ve sent you an email with password reset instructions.
                </div>
              </div>
              <SvgIcon name="email-success"></SvgIcon>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-col items-center gap-[34px] flex w-full md:w-[420px]"
            >
              <div className="w-full flex-col gap-6 flex">
                <div className="flex-col gap-2 flex text-center">
                  <span className="text-black text-2xl font-semibold">
                    Forgot your password?
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
                            "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px] focus-visible:outline-none focus-visible:ring-0",
                            errors.email
                              ? ""
                              : field.value
                              ? "border-green-500"
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
                </div>
              </div>

              <Button
                className={cn(
                  "w-full h-[52px] text-black text-sm rounded-lg",
                  isValid
                    ? "bg-[#ff764a] hover:bg-[#ff764a]"
                    : "bg-[#cac9c9] hover:bg-[#cac9c9]"
                )}
                disabled={!isValid || sendMutation.isPending}
              >
                Reset Password
              </Button>
            </form>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
