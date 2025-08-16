"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("🎉 Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("⚠️ Failed to subscribe.");
      }
    } catch (err) {
      setMessage("⚠️ Network error, try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#F2F2F2] px-12 md:py-10 h-fit py-12 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="w-full lg:w-1/3">
          <h1 className={`text-3xl text-[#4D4D4D]  font-light light-text`}>
            Stay in the loop
          </h1>
          <p
            className={`text-sm sm:text-base font-normal text-[#4D4D4D] mt-2 max-w-[400px] ${inter.className}`}
          >
            Be the first to get updates on our latest products, special offers,
            and new engagements.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className={`px-4 border border-[#4D4D4D] text-[#4D4D4D] rounded-[10px] w-full text-sm h-[45px] ${inter.className}`}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-40 bg-[#F9BB40] hover:bg-[#f9bb40ec] text-white h-[45px] hover:shadow-md hover:scale-105 active:scale-95"
            >
              {loading ? "..." : "Subscribe"}
            </Button>
          </form>
          {message && <p className="mt-2 text-sm text-[#4D4D4D]">{message}</p>}
        </div>
      </div>

      <div className="border-b border-[1px] my-6"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <Icons.Logo />
        </div>
        <div className="flex items-center space-x-6 md:mb-0 mb-10">
          <Link href="https://www.facebook.com/thewithoutcapes" target="_blank">
            <Icons.facebook className="size-5" />
          </Link>
          <Link href="https://www.instagram.com/without.capes/" target="_blank">
            <Icons.Ig className="size-5" />
          </Link>
          <Link href="https://www.youtube.com/@WithoutCapes" target="_blank">
            <Icons.Youtube className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
