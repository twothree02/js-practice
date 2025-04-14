//관찰 대상이 범위 안에 들어오면 실행하는 동작
const animateFade = (entries) => {
  //console.log("부드럽게");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
};

//관찰 설정
const fadeObserver = new IntersectionObserver(animateFade);

//.fadein을 관찰하도록 지시
const fadeElements = document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});
