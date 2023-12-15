console.log('original.js');

originalContainer = document.querySelector('.container');
originalLeftSideBar = container.querySelector('#left-sidebar'); // 164px
originalContent = container.querySelector('#content'); // calc(100% - 164px)
originalInnerContent = content.querySelector('.inner-content');
originalMainBar = innerContent.querySelector('#mainbar'); // calc(100% - 300px - var(--su-static24))
originalSideBar = innerContent.querySelector('#sidebar'); // 300px

originalLeftSideBar.style.display = 'flex';
originalContent.style.width = 'calc(100% - 164px)';
originalMainBar.style.width = 'calc(100% - 300px - var(--su-static24))';
originalSideBar.style.display = 'visible';
