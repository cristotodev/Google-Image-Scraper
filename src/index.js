import puppeteer from "puppeteer";
import axios from "axios";
import fs from "fs";
import path from "path";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(process.env.GOOGLE_SEARCH_IMAGES_URL);

  await page.waitForSelector('div[jsname="qQjpJ"]', { timeout: 60000 });
  await page.click("#L2AGLb");

  await autoScroll(page);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const imageSrcs = await page.evaluate(async () => {
    const divElements = Array.from(
      document.querySelectorAll("div[jsname='qQjpJ']")
    );

    const imageSrcs = divElements.map((div) => {
      const imgElement = div.querySelector("img");
      return imgElement &&
        imgElement.getAttribute("src") !==
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        ? imgElement.getAttribute("src")
        : null;
    });

    return imageSrcs;
  });

  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const imagesFolder = path.join(__dirname, "..", "images");

  if (!fs.existsSync(imagesFolder)) {
    fs.mkdirSync(imagesFolder);
  }

  imageSrcs.forEach(async (src, index) => {
    try {
      const response = await axios.get(src, { responseType: "arraybuffer" });
      fs.writeFileSync(
        path.join(imagesFolder, `imagen_${index}.jpg`),
        response.data
      );
    } catch (error) {
      console.error(`Error al descargar la imagen ${index}:`, error);
    }
  });

  await browser.close();
})();

async function autoScroll(page) {
  await page.evaluateOnNewDocument(() => {
    window.addEventListener("scroll", () => {});
  });

  await page.evaluate(() => {
    const totalHeight = 0;
    const distance = 100;
    const timer = setInterval(() => {
      const scrollHeight = document.body.scrollHeight;
      window.scrollBy(0, distance);
      totalHeight += distance;

      if (totalHeight >= scrollHeight) {
        clearInterval(timer);
      }
    }, 100);
  });
}
