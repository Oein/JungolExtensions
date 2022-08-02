let sadnkjajsnkd = {};

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

function log(str) {
  console.log(`[Jungol Theme+] ${str}`);
}

log("Theme extension enabled");

function main(a, b) {
  let border_r = "10px";
  let css = "";
  css += `thead > tr > th:nth-child(1) { border-radius: ${border_r} 0px 0px 0px; }${"\n"}`;
  css += `thead > tr > th:last-child { border-radius: 0px ${border_r} 0px 0px; }${"\n"}`;
  css += `tbody > tr:last-child > td:nth-child(1) { border-radius: 0px 0px ${border_r} 0px; }${"\n"}`;
  css += `tbody > tr:last-child > td:last-child { border-radius: 0px 0px 0px ${border_r}; }${"\n"}`;
  let style = document.createElement("style");
  let bk = Object.keys(b);

  bk.forEach((k) => {
    log(a[k]["c"].replace("$d", b[k]));
    css += a[k]["c"].replace("$d", b[k]) + "\n";
  });

  style.innerHTML = css;
  style.id = "JungolThemePlus";
  document.head.appendChild(style);
}

let g = loadFile("jol.json");
g.then((r) => {
  let rk = Object.keys(r);
  getSetting((k) => {
    if (k == undefined) {
      log("Setting is empty");

      let jol = {};

      rk.forEach((k) => {
        jol[k] = r[k]["r"];
      });

      log(JT_stringify(jol));
      saveSetting(JT_stringify(jol));
      log("Setting : " + JT_stringify(jol));

      sadnkjajsnkd = r;
      main(r, jol);
    } else {
      if (k.split(";").length != rk.length) {
        log("Setting is old");

        let jol = {};

        rk.forEach((k) => {
          jol[k] = r[k]["r"];
        });

        log(JT_stringify(jol));
        saveSetting(JT_stringify(jol));
      }
      log("Setting : " + k);

      sadnkjajsnkd = r;
      main(r, JT_parse(k));
    }
  });
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    document.getElementById("JungolThemePlus").remove();
    main(sadnkjajsnkd, JT_parse(storageChange.newValue));
  }
});
