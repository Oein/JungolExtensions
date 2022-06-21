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
  101: "UK",
  102: "UK",
  103: "UK",
  104: "UK",
  105: "UK",
  501: "UK",
  502: "UK",
  503: "UK",
  504: "UK",
  505: "UK",
  506: "UK",
  507: "UK",
  508: "UK",
  106: "UK",
  107: "UK",
  108: "UK",
  109: "UK",
  110: "UK",
  509: "UK",
  510: "UK",
  511: "UK",
  512: "UK",
  513: "UK",
  514: "UK",
  515: "UK",
  516: "UK",
  517: "UK",
  111: "UK",
  112: "UK",
  113: "UK",
  114: "UK",
  115: "UK",
  518: "UK",
  519: "UK",
  520: "UK",
  521: "UK",
  522: "UK",
  523: "UK",
  524: "UK",
  525: "UK",
  116: "UK",
  117: "UK",
  118: "UK",
  119: "UK",
  526: "UK",
  527: "UK",
  120: "UK",
  121: "UK",
  122: "UK",
  123: "UK",
  124: "UK",
  528: "UK",
  529: "UK",
  530: "UK",
  531: "UK",
  532: "UK",
  533: "UK",
  534: "UK",
  535: "UK",
  632: "UK",
  125: "UK",
  126: "UK",
  127: "UK",
  128: "UK",
  129: "UK",
  536: "UK",
  537: "UK",
  538: "UK",
  539: "UK",
  540: "UK",
  633: "UK",
  130: "UK",
  131: "UK",
  132: "UK",
  133: "UK",
  134: "UK",
  135: "UK",
  136: "UK",
  137: "UK",
  138: "UK",
  139: "UK",
  541: "UK",
  542: "UK",
  543: "UK",
  544: "UK",
  545: "UK",
  546: "UK",
  547: "UK",
  548: "UK",
  140: "UK",
  141: "UK",
  142: "UK",
  143: "UK",
  144: "UK",
  145: "UK",
  146: "UK",
  147: "UK",
  148: "UK",
  149: "UK",
  549: "UK",
  550: "UK",
  551: "UK",
  552: "UK",
  553: "UK",
  554: "UK",
  634: "UK",
  150: "UK",
  151: "UK",
  152: "UK",
  153: "UK",
  154: "UK",
  155: "UK",
  156: "UK",
  157: "UK",
  158: "UK",
  159: "UK",
  555: "UK",
  556: "UK",
  557: "UK",
  558: "UK",
  559: "UK",
  560: "UK",
  561: "UK",
  562: "UK",
  563: "UK",
  160: "UK",
  161: "UK",
  162: "UK",
  163: "UK",
  164: "UK",
  165: "UK",
  166: "UK",
  167: "UK",
  168: "UK",
  169: "UK",
  564: "UK",
  565: "UK",
  566: "UK",
  567: "UK",
  568: "UK",
  569: "UK",
  570: "UK",
  170: "UK",
  171: "UK",
  172: "UK",
  173: "UK",
  174: "UK",
  571: "UK",
  572: "UK",
  573: "UK",
  574: "UK",
  575: "UK",
  576: "UK",
  577: "UK",
  578: "UK",
  175: "UK",
  176: "UK",
  177: "UK",
  178: "UK",
  179: "UK",
  180: "UK",
  181: "UK",
  579: "UK",
  580: "UK",
  581: "UK",
  582: "UK",
  583: "UK",
  584: "UK",
  585: "UK",
  586: "UK",
  231: "UK",
  232: "UK",
  233: "UK",
  234: "UK",
  235: "UK",
  236: "UK",
  587: "UK",
  588: "UK",
  589: "UK",
  590: "UK",
  591: "UK",
  592: "UK",
  182: "UK",
  183: "UK",
  184: "UK",
  185: "UK",
  186: "UK",
  187: "UK",
  188: "UK",
  593: "UK",
  594: "UK",
  595: "UK",
  596: "UK",
  597: "UK",
  598: "UK",
  599: "UK",
  600: "UK",
  601: "UK",
  189: "UK",
  190: "UK",
  191: "UK",
  192: "UK",
  193: "UK",
  194: "UK",
  215: "UK",
  216: "UK",
  237: "UK",
  602: "UK",
  603: "UK",
  604: "UK",
  605: "UK",
  606: "UK",
  607: "UK",
  608: "UK",
  609: "UK",
  610: "UK",
  611: "UK",
  612: "UK",
  195: "UK",
  196: "UK",
  197: "UK",
  198: "UK",
  199: "UK",
  613: "UK",
  614: "UK",
  615: "UK",
  616: "UK",
  617: "UK",
  618: "UK",
  200: "UK",
  201: "UK",
  202: "UK",
  203: "UK",
  204: "UK",
  619: "UK",
  620: "UK",
  621: "UK",
  622: "UK",
  623: "UK",
  624: "UK",
  625: "UK",
  205: "UK",
  206: "UK",
  207: "UK",
  208: "UK",
  209: "UK",
  210: "UK",
  211: "UK",
  212: "UK",
  213: "UK",
  214: "UK",
  626: "UK",
  627: "UK",
  628: "UK",
  629: "UK",
  630: "UK",
  631: "UK",
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
      .innerText.split(":")[0];
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

    const problemName = td1.innerText.trim();
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
      if (td1_div != null) {
        td1_div.style.display = "inline";
        td1_div.innerHTML = `<img src="${rankImage}" alt="Unknown Rank" style="width: 15px; height: 15px;" />`;
      } else {
        td1.innerHTML =
          `<img src="${rankImage}" alt="Unknown Rank" style="width: 15px; height: 15px;" />` +
          td1.innerHTML;
      }
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
