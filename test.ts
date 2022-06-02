// const title = document.querySelector("#title");
// if (title instanceof Element) {
//   title.innerHTML = "반가워요";
// }

// 자주 쓰지말기
// const title = document.querySelector("#title") as Element;
// title.innerHTML = "반가워요";

// const title = document.querySelector("#title");
// if (title?.innerHTML != undefined) {
//   title.innerHTML = "반가워요";
// }

const link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}
