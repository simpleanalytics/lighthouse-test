### Google Lighthouse Speed

At [Simple Analytics](https://simpleanalytics.com) we care a lot about the performance impact we have on other websites. As most analytics tools will make your website slower, we actively work on having no impact at all. This is why we created this test prove our impact on your website.

### Instructions to run this for your own website

1. Create a new VPS with Ubuntu
1. Install Node.js 14 TLS
   ```bash
   cd ~
   curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
1. Make sure to install Chrome
   ```
   wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
   sudo apt install ./google-chrome-stable_current_amd64.deb
   ```
   This will install Chrome to `/usr/bin/google-chrome-stable`.
1. Clone this repo with `git clone https://github.com/simpleanalytics/lighthouse-test.git`
2. Go to the dir `cd lighthouse-test` and change `index.js` to reflect your changes to the test
3. Run the script with `node index.js` and the results will appear

You can to switch from the slower Google Analytics to the faster Simple Analytics? [Join us here](https://simpleanalytics.com).

### Results

This is the latest test we did run at April 30, 2021:

```js
[
  {
    url: 'https://blog.simpleanalytics.com/with-ga-script',
    results: [
      91, 94, 92, 94, 94, 94, 94, 94, 92, 94, 94, 94,
      94, 95, 94, 94, 94, 93, 94, 92, 92, 94, 92, 94,
      94, 94, 94, 94, 94, 94, 94, 94, 94, 94, 92, 94,
      94, 94, 94, 92, 94, 94, 94, 96, 92, 94, 94, 93,
      94, 94, 93, 94, 94, 94, 94, 93, 94, 94, 94, 93,
      94, 94, 88, 94, 94, 94, 94, 94, 94, 94, 94, 94,
      94, 94, 94, 94, 93, 97, 97, 92, 94, 94, 94, 94,
      94, 92, 94, 94, 94, 94, 94, 94, 96, 94, 92, 94,
      94, 94, 96, 94,
      ... 400 more items
    ],
    average: 93.67
  },
  {
    url: 'https://blog.simpleanalytics.com/with-sa-script',
    results: [
      96, 96, 94, 96, 94, 96, 96, 94, 96, 94, 94, 96,
      96, 98, 96, 96, 96, 96, 94, 98, 94, 96, 96, 96,
      96, 96, 94, 96, 96, 96, 96, 94, 96, 94, 96, 94,
      94, 94, 96, 96, 96, 96, 94, 94, 96, 96, 95, 94,
      96, 97, 96, 96, 96, 96, 96, 96, 94, 96, 96, 97,
      95, 94, 94, 96, 94, 94, 96, 94, 96, 96, 96, 96,
      94, 94, 96, 94, 96, 98, 96, 96, 96, 94, 96, 96,
      96, 95, 94, 94, 96, 98, 94, 96, 97, 94, 94, 94,
      96, 96, 96, 95,
      ... 400 more items
    ],
    average: 95.46
  },
  {
    url: 'https://blog.simpleanalytics.com/without-sa-script',
    results: [
      96, 96, 96, 94, 94, 96, 96, 96, 94, 96, 96, 96,
      94, 96, 96, 96, 96, 95, 96, 94, 96, 96, 94, 94,
      97, 96, 94, 94, 94, 96, 98, 98, 97, 96, 94, 94,
      97, 96, 94, 94, 96, 94, 94, 96, 94, 94, 94, 94,
      94, 96, 94, 96, 96, 91, 96, 94, 96, 97, 94, 96,
      94, 96, 96, 96, 98, 94, 96, 95, 96, 96, 95, 96,
      95, 96, 96, 95, 96, 96, 94, 96, 94, 96, 96, 94,
      96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 88, 94,
      94, 96, 96, 96,
      ... 400 more items
    ],
    average: 95.49
  }
]
```
