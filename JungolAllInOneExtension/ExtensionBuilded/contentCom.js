let x = document.querySelector("#bo_v > h3:nth-child(4)");

console.log(`
          [💬 전골 댓글 확장팩]          
   저의 Extension을 사용해주셔서 감사합니다.
   Thank you for using my Extension.

   Codes are written by @banana100219.
     Github : https://github.com/Oein
   Resources are provided by @sdnight5.

`);

if (x != null && x.innerText == "문제") {
  console.log("[💬 전골 댓글 확장팩] 댓글 추가중...");
  let title = document.createElement("h3");
  title.className = "v_title";
  title.innerHTML = "댓글";
  let div = document.createElement("div");
  div.id = "disqus_thread";
  var d = document,
    s = d.createElement("script");
  s.src = "https://jungoloeinscommentextension.disqus.com/embed.js";
  s.onload = () => {
    console.log("[💬 전골 댓글 확장팩] 댓글 추가 완료!");
  };
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
  document.querySelector("#bo_v").appendChild(title);
  document.querySelector("#bo_v").appendChild(div);
}
