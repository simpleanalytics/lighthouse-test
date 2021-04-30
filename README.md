### Google Lighthouse Speed

At Simple Analytics we care a lot about the performance impact we have on other websites. As most analytics tools will make your website slower, we actively work on having no impact at all. This is why we created this test prove our impact on your website.

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
