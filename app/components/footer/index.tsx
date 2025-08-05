import { Button } from "@/components/ui/button";
import { Icons } from "../icons";
export const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]  p-10   ">
      <div className="flex justify-between items-center">
        <div className="A w-1/4">
          <h1 className="text-2xl font-normal text-[#4D4D4D] font-neue">
            Stay in the loop
          </h1>
          <p className="text-[20px] text-gray-600 mt-2">
            Be the first to get updates on our latest products, special offers,
            and new engagements.
          </p>
        </div>
        <div className=" w-1/2 p-5  ">
          <form className="mt-4 flex gap-5 justify-end items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 border border-gray-300 rounded-lg w-full h-[45px]"
            />
            <div>
              <Button
                type="submit"
                className=" w-40 bg-[#F9BB40] text-white h-[45px]  "
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-b border-[1px] my-4"></div>
      <div className="flex justify-between items-center">
        <Icons.footer />
        <div className="flex items-center space-x-6">
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
