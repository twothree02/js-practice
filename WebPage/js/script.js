/* 
로딩에서 화면으로 이동
=======================================
*/

const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen");
const loadingText = document.querySelector("loading p");

window.addEventListener("load", () => {
  //로딩이 끝났을 때의 처리
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: "hidden",
    },
    {
      duration: 2000,
      delay: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );

  loadingAreaGreen.animate(
    {
      translate: ["0 100vh", "0 0", "0 -100vh"],
    },
    {
      duration: 2000,
      delay: 800,
      easing: "ease",
      fill: "forwards",
    }
  );

  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8, //80%
      },
      {
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );
});
