document.removeEventListener("DOMContentLoaded", () => {
  let r = false;
  let last = document.body.innerHTML;
  let observer = new MutationObserver((e) => {
    if (r) {
      r = false;
      return;
    }
    //document.body.innerHTML = last;
    r = true;
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterDataOldValue: true,
  });
});

let ggxppp = document.querySelector("#bo_v > h3:nth-child(4)");

document.querySelector(
  "#container > div.sub_wrap.wrap.clear > div.lnb_area"
).innerHTML = "";
document.querySelector(
  "#container > div.sub_wrap.wrap.clear > div.con_area"
).innerHTML = "";

let iframe = document.createElement("iframe");
iframe.src = "https://oein.7m.pl/9-2/?mod=list&pageid=1";
iframe.style.border = "none";
iframe.style.outline = "none";
iframe.style.width = "100%";
iframe.style.height = "calc(100vh - 100px)";

document.querySelector("#container > div.sub_wrap.wrap.clear").style.maxWidth =
  "100%";
document.querySelector("#ft").style.display = "none";
for (let i = 0; i < 300; i++) {
  clearInterval(i);
}
setTimeout(() => {
  document
    .querySelector("#container > div.sub_wrap.wrap.clear > div.con_area")
    .appendChild(iframe);
}, 100);
