/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_SIZES = exports.DEFAULT_FONT_FAMILIES = exports.CONTROLKEYS = exports.COLORS = exports.loadStrings = exports.loadFile = exports.getGameHeight = exports.getGameWidth = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
/**
 * Load a file in ajax and return its response text.
 * @param pFilePath Path to the desired file
 */
exports.loadFile = function (pFilePath) {
    var rawFile = new XMLHttpRequest();
    var result;
    rawFile.onerror = function () {
        console.log("Impossible to load file.");
    };
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                result = rawFile.responseText;
            }
        }
    };
    rawFile.open("GET", pFilePath, false);
    rawFile.send(null);
    return result;
};
/**
 * Returns a 2d-array of strings from a whole text file given as input.
 * Works best if the input text is only composed of single chars and '\n'.
 * Each final array element would be one character of the text input.
 * @param pFilePath
 */
exports.loadStrings = function (pFilePath) {
    var rawGrid = exports.loadFile(pFilePath);
    return rawGrid.split("\n").map(function (item) { return item.split(""); });
};
exports.COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
    black: { string: "#000000", hex: 0x000000 },
    customYellow: { string: "#ffde59", hex: 0xffde59 },
    grey: { string: "#d3d1d2", hex: 0xd3d1d2 }
};
exports.CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT,
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
        },
    },
};
/**
 * Fixed font family to use across the game :
 * "Monospace, Tahoma, Arial"
 */
exports.DEFAULT_FONT_FAMILIES = "monospace, Tahoma, Arial";
/**
 * Fixed font sizes to use across the game :
 * xsmall = 8px,
 * small = 12px,
 * medium = 18px,
 * large = 24px,
 * xlarge = 32px,
 * big = 64px,
 * giant = 128px
 */
exports.FONT_SIZES = {
    xsmall: "8px",
    small: "12px",
    medium: "18px",
    large: "24px",
    xlarge: "32px",
    big: "64px",
    giant: "128px"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: "Coffee Quest",
    type: Phaser.AUTO,
    scale: { width: 900, height: 700 },
    input: { keyboard: true },
    dom: { createContainer: true },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    parent: "game",
    scene: scenes_1.default,
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/LoadingBar.ts":
/*!***********************************!*\
  !*** ./src/objects/LoadingBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar = /** @class */ (function () {
    function LoadingBar(params) {
        this.scene = params.scene;
        this.bar = this.scene.add.graphics();
        this.barWidth = 400;
        this.barHeight = 30;
        this.barX = (helpers_1.getGameWidth(this.scene) / 2) - (this.barWidth / 2);
        this.barY = (helpers_1.getGameHeight(this.scene) / 2) - (this.barHeight / 2);
        this.barColor = helpers_1.COLORS.customRed.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = (helpers_1.getGameWidth(this.scene) / 2) - (this.boxWidth / 2);
        this.boxY = (helpers_1.getGameHeight(this.scene) / 2) - (this.boxHeight / 2);
        this.boxColor = helpers_1.COLORS.white.hex;
        this.boxAlpha = 0.3;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: (helpers_1.getGameHeight(this.scene) / 2) + 40,
            text: "Chargement...",
            style: {
                font: '20px monospace',
                fill: helpers_1.COLORS.white.string
            }
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: (helpers_1.getGameWidth(this.scene) / 2),
            y: (helpers_1.getGameHeight(this.scene) / 2),
            text: "0%",
            style: {
                font: '18px monospace',
                fill: helpers_1.COLORS.white.string
            }
        });
        this._progressText.setOrigin(0.5, 0.5);
    }
    Object.defineProperty(LoadingBar.prototype, "progressText", {
        get: function () {
            return this._progressText;
        },
        enumerable: false,
        configurable: true
    });
    LoadingBar.prototype.draw = function (pValue) {
        this.bar.clear();
        this.bar.fillStyle(this.barColor, this.barAlpha);
        this.bar.fillRect(this.barX, this.barY, this.barWidth * pValue, this.barHeight);
    };
    LoadingBar.prototype.destroy = function () {
        this.bar.destroy();
        this.box.destroy();
        this.text.destroy();
        this.progressText.destroy();
    };
    return LoadingBar;
}());
exports.LoadingBar = LoadingBar;


/***/ }),

/***/ "./src/objects/Pawn.ts":
/*!*****************************!*\
  !*** ./src/objects/Pawn.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(params) {
        var _this = _super.call(this, params.scene, params.col === 0
            ? params.tilemap.tileWidth / 2
            : params.col * params.tilemap.tileWidth +
                params.tilemap.tileHeight / 2, params.line === 0
            ? params.tilemap.tileHeight / 2
            : params.line * params.tilemap.tileWidth +
                params.tilemap.tileHeight / 2, params.textureKey) || this;
        _this.scene.add.existing(_this);
        _this.col = params.col;
        _this.line = params.line;
        _this.x =
            _this.col === 0
                ? params.tilemap.tileWidth / 2
                : _this.col * params.tilemap.tileWidth +
                    params.tilemap.tileWidth / 2;
        _this.y =
            _this.line === 0
                ? params.tilemap.tileHeight / 2
                : _this.line * params.tilemap.tileHeight +
                    params.tilemap.tileHeight / 2;
        _this.scene.input.on("pointerdown", function (pointer) {
            _this.updatePawn(pointer, params.tilemap);
        }, _this.scene);
        return _this;
    }
    Pawn.prototype.moveNorth = function () {
        this.line -= 1;
        this.y -= 100;
    };
    Pawn.prototype.moveSouth = function () {
        this.line += 1;
        this.y += 100;
    };
    Pawn.prototype.moveEast = function () {
        this.col += 1;
        this.x += 100;
    };
    Pawn.prototype.moveWest = function () {
        this.col -= 1;
        this.x -= 100;
    };
    Pawn.prototype.updatePawn = function (pointer, pTilemap) {
        var px = Math.floor(pointer.x / pTilemap.tileWidth);
        var py = Math.floor(pointer.y / pTilemap.tileHeight);
        if (py === this.line + 1 && px === this.col) {
            this.moveSouth();
        }
        else if (py === this.line - 1 && px === this.col) {
            this.moveNorth();
        }
        else if (px === this.col + 1 && py === this.line) {
            this.moveEast();
        }
        else if (px === this.col - 1 && py === this.line) {
            this.moveWest();
        }
        else if (px === this.col - 1 && py === this.line - 1) {
            this.moveNorth();
            this.moveWest();
        }
        else if (px === this.col - 1 && py === this.line + 1) {
            this.moveSouth();
            this.moveWest();
        }
        else if (px === this.col + 1 && py === this.line - 1) {
            this.moveNorth();
            this.moveEast();
        }
        else if (px === this.col + 1 && py === this.line + 1) {
            this.moveSouth();
            this.moveEast();
        }
        this.currentPlace = pTilemap.grid[this.line][this.col];
    };
    return Pawn;
}(Phaser.GameObjects.Image));
exports.Pawn = Pawn;


/***/ }),

