let SITE_DATA_CACHE = null;

export const getCache = () => SITE_DATA_CACHE;

export const setCache = (data) => {
  SITE_DATA_CACHE = data;
};

export const clearCache = () => {
  SITE_DATA_CACHE = null;
};
