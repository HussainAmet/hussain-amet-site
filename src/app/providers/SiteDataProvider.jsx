"use client";

import { setData } from "@/redux/siteDataSlice";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SiteDataContext = createContext(null);

SiteDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function SiteDataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const siteData = useSelector((state) => state.siteData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (siteData.isLoaded) return;

    const fetchAllData = () => {
      try {
        setLoading(true);

        fetch("/api/get-data")
          .then((res) => res.json())
          .then((data) => dispatch(setData(data?.data)));
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [siteData.isLoaded, dispatch]);

  const providerValue = useMemo(
    () => ({ siteData, loading, error }),
    [siteData, loading, error],
  );

  return (
    <SiteDataContext.Provider value={providerValue}>
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
