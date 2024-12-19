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
              Activate account error
            </div>
            <div className="text-center text-sm">
              Something went wrong. Please try again and contact us at
              contact@darwinlabs.io.com if this issue continues.
            </div>
            <SvgIcon name="email-failed" className="my-[50px]"></SvgIcon>
            <Button
              asChild
              className="bg-[#FF764A] hover:bg-[#FF764A] w-full h-[52px] text-black"
            >
              <Link href="/signup">Sign Up Again</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EmailVerificationSuccess;
