let importantStyle = `
.mc5 .s_tcl:nth-child(1):after {
    background: none;
}
`;

let style = importantStyle;

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
    styleKey: "color",
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

let obkc = Object.keys(colors);
let lastColorKey = obkc[obkc.length - 1];

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

/**
 *
 * @param {string} msg
 */
function log(msg) {
  console.log("[🎨 전골 테마 확장팩] " + msg);
}

console.log(`
          [🎨 전골 테마 확장팩]          
   저의 Extension을 사용해주셔서 감사합니다.
   Thank you for using my Extension.

   Codes are written by @banana100219.
     Github : https://github.com/Oein
   Resources are provided by @sdnight5.

`);

let styleDocument = document.createElement("style");
styleDocument.id = "JungolThemeExtensionStyle";
document.head.appendChild(styleDocument);

function reMakeStyle() {
  let imageUrl =
    "data:image/png;base64,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";
  document.querySelector("#logo > a > img").src = imageUrl;
  style = importantStyle;
  Object.keys(colors).forEach(
    function (key) {
      getData(key, function (result) {
        if (result[key]) {
          style += `${colors[key].styleSelector} { ${colors[key].styleKey} : ${result[key]}!important }
  `;
        } else {
          setData(key, colors[key]);

          style += `${colors[key].styleSelector} { ${colors[key].styleKey} : ${result[key]}!important }
  `;
        }

        if (key == lastColorKey) {
          styleDocument.innerHTML = style;
          log("적용 완료!");
        }
      });
    }.bind(this)
  );
}

function changeTheme() {
  getData("onoff", function (result) {
    if (result["onoff"] != undefined) {
      if (result["onoff"]) {
        log("테마 적용중...");
        reMakeStyle();
      } else {
        log("테마 적용 : off");
        styleDocument.innerHTML = "";
        document.querySelector("#logo > a > img").src =
          "http://jungol.co.kr/theme/jungol/img/layout/hd_logo.png";
      }
    } else {
      log("테마 적용중...");
      setData("onoff", true);
      reMakeStyle();
    }
  });
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
  setTimeout(changeTheme, 100);
});
changeTheme();
