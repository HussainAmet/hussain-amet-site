"use server";
import fs from "fs";
import path from "path";
import siteDataBk from "../json/siteDataBk.json";

const revertSiteData = async () => {
  const filePath = path.join(process.cwd(), "src/json/siteData.json");
  fs.writeFileSync(filePath, JSON.stringify(siteDataBk, null, 2), "utf-8");
};

export default revertSiteData;