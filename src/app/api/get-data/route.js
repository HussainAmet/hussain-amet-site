import { db } from "@/firebase/firebase";
import { clearCache, getCache, setCache } from "@/lib/siteCache";
import { NextResponse } from "next/server";

const siteDataFileName = process.env.NEXT_PUBLIC_SITE_DATA_FILE_NAME;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    if (name) {
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
          { status: 400 },
        );
      }
    }

    const cached = getCache();

    if (cached) {
      console.log("Serving data from cached");
      if (name in cached) {
        return NextResponse.json({
          ...cached[name],
          fromCache: true,
        });
      }
      return NextResponse.json({
        data: cached,
        fromCache: true,
      });
    }

    const snapshot = await db.collection(siteDataFileName).get();
    const data = {};

    snapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });

    setCache(data);

    console.log("Serving data from database");

    if (name in data) {
      return NextResponse.json({
        ...data[name],
        fromCache: false,
      });
    }

    return NextResponse.json({
      data,
      fromCache: false,
    });
  } catch (err) {
    console.error("SITE DATA API ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST() {
  console.log("Clearing site data cache");
  clearCache();
  return NextResponse.json({ success: true });
}
