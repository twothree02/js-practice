const isAgreed = document.querySelector("#check");
const btn = document.querySelector("#btn");

isAgreed.addEventListener("change", () => {
  //console.log(isAgreed.checked);
  /*
  if (isAgreed.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
  */

  //아래와 같이 간단하게 쓸 수도 있음
  btn.disabled = !isAgreed.checked;
});
