/**
 * 通过屏幕宽度设置html元素的字体大小
 */
const setRem = () => {
  let width = document.documentElement.offsetWidth;
  if (width > 750) width = 750;
  const html = document.documentElement;
  // 1rem = 50px 二倍图：1rem = 100px
  html.style.fontSize = `${width / 7.5}px`;
};

document.addEventListener('DOMContentLoaded', setRem);
window.addEventListener('resize', setRem);
