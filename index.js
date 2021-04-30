const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const tests = [
  { url: "https://blog.simpleanalytics.com/with-ga-script", results: [] },
  { url: "https://blog.simpleanalytics.com/with-sa-script", results: [] },
  { url: "https://blog.simpleanalytics.com/without-sa-script", results: [] },
];

const iterations = 10;

const run = async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox"],
  });
  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance"],
    port: chrome.port,
  };

  for (let i = 1; i <= iterations; i++) {
    for (const [index, test] of tests.entries()) {
      const start = Date.now();
      const url = `${test.url}?time=${Date.now()}&test=${i}`;
      const { lhr } = await lighthouse(url, options);
      const score = lhr.categories.performance.score * 100;
      const duration = Math.round((Date.now() - start) / 1000);

      console.log(
        score,
        `in ${duration}s for ${lhr.finalUrl.split("/")[3].split("?")[0]}`
      );

      tests[index].results.push(score);
    }
  }

  const results = tests.map((test) => ({
    ...test,
    average:
      Math.round(
        (test.results.reduce((total, current) => total + current, 0) /
          test.results.length) *
          10
      ) / 10,
  }));

  await chrome.kill();

  return results;
};

run().then(console.log).catch(console.error);
