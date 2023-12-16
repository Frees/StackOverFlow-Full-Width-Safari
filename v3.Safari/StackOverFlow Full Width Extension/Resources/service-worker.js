(async () => {
    console.log('connecting service-worker.js ...')

    const enable = localStorage.getItem("enable");
    if (enable === "true") {
        fullWidth(true);
    }

    function fullWidth(fullWidth) {
        console.log('Window loadedX3');

        // wait until passed selector is finished loading
        function waitForElement(selector) {
            return new Promise((res) => {
                const element = document.querySelector(selector);

                // if selector is available, return the html element
                if (element) {
                    res(element);
                    return;
                }

                // if selector is not available, create an observer instance
                const observer = new MutationObserver((mutation) => {
                    const targetElement = document.querySelector(selector);

                    if (targetElement) {
                        res(targetElement);
                        observer.disconnect();
                    }
                });

                // start observing the target node
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                });
            });
        }

        waitForElement('.container')
            .then((container) => {
                const leftSideBar = container.querySelector('#left-sidebar'); // 164px
                const content = container.querySelector('#content'); // calc(100% - 164px)
                const innerContent = content.querySelector('.inner-content');
                const mainBar = innerContent.querySelector('#mainbar'); // calc(100% - 300px - var(--su-static24))
                const sideBar = innerContent.querySelector('#sidebar'); // 300px

                setTimeout(() => {
                    if (fullWidth) {
                        if (leftSideBar) {
                            leftSideBar.style.display = 'none';
                        }
                        content.style.width = '100%';
                        mainBar.style.width = '100%';
                        sideBar.style.display = 'hidden';
                    } else {
                        if (leftSideBar) {
                            leftSideBar.style.display = 'flex';
                        }
                        content.style.width = 'calc(100% - 164px)';
                        mainBar.style.width = 'calc(100% - 300px - var(--su-static24))';
                        sideBar.style.display = 'visible';
                    }
                }, 300);
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    }

})();
