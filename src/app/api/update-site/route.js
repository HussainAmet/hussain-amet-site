import { db } from "@/firebase/firebase";
import { NextResponse } from "next/server";

const siteDataFileName = process.env.NEXT_PUBLIC_SITE_DATA_FILE_NAME
const backupSiteDataFileName = process.env.NEXT_PUBLIC_BACKUP_SITE_DATA_FILE_NAME

export async function POST(req) {
  try {
    const { name, data } = await req.json();

    if (!name || !data) {
      return NextResponse.json(
        { error: "name and data are required", status: 400 },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: "Invalid document name", status: 400 },
        { status: 400 }
      );
    }

    const sourceRef = db.collection(siteDataFileName).doc(name);
    const backupRef = db.collection(backupSiteDataFileName).doc(name);

    const snap = await sourceRef.get();

    if (snap.exists) {
      await backupRef.set({
        ...snap.data(),
        _backupAt: new Date().toISOString(),
        _source: `siteData/${name}`,
      });
    }

    await sourceRef.set(data);

    return NextResponse.json({
      status: 200,
      message: `${name} updated successfully`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message, status: 500 }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    if (!name) {
      return NextResponse.json(
        { error: "name query param required" },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: "Invalid document name" },
        { status: 400 }
      );
    }

    const doc = await db.collection(siteDataFileName).doc(name).get();

    return NextResponse.json(doc.exists ? doc.data() : {});
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
