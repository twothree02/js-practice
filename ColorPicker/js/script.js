const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

const colorBg = () => {
  // 선택한 색을 배경색으로 설정
  document.body.style.backgroundColor = color.value;

  // 컬러 코드 표시
  if (color.value === "#ffffff") {
    text.textContent = `컬러 코드 : ${color.value} (white)`;
  } else if (color.value === "#000000") {
    text.textContent = `컬러 코드 : ${color.value} (black)`;
  } else {
    text.textContent = `컬러 코드 : ${color.value}`;
  }
};

/*
document.querySelector("#colorText").textContent = `컬러 코드 : ${
  document.querySelector("#colorPicker").value
}`;
*/

//text.textContent = `컬러 코드 : ${color.value}`;

// 컬러 피커가 변경되면 colorBg를 실행시킨다
color.addEventListener("input", colorBg);

// 아래와 같이 위에 미리 함수 정의하지 않고 익명함수로 바로 호출할 수도 있음
/*
color.addEventListener("input", () => { 
    text.textContent = `컬러 코드 : ${color.value}`;
});
*/
