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

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살지맙시다.",
        "그래도 열심히 살아야지.",
        "열심히 살면 뭐해~",
        "열심히 살면 반드시 빛이 온다.",
      ])
    );

    savedQuotes = localStorage.getItem(QUOTES);
    // console.log("너 실행되니?"); , 로컬스토리지에 없으면 실행이 되는거니 F5를 여러 번 눌러주면 너 실행되니가 콘솔에 나오지 않는다.
    //51,54,56번째 줄과 같이 quotes가 반복된다. 오타 방지를 위한 부분은 1번 줄에 있다.
  }

  // 저장된 배열을 꺼내오는 과정은 quotesMsg.innerText = savedQuotes;로 바로 하는 것이 아니라 배열을 만들어주기 위해 파싱하는 작업을 거쳐야 한다. 파싱하는 방법은 아래와 같다.

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];

  // setInterval(getQuotes, 10000); F5 누르지 않아도 자동으로 변환되는 것 1000당 1초

  // 75~76 랜덤화 작업
}

getQuotes();

// Math.floor();은 정수화 시켜주는 것

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    //alert("빈 값을 입력하셨습니다."); / 빈 값을 입력하였을 때 alert 창 띄우기
    return;
    // if의 대한 설명 : 아무 것도 적지 않았을 때 return 값을 준다.
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:aquamarine;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";

  console.log(newQuotesInput.value);
}