/***/ "./src/objects/Place.ts":
/*!******************************!*\
  !*** ./src/objects/Place.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
var Place = /** @class */ (function () {
    function Place(params) {
        this._name = params.name;
        this._isRestricted = params.isRestricted;
    }
    Object.defineProperty(Place.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "isRestricted", {
        get: function () {
            return this._isRestricted;
        },
        enumerable: false,
        configurable: true
    });
    return Place;
}());
exports.Place = Place;


/***/ }),

/***/ "./src/objects/Tableau.ts":
/*!********************************!*\
  !*** ./src/objects/Tableau.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableau = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var TextArea_1 = __webpack_require__(/*! ../prefabs/TextArea */ "./src/prefabs/TextArea.ts");
var InteractiveBtn_1 = __webpack_require__(/*! ../prefabs/InteractiveBtn */ "./src/prefabs/InteractiveBtn.ts");
var MainBtn_1 = __webpack_require__(/*! ../prefabs/MainBtn */ "./src/prefabs/MainBtn.ts");
var Tableau = /** @class */ (function () {
    function Tableau(params) {
        this.scene = params.scene;
        this.key = params.key;
        this.text = params === null || params === void 0 ? void 0 : params.text;
        this.items = params === null || params === void 0 ? void 0 : params.items;
        this.characters = params === null || params === void 0 ? void 0 : params.characters;
        this.currentStringIndex = 0;
        this.currentString = this.text[this.currentStringIndex];
    }
    Tableau.prototype.nextString = function () {
        this.currentStringIndex += 1;
        this.currentString = this.text[this.currentStringIndex];
        return this.currentString;
    };
    Tableau.prototype.endOfText = function () {
        if (this.currentStringIndex >= this.text.length) {
            return true;
        }
        else {
            return false;
        }
    };
    Tableau.prototype.destroy = function () {
        this.background.destroy();
    };
    Tableau.prototype.create = function () {
        var _this = this;
        this.background = this.scene.add.image(helpers_1.getGameWidth(this.scene) / 2, helpers_1.getGameHeight(this.scene) / 2, this.key + "-bg");
        this.textArea = new TextArea_1.TextArea({
            scene: this.scene,
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: helpers_1.getGameHeight(this.scene) - 82,
            width: helpers_1.getGameWidth(this.scene) - 150,
            height: 164,
            color: helpers_1.COLORS.black.hex,
            alpha: 0.8,
            currentString: this.currentString,
        });
        this.nextBtn = new InteractiveBtn_1.InteractiveBtn({
            scene: this.scene,
            x: helpers_1.getGameWidth(this.scene) - 42,
            y: helpers_1.getGameHeight(this.scene) - 75,
            textureKey: "buttonNext",
        });
        this.nextBtn.on("pointerdown", function () {
            if (!_this.endOfText()) {
                _this.textArea.currentString = _this.nextString();
            }
        });
        new MainBtn_1.MainBtn({
            scene: this.scene,
            x: 76,
            y: 30,
            width: 128,
            height: 35,
            color: helpers_1.COLORS.black.hex,
            hoverColor: helpers_1.COLORS.grey.hex,
            label: "MAP",
            fontSize: helpers_1.FONT_SIZES.large,
            fontColor: helpers_1.COLORS.white.string,
            alpha: 1,
            newSceneKey: "Overworld"
        });
    };
    return Tableau;
}());
exports.Tableau = Tableau;


/***/ }),

/***/ "./src/objects/Tilemap.ts":
/*!********************************!*\
  !*** ./src/objects/Tilemap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tilemap = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Place_1 = __webpack_require__(/*! ./Place */ "./src/objects/Place.ts");
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.initTilesSizes();
        var Places = {
            Sea: new Place_1.Place({ name: "the sea", isRestricted: false }),
            Beach: new Place_1.Place({ name: "the beach", isRestricted: false }),
            Grass: new Place_1.Place({ name: "the grass", isRestricted: false }),
            City: new Place_1.Place({ name: "the city", isRestricted: false }),
            Forest: new Place_1.Place({ name: "the forest", isRestricted: false }),
            Lighthouse: new Place_1.Place({ name: "the lighthouse", isRestricted: true }),
            Pyramid: new Place_1.Place({ name: "the pyramid", isRestricted: true }),
            Dick: new Place_1.Place({ name: "the dick", isRestricted: true }),
            Castle: new Place_1.Place({ name: "the castle", isRestricted: true }),
        };
        this._grid = [
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.City,
                Places.City,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Dick,
                Places.Grass,
                Places.Grass,
                Places.City,
                Places.City,
            ],
            [
                Places.Sea,
                Places.Lighthouse,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Pyramid,
            ],
            [
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Castle,
                Places.Forest,
            ],
        ];
        this.tilesheet = params.scene.add.image(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) / 2, "overworldMap");
    }
    Object.defineProperty(Tilemap.prototype, "tileWidth", {
        get: function () {
            return this._tileWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tilemap.prototype, "tileHeight", {
        get: function () {
            return this._tileHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tilemap.prototype, "grid", {
        get: function () {
            return this._grid;
        },
        enumerable: false,
        configurable: true
    });
    Tilemap.prototype.initTilesSizes = function () {
        this._tileWidth = 100;
        this._tileHeight = 100;
    };
    return Tilemap;
}());
exports.Tilemap = Tilemap;


/***/ }),

