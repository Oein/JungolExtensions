let onoff = document.getElementById("onoff");
let containor = document.getElementById("containor");
let tpsa = document.getElementById("tpsa");
let tps = document.getElementById("tps");

let colors = {
  "background-color": {
    color: "#ffffff",
    styleSelector:
      "#hd , body , body #gnb_1dul * , #mb_login #login_fs , .btn_mo_menu.op , #gnb_1dul",
    styleKey: "background",
  },
  "black-text-color": {
    color: "#101010",
    styleSelector: "#hd , body , body #gnb_1dul * , .mc1 span",
    styleKey: "color",
  },
  "link-color": {
    color: "#333333",
    styleSelector: "a",
    styleKey: "color",
  },
  "gray-text-color": {
    color: "#606060",
    styleSelector: ".mc1 dl > dd , .tbl_head01 td",
    styleKey: "color",
  },
  "light-gray-text-color": {
    color: "#a0a0a0",
    styleSelector:
      "#util li a , #ft_copy .cop , #ft_copy span , .mc3 ul li .bd dl dd > .data",
    styleKey: "color",
  },
  "white-text-color": {
    color: "#ffffff",
    styleSelector: "#mb_login #login_fs .btn_submit , .mc5 .s_tcl , .btn_top",
    styleKey: "color",
  },
  "bondi-blue-background-color": {
    color: "#00adb5",
    styleSelector: "#mb_login #login_fs .btn_submit , .mc5 .s_tcl:hover:before",
    styleKey: "background",
  },
  "bondi-blue-text-color": {
    color: "#00adb5",
    styleSelector: ".mc5 .s_tcl .t1 , .mc3 ul li .bd dl dt",
    styleKey: "color",
  },
  "mine-shaft-text-color": {
    color: "#303030",
    styleSelector: ".v_title",
  },
  "footer-background-color": {
    color: "#191919",
    styleSelector: "#ft",
    styleKey: "background",
  },
  "top-button-background-color": {
    color: "#303030",
    styleSelector: ".btn_top:after",
    styleKey: "background",
  },
  "top-button-hover-background-color": {
    color: "#242275",
    styleSelector: ".btn_top",
    styleKey: "background",
  },
  "footer-ads-background-color": {
    color: "#222222",
    styleSelector: ".mc5",
    styleKey: "background",
  },
  "footer-ads-spliter-color": {
    color: "#14181d",
    styleSelector: ".mc5 .s_tcl",
    styleKey: "border-color",
  },
  "footer-ads-right-arrow-button-border-color": {
    color: "#ffffff",
    styleSelector: ".mc5 .s_tcl:before",
    styleKey: "border-color",
  },
  "board-background-color": {
    color: "#eeeeee",
    styleSelector: ".mc3 ul li .bd",
    styleKey: "background",
  },
  "header-submenu-background-color": {
    color: "#282828",
    styleSelector: "#gnb_2dul",
    styleKey: "background",
  },
  "table-odd-row-background-color": {
    color: "#ffffff",
    styleSelector: "tbody tr:nth-child(odd)",
    styleKey: "background",
  },
  "table-even-row-background-color": {
    color: "#f1f5f5",
    styleSelector: "tbody tr:nth-child(even)",
    styleKey: "background",
  },
  "current-tab-button-border-color": {
    color: "#00adb5",
    styleSelector: ".taps .current",
    styleKey: "border-color",
  },
};

let ColorPresets = [
  {
    "background-color": "#ffffff",
    "black-text-color": "#101010",
    "link-color": "#333333",
    "gray-text-color": "#606060",
    "light-gray-text-color": "#a0a0a0",
    "white-text-color": "#ffffff",
    "bondi-blue-background-color": "#00adb5",
    "bondi-blue-text-color": "#00adb5",
    "mine-shaft-text-color": "#303030",
    "footer-background-color": "#191919",
    "top-button-background-color": "#303030",
    "top-button-hover-background-color": "#242275",
    "footer-ads-background-color": "#222222",
    "footer-ads-spliter-color": "#14181d",
    "footer-ads-right-arrow-button-border-color": "#ffffff",
    "board-background-color": "#eeeeee",
    "header-submenu-background-color": "#282828",
    "table-odd-row-background-color": "#ffffff",
    "table-even-row-background-color": "#f1f5f5",
    "current-tab-button-border-color": "#00adb5",
  },
  {
    "background-color": "#d4d4d4",
    "black-text-color": "#d4d4d4",
    "link-color": "#d4d4d4",
    "gray-text-color": "#d4d4d4",
    "light-gray-text-color": "#d4d4d4",
    "white-text-color": "#d4d4d4",
    "bondi-blue-background-color": "#d4d4d4",
    "bondi-blue-text-color": "#d4d4d4",
    "mine-shaft-text-color": "#d4d4d4",
    "footer-background-color": "#d4d4d4",
    "top-button-background-color": "#d4d4d4",
    "top-button-hover-background-color": "#d4d4d4",
    "footer-ads-background-color": "#d4d4d4",
    "footer-ads-spliter-color": "#d4d4d4",
    "footer-ads-right-arrow-button-border-color": "#d4d4d4",
    "board-background-color": "#d4d4d4",
    "header-submenu-background-color": "#d4d4d4",
    "table-odd-row-background-color": "#d4d4d4",
    "table-even-row-background-color": "#d4d4d4",
    "current-tab-button-border-color": "#d4d4d4",
  },
];

/*



































*/

/**
 *
 * @param {string} key
 * @param {(result:string) => void} callback
 */
function getData(key, callback) {
  chrome.storage.local.get([key], callback);
}

Object.keys(colors).forEach(
  function (key) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.id = key;
    colorInput.className = "ci";
    colorInput.addEventListener("change", function () {
      changed(this);
    });

    div2.innerText = key.replaceAll("-", " ");

    div.appendChild(colorInput);
    div.appendChild(div2);

    containor.appendChild(div);

    getData(key, function (result) {
      if (result[key] != undefined) {
        console.log("Result exists: " + key + " = " + result[key]);
        document.getElementById(key).value = result[key];
      } else {
        console.log("Result does not exist: " + key);
        setData(key, colors[key].color);
        document.getElementById(key).value = colors[key].color;
      }
    });
  }.bind(this)
);

/**
 *
 * @param {string} key
 * @param {string} value
 */
function setData(key, value) {
  let g = {};
  g[key] = value;
  chrome.storage.local.set(g, function () {
    console.log("Storage[" + key + "] set to " + value);
  });
}

function changed(ele) {
  let color = ele.value;
  setData(ele.id, color);
}

getData(
  "onoff",
  function (result) {
    if (result["onoff"] != undefined) {
      onoff.checked = result["onoff"];
    } else {
      onoff.checked = true;
      setData("onoff", true);
    }
  }.bind(this)
);

onoff.addEventListener("change", function () {
  let on = this.checked;
  setData("onoff", on);
});

tpsa.addEventListener("click", function () {
  let tpsV = Number(document.getElementById("tps").value);
  Object.keys(ColorPresets[tpsV]).forEach(
    function (key) {
      setData(key, ColorPresets[tpsV][key]);
      document.getElementById(key).value = ColorPresets[tpsV][key];
    }.bind(this)
  );
  tpsa.innerText = "적용 완료!";
  setTimeout(() => {
    tpsa.innerText = "적용";
  }, 500);
});
