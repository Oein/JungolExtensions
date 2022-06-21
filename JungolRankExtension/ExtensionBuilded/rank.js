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

const Ranks = {};

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