/***/ "./src/prefabs/InteractiveBtn.ts":
/*!***************************************!*\
  !*** ./src/prefabs/InteractiveBtn.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveBtn = void 0;
var InteractiveBtn = /** @class */ (function (_super) {
    __extends(InteractiveBtn, _super);
    function InteractiveBtn(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.add.existing(_this);
        _this.setInteractive();
        return _this;
    }
    return InteractiveBtn;
}(Phaser.GameObjects.Image));
exports.InteractiveBtn = InteractiveBtn;


/***/ }),

/***/ "./src/prefabs/MainBtn.ts":
/*!********************************!*\
  !*** ./src/prefabs/MainBtn.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBtn = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var MainBtn = /** @class */ (function () {
    function MainBtn(params) {
        var _this = this;
        this.scene = params.scene;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.color = params.color;
        this.hoverColor = params.hoverColor;
        this.label = params.label;
        this.fontSize = params.fontSize;
        this.fontColor = params.fontColor;
        this.alpha = params.alpha;
        this.newSceneKey = params.newSceneKey;
        if (params.sceneData) {
            this.sceneData = params.sceneData;
        }
        else {
            this.sceneData = null;
        }
        this.box = new Phaser.GameObjects.Rectangle(this.scene, this.x, this.y, this.width, this.height, this.color, this.alpha);
        this.box.setInteractive();
        this.box.on("pointerdown", function () {
            _this.scene.sound.stopAll();
            _this.scene.cameras.main.fadeOut(1000, 0, 0, 0);
            _this.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function () {
                _this.scene.scene.start(_this.newSceneKey, _this.sceneData);
            });
        }, this.scene);
        this.box.on("pointerover", function () {
            _this.box.fillColor = _this.hoverColor;
        });
        this.box.on("pointerout", function () {
            _this.box.fillColor = _this.color;
        });
        this.box.setOrigin(0.5, 0.5);
        this.text = new Phaser.GameObjects.Text(this.scene, this.box.x, this.box.y, this.label, {
            fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
            fontSize: this.fontSize,
            color: this.fontColor,
            align: "center",
            fontStyle: "bold"
        });
        this.text.setOrigin(0.5, 0.5);
        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
    return MainBtn;
}());
exports.MainBtn = MainBtn;


/***/ }),

/***/ "./src/prefabs/TextArea.ts":
/*!*********************************!*\
  !*** ./src/prefabs/TextArea.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var TextArea = /** @class */ (function () {
    function TextArea(params) {
        this.scene = params.scene;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.color = params.color;
        this.alpha = params.alpha;
        this.textPadding = 10;
        this._currentString = params.currentString;
        this.box = new Phaser.GameObjects.Rectangle(this.scene, this.x, this.y, this.width, this.height, this.color, this.alpha);
        this.text = new Phaser.GameObjects.Text(this.scene, this.box.x - this.box.width / 2, this.box.y - this.box.height / 2, this._currentString, {
            fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
            fontSize: helpers_1.FONT_SIZES.large,
            color: helpers_1.COLORS.white.string,
            fontStyle: "bold",
            wordWrap: { width: this.width - this.textPadding },
            padding: {
                left: this.textPadding,
                right: this.textPadding,
                top: this.textPadding,
                bottom: this.textPadding,
            },
        });
        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
    Object.defineProperty(TextArea.prototype, "currentString", {
        set: function (v) {
            this.text.setText(v);
        },
        enumerable: false,
        configurable: true
    });
    return TextArea;
}());
exports.TextArea = TextArea;


/***/ }),

