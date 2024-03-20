// 缓存DOM元素引用
const logo = document.getElementById("new-logo");
const desktopLogo = document.querySelector(".desktop-logo");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-border");
const navItems = document.querySelectorAll(".nav-item");
const mobileDropdown = document.querySelector(".mobile-dropdown");

// 设置滚动触发的阈值，根据需要进行调整
const scrollThreshold = 50;

// 辅助函数：更新导航栏样式
function updateNavbarStyle(scrollPos) {
  if (scrollPos > scrollThreshold) {
    logo.style.display = "block";
    desktopLogo.style.display = "none";
    navbar.classList.add("white");
    header.classList.add("show-border");
  } else {
    logo.style.display = "none";
    desktopLogo.style.display = "block";
    navbar.classList.remove("white");
    header.classList.remove("show-border");
  }
}

// 处理滚动事件
function handleScroll() {
  const currentScrollPos = window.scrollY;
  updateNavbarStyle(currentScrollPos);

  // 根据滚动位置设置活动导航项目的样式
  navItems.forEach((item) => {
    const sectionId = item.querySelector("a").getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });
}

// 使用防抖技术优化滚动事件处理
let isScrolling;
window.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(handleScroll, 66); // 在66毫秒后执行handleScroll
}, false);

// 处理移动下拉菜单的展开和关闭
mobileDropdown.addEventListener("shown.bs.dropdown", () => {
  navbar.classList.add("white");
});

mobileDropdown.addEventListener("hidden.bs.dropdown", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("white");
  } else {
    navbar.classList.remove("white");
  }
});
