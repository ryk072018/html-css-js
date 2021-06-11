// 容器
const displaySty = document.querySelector(".displaySty");
const flexDir = document.querySelector(".flexDir");
const flexWrap = document.querySelector(".flexWrap");
const flexFlo = document.querySelector(".flexFlo");
const flexFlw = document.querySelector(".flexFlw");
const justCon = document.querySelector(".justCon");
const aligIte = document.querySelector(".aligIte");
const aligCon = document.querySelector(".aligCon");

// 项目
const order = document.querySelector(".order");
const flexGrow = document.querySelector(".flexGrow");
const flexShink = document.querySelector(".flexShink");
const flexBasis = document.querySelector(".flexBasis");
const flex = document.querySelector(".flex");
const alignSelf = document.querySelector(".alignSelf");

// 内容
const flexContainer = document.querySelector(".flexContainer");
const flexItem = document.querySelector(".flexItem");

const mainOne = document.querySelector(".mainOne");
const itemsList = document.querySelectorAll(".item");
const itemTwo = document.querySelector(".itemTwo");
const itemBasis = document.querySelectorAll(".itemShink");

const changeMain = () => {
  // 容器赋值
  mainOne.style.display = displaySty.value;
  mainOne.style.flexDirection = flexDir.value;
  mainOne.style.flexWrap = flexWrap.value;
  flexFlo.value = flexDir.value;
  flexFlw.value = flexWrap.value;
  mainOne.style.justifyContent = justCon.value;
  mainOne.style.alignItems = aligIte.value;
  mainOne.style.alignContent = aligCon.value;
};

const changeMainItem = () => {
  // 项目赋值
  itemTwo.style.order = order.value;
  itemsList.forEach((item) => {
    item.style.flex = flex.value;
    item.style.background = "#00ff00";
  });
  itemTwo.style.flexGrow = flexGrow.value;
  itemTwo.style.flexShink = flexShink.value;
  itemBasis.forEach((item) => {
    item.style.flexBasis = flexBasis.value + "px";
    item.style.background = "#00ff00";
  });

  itemTwo.style.alignSelf = alignSelf.value;
  itemTwo.style.background = "#ff0000";
};

flexContainer.addEventListener("change", changeMain, false);
flexItem.addEventListener("change", changeMainItem, false);