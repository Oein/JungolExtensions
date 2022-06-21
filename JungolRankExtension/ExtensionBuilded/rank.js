let url = location.href;
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function getParmas(name) {
  return params[name];
}

console.log(`
          [R 전골 랭킹 확장팩]          
   저의 Extension을 사용해주셔서 감사합니다.
   Thank you for using my Extension.

   Codes are written by @banana100219.
     Github : https://github.com/Oein
   Resources are provided by @sdnight5.

`);

const Ranks = {
  /** Language Coder */
  "출력 - 자가진단1": "MS",
  "출력 - 자가진단2": "B5",
  "출력 - 자가진단3": "B5",
  "출력 - 자가진단4": "B5",
  "출력 - 자가진단5": "B5",
  "출력 - 자가진단6": "B5",
  "출력 - 자가진단7": "B5",
  "출력 - 자가진단8": "B5",
  "출력 - 형성평가1": "B5",
  "출력 - 형성평가2": "B5",
  "출력 - 형성평가3": "B5",
  "출력 - 형성평가4": "B5",
  "출력 - 형성평가5": "B5",
  "입력 - 자가진단1": "B5",
  "입력 - 자가진단2": "B5",
  "입력 - 자가진단3": "B5",
  "입력 - 자가진단4": "B5",
  "입력 - 자가진단5": "B5",
  "입력 - 자가진단6": "B5",
  "입력 - 자가진단7": "B5",
  "입력 - 자가진단8": "B5",
  "입력 - 자가진단9": "B5",
  "입력 - 형성평가1": "B5",
  "입력 - 형성평가2": "B5",
  "입력 - 형성평가3": "B5",
  "입력 - 형성평가4": "B5",
  "입력 - 형성평가5": "B5",
  "연산자 - 자가진단1": "B5",
  "연산자 - 자가진단2": "B5",
  "연산자 - 자가진단3": "B5",
  "연산자 - 자가진단4": "B5",
  "연산자 - 자가진단5": "B5",
  "연산자 - 자가진단6": "B5",
  "연산자 - 자가진단7": "B5",
  "연산자 - 자가진단8": "B5",
  "연산자 - 형성평가1": "B5",
  "연산자 - 형성평가2": "B5",
  "연산자 - 형성평가3": "B5",
  "연산자 - 형성평가4": "B5",
  "연산자 - 형성평가5": "B5",
  "디버깅 - 자가진단1": "B5",
  "디버깅 - 자가진단2": "B5",
  "디버깅 - 형성평가1": "B5",
  "디버깅 - 형성평가2": "B5",
  "디버깅 - 형성평가3": "B5",
  "디버깅 - 형성평가4": "B5",
  "선택제어문 - 자가진단1": "B4",
  "선택제어문 - 자가진단2": "B4",
  "선택제어문 - 자가진단3": "B4",
  "선택제어문 - 자가진단4": "B4",
  "선택제어문 - 자가진단5": "B4",
  "선택제어문 - 자가진단6": "B4",
  "선택제어문 - 자가진단7": "B4",
  "선택제어문 - 자가진단8": "B4",
  "선택제어문 - 자가진단9": "B4",
  "선택제어문 - 형성평가1": "B4",
  "선택제어문 - 형성평가2": "B4",
  "선택제어문 - 형성평가3": "B4",
  "선택제어문 - 형성평가4": "B4",
  "선택제어문 - 형성평가5": "B4",
  "반복제어문1 - 자가진단1": "B3",
  "반복제어문1 - 자가진단2": "B3",
  "반복제어문1 - 자가진단3": "B3",
  "반복제어문1 - 자가진단4": "B3",
  "반복제어문1 - 자가진단5": "B3",
  "반복제어문1 - 자가진단6": "B3",
  "반복제어문1 - 형성평가1": "B3",
  "반복제어문1 - 형성평가2": "B3",
  "반복제어문1 - 형성평가3": "B3",
  "반복제어문1 - 형성평가4": "B3",
  "반복제어문1 - 형성평가5": "B3",
  "반복제어문2 - 자가진단1": "B3",
  "반복제어문2 - 자가진단2": "B3",
  "반복제어문2 - 자가진단3": "B3",
  "반복제어문2 - 자가진단4": "B3",
  "반복제어문2 - 자가진단5": "B3",
  "반복제어문2 - 자가진단6": "B3",
  "반복제어문2 - 자가진단7": "B3",
  "반복제어문2 - 자가진단8": "B3",
  "반복제어문2 - 형성평가1": "B3",
  "반복제어문2 - 형성평가2": "B3",
  "반복제어문2 - 형성평가3": "B3",
  "반복제어문2 - 형성평가4": "B3",
  "반복제어문2 - 형성평가5": "B3",
  "반복제어문2 - 형성평가6": "B3",
  "반복제어문2 - 형성평가7": "B3",
  "반복제어문2 - 형성평가8": "B3",
  "반복제어문2 - 형성평가9": "B3",
  "반복제어문2 - 형성평가10": "B3",
  "반복제어문3 - 자가진단1": "B3",
  "반복제어문3 - 자가진단2": "B3",
  "반복제어문3 - 자가진단3": "B3",
  "반복제어문3 - 자가진단4": "B3",
  "반복제어문3 - 자가진단5": "B3",
  "반복제어문3 - 자가진단6": "B3",
  "반복제어문3 - 자가진단7": "B3",
  "반복제어문3 - 형성평가1": "B3",
  "반복제어문3 - 형성평가2": "B3",
  "반복제어문3 - 형성평가3": "B3",
  "반복제어문3 - 형성평가4": "B3",
  "반복제어문3 - 형성평가5": "B3",
  "반복제어문3 - 형성평가6": "B3",
  "반복제어문3 - 형성평가7": "B3",
  "반복제어문3 - 형성평가8": "B3",
  "반복제어문3 - 형성평가9": "B3",
  "반복제어문3 - 형성평가10": "B3",
  "배열1 - 자가진단1": "B2",
  "배열1 - 자가진단2": "B2",
  "배열1 - 자가진단3": "B2",
  "배열1 - 자가진단4": "B2",
  "배열1 - 자가진단5": "B2",
  "배열1 - 자가진단6": "B2",
  "배열1 - 자가진단7": "B2",
  "배열1 - 자가진단8": "B2",
  "배열1 - 자가진단9": "B2",
  "배열1 - 형성평가1": "B2",
  "배열1 - 형성평가2": "B2",
  "배열1 - 형성평가3": "B2",
  "배열1 - 형성평가4": "B2",
  "배열1 - 형성평가5": "B2",
  "배열1 - 형성평가6": "B2",
  "배열1 - 형성평가7": "B2",
  "배열1 - 형성평가8": "B2",
  "배열1 - 형성평가9": "B2",
  "배열1 - 형성평가10": "B2",
  "배열2 - 자가진단1": "B1",
  "배열2 - 자가진단2": "B1",
  "배열2 - 자가진단3": "B1",
  "배열2 - 자가진단4": "B1",
  "배열2 - 자가진단5": "S5",
  "배열2 - 자가진단6": "B1",
  "배열2 - 자가진단7": "B1",
  "배열2 - 형성평가1": "B1",
  "배열2 - 형성평가2": "B1",
  "배열2 - 형성평가3": "B1",
  "배열2 - 형성평가4": "B1",
  "배열2 - 형성평가5": "B1",
  "배열2 - 형성평가6": "B1",
  "배열2 - 형성평가7": "B1",
  "배열2 - 형성평가8": "B1",
  "배열2 - 형성평가9": "B1",
  "배열2 - 형성평가10": "B1",
  "함수1 - 자가진단1": "B2",
  "함수1 - 자가진단2": "B2",
  "함수1 - 자가진단3": "B2",
  "함수1 - 자가진단4": "B2",
  "함수1 - 자가진단5": "B2",
  "함수1 - 자가진단6": "B2",
  "함수1 - 자가진단7": "B2",
  "함수1 - 자가진단8": "B2",
  "함수1 - 형성평가1": "B2",
  "함수1 - 형성평가2": "B2",
  "함수1 - 형성평가3": "B2",
  "함수1 - 형성평가4": "B2",
  "함수1 - 형성평가5": "B2",
  "함수2 - 자가진단1": "B1",
  "함수2 - 자가진단2": "B1",
  "함수2 - 자가진단3": "B1",
  "함수2 - 자가진단4": "B1",
  "함수2 - 자가진단5": "B1",
  "함수2 - 자가진단6": "B1",
  "함수2 - 자가진단7": "S5",
  "함수2 - 자가진단8": "B1",
  "함수2 - 형성평가1": "S5",
  "함수2 - 형성평가2": "B1",
  "함수2 - 형성평가3": "B1",
  "함수2 - 형성평가4": "B1",
  "함수2 - 형성평가5": "B1",
  "함수2 - 형성평가6": "B1",
  "함수2 - 형성평가7": "B1",
  "함수3 - 자가진단1": "B1",
  "함수3 - 자가진단2": "B1",
  "함수3 - 자가진단3": "B1",
  "함수3 - 자가진단4": "B1",
  "함수3 - 자가진단5": "B1",
  "함수3 - 자가진단6": "B1",
  "함수3 - 형성평가1": "B1",
  "함수3 - 형성평가2": "B1",
  "함수3 - 형성평가3": "B1",
  "함수3 - 형성평가4": "B1",
  "함수3 - 형성평가5": "B1",
  "함수3 - 형성평가6": "B1",
  "문자열1 - 자가진단1": "B2",
  "문자열1 - 자가진단2": "B2",
  "문자열1 - 자가진단3": "B2",
  "문자열1 - 자가진단4": "B2",
  "문자열1 - 자가진단5": "B2",
  "문자열1 - 자가진단6": "B2",
  "문자열1 - 자가진단7": "B2",
  "문자열1 - 자가진단8": "B2",
  "문자열1 - 자가진단9": "B2",
  "문자열1 - 형성평가1": "B2",
  "문자열1 - 형성평가2": "B2",
  "문자열1 - 형성평가3": "B2",
  "문자열1 - 형성평가4": "B2",
  "문자열1 - 형성평가5": "B2",
  "문자열1 - 형성평가6": "B2",
  "문자열1 - 형성평가7": "B2",
  "문자열2 - 자가진단1": "UK",
  "문자열2 - 자가진단2": "UK",
  "문자열2 - 자가진단3": "UK",
  "문자열2 - 자가진단4": "UK",
  "문자열2 - 자가진단5": "UK",
  "문자열2 - 자가진단6": "UK",
  "문자열2 - 자가진단7": "UK",
  "문자열2 - 자가진단8": "UK",
  "문자열2 - 자가진단9": "UK",
  "문자열2 - 자가진단10": "UK",
  "문자열2 - 자가진단11": "UK",
  "문자열2 - 형성평가1": "UK",
  "문자열2 - 형성평가2": "UK",
  "문자열2 - 형성평가3": "UK",
  "문자열2 - 형성평가4": "UK",
  "문자열2 - 형성평가5": "UK",
  "문자열2 - 형성평가6": "UK",
  "문자열2 - 형성평가7": "UK",
  "문자열2 - 형성평가8": "UK",
  "문자열2 - 형성평가9": "UK",
  "구조체 - 자가진단1": "UK",
  "구조체 - 자가진단2": "UK",
  "구조체 - 자가진단3": "UK",
  "구조체 - 자가진단4": "UK",
  "구조체 - 자가진단5": "UK",
  "구조체 - 자가진단6": "UK",
  "구조체 - 형성평가1": "UK",
  "구조체 - 형성평가2": "UK",
  "구조체 - 형성평가3": "UK",
  "구조체 - 형성평가4": "UK",
  "구조체 - 형성평가5": "UK",
  "포인터 - 자가진단1": "UK",
  "포인터 - 자가진단2": "UK",
  "포인터 - 자가진단3": "UK",
  "포인터 - 자가진단4": "UK",
  "포인터 - 자가진단5": "UK",
  "포인터 - 자가진단6": "UK",
  "포인터 - 자가진단7": "UK",
  "포인터 - 형성평가1": "UK",
  "포인터 - 형성평가2": "UK",
  "포인터 - 형성평가3": "UK",
  "포인터 - 형성평가4": "UK",
  "포인터 - 형성평가5": "UK",
  "파일입출력 - 자가진단1": "UK",
  "파일입출력 - 자가진단2": "UK",
  "파일입출력 - 자가진단3": "UK",
  "파일입출력 - 자가진단4": "UK",
  "파일입출력 - 자가진단5": "UK",
  "파일입출력 - 자가진단6": "UK",
  "파일입출력 - 형성평가1": "UK",
  "파일입출력 - 형성평가2": "UK",
  "파일입출력 - 형성평가3": "UK",
  "파일입출력 - 형성평가4": "UK",
  "파일입출력 - 형성평가5": "UK",
  "파일입출력 - 형성평가6": "UK",
  "파일입출력 - 형성평가7": "UK",
  "파일입출력 - 형성평가8": "UK",
  "파일입출력 - 형성평가9": "UK",
  "파일입출력 - 형성평가10": "UK",

  /** LCoder_Python */

  "출력 - 자가진단 1": "UK",
  "출력 - 자가진단 2-1": "UK",
  "출력 - 자가진단 2-2": "UK",
  "출력 - 자가진단 3": "UK",
  "출력 - 자가진단 4": "UK",
  "출력 - 자가진단 5-1": "UK",
  "출력 - 자가진단 5-2": "UK",
  "출력 - 형성평가 1": "UK",
  "출력 - 형성평가 2": "UK",
  "출력 - 형성평가 3": "UK",
  "출력 - 형성평가 4": "UK",
  "변수와 입력 - 자가진단 1": "UK",
  "변수와 입력 - 자가진단 2": "UK",
  "변수와 입력 - 자가진단 3": "UK",
  "변수와 입력 - 자가진단 4": "UK",
  "변수와 입력 - 자가진단 5": "UK",
  "변수와 입력 - 자가진단 6": "UK",
  "변수와 입력 - 자가진단 7": "UK",
  "변수와 입력 - 자가진단 8": "UK",
  "변수와 입력 - 형성평가 1": "UK",
  "변수와 입력 - 형성평가 2": "UK",
  "변수와 입력 - 형성평가 3": "UK",
  "변수와 입력 - 형성평가 4": "UK",
  "변수와 입력 - 형성평가 5": "UK",
  "연산자 - 자가진단 1": "UK",
  "연산자 - 자가진단 2-1": "UK",
  "연산자 - 자가진단 2-2": "UK",
  "연산자 - 자가진단 2-3": "UK",
  "연산자 - 자가진단 3": "UK",
  "연산자 - 자가진단 4": "UK",
  "연산자 - 자가진단 5": "UK",
  "연산자 - 자가진단 6": "UK",
  "연산자 - 자가진단 7": "UK",
  "연산자 - 형성평가 1": "UK",
  "연산자 - 형성평가 2": "UK",
  "연산자 - 형성평가 3": "UK",
  "연산자 - 형성평가 4": "UK",
  "연산자 - 형성평가 5": "UK",
  "연산자 - 형성평가 6": "UK",
  "연산자 - 형성평가 7": "UK",
  "연산자 - 형성평가 8": "UK",
  "문자열 1 - 자가진단 1": "UK",
  "문자열 1 - 자가진단 2": "UK",
  "문자열 1 - 자가진단 3": "UK",
  "문자열 1 - 자가진단 4": "UK",
  "문자열 1 - 자가진단 5": "UK",
  "문자열 1 - 자가진단 6": "UK",
  "문자열 1 - 형성평가 1": "UK",
  "문자열 1 - 형성평가 2": "UK",
  "문자열 1 - 형성평가 3": "UK",
  "문자열 1 - 형성평가 4": "UK",
  "리스트 1 - 자가진단 1": "UK",
  "리스트 1 - 자가진단 2": "UK",
  "리스트 1 - 자가진단 3": "UK",
  "리스트 1 - 자가진단 4": "UK",
  "리스트 1 - 자가진단 5": "UK",
  "리스트 1 - 자가진단 6-1": "UK",
  "리스트 1 - 자가진단 6-2": "UK",
  "리스트 1 - 자가진단 6-3": "UK",
  "리스트 1 - 자가진단 7": "UK",
  "리스트 1 - 형성평가 1": "UK",
  "리스트 1 - 형성평가 2": "UK",
  "리스트 1 - 형성평가 3": "UK",
  "리스트 1 - 형성평가 4": "UK",
  "리스트 1 - 형성평가 5": "UK",
  "리스트 1 - 형성평가 6": "UK",
  "선택제어문 - 자가진단 1": "UK",
  "선택제어문 - 자가진단 2": "UK",
  "선택제어문 - 자가진단 3": "UK",
  "선택제어문 - 자가진단 4": "UK",
  "선택제어문 - 자가진단 5": "UK",
  "선택제어문 - 자가진단 6": "UK",
  "선택제어문 - 자가진단 7-1": "UK",
  "선택제어문 - 자가진단 7-2": "UK",
  "선택제어문 - 자가진단 8": "UK",
  "선택제어문 - 형성평가 1": "UK",
  "선택제어문 - 형성평가 2": "UK",
  "선택제어문 - 형성평가 3": "UK",
  "선택제어문 - 형성평가 4": "UK",
  "선택제어문 - 형성평가 5": "UK",
  "주석문과 디버깅 - 자가진단 1": "UK",
  "주석문과 디버깅 - 자가진단 2": "UK",
  "주석문과 디버깅 - 형성평가 1": "UK",
  "주석문과 디버깅 - 형성평가 2": "UK",
  "반복제어문 1 - 자가진단 1": "UK",
  "반복제어문 1 - 자가진단 2": "UK",
  "반복제어문 1 - 자가진단 3": "UK",
  "반복제어문 1 - 자가진단 4": "UK",
  "반복제어문 1 - 자가진단 5": "UK",
  "반복제어문 1 - 자가진단 6": "UK",
  "반복제어문 1 - 형성평가 1": "UK",
  "반복제어문 1 - 형성평가 2": "UK",
  "반복제어문 1 - 형성평가 3": "UK",
  "반복제어문 1 - 형성평가 4": "UK",
  "반복제어문 1 - 형성평가 5": "UK",
  "반복제어문 2 - 자가진단 1": "UK",
  "반복제어문 2 - 자가진단 2": "UK",
  "반복제어문 2 - 자가진단 3": "UK",
  "반복제어문 2 - 자가진단 4": "UK",
  "반복제어문 2 - 자가진단 5": "UK",
  "반복제어문 2 - 자가진단 6": "UK",
  "반복제어문 2 - 자가진단 7": "UK",
  "반복제어문 2 - 자가진단 8": "UK",
  "반복제어문 2 - 자가진단 9": "UK",
  "반복제어문 2 - 형성평가 1": "UK",
  "반복제어문 2 - 형성평가 2": "UK",
  "반복제어문 2 - 형성평가 3": "UK",
  "반복제어문 2 - 형성평가 4": "UK",
  "반복제어문 2 - 형성평가 5": "UK",
  "반복제어문 2 - 형성평가 6": "UK",
  "반복제어문 2 - 형성평가 7": "UK",
  "반복제어문 2 - 형성평가 8": "UK",
  "반복제어문 2 - 형성평가 9": "UK",
  "반복제어문 2 - 형성평가 10": "UK",
  "반복제어문 3 - 자가진단 1-1": "UK",
  "반복제어문 3 - 자가진단 1-2": "UK",
  "반복제어문 3 - 자가진단 2": "UK",
  "반복제어문 3 - 자가진단 3": "UK",
  "반복제어문 3 - 자가진단 4": "UK",
  "반복제어문 3 - 자가진단 5": "UK",
  "반복제어문 3 - 자가진단 6": "UK",
  "반복제어문 3 - 자가진단 7": "UK",
  "반복제어문 3 - 형성평가 1": "UK",
  "반복제어문 3 - 형성평가 2": "UK",
  "반복제어문 3 - 형성평가 3": "UK",
  "반복제어문 3 - 형성평가 4": "UK",
  "반복제어문 3 - 형성평가 5": "UK",
  "반복제어문 3 - 형성평가 6": "UK",
  "반복제어문 3 - 형성평가 7": "UK",
  "반복제어문 3 - 형성평가 8": "UK",
  "반복제어문 3 - 형성평가 9": "UK",
  "반복제어문 3 - 형성평가 10": "UK",
  "문자열 2 - 자가진단 1": "UK",
  "문자열 2 - 자가진단 2": "UK",
  "문자열 2 - 자가진단 3": "UK",
  "문자열 2 - 자가진단 4": "UK",
  "문자열 2 - 자가진단 5": "UK",
  "문자열 2 - 자가진단 6": "UK",
  "문자열 2 - 자가진단 7": "UK",
  "문자열 2 - 형성평가 1": "UK",
  "문자열 2 - 형성평가 2": "UK",
  "문자열 2 - 형성평가 3": "UK",
  "문자열 2 - 형성평가 4": "UK",
  "문자열 2 - 형성평가 5": "UK",
  "문자열 2 - 형성평가 6": "UK",
  "문자열 2 - 형성평가 7": "UK",
  "리스트 2 - 자가진단 1": "UK",
  "리스트 2 - 자가진단 2": "UK",
  "리스트 2 - 자가진단 3": "UK",
  "리스트 2 - 자가진단 4": "UK",
  "리스트 2 - 자가진단 5": "UK",
  "리스트 2 - 자가진단 6": "UK",
  "리스트 2 - 자가진단 7": "UK",
  "리스트 2 - 자가진단 8": "UK",
  "리스트 2 - 형성평가 1": "UK",
  "리스트 2 - 형성평가 2": "UK",
  "리스트 2 - 형성평가 3": "UK",
  "리스트 2 - 형성평가 4": "UK",
  "리스트 2 - 형성평가 5": "UK",
  "리스트 2 - 형성평가 6": "UK",
  "리스트 2 - 형성평가 7": "UK",
  "리스트 2 - 형성평가 8": "UK",
  "리스트 2 - 형성평가 9": "UK",
  "리스트 2 - 형성평가 10": "UK",
  "리스트 3 - 자가진단 1": "UK",
  "리스트 3 - 자가진단 2": "UK",
  "리스트 3 - 자가진단 3": "UK",
  "리스트 3 - 자가진단 4": "UK",
  "리스트 3 - 자가진단 5": "UK",
  "리스트 3 - 자가진단 6": "UK",
  "리스트 3 - 자가진단 7": "UK",
  "리스트 3 - 자가진단 8": "UK",
  "리스트 3 - 형성평가 1": "UK",
  "리스트 3 - 형성평가 2": "UK",
  "리스트 3 - 형성평가 3": "UK",
  "리스트 3 - 형성평가 4": "UK",
  "리스트 3 - 형성평가 5": "UK",
  "리스트 3 - 형성평가 6": "UK",
  "리스트 3 - 형성평가 7": "UK",
  "리스트 3 - 형성평가 8": "UK",
  "리스트 3 - 형성평가 9": "UK",
  "리스트 3 - 형성평가 10": "UK",
  "리스트 3 - 형성평가 11": "UK",
  "리스트 3 - 형성평가 12": "UK",
  "기타 자료형 - 자가진단 1": "UK",
  "기타 자료형 - 자가진단 2": "UK",
  "기타 자료형 - 자가진단 3": "UK",
  "기타 자료형 - 자가진단 4": "UK",
  "기타 자료형 - 자가진단 5": "UK",
  "기타 자료형 - 자가진단 6": "UK",
  "기타 자료형 - 자가진단 7": "UK",
  "기타 자료형 - 형성평가 1": "UK",
  "기타 자료형 - 형성평가 2": "UK",
  "기타 자료형 - 형성평가 3": "UK",
  "기타 자료형 - 형성평가 4": "UK",
  "기타 자료형 - 형성평가 5": "UK",
  "기타 자료형 - 형성평가 6": "UK",
  "함수 1 - 자가진단 1": "UK",
  "함수 1 - 자가진단 2": "UK",
  "함수 1 - 자가진단 3": "UK",
  "함수 1 - 자가진단 4": "UK",
  "함수 1 - 자가진단 5": "UK",
  "함수 1 - 자가진단 6": "UK",
  "함수 1 - 자가진단 7": "UK",
  "함수 1 - 자가진단 8": "UK",
  "함수 1 - 형성평가 1": "UK",
  "함수 1 - 형성평가 2": "UK",
  "함수 1 - 형성평가 3": "UK",
  "함수 1 - 형성평가 4": "UK",
  "함수 1 - 형성평가 5": "UK",
  "함수 2 - 자가진단 1": "UK",
  "함수 2 - 자가진단 2": "UK",
  "함수 2 - 자가진단 3": "UK",
  "함수 2 - 자가진단 4": "UK",
  "함수 2 - 자가진단 5": "UK",
  "함수 2 - 자가진단 6": "UK",
  "함수 2 - 형성평가 1": "UK",
  "함수 2 - 형성평가 2": "UK",
  "함수 2 - 형성평가 3": "UK",
  "함수 2 - 형성평가 4": "UK",
  "함수 2 - 형성평가 5": "UK",
  "함수 2 - 형성평가 6": "UK",
  "함수 3 - 자가진단 1": "UK",
  "함수 3 - 자가진단 2": "UK",
  "함수 3 - 자가진단 3": "UK",
  "함수 3 - 자가진단 4": "UK",
  "함수 3 - 자가진단 5": "UK",
  "함수 3 - 자가진단 6": "UK",
  "함수 3 - 형성평가 1": "UK",
  "함수 3 - 형성평가 2": "UK",
  "함수 3 - 형성평가 3": "UK",
  "함수 3 - 형성평가 4": "UK",
  "함수 3 - 형성평가 5": "UK",
  "함수 3 - 형성평가 6": "UK",
  "클래스 - 자가진단 1": "UK",
  "클래스 - 자가진단 2": "UK",
  "클래스 - 자가진단 3": "UK",
  "클래스 - 자가진단 4": "UK",
  "클래스 - 자가진단 5": "UK",
  "클래스 - 자가진단 6": "UK",
  "클래스 - 형성평가 1": "UK",
  "클래스 - 형성평가 2": "UK",
  "클래스 - 형성평가 3": "UK",
  "클래스 - 형성평가 4": "UK",
  "클래스 - 형성평가 5": "UK",
  "파일입출력 - 자가진단 1": "UK",
  "파일입출력 - 자가진단 2": "UK",
  "파일입출력 - 자가진단 3": "UK",
  "파일입출력 - 자가진단 4": "UK",
  "파일입출력 - 자가진단 5": "UK",
  "파일입출력 - 자가진단 6": "UK",
  "파일입출력 - 형성평가 1": "UK",
  "파일입출력 - 형성평가 2": "UK",
  "파일입출력 - 형성평가 3": "UK",
  "파일입출력 - 형성평가 4": "UK",
  "파일입출력 - 형성평가 5": "UK",
  "파일입출력 - 형성평가 6": "UK",
  "파일입출력 - 형성평가 7": "UK",
  "파일입출력 - 형성평가 8": "UK",
  "파일입출력 - 형성평가 9": "UK",
  "파일입출력 - 형성평가 10": "UK",

  /** Beginner Code */
  구구단: "UK",
  구구단2: "UK",
  숫자사각형1: "UK",
  숫자사각형2: "UK",
  숫자사각형3: "UK",
  숫자사각형4: "UK",
  문자사각형1: "UK",
  문자사각형2: "UK",
  문자삼각형1: "UK",
  문자삼각형2: "UK",
  곱셈: "UK",
  "숫자의 개수": "UK",
  "약수와 배수": "UK",
  "약수 구하기": "UK",
  약수: "UK",
  최대공약수와최소공배수: "UK",
  "최대공약수, 최소공배수": "UK",
  별삼각형1: "UK",
  별삼각형2: "UK",
  별삼각형3: "UK",
  숫자삼각형: "UK",
  달팽이삼각형: "UK",
  "파스칼 삼각형": "UK",
  달팽이사각형: "UK",
  문자마름모: "UK",
  "대각선 지그재그": "UK",
  "홀수 마방진": "UK",
  "각 자리수의 역과 합(Number Reverse)": "UK",
  "소수와 합성수": "UK",
  "소수 구하기": "UK",
  소수: "UK",
  "소수의 개수": "UK",
  이진수: "UK",
  "10진수를 2,8,16진수로": "UK",
  "진법 변환": "UK",
  "실수의 이진수": "UK",
  그릇: "UK",
  "문자열 찾기": "UK",
  세로읽기: "UK",
  "암호풀기(Message Decoding)": "UK",
  단어집합2: "UK",
  "STL - String": "UK",
  "STL - String 2 (stringstream)": "UK",
  "단어 세기": "UK",
  변장: "UK",
  "색종이(초)": "UK",
  "색종이(중)": "UK",
  "떡 먹는 호랑이": "UK",
  오목: "UK",
  참외밭: "UK",
  "숫자 야구": "UK",
  "연속부분합 찾기": "UK",
  빙고: "UK",
  "볼 모으기(balls)": "UK",
  카드게임: "UK",
  선택정렬: "UK",
  삽입정렬: "UK",
  버블정렬: "UK",
  "삽입정렬 횟수 세기": "UK",
  "스택 (stack)": "UK",
  "큐(queue)": "UK",
  후위표기법1: "UK",
  쇠막대기: "UK",
  팩토리얼: "UK",
  하노이1: "UK",
  "주사위 던지기1": "UK",
  "주사위 던지기2": "UK",
  숫자고르기: "UK",
  장난감조립: "UK",
  "로또(Lotto)": "UK",
  "다음 조합(next combination)": "UK",
  싸이클: "UK",

  /** Intermediate_Coder */
  "Tutorial : 이진탐색(Binary Search-이진검색)": "UK",
  제곱근: "UK",
  모자이크: "UK",
  "숫자구슬(easy)": "UK",
  "Tutorial : 퀵소트(Quick Sort 빠른정렬)": "UK",
  "Tutorial : 합병(병합)정렬(Merge Sort)": "UK",
  "Tutorial: STL Sort 1": "UK",
  "Tutorial: STL Sort 2": "UK",
  "Tutorial: Operator Overloading(연산자 오버로딩)": "UK",
  "Tutorial: STL Sort 3": "UK",
  "Tutorial: STL Sort 4(심화)": "UK",
  "색종이 만들기(영역구분)": "UK",
  "색종이 만들기2(4진트리)": "UK",
  "제곱수 출력": "UK",
  "불쾌한 날(Bad Hair Day)": "UK",
  빌딩: "UK",
  탑: "UK",
  히스토그램: "UK",
  "색종이(고)": "UK",
  "Tutorial : 그리디(Greedy - 탐욕, 욕심쟁이) 알고리즘": "UK",
  외양간: "UK",
  "회의실 배정": "UK",
  냉장고: "UK",
  "요플레 공장": "UK",
  저울: "UK",
  "동전 자판기(下)": "UK",
  택배: "UK",
  "공주님의 정원": "UK",
  "개구리 점프(frogjump)": "UK",
  "N Queen": "UK",
  "해밀턴 순환회로": "UK",
  좋은수열: "UK",
  스도쿠: "UK",
  비숍: "UK",
  "벽장문의 이동": "UK",
  "DNA 조합": "UK",
  장기: "UK",
  단지번호붙이기: "UK",
  "영역 구하기": "UK",
  치즈: "UK",
  "Tutorial: for문의 두번째 문법(range_based_for)": "UK",
  "Tutorial: STL vector 1": "UK",
  "Tutorial: STL vector 2": "UK",
  "미로 탐색": "UK",
  "키 순서": "UK",
  "등수 찾기(ranking)": "UK",
  "두 로봇": "UK",
  "장기 2": "UK",
  "저글링 방사능 오염": "UK",
  보물섬: "UK",
  "토마토(고)": "UK",
  "화염에서탈출(SLIKAR)": "UK",
  "경로 찾기": "UK",
  "소수와 함께 하는 여행": "UK",
  로봇: "UK",
  "버스 갈아타기": "UK",
  "Tutorial 동적계획법(Dynamic Programming)": "UK",
  "두 줄로 타일 깔기": "UK",
  "극장 좌석": "UK",
  숫자카드: "UK",
  "계단 오르기": "UK",
  짚신벌레: "UK",
  동전교환: "UK",
  배낭채우기1: "UK",
  배낭채우기2: "UK",
  양팔저울: "UK",
  "동전 바꿔주기": "UK",
  "앱(APP)": "UK",
  줄세우기: "UK",
  "색종이 올려 놓기": "UK",
  "전깃줄(초)": "UK",
  가장높은탑쌓기: "UK",
  전구: "UK",
  "최장 공통 부분서열": "UK",
  "최소 편집": "UK",
  DNA유사도: "UK",
  공약수: "UK",
  "섞기 수열": "UK",
  "긴 자리 덧셈 뺄셈": "UK",
  "두 박스": "UK",
  "긴 자리 곱셈": "UK",
  용액: "UK",
  줄자접기: "UK",
  "나는 학급회장이다.(투표)": "UK",
  개미: "UK",
  "const구간의 합 구하기(1D)": "UK",
  "const구간의 합 구하기(2D)": "UK",

  /** Advanced_Coder */
  "비트연산 1": "UK",
  "2진수를 10진수로...": "UK",
  엔디안: "UK",
  비밀번호: "UK",
  "책 복사하기": "UK",
  "책 복사하기2": "UK",
  피보나치: "UK",
  "색종이 만들기3(압축해제)": "UK",
  "타일 채우기": "UK",
  "가까운 공통 조상 찾기": "UK",
  트리: "UK",
  "힙정렬2 (Heap_Sort)": "UK",
  모두더하기: "UK",
  "책꽂이 만들기": "UK",
  "못생긴 수": "UK",
  중앙값: "UK",
  쇼핑몰: "UK",
  "구간의 최대값1": "UK",
  "구간의 최대값2": "UK",
  "구간의 최소값": "UK",
  "동적 구간 합[1D]": "UK",
  줄세우기2: "UK",
  Dessert: "UK",
  월드컵: "UK",
  "루빅의 사각형": "UK",
  "행운의 문자열": "UK",
  "문자들(LETTERS)": "UK",
  Fivestar: "UK",
  "하노이3(4기둥)": "UK",
  "두수의 합": "UK",
  회로배치: "UK",
  물통: "UK",
  "토마토(초)": "UK",
  경비행기: "UK",
  "고돌이 고소미": "UK",
  "해밍 경로": "UK",
  "원숭이 사냥": "UK",
  "그리드 게임": "UK",
  "쭈노의 8퍼즐(8puzzle-경로까지)": "UK",
  지하철: "UK",
  회장뽑기: "UK",
  "페이지 전환": "UK",
  "등산로 찾기": "UK",
  귀가: "UK",
  "꿀꿀이 축제(Festival)": "UK",
  "Black Hole(블랙홀)": "UK",
  탐사: "UK",
  최단경로2: "UK",
  모이기: "UK",
  최소비용신장트리: "UK",
  종교: "UK",
  유전자: "UK",
  악수: "UK",
  "검은점과 하얀점 연결": "UK",
  전구: "UK",
  "리조트(초등/고등)": "UK",
  색상환: "UK",
  전시장: "UK",
  자동차경주대회: "UK",
  소형기관차: "UK",
  기업투자: "UK",
  "내리막 길": "UK",
  경로찾기: "UK",
  "돌다리 건너기": "UK",
  카드게임: "UK",
  구슬게임: "UK",
  "세 줄로 타일 깔기(3열로 타일깔기)": "UK",
  "네 줄로 타일 깔기": "UK",
  "전깃줄(중)": "UK",
  먹이사슬: "UK",
  "목걸이(The necklace of beads)": "UK",
  관중석: "UK",
  "주사위 쌓기": "UK",
  직각이등변삼각형찾기: "UK",
  전개도: "UK",
  직각다각형: "UK",
  "3가지 숫자 정렬하기": "UK",
  "모양 정돈": "UK",
  "긴 자리 나눗셈": "UK",
  "두 번 뒤집기": "UK",
  "세 번 뒤집기": "UK",
  삼각형만들기: "UK",
  자물쇠: "UK",

  /** Specialist_Coder */
  "요세푸스 문제 1": "UK",
  "곡선 자르기": "UK",
  물탱크: "UK",
  "장애물 경기": "UK",
  "맛있는 걸 좋아하는 소들": "UK",
  "물먹는 용(Enter The Dragon)": "UK",
  달리기: "UK",
  공장: "UK",
  "정렬되지 않은 쌍": "UK",
  "최종 울트라-퀵 소트": "UK",
  "최장 부분 증가수열": "UK",
  줄세우기: "UK",
  전국시대: "UK",
  음악프로그램: "UK",
  부등호: "UK",
  순서찾기: "UK",
  "유명한 소": "UK",
  비용: "UK",
  "트리(중등)": "UK",
  "트리(고등)": "UK",
  "길 잃은 제리": "UK",
  "사회망 서비스(SNS)": "UK",
  "절점 찾기": "UK",
  "산만한 고양이": "UK",
  "자리 배치": "UK",
  막대기: "UK",
  암호: "UK",
  "정사각형 만들기": "UK",
  "L 모양의 종이 자르기": "UK",
  보드게임: "UK",
  기지국: "UK",
  택배: "UK",
  Bitonic: "UK",
  경찰차: "UK",
  "공주 구하기": "UK",
  "벽장문의 이동2": "UK",
  "건물 세우기": "UK",
  "Permanent Computation": "UK",
  "해밀턴 순환회로2": "UK",
  "여러 줄로 타일 깔기": "UK",
  "두부 모판 자르기": "UK",
  "키위 주스": "UK",
  "드론(drone)": "UK",
  가지치기: "UK",
  "숫자 맞추기": "UK",
  "의좋은 형제": "UK",
  "특공대(commando)": "UK",
  조명등: "UK",
  파발마: "UK",
  "평면내 선분의 교점": "UK",
  "2차원 평면에서 두 선분이 만나는 경우의 수": "UK",
  "단순다각형의 면적": "UK",
  "볼록다각형(convexhull)": "UK",
  "다각형 안의 점": "UK",
  정사각형자르기: "UK",
  "입력숫자(중)": "UK",
  "자동분무기(중)": "UK",
  점프: "UK",
  "긴 자리 진법 변환": "UK",
  "여러 직사각형의 전체 면적 구하기": "UK",
  "삼각형만들기1 (삼각화단)": "UK",
  삼각형만들기2: "UK",
  "물채우기(water)": "UK",

  /** Expert_Coder */
  계란: "UK",
  "기수정렬(Radix Sort)": "UK",
  "합이 0이 되는 4개의 숫자들": "UK",
  "모빌 이진수": "UK",
  수족관1: "UK",
  수족관2: "UK",
  수족관3: "UK",
  로봇: "UK",
  "안전한 철판 2": "UK",
  직사각형: "UK",
  "모바일(Mobile Phones)": "UK",
  "Light Switching(ONOFF)": "UK",
  "홀수 직사각형": "UK",
  도서실카펫: "UK",
  "가까운 짝 찾기(Pairs) 1": "UK",
  개구리: "UK",
  기합: "UK",
  여객선2: "UK",
  "최빈값 알아보기": "UK",
  "탭댄스(tap)": "UK",
  "화면 보호기(AKVARIJ)": "UK",
  "산 깎기": "UK",
  "체인점(h)": "UK",
  "A+을 주세요": "UK",
  모빌: "UK",
  "부서 배치": "UK",
  "안전한 비상연락망": "UK",
  경로강화: "UK",
  계통트리: "UK",
  "홍수 시뮬레이션(Flood)1": "UK",
  족보: "UK",
  "현금 인출기(ATM)": "UK",
  "양팔 저울": "UK",
  초고속철도: "UK",
  모둠: "UK",
  DNA유사도: "UK",
  "회전 테이블": "UK",
  "수열 축소": "UK",
  숫자박스: "UK",
  Palindrome: "UK",
  채점: "UK",
  "점핑 사다리": "UK",
  매트: "UK",
  "조개 줍기": "UK",
  PermRLE: "UK",
  트리분할: "UK",
  "반직선이 만나는 경우의 수": "UK",
  "레이저 센서": "UK",
  달팽이: "UK",
  미술관: "UK",
  양팔저울: "UK",
  공룡발자국: "UK",
  "먼 별": "UK",
  "다각형의 확장": "UK",
  "간척지 만들기": "UK",
  "같은 길이 막대기 만들기(구성까지 출력)": "UK",
  보도블록: "UK",
  Sharks: "UK",
  마법구슬: "UK",
  줄다리기: "UK",
  점: "UK",
  화물열차: "UK",
  기약분수: "UK",
  긴급회의: "UK",
  "그레이 코드": "UK",
  "파이프(pipe)": "UK",
  매점: "UK",
  "진흙 밭(잡초덮기)": "UK",
  "Black-white Grid": "UK",
  부정행위방지: "UK",
  "비숍2(bishop)": "UK",
  우주여행: "UK",
  격자판: "UK",
  작명하기: "UK",
  검열2: "UK",
  "바이러스 / 백신": "UK",
  접두사: "UK",
  "구간 성분": "UK",
  "전화번호 검색": "UK",
  "활자인쇄기(Type Printer)": "UK",
  "생명체 분류": "UK",
  검열3: "UK",
};

