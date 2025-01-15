import Header from "@/components/header";
import TermsContent from "@/components/terms";

export default function Terms() {
  return (
    <>
      <Header olnyLogo />
      <div className="px-5 sm:px-10 md:px-0 md:w-[898px] pt-[96px] mx-auto tracking-wider text-base pb-10">
        <TermsContent />
      </div>
    </>
  );
}
