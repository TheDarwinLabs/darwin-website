"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export default function Start() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col items-center justify-end">
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

interface IFormInput {
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const password = watch("password");

  const passwordRules = [
    { label: "At least 8 characters", isValid: password.length >= 8 },
    { label: "Number or symbol", isValid: /[0-9!@#$%^&*]/.test(password) },
    {
      label: "Lower or uppercase letter",
      isValid: /[a-z]/.test(password) && /[A-Z]/.test(password),
    },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.isValid);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col items-center gap-[34px] flex"
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
                <div className="w-full">
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your Password"
                    className={cn(
                      "px-7 h-12 bg-[#dfdfdf] text-sm rounded-[11px]  focus-visible:outline-none focus-visible:ring-0",
                      errors.password
                        ? ""
                        : isPasswordValid
                        ? "border-green-500"
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
                      <div key={index} className="flex items-center  gap-2">
                        {rule.isValid ? (
                          <SvgIcon name="circle-check" />
                        ) : (
                          <div
                            className={`w-[18px] h-[18px] rounded-full border-[2px] border-gray-300 m-[1px]`}
                          />
                        )}
                        <span
                          className={`text-sm ${
                            rule.isValid ? "text-[#212121]" : "text-[#757575]"
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
      <div className="flex-col h-[100px] justify-start items-start gap-2 flex">
        <Button className="w-full h-[52px] text-black text-sm rounded-lg bg-[#cac9c9] hover:bg-[#cac9c9]">
          Create My Account
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

// const SendEmail = () => {
//   return (
//     <div className="w-[487px] flex-col justify-start items-center gap-[87px] inline-flex">
//       <div className="self-stretch flex-col justify-start items-start gap-2 flex">
//         <div className="self-stretch text-center text-black text-2xl font-semibold">
//           {`You're almost there...`}
//         </div>
//         <div className="self-stretch text-center text-[#181818] text-sm font-normal leading-[18px]">
//           We’ve just sent you an email – open it and click on the confirmation
//           link to get varified.
//         </div>
//       </div>
//       <SvgIcon name="email"></SvgIcon>
//       <div className="h-[100px] flex-col justify-start items-center gap-2 flex">
//         <div className="w-full h-[52px] px-6 py-3.5 bg-[#ff764a] rounded-lg justify-center items-center gap-2 inline-flex text-black text-sm font-medium leading-none tracking-wider">
//           Create My Account
//         </div>
//         <div className="text-[#606060] text-xs leading-tight text-center">
//           <span>By continuing, you agree to </span>
//           <span className="underline">Darwin Labs Terms of Service</span>
//           <span> and</span>
//           <span className="underline"> Privacy Policy</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Successfully = () => {
//   return (
//     <div className="w-[487px] flex-col justify-start items-center gap-[98px] inline-flex mb-[150px]">
//       <div className="self-stretch h-[55px] flex-col justify-start items-start gap-2 flex">
//         <div className="self-stretch text-center text-black text-2xl font-semibold">
//           Email Verificaiton
//         </div>
//         <div className="self-stretch text-center text-[#181818] text-sm font-normal leading-[18px]">
//           Email confirmed successfully
//         </div>
//       </div>
//       <SvgIcon name="email-check"></SvgIcon>
//     </div>
//   );
// };
