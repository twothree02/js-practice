const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modal = document.querySelector("#modal");
const mask = document.querySelector("#mask");
const showkeyframes = {
  opacity: [0, 1],
  visibility: "visible",
};
const hidekeyframes = {
  opacity: [1, 0],
  visibility: "hidden",
};
const options = {
  duration: 800,
  easing: "ease",
  fill: "forwards",
};

//모달창 열기
open.addEventListener("click", () => {
  modal.animate(showkeyframes, options);
  mask.animate(showkeyframes, options);
});

//모달창 닫기
close.addEventListener("click", () => {
  modal.animate(hidekeyframes, options);
  mask.animate(hidekeyframes, options);
});

//마스크를 클릭하면 모달창 닫기
mask.addEventListener("click", () => {
  close.click();
});
