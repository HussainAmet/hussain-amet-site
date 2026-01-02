"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const SiteDataContext = createContext(null);

const SECTIONS = [
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

export function SiteDataProvider({ children }) {
  const [siteData, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // helper inside SiteDataProvider (or import from lib/...)
  function normalizeSiteData(raw) {
    if (!raw || typeof raw !== "object") return {};

    return {
      ...raw.home ?? {},
      about: raw.about ?? {},
      // flatten wrappers into arrays
      skills: raw.skills?.skills ?? raw.skills ?? [],
      experiences: raw.experiences?.experiences ?? raw.experiences ?? [],
      educations: raw.educations?.educations ?? raw.educations ?? [],
      // keep projects as object
      projects: raw.projects ?? {},
      socialLinks: raw.socialLinks ?? {},
      // flatten contacts wrapper
      contacts: raw.contacts?.contacts ?? raw.contacts ?? [],
      my_projects: raw.my_projects ?? {},
    };
  }


  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const requests = SECTIONS.map((name) =>
          fetch(`/api/update-site?name=${name}`).then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch ${name}`);
            }
            return res.json().then((json) => ({ name, json }));
          })
        );

        const results = await Promise.all(requests);

        const combinedData = {};
        results.forEach(({ name, json }) => {
          combinedData[name] = json;
        });

        const normalized = normalizeSiteData(combinedData);
        setData(normalized);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <SiteDataContext.Provider value={{ siteData, loading, error }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used inside SiteDataProvider");
  }
  return context;
}