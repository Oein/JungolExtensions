let x = document.querySelector("#bo_v > h3:nth-child(4)");

console.log(`
           [๐ฌ ์ ๊ณจ ์ํต ํ์ฅํฉ]          
   ์ ์ Extension์ ์ฌ์ฉํด์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค.
   Thank you for using my Extension.

   Codes are written by @banana100219.
     Github : https://github.com/Oein
   Resources are provided by @sdnight5.

`);

if (x != null && x.innerText == "๋ฌธ์ ") {
  console.log("[๐ฌ ์ ๊ณจ ๋๊ธ ํ์ฅํฉ] ๋๊ธ ์ถ๊ฐ์ค...");
  let title = document.createElement("h3");
  title.className = "v_title";
  title.innerHTML = "๋๊ธ";
  let div = document.createElement("div");
  div.id = "disqus_thread";
  var d = document,
    s = d.createElement("script");
  s.src = "https://jungoloeinscommentextension.disqus.com/embed.js";
  s.onload = () => {
    console.log("[๐ฌ ์ ๊ณจ ๋๊ธ ํ์ฅํฉ] ๋๊ธ ์ถ๊ฐ ์๋ฃ!");
  };
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
  document.querySelector("#bo_v").appendChild(title);
  document.querySelector("#bo_v").appendChild(div);
}
