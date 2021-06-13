const selDir = document.querySelector(".sel-dir");
const mainOne = document.querySelector(".main-cone");

const selWra = document.querySelector(".sel-wra");
const mainTwo = document.querySelector(".main-ctwo");

// flex-grow
const mainThreeA = document.querySelector(".three-a");
const mainThreeB = document.querySelector(".three-b");
const mainThreeC = document.querySelector(".three-c");

const numA = document.querySelector(".numA");
const numB = document.querySelector(".numB");
const numC = document.querySelector(".numC");

const changeDir = () => {
  mainOne.style.flexDirection = selDir.value;
};

const changeWra = () => {
  mainTwo.style.flexWrap = selWra.value;
};

selDir.addEventListener("change", changeDir, true);
selWra.addEventListener("change", changeWra, true);

const changeGa = () => {
  mainThreeA.style.flexGrow = numA.value;
};
const changeGb = () => {
  mainThreeB.style.flexGrow = numB.value;
};
const changeGc = () => {
  mainThreeC.style.flexGrow = numC.value;
};

numA.addEventListener("change", changeGa, true);
numB.addEventListener("change", changeGb, true);
numC.addEventListener("change", changeGc, true);

// flex-shrink
const fourA = document.querySelector(".four-a");
const fourB = document.querySelector(".four-b");
const fourC = document.querySelector(".four-c");
const fouNumA = document.querySelector(".fouNumA");
const fouNumB = document.querySelector(".fouNumB");
const fouNumC = document.querySelector(".fouNumC");

const changeShrinkA = () => {
  fourA.style.flexShrink = fouNumA.value;
};
const changeShrinkB = () => {
  fourB.style.flexShrink = fouNumB.value;
};
const changeShrinkC = () => {
  fourC.style.flexShrink = fouNumC.value;
};

fouNumA.addEventListener("change", changeShrinkA, true);
fouNumB.addEventListener("change", changeShrinkB, true);
fouNumC.addEventListener("change", changeShrinkC, true);

// flex-basis
const fiveA = document.querySelector(".five-a");
const fiveB = document.querySelector(".five-b");
const fiveC = document.querySelector(".five-c");
const fiveNumA = document.querySelector(".fiveNumA");
const fiveNumB = document.querySelector(".fiveNumB");
const fiveNumC = document.querySelector(".fiveNumC");

const changeBasisA = () => {
  fiveA.style.flexBasis = fiveNumA.value + "%";
};
const changeBasisB = () => {
  fiveB.style.flexBasis = fiveNumB.value + "%";
};
const changeBasisC = () => {
  fiveC.style.flexBasis = fiveNumC.value + "%";
};

fiveNumA.addEventListener("change", changeBasisA, true);
fiveNumB.addEventListener("change", changeBasisB, true);
fiveNumC.addEventListener("change", changeBasisC, true);

// flex
const sixA = document.querySelector(".six-a");
const sixB = document.querySelector(".six-b");
const sixC = document.querySelector(".six-c");
const sixList = document.querySelectorAll(".six-item");

const sixNumA1 = document.querySelector(".sixNumA1");
const sixNumA2 = document.querySelector(".sixNumA2");
const sixNumA3 = document.querySelector(".sixNumA3");

const sixNumABC1 = document.querySelector(".sixNumABC1");
const sixNumABC2 = document.querySelector(".sixNumABC2");
const sixNumABC3 = document.querySelector(".sixNumABC3");

const changeA = () => {
  sixA.style.flex = `${sixNumA1.value} ${sixNumA2.value} ${sixNumA3.value}`;
};
const changeABC = () => {
  sixList.forEach((item) => {
    item.style.flex = `${sixNumABC1.value} ${sixNumABC2.value} ${sixNumABC3.value}`;
  });
};

sixNumA1.addEventListener("change", changeA, true);
sixNumA2.addEventListener("change", changeA, true);
sixNumA3.addEventListener("change", changeA, true);

sixNumABC1.addEventListener("change", changeABC, true);
sixNumABC2.addEventListener("change", changeABC, true);
sixNumABC3.addEventListener("change", changeABC, true);
