"use client";
import { SiteDataProvider } from "@/app/providers/SiteDataProvider";
import { clearCache } from "@/lib/getData";
import {
  Accordion,
  AccordionItem,
  Button,
  HeroUIProvider,
} from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import ExperienceCms from "./about/ExperienceCms";
import ProjectsCms from "./about/ProjectsCms";
import SkillsCms from "./about/SkillsCms";
import SocialLinksCms from "./about/SocialLinksCms";
import HomeCms from "./home/HomeCms";

function CmsPage() {
  const [message, setMessage] = useState("");

  const cacheClear = async () => {
    try {
      const res = await clearCache();

      setMessage(
        res?.success ? "Cache cleared successfully." : "Failed to clear cache.",
      );
    } catch (error) {
      console.error("Error clearing cache:", error);
      setMessage("An error occurred while clearing the cache.");
    } finally {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <SiteDataProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <HeroUIProvider>
          <div className="flex flex-col gap-4 items-end">
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-fit mx-2"
              onPress={cacheClear}
            >
              Clear Cache
            </Button>
            {message && <p className="text-sm text-gray-500">{message}</p>}
            <Accordion variant="splitted">
              <AccordionItem key="1" aria-label="About" title="About">
                <HomeCms />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Social Links"
                title="Social Links"
              >
                <SocialLinksCms />
              </AccordionItem>
              <AccordionItem key="3" aria-label="Skills" title="Skills">
                <SkillsCms />
              </AccordionItem>
              <AccordionItem key="4" aria-label="Experience" title="Experience">
                <ExperienceCms />
              </AccordionItem>
              <AccordionItem key="5" aria-label="Projects" title="Projects">
                <ProjectsCms />
              </AccordionItem>
            </Accordion>
          </div>
        </HeroUIProvider>
      </ThemeProvider>
    </SiteDataProvider>
  );
}

export default CmsPage;
