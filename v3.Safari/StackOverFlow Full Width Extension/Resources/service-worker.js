(async () => {
  chrome.commands.onCommand.addListener((command) => {
    if (command === 'enable') {
      console.log('enabling command key pressed');
      fullWidth();
    } else if (command === 'disable') {
      console.log('disabling command key pressed');
      original();
    }
  });

  async function fullWidth() {
    console.log('connecting script.js ...');

    await chrome.tabs
      .query({
        active: true,
        lastFocusedWindow: true,
      })
      .then((tab) => {
        const currentTab = tab[0];

        console.log(currentTab.url);

        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          files: ['full-width.js'],
        });
      })
      .then(() => {
        console.log('Enable full width');
      });
  }

  async function original() {
    console.log('connecting script.js ...');

    await chrome.tabs
      .query({
        active: true,
        lastFocusedWindow: true,
      })
      .then((tab) => {
        const currentTab = tab[0];

        console.log(currentTab.url);

        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          files: ['original.js'],
        });
      })
      .then(() => {
        console.log('Back to original state');
      });
  }
})();
