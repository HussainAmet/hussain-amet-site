import { put, list } from "@vercel/blob";
import { NextResponse } from "next/server";

const SITE_FILE = 'siteData.json';
const BACKUP_FILE = 'siteDataBk.json';

export default async function updateSiteData(req) {
  try {
    
    let currentData;
    const backupBlob = await list({ prefix: SITE_FILE });
    if (backupBlob.blobs.length > 0) {
      const res = await fetch(backupBlob.blobs[0].url);
      currentData = await res.json();
    }
    
    if (currentData) {
      await put(BACKUP_FILE, JSON.stringify(currentData, null, 2), {
        access: "public",
        contentType: "application/json",
        allowOverwrite: true,
      });
    }
    
    const body = await req.json();
    const blob = await put(SITE_FILE, JSON.stringify(body, null, 2), {
      access: "public",
      contentType: "application/json",
      allowOverwrite: true,
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update site data" },
      { status: 500 }
    );
  }
}
