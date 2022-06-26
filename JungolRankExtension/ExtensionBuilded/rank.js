let url = location.href;
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function getParmas(name) {
  return params[name];
}

const jungolACURL = "https://jungoler.vercel.app";

console.log(`
          [R 전골 랭킹 확장팩]          
   저의 Extension을 사용해주셔서 감사합니다.
   Thank you for using my Extension.

   Codes are written by @banana100219.
     Github : https://github.com/Oein
   Resources are provided by @sdnight5.

`);

const RankImages = {};

for (let i = 0; i <= 30; i++) {
  RankImages[i] = `https://jungoler.vercel.app/JungolAC/${i}.svg`;
}

let Ranks = {};

function makeRank() {
  console.log("[R 전골 랭킹 확장팩] 랭크 추가중...");
  const problemsElement = document.querySelector("#fboardlist > table > tbody");
  if (problemsElement == null) {
    const h1 = document.querySelector("#bo_v_title");
    if (h1 == null) return;
    const quesName = document
      .querySelector("#bo_v_title")
      .innerText.split(":")[0];
    fetch(
      jungolACURL + "/api/JungolAC/rank/get/" + quesName.toString().trim()
    ).then((data) => {
      data.json().then((json) => {
        const rankImage = RankImages[json.ProblemRank];
        h1.innerHTML =
          `<img src="${rankImage}" alt="Unknown Rank" style="width: 28px; height: 28px;" />` +
          h1.innerHTML;
        console.log("[R 전골 랭킹 확장팩] 랭크 추가 완료!");
      });
    });

    return;
  }

  const problems = problemsElement.querySelectorAll("tr");

  // loop through problems
  for (let i = 0; i < problems.length; i++) {
    const problem = problems[i];
    const td1 = problem.querySelector("td:nth-child(1)");

    const problemName = td1.innerText.trim();
    const td1_div = td1.querySelector("div");

    console.log(problemName);
    fetch(
      jungolACURL + "/api/JungolAC/rank/get/" + problemName.toString().trim()
    ).then((data) => {
      data.json().then((json) => {
        const rankImage = RankImages[json.ProblemRank];
        if (td1_div != null) {
          td1_div.style.display = "inline";
          td1_div.innerHTML = `<img src="${rankImage}" alt="Unknown Rank" style="width: 15px; height: 15px;" />`;
        } else {
          td1.innerHTML =
            `<img src="${rankImage}" alt="Unknown Rank" style="width: 15px; height: 15px;" />` +
            td1.innerHTML;
        }
        console.log("[R 전골 랭킹 확장팩] 랭크 추가 완료!");
      });
    });
  }
}

if (getParmas("bo_table") != undefined) {
  const bo_table = getParmas("bo_table");
  if (bo_table == "pbank") {
    makeRank();
  }
}
