console.log('full-width.js');

container = document.querySelector('.container');
leftSideBar = container.querySelector('#left-sidebar'); // 164px
content = container.querySelector('#content'); // calc(100% - 164px)
innerContent = content.querySelector('.inner-content');
mainBar = innerContent.querySelector('#mainbar'); // calc(100% - 300px - var(--su-static24))
sideBar = innerContent.querySelector('#sidebar'); // 300px

leftSideBar.style.display = 'none';
content.style.width = '100%';
mainBar.style.width = '100%';
sideBar.style.display = 'hidden';