import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all known pages (with spaces, no manual changes)
const pages = [
  "/",
  "/places/OneDayTour",
  "/places/Delhi Darshan",
  "/places/Agra Tour",
  "/places/Jaipur Tour",
  "/places/Mata Vaishno Devi Temple",
  "/places/Ayodhya Tour",
  "/places/Himachal Pradesh Tour",
  "/places/Omkareshwar & Mahakaleshwar Temple",
  "/places/Mathura - Vrindavan Tour",
  "/places/Khatu Shyam Ji & Salasar Balaji Temple",
  "/places/Uttarakhand Tour",
  "/places/Amritsar Tour",
];

async function generateSitemap() {
  try {
    const sitemapPath = path.resolve(__dirname, "public/sitemap.xml");
    const writeStream = createWriteStream(sitemapPath);
    const sitemap = new SitemapStream({ hostname: "https://shivshaktivtourandtravel.com/" });

    sitemap.pipe(writeStream);

    // Add each page, encoding spaces correctly
    pages.forEach((page) => sitemap.write(encodeURI(page)));

    // End the stream properly
    sitemap.end();

    // Wait for the stream to finish before logging success
    await streamToPromise(sitemap);

    console.log("✅ Sitemap successfully created at:", sitemapPath);
  } catch (error) {
    console.error("❌ Sitemap generation failed:", error);
  }
}

// Run the function
generateSitemap();
