// 获取所有的圆圈元素
//#circleGroup底下的.circle-css
const circles = document.querySelectorAll("#circleGroup .circle-css");

// 循环处理圆圈元素
circles.forEach((circle, index) => {
  // 检查索引是否在第四个到第六个或者第十个到第十二个之间
  if ((index >= 3 && index <= 5) || (index >= 9 && index <= 11)) {
    // 添加 circle-out 类
    circle.classList.add("circle-out");
  }
});
