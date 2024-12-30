"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmailVerificationSuccess = () => {
  return (
    <>
      <Header olnyLogo />
      <div className="w-full min-h-screen flex flex-col items-center justify-end">
        <div className="flex-1 flex items-center pt-[96px] pb-8">
          <div className="w-full md:w-[487px] flex flex-col items-center px-8">
            <div className="text-2xl font-semibold mb-2">
              Email Verificaiton
            </div>
            <div className=" text-sm">Email confirmed successfully</div>
            <SvgIcon name="email-success" className="my-[50px]"></SvgIcon>
            <Button
              asChild
              className="bg-[#FF764A] hover:bg-[#FFA58A] w-full h-[52px] text-white"
            >
              <Link href="/signin">Go to login</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EmailVerificationSuccess;
