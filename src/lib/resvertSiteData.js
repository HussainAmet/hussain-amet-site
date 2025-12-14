import { put, list } from "@vercel/blob";
import { NextResponse } from "next/server";

const SITE_FILE = 'siteData.json';
const BACKUP_FILE = 'siteDataBk.json';

export async function POST() {
  try {
    
    let backupData;
    const backupBlob = await list({ prefix: BACKUP_FILE });
    if (backupBlob.blobs.length > 0) {
      const res = await fetch(backupBlob.blobs[0].url);
      backupData = await res.json();
    }
    
    if (backupData) {
      await put(SITE_FILE, JSON.stringify(backupData, null, 2), {
        access: "public",
        contentType: "application/json",
        allowOverwrite: true,
      });
    }

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