/***/ "./src/scenes/BootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar_1 = __webpack_require__(/*! ../objects/LoadingBar */ "./src/objects/LoadingBar.ts");
var MainBtn_1 = __webpack_require__(/*! ../prefabs/MainBtn */ "./src/prefabs/MainBtn.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Boot",
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        this.load.pack("preload", "assets/pack.json", "preload");
        this.loadingBar = new LoadingBar_1.LoadingBar({ scene: this });
        this.load.on("progress", function (value) {
            _this.loadingBar.draw(value);
            _this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add("bootTheme");
        this.musicTheme.play();
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, "bootLogo");
        new MainBtn_1.MainBtn({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: helpers_1.getGameHeight(this) - 100,
            width: 150,
            height: 35,
            color: helpers_1.COLORS.customRed.hex,
            hoverColor: helpers_1.COLORS.customYellow.hex,
            alpha: 1,
            label: "START",
            fontSize: helpers_1.FONT_SIZES.xlarge,
            fontColor: helpers_1.COLORS.black.string,
            newSceneKey: "Intro100"
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/Intro100.ts":
/*!********************************!*\
  !*** ./src/scenes/Intro100.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intro100 = void 0;
var Tableau_1 = __webpack_require__(/*! ../objects/Tableau */ "./src/objects/Tableau.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Intro100",
};
var Intro100 = /** @class */ (function (_super) {
    __extends(Intro100, _super);
    function Intro100() {
        return _super.call(this, sceneConfig) || this;
    }
    Intro100.prototype.initOnTableau = function (n) {
        this.tableaux[n - 1].create();
    };
    Intro100.prototype.create = function () {
        this.tableaux = [
            new Tableau_1.Tableau({
                scene: this,
                key: "101-kitchen",
                text: [
                    "Mmmh, uh, hein ? Quelle heure il est ? Qui suis-je ?",
                    "Est-ce que... Est-ce que j'ai pas un job où je dois aller, ou quelque chose ?",
                    "Mgblr, il me faut un café. Tout ira bien lorsque j'aurai bu mon café",
                    "Ehhh ? Plus de café. Bon, pas de panique, je vais juste aller en acheter un au café du coin."
                ]
            }),
            new Tableau_1.Tableau({
                scene: this,
                key: "102-shop",
                text: [
                    "Bonjour caffelier, votre meilleur café, dans une grande tasse, pronto ! Espresso !",
                    "rmm brrmm grmm",
                    "Comment ? Plus de café ? Vous plaisantez bien sûr, on me la fait pas, il y a écrit « coffee » derrière vous. Sans café, vous n'êtes rien !",
                    "grmmbl brummb drmm",
                    "Une pénurie de café ? Toute la ville est touchée ?",
                    "grmb prummbll",
                    "Mais c'est une catastrophe, l'économie va s’effondrer ! Je ne me souviens même plus où je travaille !",
                    "grmmb brmmbl",
                    "Aller voir le fournisseur de la ville, Mol Palanã ? J'y vais de ce pas ! Tiens bon, brave caffelier !"
                ]
            }),
            new Tableau_1.Tableau({
                scene: this,
                key: "103-livingroom",
                text: [
                    "Plus de café, je n'arrive pas à y croire, c'est déjà un miracle que je tienne debout. Si on ne résout pas ce problème rapidement, tout sera perdu.",
                    "Palanã ! L'heure est grave ! On est que lundi, et j'en ai déjà plein le dos.",
                    "A qui le dites-vous, la pénurie de café touche le continent entier."
                ]
            })
        ];
        this.initOnTableau(1);
    };
    Intro100.prototype.update = function () { };
    return Intro100;
}(Phaser.Scene));
exports.Intro100 = Intro100;


/***/ }),

/***/ "./src/scenes/OverworldScene.ts":
/*!**************************************!*\
  !*** ./src/scenes/OverworldScene.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverworldScene = void 0;
var Tilemap_1 = __webpack_require__(/*! ../objects/Tilemap */ "./src/objects/Tilemap.ts");
var Pawn_1 = __webpack_require__(/*! ../objects/Pawn */ "./src/objects/Pawn.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Overworld",
};
var OverworldScene = /** @class */ (function (_super) {
    __extends(OverworldScene, _super);
    function OverworldScene() {
        return _super.call(this, sceneConfig) || this;
    }
    OverworldScene.prototype.create = function () {
        this.musicTheme = this.sound.add("overworldTheme");
        this.musicTheme.play();
        this.tilemap = new Tilemap_1.Tilemap({ scene: this });
        this.pawn = new Pawn_1.Pawn({
            scene: this,
            col: 4,
            line: 0,
            textureKey: "overworldHero",
            tilemap: this.tilemap,
        });
    };
    return OverworldScene;
}(Phaser.Scene));
exports.OverworldScene = OverworldScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var BootScene_1 = __webpack_require__(/*! ./BootScene */ "./src/scenes/BootScene.ts");
var Intro100_1 = __webpack_require__(/*! ./Intro100 */ "./src/scenes/Intro100.ts");
var OverworldScene_1 = __webpack_require__(/*! ./OverworldScene */ "./src/scenes/OverworldScene.ts");
exports.default = [
    BootScene_1.BootScene,
    Intro100_1.Intro100,
    OverworldScene_1.OverworldScene
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QYXduLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BsYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RhYmxlYXUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZmFicy9JbnRlcmFjdGl2ZUJ0bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZmFicy9NYWluQnRuLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVmYWJzL1RleHRBcmVhLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvQm9vdFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvSW50cm8xMDAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9PdmVyd29ybGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxlQUFlO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBdkJtQyxNQUFNLENBQUMsS0FBSyxHQXVCL0M7QUF2Qlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7O0FDWDNCLGNBQWM7O0FBRWQsc0ZBQXdDO0FBQ3hDLG1GQUFzQztBQUN0QyxxR0FBa0Q7QUFFbEQsa0JBQWU7SUFDZCxxQkFBUztJQUNULG1CQUFRO0lBQ1IsK0JBQWM7Q0FDZCxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgcmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuICAgIGxldCByYXdHcmlkID0gbG9hZEZpbGUocEZpbGVQYXRoKTtcclxuICAgIHJldHVybiByYXdHcmlkLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5zcGxpdChcIlwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuXHR3aGl0ZTogeyBzdHJpbmc6IFwiI2ZmZmZmZlwiLCBoZXg6IDB4ZmZmZmZmIH0sXHJcblx0YmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9LFxyXG5cdGN1c3RvbVllbGxvdzogeyBzdHJpbmc6IFwiI2ZmZGU1OVwiLCBoZXg6IDB4ZmZkZTU5IH0sXHJcblx0Z3JleTogeyBzdHJpbmc6IFwiI2QzZDFkMlwiLCBoZXg6IDB4ZDNkMWQyIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuICAgIFBMQVlFUjoge1xyXG4gICAgICAgIFNFVDE6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTRVQyOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkIGZvbnQgZmFtaWx5IHRvIHVzZSBhY3Jvc3MgdGhlIGdhbWUgOlxyXG4gKiBcIk1vbm9zcGFjZSwgVGFob21hLCBBcmlhbFwiXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT05UX0ZBTUlMSUVTID0gXCJtb25vc3BhY2UsIFRhaG9tYSwgQXJpYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBGaXhlZCBmb250IHNpemVzIHRvIHVzZSBhY3Jvc3MgdGhlIGdhbWUgOiBcclxuICogeHNtYWxsID0gOHB4LCBcclxuICogc21hbGwgPSAxMnB4LCBcclxuICogbWVkaXVtID0gMThweCwgXHJcbiAqIGxhcmdlID0gMjRweCxcclxuICogeGxhcmdlID0gMzJweCwgXHJcbiAqIGJpZyA9IDY0cHgsIFxyXG4gKiBnaWFudCA9IDEyOHB4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRk9OVF9TSVpFUyA9IHtcclxuXHR4c21hbGw6IFwiOHB4XCIsXHJcblx0c21hbGw6IFwiMTJweFwiLFxyXG5cdG1lZGl1bTogXCIxOHB4XCIsXHJcblx0bGFyZ2U6IFwiMjRweFwiLFxyXG5cdHhsYXJnZTogXCIzMnB4XCIsXHJcblx0YmlnOiBcIjY0cHhcIixcclxuXHRnaWFudDogXCIxMjhweFwiXHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiQ29mZmVlIFF1ZXN0XCIsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7IHdpZHRoOiA5MDAsIGhlaWdodDogNzAwIH0sXHJcbiAgICBpbnB1dDogeyBrZXlib2FyZDogdHJ1ZSB9LFxyXG5cdGRvbTogeyBjcmVhdGVDb250YWluZXI6IHRydWUgfSxcclxuXHRwaHlzaWNzOiB7XHJcblx0XHRkZWZhdWx0OiAnYXJjYWRlJyxcclxuXHRcdGFyY2FkZToge1xyXG5cdFx0XHRkZWJ1ZzogdHJ1ZVxyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG4gICAgc2NlbmU6IFNjZW5lcyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG4iLCJcclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIGJhclg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhclk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmNsZWFyKCk7XHJcblx0XHR0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcblx0XHR0aGlzLmJhci5maWxsUmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSwgdGhpcy5iYXJIZWlnaHQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuYm94LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMudGV4dC5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuXHRcdHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcblx0XHR0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFyV2lkdGgvMik7XHJcblx0XHR0aGlzLmJhclkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJhckhlaWdodC8yKTtcclxuXHRcdHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tUmVkLmhleDtcclxuXHRcdHRoaXMuYmFyQWxwaGEgPSAwLjg7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuXHRcdHRoaXMuYm94V2lkdGggPSB0aGlzLmJhcldpZHRoICsgMTA7XHJcblx0XHR0aGlzLmJveEhlaWdodCA9IHRoaXMuYmFySGVpZ2h0ICsgMTA7XHJcblx0XHR0aGlzLmJveFggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYm94V2lkdGgvMik7XHJcblx0XHR0aGlzLmJveFkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJveEhlaWdodC8yKTtcclxuXHRcdHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG5cdFx0dGhpcy5ib3hBbHBoYSA9IDAuMztcclxuXHRcdFxyXG5cdFx0dGhpcy5ib3guZmlsbFN0eWxlKHRoaXMuYm94Q29sb3IsIHRoaXMuYm94QWxwaGEpO1xyXG5cdFx0dGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSArIDQwLFxyXG5cdFx0XHR0ZXh0OiBcIkNoYXJnZW1lbnQuLi5cIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMjBweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMiksIFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSxcclxuXHRcdFx0dGV4dDogXCIwJVwiLFxyXG5cdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdGZvbnQ6ICcxOHB4IG1vbm9zcGFjZScsXHJcblx0XHRcdFx0ZmlsbDogQ09MT1JTLndoaXRlLnN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL1BsYWNlXCI7XHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi9UaWxlbWFwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGNvbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsaW5lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQbGFjZTogUGxhY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlTm9ydGgoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lIC09IDE7XHJcbiAgICAgICAgdGhpcy55IC09IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVTb3V0aCgpIHtcclxuICAgICAgICB0aGlzLmxpbmUgKz0gMTtcclxuICAgICAgICB0aGlzLnkgKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUVhc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgKz0gMTtcclxuICAgICAgICB0aGlzLnggKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVdlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgLT0gMTtcclxuICAgICAgICB0aGlzLnggLT0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGF3bihwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgcFRpbGVtYXA6IFRpbGVtYXApOiB2b2lkIHtcclxuICAgICAgICBsZXQgcHggPSBNYXRoLmZsb29yKHBvaW50ZXIueCAvIHBUaWxlbWFwLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgbGV0IHB5ID0gTWF0aC5mbG9vcihwb2ludGVyLnkgLyBwVGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHB5ID09PSB0aGlzLmxpbmUgKyAxICYmIHB4ID09PSB0aGlzLmNvbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHkgPT09IHRoaXMubGluZSAtIDEgJiYgcHggPT09IHRoaXMuY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVdlc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCAtIDEgJiYgcHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9ydGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlV2VzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXZXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUgLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUVhc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCArIDEgJiYgcHkgPT09IHRoaXMubGluZSArIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU291dGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2UgPSBwVGlsZW1hcC5ncmlkW3RoaXMubGluZV1bdGhpcy5jb2xdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgY29sOiBudW1iZXI7XHJcbiAgICAgICAgbGluZTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICB0aWxlbWFwOiBUaWxlbWFwO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHBhcmFtcy5jb2wgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBwYXJhbXMubGluZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCArXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgcGFyYW1zLnRleHR1cmVLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2wgPSBwYXJhbXMuY29sO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHBhcmFtcy5saW5lO1xyXG5cclxuICAgICAgICB0aGlzLnggPVxyXG4gICAgICAgICAgICB0aGlzLmNvbCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnkgPVxyXG4gICAgICAgICAgICB0aGlzLmxpbmUgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgIDogdGhpcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKFxyXG4gICAgICAgICAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgICAgIChwb2ludGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhd24ocG9pbnRlciwgcGFyYW1zLnRpbGVtYXApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYWNlIHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2lzUmVzdHJpY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzUmVzdHJpY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNSZXN0cmljdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IGlzUmVzdHJpY3RlZDogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2lzUmVzdHJpY3RlZCA9IHBhcmFtcy5pc1Jlc3RyaWN0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBDT0xPUlMsIEZPTlRfU0laRVMsIGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aXZlSXRlbSB9IGZyb20gXCIuL0ludGVyYWN0aXZlSXRlbVwiO1xyXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gXCIuLi9wcmVmYWJzL1RleHRBcmVhXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aXZlQnRuIH0gZnJvbSBcIi4uL3ByZWZhYnMvSW50ZXJhY3RpdmVCdG5cIjtcclxuaW1wb3J0IHsgTWFpbkJ0biB9IGZyb20gXCIuLi9wcmVmYWJzL01haW5CdG5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZWF1IHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHQ6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHRoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8SW50ZXJhY3RpdmVJdGVtPjtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RyaW5nSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VycmVudFN0cmluZzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0QXJlYTogVGV4dEFyZWE7XHJcbiAgICBwcml2YXRlIG5leHRCdG46IEludGVyYWN0aXZlQnRuO1xyXG5cclxuICAgIG5leHRTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmdJbmRleCArPSAxO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0cmluZyA9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRTdHJpbmdJbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBlbmRPZlRleHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmluZ0luZGV4ID49IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHRoaXMuYmFja2dyb3VuZC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgdGV4dD86IEFycmF5PHN0cmluZz47XHJcbiAgICAgICAgaXRlbXM/OiBBcnJheTxJbnRlcmFjdGl2ZUl0ZW0+O1xyXG4gICAgICAgIGNoYXJhY3RlcnM/OiBBcnJheTxDaGFyYWN0ZXI+O1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblx0XHR0aGlzLmtleSA9IHBhcmFtcy5rZXk7XHJcblx0XHR0aGlzLnRleHQgPSBwYXJhbXM/LnRleHQ7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhcmFtcz8uaXRlbXM7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gcGFyYW1zPy5jaGFyYWN0ZXJzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0cmluZ0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcgPSB0aGlzLnRleHRbdGhpcy5jdXJyZW50U3RyaW5nSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcdFx0XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICBgJHt0aGlzLmtleX0tYmdgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB5OiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC0gODIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLSAxNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTY0LFxyXG4gICAgICAgICAgICBjb2xvcjogQ09MT1JTLmJsYWNrLmhleCxcclxuICAgICAgICAgICAgYWxwaGE6IDAuOCxcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZzogdGhpcy5jdXJyZW50U3RyaW5nLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRCdG4gPSBuZXcgSW50ZXJhY3RpdmVCdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC0gNDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLSA3NSxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogXCJidXR0b25OZXh0XCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dEJ0bi5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuZE9mVGV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRBcmVhLmN1cnJlbnRTdHJpbmcgPSB0aGlzLm5leHRTdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdG5ldyBNYWluQnRuKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXHJcblx0XHRcdHg6IDc2LFxyXG5cdFx0XHR5OiAzMCxcclxuXHRcdFx0d2lkdGg6IDEyOCxcclxuXHRcdFx0aGVpZ2h0OiAzNSxcclxuXHRcdFx0Y29sb3I6IENPTE9SUy5ibGFjay5oZXgsXHJcblx0XHRcdGhvdmVyQ29sb3I6IENPTE9SUy5ncmV5LmhleCxcclxuXHRcdFx0bGFiZWw6IFwiTUFQXCIsXHJcblx0XHRcdGZvbnRTaXplOiBGT05UX1NJWkVTLmxhcmdlLFxyXG5cdFx0XHRmb250Q29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogXCJPdmVyd29ybGRcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL1BsYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcCB7XHJcbiAgICBwcml2YXRlIHRpbGVzaGVldDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBfdGlsZVdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90aWxlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ncmlkOiBQbGFjZVtdW107XHJcblxyXG4gICAgcHVibGljIGdldCB0aWxlV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsZUhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ3JpZCgpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFRpbGVzU2l6ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdGlsZVdpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuX3RpbGVIZWlnaHQgPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmUgfSkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRpbGVzU2l6ZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgUGxhY2VzID0ge1xyXG4gICAgICAgICAgICBTZWE6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIHNlYVwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBCZWFjaDogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgYmVhY2hcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgR3Jhc3M6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGdyYXNzXCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIENpdHk6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGNpdHlcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgRm9yZXN0OiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBmb3Jlc3RcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgTGlnaHRob3VzZTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgbGlnaHRob3VzZVwiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgICAgIFB5cmFtaWQ6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIHB5cmFtaWRcIiwgaXNSZXN0cmljdGVkOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICBEaWNrOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBkaWNrXCIsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgQ2FzdGxlOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBjYXN0bGVcIiwgaXNSZXN0cmljdGVkOiB0cnVlIH0pLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2dyaWQgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNpdHksXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRGljayxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DaXR5LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNpdHksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuTGlnaHRob3VzZSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuUHlyYW1pZCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DYXN0bGUsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNoZWV0ID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICBcIm92ZXJ3b3JsZE1hcFwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aXZlQnRuIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0eDogbnVtYmVyO1xyXG5cdFx0eTogbnVtYmVyO1xyXG5cdFx0dGV4dHVyZUtleTogc3RyaW5nO1xyXG5cdH0pIHtcclxuXHRcdHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcbn0iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIEZPTlRfU0laRVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5CdG4ge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHRwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cdHByaXZhdGUgeDogbnVtYmVyO1xyXG5cdHByaXZhdGUgeTogbnVtYmVyO1xyXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgY29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGhvdmVyQ29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGZvbnRTaXplOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBmb250Q29sb3I6IHN0cmluZztcclxuXHRwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xyXG5cdHByaXZhdGUgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuXHRwcml2YXRlIHNjZW5lRGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xyXG5cdFx0Y29sb3I6IG51bWJlcjtcclxuXHRcdGhvdmVyQ29sb3I6IG51bWJlcjtcclxuXHRcdGxhYmVsOiBzdHJpbmc7XHJcblx0XHRmb250U2l6ZTogc3RyaW5nO1xyXG5cdFx0Zm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgYWxwaGE6IG51bWJlcjtcclxuICAgICAgICBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHNjZW5lRGF0YT86IGFueTtcclxuICAgIH0pIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG5cdFx0dGhpcy54ID0gcGFyYW1zLng7XHJcblx0XHR0aGlzLnkgPSBwYXJhbXMueTtcclxuXHRcdHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQ7XHJcblx0XHR0aGlzLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xyXG5cdFx0dGhpcy5ob3ZlckNvbG9yID0gcGFyYW1zLmhvdmVyQ29sb3I7XHJcblx0XHR0aGlzLmxhYmVsID0gcGFyYW1zLmxhYmVsO1xyXG5cdFx0dGhpcy5mb250U2l6ZSA9IHBhcmFtcy5mb250U2l6ZTtcclxuXHRcdHRoaXMuZm9udENvbG9yID0gcGFyYW1zLmZvbnRDb2xvcjtcclxuXHRcdHRoaXMuYWxwaGEgPSBwYXJhbXMuYWxwaGE7XHJcblx0XHR0aGlzLm5ld1NjZW5lS2V5ID0gcGFyYW1zLm5ld1NjZW5lS2V5O1xyXG5cclxuXHRcdGlmIChwYXJhbXMuc2NlbmVEYXRhKSB7XHJcblx0XHRcdHRoaXMuc2NlbmVEYXRhID0gcGFyYW1zLnNjZW5lRGF0YTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NlbmVEYXRhID0gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmJveCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIHRoaXMuYWxwaGFcclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94LnNldEludGVyYWN0aXZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmZhZGVPdXQoMTAwMCwgMCwgMCwgMCk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5vbmNlKFxyXG5cdFx0XHRcdFx0UGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5FdmVudHMuRkFERV9PVVRfQ09NUExFVEUsIFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KHRoaXMubmV3U2NlbmVLZXksIHRoaXMuc2NlbmVEYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib3guZmlsbENvbG9yID0gdGhpcy5ob3ZlckNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJveC5maWxsQ29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgIFx0dGhpcy50ZXh0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLmJveC54LFxyXG4gICAgICAgICAgICB0aGlzLmJveC55LFxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYm94KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIEZPTlRfU0laRVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIHtcclxuXHRwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0cHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblx0cHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHRwcml2YXRlIHg6IG51bWJlcjtcclxuXHRwcml2YXRlIHk6IG51bWJlcjtcclxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xyXG5cdHByaXZhdGUgdGV4dFBhZGRpbmc6IG51bWJlcjtcclxuXHRwcml2YXRlIF9jdXJyZW50U3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdHNldCBjdXJyZW50U3RyaW5nKHY6IHN0cmluZykge1xyXG5cdFx0dGhpcy50ZXh0LnNldFRleHQodik7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHdpZHRoOiBudW1iZXI7IFxyXG5cdFx0aGVpZ2h0OiBudW1iZXI7IFxyXG5cdFx0Y29sb3I6IG51bWJlcjsgXHJcblx0XHRhbHBoYTogbnVtYmVyOyBcclxuXHRcdGN1cnJlbnRTdHJpbmc6IHN0cmluZztcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuXHRcdHRoaXMueCA9IHBhcmFtcy54O1xyXG5cdFx0dGhpcy55ID0gcGFyYW1zLnk7XHJcblx0XHR0aGlzLndpZHRoID0gcGFyYW1zLndpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jb2xvciA9IHBhcmFtcy5jb2xvcjtcclxuXHRcdHRoaXMuYWxwaGEgPSBwYXJhbXMuYWxwaGE7XHJcblx0XHR0aGlzLnRleHRQYWRkaW5nID0gMTA7XHJcblx0XHR0aGlzLl9jdXJyZW50U3RyaW5nID0gcGFyYW1zLmN1cnJlbnRTdHJpbmc7XHJcblxyXG5cdFx0dGhpcy5ib3ggPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZShcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcblx0XHQpO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLmJveC54IC0gdGhpcy5ib3gud2lkdGgvMixcclxuICAgICAgICAgICAgdGhpcy5ib3gueSAtIHRoaXMuYm94LmhlaWdodC8yLFxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RyaW5nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogRk9OVF9TSVpFUy5sYXJnZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMud2hpdGUuc3RyaW5nLFxyXG5cdFx0XHRcdGZvbnRTdHlsZTogXCJib2xkXCIsXHJcblx0XHRcdFx0d29yZFdyYXA6IHsgd2lkdGg6IHRoaXMud2lkdGggLSB0aGlzLnRleHRQYWRkaW5nIH0sXHJcblx0XHRcdFx0cGFkZGluZzoge1xyXG5cdFx0XHRcdFx0bGVmdDogdGhpcy50ZXh0UGFkZGluZyxcclxuXHRcdFx0XHRcdHJpZ2h0OiB0aGlzLnRleHRQYWRkaW5nLFxyXG5cdFx0XHRcdFx0dG9wOiB0aGlzLnRleHRQYWRkaW5nLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiB0aGlzLnRleHRQYWRkaW5nLFxyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgICAgIH1cclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYm94KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMudGV4dCk7XHJcblx0fVxyXG59IiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgQ09MT1JTLCBGT05UX1NJWkVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuaW1wb3J0IHsgTWFpbkJ0biB9IGZyb20gXCIuLi9wcmVmYWJzL01haW5CdG5cIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQmFyID0gbmV3IExvYWRpbmdCYXIoeyBzY2VuZTogdGhpcyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwicHJvZ3Jlc3NcIiwgKHZhbHVlKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kcmF3KHZhbHVlKTtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzVGV4dC5zZXRUZXh0KChNYXRoLmZsb29yKHZhbHVlKjEwMCkpICsgXCIlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJjb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJib290VGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwiYm9vdExvZ29cIlxyXG5cdFx0KTtcclxuXHRcdFxyXG4gICAgICAgIG5ldyBNYWluQnRuKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLFxyXG5cdFx0XHR5OiBnZXRHYW1lSGVpZ2h0KHRoaXMpLTEwMCxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0aGVpZ2h0OiAzNSxcclxuXHRcdFx0Y29sb3I6IENPTE9SUy5jdXN0b21SZWQuaGV4LFxyXG5cdFx0XHRob3ZlckNvbG9yOiBDT0xPUlMuY3VzdG9tWWVsbG93LmhleCxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGxhYmVsOiBcIlNUQVJUXCIsXHJcblx0XHRcdGZvbnRTaXplOiBGT05UX1NJWkVTLnhsYXJnZSxcclxuXHRcdFx0Zm9udENvbG9yOiBDT0xPUlMuYmxhY2suc3RyaW5nLFxyXG4gICAgICAgICAgICBuZXdTY2VuZUtleTogXCJJbnRybzEwMFwiXHJcblx0XHR9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgVGFibGVhdSB9IGZyb20gXCIuLi9vYmplY3RzL1RhYmxlYXVcIjtcclxuaW1wb3J0IHsgTWFpbkJ0biB9IGZyb20gXCIuLi9wcmVmYWJzL01haW5CdG5cIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkludHJvMTAwXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgSW50cm8xMDAgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdHByaXZhdGUgdGFibGVhdXg6IEFycmF5PFRhYmxlYXU+O1xyXG5cclxuXHRwcml2YXRlIGluaXRPblRhYmxlYXUobjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnRhYmxlYXV4W24tMV0uY3JlYXRlKCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHR0aGlzLnRhYmxlYXV4ID0gW1xyXG5cdFx0XHRuZXcgVGFibGVhdSh7XHJcblx0XHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdFx0a2V5OiBcIjEwMS1raXRjaGVuXCIsXHJcblx0XHRcdFx0dGV4dDogW1xyXG5cdFx0XHRcdFx0XCJNbW1oLCB1aCwgaGVpbsKgPyBRdWVsbGUgaGV1cmUgaWwgZXN0wqA/IFF1aSBzdWlzLWplwqA/XCIsXHJcblx0XHRcdFx0XHRcIkVzdC1jZSBxdWUuLi4gRXN0LWNlIHF1ZSBqJ2FpIHBhcyB1biBqb2Igb8O5IGplIGRvaXMgYWxsZXIsIG91IHF1ZWxxdWUgY2hvc2XCoD9cIixcclxuXHRcdFx0XHRcdFwiTWdibHIsIGlsIG1lIGZhdXQgdW4gY2Fmw6kuIFRvdXQgaXJhIGJpZW4gbG9yc3F1ZSBqJ2F1cmFpIGJ1IG1vbiBjYWbDqVwiLFxyXG5cdFx0XHRcdFx0XCJFaGhowqA/IFBsdXMgZGUgY2Fmw6kuIEJvbiwgcGFzIGRlIHBhbmlxdWUsIGplIHZhaXMganVzdGUgYWxsZXIgZW4gYWNoZXRlciB1biBhdSBjYWbDqSBkdSBjb2luLlwiXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRdXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgVGFibGVhdSh7XHJcblx0XHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdFx0a2V5OiBcIjEwMi1zaG9wXCIsXHJcblx0XHRcdFx0dGV4dDogW1xyXG5cdFx0XHRcdFx0XCJCb25qb3VyIGNhZmZlbGllciwgdm90cmUgbWVpbGxldXIgY2Fmw6ksIGRhbnMgdW5lIGdyYW5kZSB0YXNzZSwgcHJvbnRvwqAhIEVzcHJlc3NvwqAhXCIsXHJcblx0XHRcdFx0XHRcInJtbSBicnJtbSBncm1tXCIsXHJcblx0XHRcdFx0XHRcIkNvbW1lbnTCoD8gUGx1cyBkZSBjYWbDqcKgPyBWb3VzIHBsYWlzYW50ZXogYmllbiBzw7tyLCBvbiBtZSBsYSBmYWl0IHBhcywgaWwgeSBhIMOpY3JpdCDCq8KgY29mZmVlwqDCuyBkZXJyacOocmUgdm91cy4gU2FucyBjYWbDqSwgdm91cyBuJ8OqdGVzIHJpZW7CoCFcIixcclxuXHRcdFx0XHRcdFwiZ3JtbWJsIGJydW1tYiBkcm1tXCIsXHJcblx0XHRcdFx0XHRcIlVuZSBww6ludXJpZSBkZSBjYWbDqcKgPyBUb3V0ZSBsYSB2aWxsZSBlc3QgdG91Y2jDqWXCoD9cIixcclxuXHRcdFx0XHRcdFwiZ3JtYiBwcnVtbWJsbFwiLFxyXG5cdFx0XHRcdFx0XCJNYWlzIGMnZXN0IHVuZSBjYXRhc3Ryb3BoZSwgbCfDqWNvbm9taWUgdmEgc+KAmWVmZm9uZHJlcsKgISBKZSBuZSBtZSBzb3V2aWVucyBtw6ptZSBwbHVzIG/DuSBqZSB0cmF2YWlsbGXCoCFcIixcclxuXHRcdFx0XHRcdFwiZ3JtbWIgYnJtbWJsXCIsXHJcblx0XHRcdFx0XHRcIkFsbGVyIHZvaXIgbGUgZm91cm5pc3NldXIgZGUgbGEgdmlsbGUsIE1vbCBQYWxhbsOjwqA/IEoneSB2YWlzIGRlIGNlIHBhc8KgISBUaWVucyBib24sIGJyYXZlIGNhZmZlbGllcsKgIVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IFRhYmxlYXUoe1xyXG5cdFx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHRcdGtleTogXCIxMDMtbGl2aW5ncm9vbVwiLFxyXG5cdFx0XHRcdHRleHQ6IFtcclxuXHRcdFx0XHRcdFwiUGx1cyBkZSBjYWbDqSwgamUgbidhcnJpdmUgcGFzIMOgIHkgY3JvaXJlLCBjJ2VzdCBkw6lqw6AgdW4gbWlyYWNsZSBxdWUgamUgdGllbm5lIGRlYm91dC4gU2kgb24gbmUgcsOpc291dCBwYXMgY2UgcHJvYmzDqG1lIHJhcGlkZW1lbnQsIHRvdXQgc2VyYSBwZXJkdS5cIixcclxuXHRcdFx0XHRcdFwiUGFsYW7Do8KgISBMJ2hldXJlIGVzdCBncmF2ZcKgISBPbiBlc3QgcXVlIGx1bmRpLCBldCBqJ2VuIGFpIGTDqWrDoCBwbGVpbiBsZSBkb3MuXCIsXHJcblx0XHRcdFx0XHRcIkEgcXVpIGxlIGRpdGVzLXZvdXMsIGxhIHDDqW51cmllIGRlIGNhZsOpIHRvdWNoZSBsZSBjb250aW5lbnQgZW50aWVyLlwiXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRdXHJcblx0XHRcdH0pXHJcblx0XHRdO1xyXG5cclxuXHRcdHRoaXMuaW5pdE9uVGFibGVhdSgxKTtcclxuXHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7fVxyXG5cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuLi9vYmplY3RzL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9vYmplY3RzL1Bhd25cIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk92ZXJ3b3JsZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgdGlsZW1hcDogVGlsZW1hcDtcclxuICAgIHByaXZhdGUgcGF3bjogUGF3bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKFwib3ZlcndvcmxkVGhlbWVcIik7XHJcblx0XHR0aGlzLm11c2ljVGhlbWUucGxheSgpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnRpbGVtYXAgPSBuZXcgVGlsZW1hcCh7IHNjZW5lOiB0aGlzIH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5wYXduID0gbmV3IFBhd24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgY29sOiA0LFxyXG4gICAgICAgICAgICBsaW5lOiAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiBcIm92ZXJ3b3JsZEhlcm9cIixcclxuICAgICAgICAgICAgdGlsZW1hcDogdGhpcy50aWxlbWFwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tIFwiLi9Cb290U2NlbmVcIjtcclxuaW1wb3J0IHsgSW50cm8xMDAgfSBmcm9tIFwiLi9JbnRybzEwMFwiO1xyXG5pbXBvcnQgeyBPdmVyd29ybGRTY2VuZSB9IGZyb20gXCIuL092ZXJ3b3JsZFNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcblx0Qm9vdFNjZW5lLFxyXG5cdEludHJvMTAwLFxyXG5cdE92ZXJ3b3JsZFNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=