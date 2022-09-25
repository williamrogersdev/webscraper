const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //put url you want to scrape here
  const url = "https://www.reddit.com/r/learnprogramming/";
  //   const url =
  //     "https://palletpages.com/BuySellAlertsAdmin/BuySellAlerts/SearchResult";
  await page.goto(url);
  await page.screenshot({ path: "example.png" });

  //   const titles = await page.evaluate(
  //     () => document.querySelector("h3").textContent
  //   );
  //this will return an array of any element you wnt on the page
  const titles = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h3")).map((title) =>
      title.innerText.trim()
    )
  );
  //   const innerText = await page.evaluate(
  //     () => document.querySelector("h3").innerText
  //   );

  console.log(titles);
  //   console.log(innerText);

  await browser.close();
})();
