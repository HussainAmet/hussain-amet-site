const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const getData = async (name) => {
  const res = await fetch(`${baseUrl}/api/get-data?name=${name}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`Failed to fetch ${name}: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch ${name}`);
  }

  return res.json();
};

export const updateData = async (name, data) => {
  const res = await fetch(`${baseUrl}/api/update-site`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      data,
    }),
  });

  const result = await res.json();

  return result;
};

export const clearCache = async () => {
  const res = await fetch(`${baseUrl}/api/get-data`, {
    method: "POST",
  });

  if (!res.ok) {
    console.error(`Failed to clear cache: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to clear cache`);
  }

  return res.json();
};
