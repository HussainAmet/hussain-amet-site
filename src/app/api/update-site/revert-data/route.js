import revertSiteData from "@/lib/resvertSiteData";
import { NextResponse } from "next/server";

export async function GET() {
  await revertSiteData();
  return NextResponse.json({ success: true });
}