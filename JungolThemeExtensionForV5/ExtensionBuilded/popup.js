let colorSetting = {};
let jl = {};
let aosdij = "";

function colorHandler(id, color) {
  console.log(`[Color] ${id} ${color}`);
  colorSetting[id] = color;
  saveSetting(JT_stringify(colorSetting));

  document.getElementById("jt").value = JT_stringify(colorSetting);
}

function tr(id, name, c) {
  let tr = document.createElement("tr");

  let td2 = document.createElement("td");
  td2.innerText = name;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  let color = document.createElement("input");
  color.type = "color";
  color.id = `${id}.color`;
  color.addEventListener("change", (e) => {
    colorHandler(id, e.target.value);
  });
  color.value = c;

  td3.appendChild(color);
  tr.appendChild(td3);

  return tr;
}

/* Utils */
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

function JT_parse(str) {
  let json = {};
  str = str.trim();
  str = replaceAll(str, "\n", "");
  str = replaceAll(str, " ", "");

  if (str[str.length - 1] == ";") {
    str = str.substr(0, str.length - 1);
  }

  let str_p = str.split(";");

  str_p.forEach((v) => {
    json[v.split("=")[0]] = v.split("=")[1];
  });

  return json;
}

function JT_stringify(JT) {
  let str = "";

  Object.keys(JT).forEach((k) => {
    str += k + "=" + JT[k] + ";";
  });

  if (str[str.length - 1] == ";") {
    str = str.substr(0, str.length - 1);
  }

  return str;
}

function saveSetting(JT_str) {
  chrome.storage.local.set({ set: JT_str });
}

function getSetting(callback) {
  chrome.storage.local.get(["set"], function (result) {
    callback(result.set);
  });
}

async function loadFile(fileName) {
  return new Promise(async function (resolve, reject) {
    let x = await fetch(chrome.runtime.getURL("/" + fileName));
    let j = x.json();
    resolve(j);
  });
}

function main(jol, c) {
  document.getElementById("tb").innerHTML = "";
  console.log(jol, c);
  colorSetting = c;
  let jol_k = Object.keys(jol);
  jol_k.forEach(function (key) {
    document.getElementById("tb").appendChild(tr(key, jol[key]["n"], c[key]));
  });

  document.getElementById("jt").value = JT_stringify(colorSetting);
}

getSetting(async (x) => {
  if (x == undefined) {
    console.log("Undef");
    let g = await loadFile("jol.json");
    let y = {};
    Object.keys(g).forEach((e) => {
      y[e] = g[e]["r"];
    });
    console.log(y);
    aosdij = JT_stringify(y);

    jl = g;
    main(g, y);
  } else {
    let g = await loadFile("jol.json");

    console.log(g);
    let y = {};
    Object.keys(g).forEach((e) => {
      console.log(e);
      y[e] = g[e]["r"];
    });
    console.log(y);
    aosdij = JT_stringify(y);

    console.log(JT_parse(x));

    jl = g;
    main(g, JT_parse(x));
  }
});

document.getElementById("c").addEventListener("click", () => {
  document.getElementById("jt").value = aosdij;
  main(jl, JT_parse(document.getElementById("jt").value));
  saveSetting(aosdij);
});

document.getElementById("l").addEventListener("click", () => {
  main(jl, JT_parse(document.getElementById("jt").value));
});

document.getElementById("s").addEventListener("click", () => {
  alert(JT_stringify(colorSetting));
});
