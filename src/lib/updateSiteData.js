"use server";
import fs from "fs";
import path from "path";
import siteData from "../json/siteData.json";

const updateSiteData = async (data) => {
  const filePathBk = path.join(process.cwd(), "src/json/siteDataBk.json");
  fs.writeFileSync(filePathBk, JSON.stringify(siteData, null, 2), "utf-8");

  const filePath = path.join(process.cwd(), "src/json/siteData.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

export default updateSiteData;
