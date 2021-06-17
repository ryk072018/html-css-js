const changeJustifyItems = document.querySelector(".changeJustifyItems");
const boxNine = document.querySelector(".boxNine");

const changeJustify = () => {
  boxNine.style.justifyItems = changeJustifyItems.value;
};

changeJustifyItems.addEventListener("change", changeJustify, false);

// 设置交叉轴对齐方式
const changeAlignItems = document.querySelector(".changeAlignItems");
const boxTen = document.querySelector(".boxTen");

const changeAlign = () => {
  boxTen.style.alignItems = changeAlignItems.value;
};

changeAlignItems.addEventListener("change", changeAlign, false);

const TenA = document.querySelector(".TenA");
const tenAJustify = document.querySelector(".tenAJustify");
const tenAAlign = document.querySelector(".tenAAlign");

const changeTenAJus = () => {
  TenA.style.justifySelf = tenAJustify.value;
};

const changeTenAAli = () => {
  TenA.style.alignSelf = tenAAlign.value;
};

tenAJustify.addEventListener("change", changeTenAJus, false);
tenAAlign.addEventListener("change", changeTenAAli, false);

// 有多余空间时，设置网格位置
const boxEleven = document.querySelector(".boxEleven");
const elevenJC = document.querySelector(".elevenJC");
const elevenAC = document.querySelector(".elevenAC");

const changeElevenJC = () => {
  boxEleven.style.justifyContent = elevenJC.value;
};
const changeElevenAC = () => {
  boxEleven.style.alignContent = elevenAC.value;
};

elevenJC.addEventListener("change", changeElevenJC, false);
elevenAC.addEventListener("change", changeElevenAC, false);
