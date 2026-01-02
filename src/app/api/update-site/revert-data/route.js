import { db } from "@/firebase/firebase";
import { NextResponse } from "next/server";

const siteDataFileName = process.env.NEXT_PUBLIC_SITE_DATA_FILE_NAME
const backupSiteDataFileName = process.env.NEXT_PUBLIC_BACKUP_SITE_DATA_FILE_NAME

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "name is required", status: 400 }, { status: 400 });
    }

    const allowed = [
      "home",
      "about",
      "skills",
      "experiences",
      "educations",
      "projects",
      "socialLinks",
      "contacts",
      "my_projects",
    ];

    if (!allowed.includes(name)) {
      return NextResponse.json({ error: "Invalid section", status: 400 }, { status: 400 });
    }

    const liveRef = db.collection(siteDataFileName).doc(name);
    const backupRef = db.collection(backupSiteDataFileName).doc(name);

    const backupSnap = await backupRef.get();

    if (!backupSnap.exists) {
      return NextResponse.json(
        { error: `No backup found for ${name}`, status: 400 },
        { status: 404 }
      );
    }

    const liveSnap = await liveRef.get();
    if (liveSnap.exists) {
      await db
        .collection(backupSiteDataFileName)
        .doc(`${name}_pre_revert`)
        .set({
          ...liveSnap.data(),
          _backupAt: new Date().toISOString(),
          _reason: "auto-backup-before-revert",
        });
    }

    const backupData = backupSnap.data();

    const { _backupAt, _source, ...cleanData } = backupData;

    await liveRef.set(cleanData);

    return NextResponse.json({
      status: 200,
      message: `${name} reverted successfully`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message, status: 500 }, { status: 500 });
  }
}
