import { NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyTJRFFSI0_MDThWfD4bnH3xedLGX10PMVor47EVjBYka2r3YG69R9LXGHQycEoppU1Iw/exec";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
