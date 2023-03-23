const QUOTES = "quotes";

const time = document.querySelector(".time");
//document.getElementByID #을 달면 ID가 된다
// .을 붙이면 class가 적용
// 아무것도 안 붙이면 태그가 적용
const newDate = new Date();

const hours = newDate.getHours();
const minutes = newDate.getMinutes();
const seconds = newDate.getSeconds();
//time.innerText = "is gold"; (HTML에 텍스트 변경하는 코딩)

time.innerText = hours + ":" + minutes + ":" + seconds;

function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  //시간 표기될 때 한 자릿 수일 때 0 붙이는 법 2가지 하나는 상단 const 함수, 나머지 하나는 하단

  // 10 => "10" 숫자에서 string으로 바꿔주려면 10.toString 하면된다.
  // seconds < 10 이렇게 해도 가능하다.
  // 하단 방법은 const => let으로 바꿔주어야 함

  //   if (seconds.toString().length === 1) {
  //     seconds = "0" + seconds;
  //   }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
  // `안에 h1 태크를 넣어주면 html 코딩이다 응용도 가능 class 먹여주는 것
}

getTime();
setInterval(getTime, 1000);

// setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// 1초마다 실행할 수 있는 실행값을 불러와야된다. getTime이 실행값. JS에서는 자동 적용되어있는 것이 있다.
// function과 괄호는 완전 같지는 않다. 90%? 정도만 일치
// 1000이 1초다 ex) 10초 하려면 10000
