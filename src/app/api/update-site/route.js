import updateSiteData from "@/lib/updateSiteData";
import { NextResponse } from "next/server";

export async function POST(req) {
  await updateSiteData(req);
  return NextResponse.json({ success: true });
}