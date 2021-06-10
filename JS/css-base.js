// text-align设置
const textmain = document.querySelector(".set-one");
const inpObj = document.querySelectorAll(".set-one input");
const textinfo = document.querySelector(".text-info");

const handleChangeRadio = () => {
  inpObj.forEach((item, i) => {
    if (item.checked) {
      textinfo.style.textAlign = item.value;
    }
  });
};
textmain.addEventListener("click", handleChangeRadio, true);

// 字体大小，单词间距，字符间距设置
const stFontS = document.querySelector(".st-fontsize");
const stWordS = document.querySelector(".st-wordSpacing");
const stLetterS = document.querySelector(".st-letterSpacing");
const stColor = document.querySelector(".st-color");

const setFontSize = () => {
  textinfo.style.fontSize = stFontS.value + "px";
};

const setWord = () => {
  textinfo.style.wordSpacing = stWordS.value + "px";
};

const setLetter = () => {
  textinfo.style.letterSpacing = stLetterS.value + "px";
};

const setColor = () => {
  textinfo.style.color = stColor.value;
};

stFontS.addEventListener("change", setFontSize, true);
stWordS.addEventListener("change", setWord, false);
stLetterS.addEventListener("change", setLetter, false);
stColor.addEventListener("change", setColor, false);

// 设置border

const setPborder = document.querySelector(".setborder");

const borStyle = document.querySelector(".bor-style");
const borWidth = document.querySelector(".bor-width");
const borColor = document.querySelector(".bor-color");
const twoInfo = document.querySelector(".infoTwo");

const changeBorStyle = () => {
  twoInfo.style.borderStyle = borStyle.value;
  twoInfo.style.borderWidth = borWidth.value + "px";
  twoInfo.style.borderColor = borColor.value;
};
setPborder.addEventListener("change", changeBorStyle, false);

// 设置动画
const anima = document.querySelector(".anima");
const animTime = document.querySelector(".ani-chan");
const animColo = document.querySelector(".ani-colo");

const changeTime = () => {
  anima.style.animationDuration = animTime.value + "ms";
  anima.style.background = animColo.value;
};

animTime.addEventListener("change", changeTime, false);
animColo.addEventListener("change", changeTime, false);
