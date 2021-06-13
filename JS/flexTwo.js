const selDir = document.querySelector(".sel-dir");
const mainOne = document.querySelector(".main-cone");

const selWra = document.querySelector(".sel-wra");
const mainTwo = document.querySelector(".main-ctwo");

// flex-grow
const mainThree = document.querySelector(".main-cThree");
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
