import { JSX } from "react";

export function OurVideo(): JSX.Element {
  return (
    <div>
      <div className="w-full flex items-center justify-center px-4 lg:px-0 mb-5 lg:mb-10 mt-14 lg:mt-30">
        <div className="relative w-full max-w-[800px] sm:max-w-[91.5%] pb-[40%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/Fa2JSWxNUT0?si=zOiqQjlE1ZMCU_a0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
