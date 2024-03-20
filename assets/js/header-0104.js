// 獲取要更改的圖片元素、導覽欄元素和窗口滾動事件
const logo = document.getElementById("new-logo");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-border");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  // 設置滾動觸發的閾值，根據需要進行調整
  const scrollThreshold = 50;

  // 如果滾動超過了閾值，顯示新圖片、導覽欄背景色變為白色
  if (window.scrollY > scrollThreshold) {
    logo.style.display = "block";
    document.querySelector(".desktop-logo").style.display = "none";
    navbar.classList.add("white");
    header.classList.add("show-border");
  } else {
    logo.style.display = "none";
    document.querySelector(".desktop-logo").style.display = "block";
    navbar.classList.remove("white");
    header.classList.remove("show-border");
  }

  // 根據滾動位置設置活動導航項目的樣式
  navItems.forEach((item) => {
    const sectionId = item.querySelector("a").getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    const rect = section.getBoundingClientRect();

    if (rect.top <= 50 && rect.bottom >= 50) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// 獲取手機版下拉式選單的元素
const mobileDropdown = document.querySelector(".mobile-dropdown");

window.addEventListener("scroll", () => {
  // ... (原有的滾動事件邏輯) ...

  // 判斷手機版下拉式選單是否展開，並根據狀態設置背景色
  const isMobileDropdownOpen = mobileDropdown.classList.contains("show");
  if (isMobileDropdownOpen) {
    navbar.classList.add("white");
  } else {
    // 如果未展開，則根據滾動位置設置背景色
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("white");
    } else {
      navbar.classList.remove("white");
    }
  }
});

// 添加事件監聽器以檢測手機版下拉式選單的展開/關閉狀態
mobileDropdown.addEventListener("shown.bs.dropdown", () => {
  navbar.classList.add("white");
});

mobileDropdown.addEventListener("hidden.bs.dropdown", () => {
  // 在手機版下拉式選單關閉時，根據滾動位置設置背景色
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("white");
  } else {
    navbar.classList.remove("white");
  }
});