const RankImages = {
  UK: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVQ4T42SMQ7EMAgEt3Hp0m2uzf3/gRfZ0p5gBFIKpARYYCfR57p+O9ZaJ+ac/+cxxolYc859cjGKY6MHOOceL1YlqK7gNQ5VZ33vO9mKw2hHFJMJL+S7OLkTdhblBL8ErUVRYsDtpG1b5JIYcOtbHiXEKK4sOZ8gUtxt48DDwBPdzAYOIhtxg8UE13FJA2LTFkevFZcSIi3xbNZU/SD034l3PCcsLux3p2BFAAAAAElFTkSuQmCC",
  B5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T5WSPRJBQRCE35VkQplSJRAJyKSEspc5gdgF5I4gcgIXcJBVrerbNzOGJegaO2+650d3j8OugHu/rpHfEcrf9sty3c7LeTUpnZJKkBR4R0GBmstmWk6L8SCgqGSLTJ0TsIqRzDt2VjzORoOA7QziatpZEFnvKvArWZ0VmcQJxLFbZCfwDxkB1VSBjKyib2QnkJERsOR4bOeDjMy1PxnMCVgyyMa293JGwmGxc0Z+O6K1JmRy0SPUOSNx7RaZYzPdawV2QUSQMpF/IvsuPAGa8nsE7aOuGwAAAABJRU5ErkJggg==",
  B4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T5WSPRJBQRCE35VkQplSJRAJyKSEspc5gdgF5I4gcgIXcJBVrerbNzOGJegaO2+650d3j8OugHu/rpHfEcrf9sty3c7LeTUpnZJKkBR4R0GBmstmWk6L8SCgqGSLTJ0TsIqRzDt2VjzORoOA7QziatpZEFnvKvArWZ0VmcQJxLFbZCfwDxkB1VSBjKyib2QnkJERsOR4bOeDjMy1PxnMCVgyyMa293JGwmGxc0Z+O6K1JmRy0SPUOSNx7RaZYzPdawV2QUSQMpF/IvsuPAGa8nsE7aOuGwAAAABJRU5ErkJggg==",
  B2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T5WSPRJBQRCE35VkQplSJRAJyKSEspc5gdgF5I4gcgIXcJBVrerbNzOGJegaO2+650d3j8OugHu/rpHfEcrf9sty3c7LeTUpnZJKkBR4R0GBmstmWk6L8SCgqGSLTJ0TsIqRzDt2VjzORoOA7QziatpZEFnvKvArWZ0VmcQJxLFbZCfwDxkB1VSBjKyib2QnkJERsOR4bOeDjMy1PxnMCVgyyMa293JGwmGxc0Z+O6K1JmRy0SPUOSNx7RaZYzPdawV2QUSQMpF/IvsuPAGa8nsE7aOuGwAAAABJRU5ErkJggg==",
  B1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T5WSPRJBQRCE35VkQplSJRAJyKSEspc5gdgF5I4gcgIXcJBVrerbNzOGJegaO2+650d3j8OugHu/rpHfEcrf9sty3c7LeTUpnZJKkBR4R0GBmstmWk6L8SCgqGSLTJ0TsIqRzDt2VjzORoOA7QziatpZEFnvKvArWZ0VmcQJxLFbZCfwDxkB1VSBjKyib2QnkJERsOR4bOeDjMy1PxnMCVgyyMa293JGwmGxc0Z+O6K1JmRy0SPUOSNx7RaZYzPdawV2QUSQMpF/IvsuPAGa8nsE7aOuGwAAAABJRU5ErkJggg==",
  B3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T5WSPRJBQRCE35VkQplSJRAJyKSEspc5gdgF5I4gcgIXcJBVrerbNzOGJegaO2+650d3j8OugHu/rpHfEcrf9sty3c7LeTUpnZJKkBR4R0GBmstmWk6L8SCgqGSLTJ0TsIqRzDt2VjzORoOA7QziatpZEFnvKvArWZ0VmcQJxLFbZCfwDxkB1VSBjKyib2QnkJERsOR4bOeDjMy1PxnMCVgyyMa293JGwmGxc0Z+O6K1JmRy0SPUOSNx7RaZYzPdawV2QUSQMpF/IvsuPAGa8nsE7aOuGwAAAABJRU5ErkJggg==",
  S5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4T72TPQrAIAxGvf9p7OjoCaSLk4OTgzh5gZQIldT/Qu3wIGAi3yOEnUqBlDKB9Yi7j/YzLGKMFSGEjPcenHMVOJs+aD2uIIQAdnAOxpgu1tqM1voBznYVSo1ugm0KNHorflOBRh5F/0dhZROvttDS2a8w20RXYRb9W4XyRCnYgNC65AIOk5NQUUbqSQAAAABJRU5ErkJggg==",
  S4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4T72TPQrAIAxGvf9p7OjoCaSLk4OTgzh5gZQIldT/Qu3wIGAi3yOEnUqBlDKB9Yi7j/YzLGKMFSGEjPcenHMVOJs+aD2uIIQAdnAOxpgu1tqM1voBznYVSo1ugm0KNHorflOBRh5F/0dhZROvttDS2a8w20RXYRb9W4XyRCnYgNC65AIOk5NQUUbqSQAAAABJRU5ErkJggg==",
  S3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4T72TPQrAIAxGvf9p7OjoCaSLk4OTgzh5gZQIldT/Qu3wIGAi3yOEnUqBlDKB9Yi7j/YzLGKMFSGEjPcenHMVOJs+aD2uIIQAdnAOxpgu1tqM1voBznYVSo1ugm0KNHorflOBRh5F/0dhZROvttDS2a8w20RXYRb9W4XyRCnYgNC65AIOk5NQUUbqSQAAAABJRU5ErkJggg==",
  S2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4T72TPQrAIAxGvf9p7OjoCaSLk4OTgzh5gZQIldT/Qu3wIGAi3yOEnUqBlDKB9Yi7j/YzLGKMFSGEjPcenHMVOJs+aD2uIIQAdnAOxpgu1tqM1voBznYVSo1ugm0KNHorflOBRh5F/0dhZROvttDS2a8w20RXYRb9W4XyRCnYgNC65AIOk5NQUUbqSQAAAABJRU5ErkJggg==",
  S1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4T72TPQrAIAxGvf9p7OjoCaSLk4OTgzh5gZQIldT/Qu3wIGAi3yOEnUqBlDKB9Yi7j/YzLGKMFSGEjPcenHMVOJs+aD2uIIQAdnAOxpgu1tqM1voBznYVSo1ugm0KNHorflOBRh5F/0dhZROvttDS2a8w20RXYRb9W4XyRCnYgNC65AIOk5NQUUbqSQAAAABJRU5ErkJggg==",
  G5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T4VSMRLCMAzrXxi68wBmNn7GMfGb/qAbCyMPYGVgoKZ2o1S13XbQpZYjpVbSfPpWGN/uYMg433vcj9Loh/xuMkhnkPdlwshVgHueJhS+GpiwNIfXOYj8n2FPMPBiq4sBoJzxY98M1LVuxqmJGAeADwZ74myk/trOIbJ4cdKKODXIxFzztepqBpzBltiHqXUIcUvMJuBnA1xhMnNAOWwxQk06CQw9W10vGuy8Pg5zMYLCb2CxzwCG1YCvZk3M4+DV2gjqotCCvwHP+foPVUIDi068x+0AAAAASUVORK5CYII=",
  G4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T4VSMRLCMAzrXxi68wBmNn7GMfGb/qAbCyMPYGVgoKZ2o1S13XbQpZYjpVbSfPpWGN/uYMg433vcj9Loh/xuMkhnkPdlwshVgHueJhS+GpiwNIfXOYj8n2FPMPBiq4sBoJzxY98M1LVuxqmJGAeADwZ74myk/trOIbJ4cdKKODXIxFzztepqBpzBltiHqXUIcUvMJuBnA1xhMnNAOWwxQk06CQw9W10vGuy8Pg5zMYLCb2CxzwCG1YCvZk3M4+DV2gjqotCCvwHP+foPVUIDi068x+0AAAAASUVORK5CYII=",
  G3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T4VSMRLCMAzrXxi68wBmNn7GMfGb/qAbCyMPYGVgoKZ2o1S13XbQpZYjpVbSfPpWGN/uYMg433vcj9Loh/xuMkhnkPdlwshVgHueJhS+GpiwNIfXOYj8n2FPMPBiq4sBoJzxY98M1LVuxqmJGAeADwZ74myk/trOIbJ4cdKKODXIxFzztepqBpzBltiHqXUIcUvMJuBnA1xhMnNAOWwxQk06CQw9W10vGuy8Pg5zMYLCb2CxzwCG1YCvZk3M4+DV2gjqotCCvwHP+foPVUIDi068x+0AAAAASUVORK5CYII=",
  G2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T4VSMRLCMAzrXxi68wBmNn7GMfGb/qAbCyMPYGVgoKZ2o1S13XbQpZYjpVbSfPpWGN/uYMg433vcj9Loh/xuMkhnkPdlwshVgHueJhS+GpiwNIfXOYj8n2FPMPBiq4sBoJzxY98M1LVuxqmJGAeADwZ74myk/trOIbJ4cdKKODXIxFzztepqBpzBltiHqXUIcUvMJuBnA1xhMnNAOWwxQk06CQw9W10vGuy8Pg5zMYLCb2CxzwCG1YCvZk3M4+DV2gjqotCCvwHP+foPVUIDi068x+0AAAAASUVORK5CYII=",
  G1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T4VSMRLCMAzrXxi68wBmNn7GMfGb/qAbCyMPYGVgoKZ2o1S13XbQpZYjpVbSfPpWGN/uYMg433vcj9Loh/xuMkhnkPdlwshVgHueJhS+GpiwNIfXOYj8n2FPMPBiq4sBoJzxY98M1LVuxqmJGAeADwZ74myk/trOIbJ4cdKKODXIxFzztepqBpzBltiHqXUIcUvMJuBnA1xhMnNAOWwxQk06CQw9W10vGuy8Pg5zMYLCb2CxzwCG1YCvZk3M4+DV2gjqotCCvwHP+foPVUIDi068x+0AAAAASUVORK5CYII=",
  P5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVQ4y21TqwoCURDdj7CIDzZZTAqLRjFuMglGk9luVBBFEMHmH/iRV894z3B23DDM+8zr3mK0eady9UrgSrTNdo802V5NH9TPP15AKOuLGSwwy+D9+T0NlyeXVQd1q2MqrNpXYRWQBlEG71VnA6E+XBx+AJ7AbnJFygTVLhoAXikDeEBOIsh4fWvYHAAOryatMxhcY2hr7IABOnOcXW2mxx1oRRLbJgj90A0Ad46JlBsbzzoSfcwI4G2Gd0AfAQjsO1B03Xp8TLELA+CNGQSnLo2V9cStV9CZFYQV4+uEvTPdy18QR9vM8To+An5U3HZcqgJqJ94BkNqIcyKQY0FW+gAc3u0xFeYdvwAAAABJRU5ErkJggg==",
  P4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVQ4y21TqwoCURDdj7CIDzZZTAqLRjFuMglGk9luVBBFEMHmH/iRV894z3B23DDM+8zr3mK0eady9UrgSrTNdo802V5NH9TPP15AKOuLGSwwy+D9+T0NlyeXVQd1q2MqrNpXYRWQBlEG71VnA6E+XBx+AJ7AbnJFygTVLhoAXikDeEBOIsh4fWvYHAAOryatMxhcY2hr7IABOnOcXW2mxx1oRRLbJgj90A0Ad46JlBsbzzoSfcwI4G2Gd0AfAQjsO1B03Xp8TLELA+CNGQSnLo2V9cStV9CZFYQV4+uEvTPdy18QR9vM8To+An5U3HZcqgJqJ94BkNqIcyKQY0FW+gAc3u0xFeYdvwAAAABJRU5ErkJggg==",
  P3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVQ4y21TqwoCURDdj7CIDzZZTAqLRjFuMglGk9luVBBFEMHmH/iRV894z3B23DDM+8zr3mK0eady9UrgSrTNdo802V5NH9TPP15AKOuLGSwwy+D9+T0NlyeXVQd1q2MqrNpXYRWQBlEG71VnA6E+XBx+AJ7AbnJFygTVLhoAXikDeEBOIsh4fWvYHAAOryatMxhcY2hr7IABOnOcXW2mxx1oRRLbJgj90A0Ad46JlBsbzzoSfcwI4G2Gd0AfAQjsO1B03Xp8TLELA+CNGQSnLo2V9cStV9CZFYQV4+uEvTPdy18QR9vM8To+An5U3HZcqgJqJ94BkNqIcyKQY0FW+gAc3u0xFeYdvwAAAABJRU5ErkJggg==",
  P2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVQ4y21TqwoCURDdj7CIDzZZTAqLRjFuMglGk9luVBBFEMHmH/iRV894z3B23DDM+8zr3mK0eady9UrgSrTNdo802V5NH9TPP15AKOuLGSwwy+D9+T0NlyeXVQd1q2MqrNpXYRWQBlEG71VnA6E+XBx+AJ7AbnJFygTVLhoAXikDeEBOIsh4fWvYHAAOryatMxhcY2hr7IABOnOcXW2mxx1oRRLbJgj90A0Ad46JlBsbzzoSfcwI4G2Gd0AfAQjsO1B03Xp8TLELA+CNGQSnLo2V9cStV9CZFYQV4+uEvTPdy18QR9vM8To+An5U3HZcqgJqJ94BkNqIcyKQY0FW+gAc3u0xFeYdvwAAAABJRU5ErkJggg==",
  P1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVQ4y21TqwoCURDdj7CIDzZZTAqLRjFuMglGk9luVBBFEMHmH/iRV894z3B23DDM+8zr3mK0eady9UrgSrTNdo802V5NH9TPP15AKOuLGSwwy+D9+T0NlyeXVQd1q2MqrNpXYRWQBlEG71VnA6E+XBx+AJ7AbnJFygTVLhoAXikDeEBOIsh4fWvYHAAOryatMxhcY2hr7IABOnOcXW2mxx1oRRLbJgj90A0Ad46JlBsbzzoSfcwI4G2Gd0AfAQjsO1B03Xp8TLELA+CNGQSnLo2V9cStV9CZFYQV4+uEvTPdy18QR9vM8To+An5U3HZcqgJqJ94BkNqIcyKQY0FW+gAc3u0xFeYdvwAAAABJRU5ErkJggg==",
  D5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T4VSQQoCMRDbF3jzOb7Ad3j3RT5E8OLBH3gXZL2I4EUvgpUMpGbT2d1CaCfTpJ1pu/XjVhSrSx/IOM8tj6fSYXEu78Kx+94D4Ahym9c1QL4aYDC5/Twbkd+MexoDFyOmAQEOQD4M4MrNFGZiHkC+MZgTZyUt9od/E1WsJ42JU4NMrLE+K+Yw0B5Mib2ZiJsmTonVhHw1oCCr2cHDBiXwSlnDmMPsucZg7vdpMwclAL5Bxd4DGlYDfZoxsZbDXxslwAVAoGvCOY9/d/YymordHfcAAAAASUVORK5CYII=",
  D4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T4VSQQoCMRDbF3jzOb7Ad3j3RT5E8OLBH3gXZL2I4EUvgpUMpGbT2d1CaCfTpJ1pu/XjVhSrSx/IOM8tj6fSYXEu78Kx+94D4Ahym9c1QL4aYDC5/Twbkd+MexoDFyOmAQEOQD4M4MrNFGZiHkC+MZgTZyUt9od/E1WsJ42JU4NMrLE+K+Yw0B5Mib2ZiJsmTonVhHw1oCCr2cHDBiXwSlnDmMPsucZg7vdpMwclAL5Bxd4DGlYDfZoxsZbDXxslwAVAoGvCOY9/d/YymordHfcAAAAASUVORK5CYII=",
  D3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T4VSQQoCMRDbF3jzOb7Ad3j3RT5E8OLBH3gXZL2I4EUvgpUMpGbT2d1CaCfTpJ1pu/XjVhSrSx/IOM8tj6fSYXEu78Kx+94D4Ahym9c1QL4aYDC5/Twbkd+MexoDFyOmAQEOQD4M4MrNFGZiHkC+MZgTZyUt9od/E1WsJ42JU4NMrLE+K+Yw0B5Mib2ZiJsmTonVhHw1oCCr2cHDBiXwSlnDmMPsucZg7vdpMwclAL5Bxd4DGlYDfZoxsZbDXxslwAVAoGvCOY9/d/YymordHfcAAAAASUVORK5CYII=",
  D2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T4VSQQoCMRDbF3jzOb7Ad3j3RT5E8OLBH3gXZL2I4EUvgpUMpGbT2d1CaCfTpJ1pu/XjVhSrSx/IOM8tj6fSYXEu78Kx+94D4Ahym9c1QL4aYDC5/Twbkd+MexoDFyOmAQEOQD4M4MrNFGZiHkC+MZgTZyUt9od/E1WsJ42JU4NMrLE+K+Yw0B5Mib2ZiJsmTonVhHw1oCCr2cHDBiXwSlnDmMPsucZg7vdpMwclAL5Bxd4DGlYDfZoxsZbDXxslwAVAoGvCOY9/d/YymordHfcAAAAASUVORK5CYII=",
  D1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T4VSQQoCMRDbF3jzOb7Ad3j3RT5E8OLBH3gXZL2I4EUvgpUMpGbT2d1CaCfTpJ1pu/XjVhSrSx/IOM8tj6fSYXEu78Kx+94D4Ahym9c1QL4aYDC5/Twbkd+MexoDFyOmAQEOQD4M4MrNFGZiHkC+MZgTZyUt9od/E1WsJ42JU4NMrLE+K+Yw0B5Mib2ZiJsmTonVhHw1oCCr2cHDBiXwSlnDmMPsucZg7vdpMwclAL5Bxd4DGlYDfZoxsZbDXxslwAVAoGvCOY9/d/YymordHfcAAAAASUVORK5CYII=",
  R5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAABzDACUFACkGAi9IAjmIAgd4YarAAAAAXRSTlMAQObYZgAAAF9JREFUGBkFwYFhBCEABCFGL/1X/G6gPwDAZ5qRRge2x/aMg9d6b/PDEc86s3Ny77ZhuE+HV0C/cawNmObQCchyJDmJOPiZd01yr0hPrD6mJdI6am4syWdOakV8ggT4B9TJMj71DhNqAAAAAElFTkSuQmCC",
  R4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAABzDACUFACkGAi9IAjmIAgd4YarAAAAAXRSTlMAQObYZgAAAF9JREFUGBkFwYFhBCEABCFGL/1X/G6gPwDAZ5qRRge2x/aMg9d6b/PDEc86s3Ny77ZhuE+HV0C/cawNmObQCchyJDmJOPiZd01yr0hPrD6mJdI6am4syWdOakV8ggT4B9TJMj71DhNqAAAAAElFTkSuQmCC",
  R3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAABzDACUFACkGAi9IAjmIAgd4YarAAAAAXRSTlMAQObYZgAAAF9JREFUGBkFwYFhBCEABCFGL/1X/G6gPwDAZ5qRRge2x/aMg9d6b/PDEc86s3Ny77ZhuE+HV0C/cawNmObQCchyJDmJOPiZd01yr0hPrD6mJdI6am4syWdOakV8ggT4B9TJMj71DhNqAAAAAElFTkSuQmCC",
  R2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAABzDACUFACkGAi9IAjmIAgd4YarAAAAAXRSTlMAQObYZgAAAF9JREFUGBkFwYFhBCEABCFGL/1X/G6gPwDAZ5qRRge2x/aMg9d6b/PDEc86s3Ny77ZhuE+HV0C/cawNmObQCchyJDmJOPiZd01yr0hPrD6mJdI6am4syWdOakV8ggT4B9TJMj71DhNqAAAAAElFTkSuQmCC",
  R1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAABzDACUFACkGAi9IAjmIAgd4YarAAAAAXRSTlMAQObYZgAAAF9JREFUGBkFwYFhBCEABCFGL/1X/G6gPwDAZ5qRRge2x/aMg9d6b/PDEc86s3Ny77ZhuE+HV0C/cawNmObQCchyJDmJOPiZd01yr0hPrD6mJdI6am4syWdOakV8ggT4B9TJMj71DhNqAAAAAElFTkSuQmCC",
  MS: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVQ4T52R0Q2DQAxD2QKpYoEO0AEqdRJGqToES5QtGKNTVOovxSec+pJQIT6s3EXhOT6adrrNR3UaL3ODw/3zDLq+H1WF2ldfhB7UDecfwNPVJetVAFxY/RZ0VfcA4Ab/NlFnVMxuAvwW3KzEWbZgDREUwA/96gZY5gJAQXTdBaBzBeLDrdlDzSJkAAx75xTApkbgXWE2qxGMLo5bSgH6ePZwAIsww61ChD3OXoBVAM1qzry7Hn9xAYCGwxHh2y/m+kzA61j7uAAAAABJRU5ErkJggg==",
};

