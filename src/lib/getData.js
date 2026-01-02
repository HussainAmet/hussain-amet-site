export const getData = async (name) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/update-site?name=${name}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch ${name}`);
  }

  return res.json();
};

export const updateData = async (name, data) => {
  const res = await fetch("/api/update-site", {
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
