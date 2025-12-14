import updateSiteData from "@/lib/updateSiteData";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  await updateSiteData(data);
  return NextResponse.json({ success: true });
}