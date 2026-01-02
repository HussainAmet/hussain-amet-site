"use client";
import { Accordion, AccordionItem, Button } from '@heroui/react';
import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from 'next-themes';
import HomeCms from './home/HomeCms';
import SocialLinksCms from './about/SocialLinksCms';
import SkillsCms from './about/SkillsCms';
import ExperienceCms from './about/ExperienceCms';
import { SiteDataProvider, useSiteData } from '@/app/providers/SiteDataProvider';

function CmsPage() {

    return (
        <SiteDataProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <HeroUIProvider>
                    <Accordion variant="splitted">
                        <AccordionItem key="1" aria-label="About" title="About">
                            <HomeCms />
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Social Links" title="Social Links">
                            <SocialLinksCms />
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Skills" title="Skills">
                            <SkillsCms />
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Experience" title="Experience">
                            <ExperienceCms />
                        </AccordionItem>
                    </Accordion>
                </HeroUIProvider>
            </ThemeProvider>
        </SiteDataProvider>

    )
}

export default CmsPage;