function makeRank() {
  console.log("[R 전골 랭킹 확장팩] 랭크 추가중...");
  const problemsElement = document.querySelector("#fboardlist > table > tbody");
  if (problemsElement == null) {
    const h1 = document.querySelector("#bo_v_title");
    if (h1 == null) return;
    const quesName = document
      .querySelector("#bo_v_title")
      .innerText.split(":")
      .slice(-1)
      .join("")
      .trim();
    if (Ranks[quesName] == undefined) {
      const rankImage = RankImages["UK"];
      h1.innerHTML =
        `<img src="${rankImage}" alt="Unknown Rank" style="width: 28px; height: 28px;" />` +
        h1.innerHTML;
    } else {
      const rankImage = RankImages[Ranks[quesName]];
      h1.innerHTML =
        `<img src="${rankImage}" alt="${Ranks[quesName]}" style="width: 28px; height: 28px;" />` +
        h1.innerHTML;
    }
    console.log("[R 전골 랭킹 확장팩] 랭크 추가 완료!");
    return;
  }
  const problems = problemsElement.querySelectorAll("tr");

  // loop through problems
  for (let i = 0; i < problems.length; i++) {
    const problem = problems[i];
    const td1 = problem.querySelector("td:nth-child(1)");
    const td2 = problem.querySelector("td:nth-child(2)");

    const problemName = td2.querySelector("a").innerText.trim();
    const td1_div = td1.querySelector("div");

    if (Ranks[problemName] != undefined) {
      const rank = Ranks[problemName];
      const rankImage = RankImages[rank];

      if (td1_div == null) {
        td1.innerHTML =
          `<img src="${rankImage}" alt="${rank}" style="width: 15px; height: 15px;" />` +
          td1.innerHTML;
      } else {
        td1_div.style.display = "inline";
        td1_div.innerHTML =
          `<img src="${rankImage}" alt="${rank}" style="width: 15px; height: 15px;" />` +
          td1_div.innerHTML;
      }
    } else {
      const rankImage = RankImages["UK"];
      td1_div.style.display = "inline";
      td1_div.innerHTML = `<img src="${rankImage}" alt="Unknown Rank" style="width: 15px; height: 15px;" />`;
    }
  }
  console.log("[R 전골 랭킹 확장팩] 랭크 추가 완료!");
}

if (getParmas("bo_table") != undefined) {
  const bo_table = getParmas("bo_table");
  if (bo_table == "pbank") {
    makeRank();
  }
}