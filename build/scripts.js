/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/eventhandler.js
function handleEvents(event) {
  switch (event.type) {
    case "startingoptions":
      console.log(event.socials);
      Object.keys(event.socials).forEach(key => {
        console.log(event.socials[key]);
        switch (key) {
          case "twitter":
          case "steam":
          case "facebook":
          case "instagram":
          case "patreon":

          case "soundcloud":

          case "youtube":
            addLI(key, event.socials[key]);
            break;
          case "player":
            let htmlString = `
            <li id='${key}')>
              <div>${key}<i class="${key} speciali"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 16 20" style=" fill:#000000;">  <path d="M 8,0 A 8,8 0 0 0 0,8 c 0,6 7,12 7,12 v -8.141 a 4,4 0 1 1 2,0 v 4.072 A 8,8 0 0 0 8,0 Z"></path></svg></i></div>
            </li>
            `;
            $("#sociallist").append(htmlString);
            $("#" + key).on("click", event => {
              mixer.socket.call(
                "giveInput",
                {
                  controlID: "social",
                  event: "mousedown",
                  social: event.currentTarget.id
                },
                true
              );
            });

            break;
          case "spreadshirt":
            break;
        }
      });

      break;
    default:
      console.log("Unknown Event Type: " + event.type);
      console.log(event);
  }
}

function addLI(website, url) {
  let htmlString = `
        <li id='${website}')>
          <div>${website}<i class="fab fa-${website} ${website}"></i></div>
        </li>
        `;
  $("#sociallist").append(htmlString);
  $("#" + website).on("click", event => {
    mixer.socket.call(
      "giveInput",
      {
        controlID: "social",
        event: "mousedown",
        social: event.currentTarget.id
      },
      true
    );
  });
}



// CONCATENATED MODULE: ./src/scripts.js


window.addEventListener("load", function initMixer() {
  mixer.socket.on("event", handleEvents);

  mixer.isLoaded();
});


/***/ })
/******/ ]);