import { Icons } from "../icons";
export const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]  p-10   ">
      <div className="flex justify-between items-center">
        <div className="A w-1/4">
          <h1 className="text-2xl font-normal text-[#4D4D4D] font-neue">
            Stay in the loop
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Be the first to get updates on our latest products, special offers,
            and new engagements.
          </p>
        </div>
        <div className="B w-1/2 p-5 ">
          <form className="mt-4 flex gap-5 justify-between items-center">
            <div className="">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded w-[30rem]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-2 bg-[#F9BB40] text-white px- p-3  rounded  "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-b border-[1px] my-4"></div>
      <div className="flex justify-between items-center">
        <div>
          <Icons.footer />
        </div>
        <div className="flex items-center">
          <Icons.facebook />

          <Icons.threads className="ml-4" />
          <Icons.X className="ml-4" />
          <Icons.tiktok className="ml-4" />
        </div>
      </div>
    </div>
  );
};
