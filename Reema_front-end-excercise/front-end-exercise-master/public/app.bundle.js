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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\nnew Utils();\n\nvar userComments;\n\n// Fetching Data from json file\nfetch('./static/db.json', {\n        mode: 'no-cors'\n    })\n    .then(function(response) {\n        return response.json();\n    })\n    .then(function(data) {\n        userComments = data.comments;\n        //sorted array \n        //userComments.sort( compare );\n        appendData(userComments);\n    })\n    .catch(function(err) {\n        console.log('error: ' + err);\n    });\n\n// Appending data in main div\nfunction appendData(userComments) {\n    var mainContainer = document.getElementById(\"myData\");\n    var commentsContainer = document.getElementById(\"commentsNumber\");\n    var commentsNumberDiv = document.createElement(\"span\");\n    commentsNumberDiv.innerHTML = +userComments.length;\n    commentsContainer.appendChild(commentsNumberDiv);\n    for (var i = 0; i < userComments.length; i++) {\n        var div = document.createElement(\"div\");\n        div.className += \"mainCommentSection\";\n        var userLikesDiv = document.createElement(\"div\");\n        div.innerHTML = '<div class=\"mainSection\"><div class=\"userName\"><span> ' + userComments[i].name + '</span></div><div class=\"userCommentSection\">' + userComments[i].body + '</div></div><div class=\"column_mobile\">' + userComments[i].likes + 'Likes</div>';\n        mainContainer.appendChild(div);\n    }\n}\n\n// Like button functionality\ndocument.querySelectorAll('.likesSection').forEach(item => {\n    item.addEventListener('click', event => {\n        userComments.sort(compare);\n        console.log(userComments);\n        document.getElementById(\"myData\").innerHTML = \"\";\n        document.getElementById(\"commentsNumber\").innerHTML = \"\";\n        appendData(userComments);\n    })\n})\n\n// compare function\nfunction compare(a, b) {\n    if (a.likes > b.likes) {\n        return -1;\n    }\n    if (a.likes < b.likes) {\n        return 1;\n    }\n    return 0;\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Dummy utility class to demonstrate a basic JS\n * structure and assoiciated test\n * @param {Object} params - containing:\n * @param {String} homePagePath - the pathname of the homepage (defaults to '/')\n */\nclass Utils {\n\tconstructor(params) {\n\t\tthis.params = Object.assign({\n\t\t\thomePagePath: '/'\n\t\t}, params);\n\t}\n\n\t/**\n\t * Is the user on the hompage\n\t * @return {Boolean}\n\t */\n\tisHomePage() {\n\t\treturn document.location.pathname === this.params.homePagePath;\n\t}\n}\n\nmodule.exports = Utils;\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });