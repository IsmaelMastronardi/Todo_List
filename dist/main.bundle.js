"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n  background-color: rgb(240, 240, 240);\n}\n\n.todoListSection {\n  width: 300px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 2px 10px grey;\n}\n\n.todoTitle,\n.todoAddP {\n  border-bottom: 1px solid;\n  flex-direction: row;\n  align-items: center;\n}\n\n.addContainer {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid;\n}\n\n.addBtn {\n  background-color: transparent;\n  margin-left: 0;\n  margin-right: 10px;\n  border: 0;\n  z-index: 2;\n  width: 18px;\n}\n\n.buttonImg {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  z-index: 1;\n}\n\n.todoTitle {\n  height: 40px;\n}\n\n.todoAddP {\n  height: 18px;\n  margin-left: 10px;\n  font-style: oblique;\n  color: grey;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px;\n  resize: none;\n  overflow: hidden;\n}\n\n.listPlaceholder {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.hasLineThrough {\n  text-decoration: line-through;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 10px;\n  display: flex;\n}\n\nli {\n  border-bottom: 1px solid;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\ninput {\n  margin-left: 10px;\n}\n\n.itemName {\n  width: 100%;\n}\n\n.itemTextArea {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px;\n  resize: none;\n  border: 0;\n  overflow: hidden;\n}\n\n.clearBtn {\n  height: 40px;\n  border: none;\n  transition: 0.1s;\n}\n\n.clearBtn:active {\n  background-color: rgb(211, 211, 211);\n}\n\n.imgDiv {\n  display: flex;\n  justify-content: end;\n}\n\n.Dots {\n  width: 20px;\n}\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},683:(e,n,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),d=t(565),l=t.n(d),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=t.p+"f587c2b8be786d80be09.png",x=t.p+"dea88cbb5d81822a05c2.png",y=document.querySelector("#todoListPlaceholder");function b(e){const n=document.createElement("li");n.className="ListItem",n.id=e.index,n.innerHTML=`\n  <input type="checkbox" class="checkboxBtn" id="a${e.index}">\n  <textarea name="itemDescription" class="itemTextArea" id="b${e.index}" rows="1" cols="50">${e.description}</textarea>\n  <div class="imgDiv">\n  <img src="${v}" class="Dots" id="d${e.index}">\n  </div>\n  `,y.appendChild(n),!0===e.completed&&(document.querySelector(`#a${e.index}`).checked=!0,document.getElementById(`${e.index}`).classList.add("hasLineThrough"))}function w(){for(;y.firstChild;)y.removeChild(y.firstChild)}const k=document.querySelector("#addTaskArea"),S=JSON.parse(localStorage.getItem("tasks"))||[];function T(){localStorage.setItem("tasks",JSON.stringify(S))}const E=()=>{const e=k.value;if(""!==k.value){const n={description:e.trimStart(),completed:!1,index:S.length+1};S.push(n),w(),S.forEach((e=>b(e))),k.value=""}T()},L=e=>{S.splice(e-1,1),function(){for(let e=0;e<S.length;e+=1)S[e].index=e+1}(),w(),S.forEach((e=>b(e))),T()},C=t.p+"824c48527687f321e3bf.png",I=document.querySelector("#addBtn"),A=document.querySelector("#buttonImg"),N=document.querySelector("#clearBtn");document.querySelector("#addTaskArea").addEventListener("keypress",(e=>{13===e.which&&(e.preventDefault(),E())})),A.src=C,I.addEventListener("click",E),S.sort(((e,n)=>e.index-n.index)),S.forEach((e=>b(e))),y.addEventListener("click",(e=>{const n=e.target.id.substring(1);((e,n,t)=>{e.stopPropagation();const r=e.target;r.matches(".itemTextArea")&&(t.src=x,t.addEventListener("click",(()=>{L(n)})),r.addEventListener("keypress",(e=>{if(13===e.which){e.preventDefault();const t=e.target.value;""===t.trimStart().replace(/[\n]/gm,"").trimEnd()?L(n):(S[n-1].description=t.trimStart().replace(/[\n]/gm,"").trimEnd(),T())}})),document.body.addEventListener("click",(()=>{t.src=v})))})(e,n,document.querySelector(`#d${n}`)),((e,n,t)=>{const r=document.getElementById(`${n}`),o=n-1;if(e.target.matches(".checkboxBtn")){const e=t[o].completed;t[o].completed=!e,!0===t[o].completed?r.classList.add("hasLineThrough"):r.classList.remove("hasLineThrough")}})(e,n,S),T()})),N.addEventListener("click",(e=>{e.preventDefault(),(e=>{const n=e.filter((e=>!1===e.completed));for(let e=0;e<n.length;e+=1)n[e].index=e+1;localStorage.setItem("tasks",JSON.stringify(n)),e.splice(0,e.length);for(let t=0;t<n.length;t+=1)e.push(n[t]);w(),e.forEach((e=>b(e)))})(S)}))}},e=>{e(e.s=683)}]);