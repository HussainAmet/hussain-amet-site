"use client";
import { Accordion, AccordionItem, Button } from '@heroui/react';
import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from 'next-themes';
import HomeCms from './home/HomeCms';
import SocialLinksCms from './about/SocialLinksCms';
import SkillsCms from './about/SkillsCms';
import ExperienceCms from './about/ExperienceCms';

function CmsPage({siteData}) {
    const revertData = async () => {
        await fetch("/api/update-site/revert-data", {
            method: "GET",
        });
    };
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
        <HeroUIProvider>
            <div className='text-right'>
                <Button onPress={revertData} variant="solid" color="danger" className="mb-4">
                    Revert Site Data to Backup
                </Button>
            </div>
            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="About" title="About">
                    <HomeCms siteData={siteData}/>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Social Links" title="Social Links">
                    <SocialLinksCms siteData={siteData}/>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Skills" title="Skills">
                    <SkillsCms siteData={siteData} />
                </AccordionItem>
                <AccordionItem key="4" aria-label="Experience" title="Experience">
                    <ExperienceCms siteData={siteData}/>
                </AccordionItem>
            </Accordion>
        </HeroUIProvider>
    </ThemeProvider>

  )
}

export default CmsPage;
