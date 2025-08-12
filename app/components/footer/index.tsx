import { Button } from "@/components/ui/button";
import { Icons } from "../icons";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] px-12 md:py-10 h-fit py-12 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="w-full lg:w-1/3">
          <h1 className="text-2xl text-[#4D4D4D] light-text font-light">
            Stay in the loop
          </h1>
          <p
            className={`text-base sm:text-lg font-normal text-[#4D4D4D] mt-2 max-w-[300px] ${inter.className}`}
          >
            Be the first to get updates on our latest products, special offers,
            and new engagements.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <input
              type="email"
              placeholder="Email Address"
              className={`px-4 border border-[#4D4D4D] text-[#4D4D4D] rounded-[10px] w-full text-sm h-[45px] ${inter.className}`}
            />
            <Button
              type="submit"
              className="w-full sm:w-40 bg-[#F9BB40] hover:bg-[#f9bb40ec] text-white h-[45px]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-b border-[1px] my-6"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <Icons.footer />
        </div>
        <div className="flex items-center space-x-6 md:mb-0 mb-10">
          <Icons.facebook />
          <Icons.Ig />
          <Icons.threads />
          <Icons.X />
          <Icons.tiktok />
        </div>
      </div>
    </div>
  );
};
