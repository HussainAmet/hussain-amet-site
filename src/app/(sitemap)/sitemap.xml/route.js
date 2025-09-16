export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://hussain-amet-site.vercel.app/</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/about-me</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects/funds-website</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects/blog-website</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects/todo-website</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects/simon-game</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://hussain-amet-site.vercel.app/my-projects/dice-game</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}