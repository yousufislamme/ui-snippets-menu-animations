!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="./",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){"use strict";Array.from(document.getElementsByTagName("path")).map(function(path){console.log(path.getTotalLength());var debugPath=path.cloneNode();debugPath.classList.add("line--debug"),path.parentNode&&path.parentNode.insertBefore(debugPath.cloneNode(),path)});var debugCheckbox=document.getElementById("debug");debugCheckbox.addEventListener("change",function(){debugCheckbox.parentElement&&(debugCheckbox.checked?debugCheckbox.parentElement.classList.add("active"):debugCheckbox.parentElement.classList.remove("active"))});var toggleCheckbox=document.getElementById("menu-or-dots");toggleCheckbox.addEventListener("click",function(){console.log("x"),toggleCheckbox.classList.contains("menu")?Array.from(document.getElementsByClassName("menu")).map(function(elem){elem.classList.remove("menu"),elem.classList.add("dots")}):Array.from(document.getElementsByClassName("dots")).map(function(elem){elem.classList.remove("dots"),elem.classList.add("menu")})});var currentActive=0,checkboxes=document.querySelectorAll(".grid input"),autoShow=setInterval(function(){checkboxes[currentActive%4].checked=!checkboxes[currentActive%4].checked,checkboxes[currentActive%4].checked||(currentActive+=1)},1e3),grid=document.querySelector(".grid");grid&&grid.addEventListener("click",function(){clearInterval(autoShow)})},function(module,exports){module.exports='<label class="debug">\n  <input id="debug" type="checkbox"> Debug\n</label>\n<label id="menu-or-dots" class="menu">\n</label>\n<div class="grid">\n  <div class="menu cross menu--1">\n    <label>\n      <input type="checkbox">\n      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="30" />\n        <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />\n        <path class="line--2" d="M0 50h70" />\n        <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />\n      </svg>\n    </label>\n  </div>\n  <div class="menu cross menu--2">\n    <label>\n      <input type="checkbox">\n      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="30" />\n        <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />\n        <path class="line--2" d="M0 50h99" />\n        <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />\n      </svg>\n    </label>\n  </div>\n  <div class="menu back menu--3">\n    <label>\n      <input type="checkbox">\n      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="30" />\n        <path class="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />\n        <path class="line--2" d="M0 50h80" />\n        <path class="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />\n      </svg>\n    </label>\n  </div>\n  <div class="menu back menu--4">\n    <label>\n      <input type="checkbox">\n      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="30" />\n        <path class="line--1" d="M0 55l14-10c4.7-3.3 9-5 13-5h72" />\n        <path class="line--2" d="M0 50h99" />\n        <path class="line--3" d="M0 45l14 10c4.7 3.3 9 5 13 5h72" />\n      </svg>\n    </label>\n  </div>\n</div>\n'},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(2);const body=__webpack_require__(1);document.body.innerHTML=body},function(module,exports,__webpack_require__){__webpack_require__(3),module.exports=__webpack_require__(0)}]);
//# sourceMappingURL=bundle.9e401b4ab87680ed2aab.js.map