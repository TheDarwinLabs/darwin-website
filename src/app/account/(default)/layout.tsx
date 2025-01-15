"use client";

export const runtime = "edge";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SvgIcon from "@/components/SvgIcon";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const tabs = [
  { title: "Dashboard", icon: "app", href: "/account/dashboard" },
  { title: "Real Card", icon: "card", href: "/account/realcard" },
  { title: "RealFi", icon: "card", href: "/account/realfi" },
  { title: "Account", icon: "user", href: "/account/profile" },
  { title: "Terms", icon: "terms", href: "/account/terms" },
  { title: "Services", icon: "file-check", href: "/account/services" },
  { title: "Documentation", icon: "file", href: "/account/doc" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  // if (loading || !user) return;

  return (
    <div className="min-h-screen flex flex-col">
      <Header olnyLogo isAccount accountTabs={tabs} />
      <div className="flex-1 pt-[96px] flex ">
        <div className="flex flex-1 overflow-y-hidden">
          <div className="hidden md:flex w-[290px] flex-col gap-5 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] pt-[48px] pb-[150px]">
            {tabs.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex pl-[48px] py-4 gap-2 items-center hover:bg-[#c9c8c8]",
                  pathname === item.href ? "bg-[#ffdebd] " : "",
                  index === 4 ? "mt-7" : ""
                )}
              >
                <SvgIcon name={item.icon}></SvgIcon>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="flex-1 px-5 md:px-[60px]">{children}</div>
        </div>
      </div>
      <div className="px-5 mt-[60px]">
        <Footer />
      </div>
    </div>
  );
}
