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
    grey: { string: "#d3d1d2", hex: 0xd3d1d2 },
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
    giant: "128px",
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
        default: "arcade",
        arcade: {
            debug: true,
        },
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

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar = /** @class */ (function () {
    function LoadingBar(params) {
        this.scene = params.scene;
        this.bar = this.scene.add.graphics();
        this.barWidth = 400;
        this.barHeight = 30;
        this.barX = helpers_1.getGameWidth(this.scene) / 2 - this.barWidth / 2;
        this.barY = helpers_1.getGameHeight(this.scene) / 2 - this.barHeight / 2;
        this.barColor = helpers_1.COLORS.customRed.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = helpers_1.getGameWidth(this.scene) / 2 - this.boxWidth / 2;
        this.boxY = helpers_1.getGameHeight(this.scene) / 2 - this.boxHeight / 2;
        this.boxColor = helpers_1.COLORS.white.hex;
        this.boxAlpha = 0.3;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: helpers_1.getGameHeight(this.scene) / 2 + 40,
            text: "Chargement...",
            style: {
                font: "20px monospace",
                fill: helpers_1.COLORS.white.string,
            },
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: helpers_1.getGameHeight(this.scene) / 2,
            text: "0%",
            style: {
                font: "18px monospace",
                fill: helpers_1.COLORS.white.string,
            },
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
var InteractiveImageButton_1 = __webpack_require__(/*! ../prefabs/InteractiveImageButton */ "./src/prefabs/InteractiveImageButton.ts");
var SceneStartButton_1 = __webpack_require__(/*! ../prefabs/SceneStartButton */ "./src/prefabs/SceneStartButton.ts");
var Tableau = /** @class */ (function () {
    function Tableau(params) {
        this.scene = params.scene;
        this.key = params.key;
        this.text = params.text;
        this.items = params.items;
        this.characters = params.characters;
        this.currentStringIndex = 0;
        this.currentString = this.text[this.currentStringIndex];
    }
    Tableau.prototype.endOfText = function () {
        if (this.currentStringIndex >= this.text.length - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Tableau.prototype.nextString = function () {
        this.currentStringIndex += 1;
        return this.text[this.currentStringIndex];
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
        this.nextBtn = new InteractiveImageButton_1.InteractiveImageButton({
            scene: this.scene,
            x: helpers_1.getGameWidth(this.scene) - 42,
            y: helpers_1.getGameHeight(this.scene) - 75,
            textureKey: "buttonNext",
            hoverColor: helpers_1.COLORS.customRed.hex,
        });
        this.nextBtn.on("pointerdown", function () {
            if (_this.endOfText() === false) {
                _this.textArea.currentString = _this.nextString();
            }
        });
        this.mapBtn = new SceneStartButton_1.SceneStartButton({
            scene: this.scene,
            x: 76,
            y: 30,
            width: 128,
            height: 35,
            color: helpers_1.COLORS.black.hex,
            hoverColor: helpers_1.COLORS.customRed.hex,
            label: "MAP",
            fontSize: helpers_1.FONT_SIZES.large,
            fontColor: helpers_1.COLORS.white.string,
            alpha: 1,
            newSceneKey: "Overworld",
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
            Lighthouse: new Place_1.Place({
                name: "the lighthouse",
                isRestricted: true,
            }),
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

/***/ "./src/prefabs/InteractiveImageButton.ts":
/*!***********************************************!*\
  !*** ./src/prefabs/InteractiveImageButton.ts ***!
  \***********************************************/
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
exports.InteractiveImageButton = void 0;
var InteractiveImageButton = /** @class */ (function (_super) {
    __extends(InteractiveImageButton, _super);
    function InteractiveImageButton(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.add.existing(_this);
        _this.setInteractive();
        if (params.hoverColor) {
            _this.on("pointerover", function () {
                _this.setTint(params.hoverColor);
            });
            _this.on("pointerout", function () {
                _this.clearTint();
            });
        }
        return _this;
    }
    return InteractiveImageButton;
}(Phaser.GameObjects.Image));
exports.InteractiveImageButton = InteractiveImageButton;


/***/ }),

/***/ "./src/prefabs/SceneStartButton.ts":
/*!*****************************************!*\
  !*** ./src/prefabs/SceneStartButton.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneStartButton = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var SceneStartButton = /** @class */ (function () {
    function SceneStartButton(params) {
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
            fontStyle: "bold",
        });
        this.text.setOrigin(0.5, 0.5);
        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
    SceneStartButton.prototype.destroyBoxAndText = function () {
        this.box.destroy();
        this.text.destroy();
    };
    return SceneStartButton;
}());
exports.SceneStartButton = SceneStartButton;


/***/ }),

/***/ "./src/prefabs/TextArea.ts":
/*!*********************************!*\
  !*** ./src/prefabs/TextArea.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
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
    TextArea.prototype.destroyBoxAndText = function () {
        this.box.destroy();
        this.text.destroy();
    };
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
var SceneStartButton_1 = __webpack_require__(/*! ../prefabs/SceneStartButton */ "./src/prefabs/SceneStartButton.ts");
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
            _this.loadingBar.progressText.setText(Math.floor(value * 100) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add("bootTheme");
        this.musicTheme.play();
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, "bootLogo");
        this.mainBtn = new SceneStartButton_1.SceneStartButton({
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
            newSceneKey: "Intro100",
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
        var _this = _super.call(this, sceneConfig) || this;
        _this.tableaux = [
            new Tableau_1.Tableau({
                scene: _this,
                key: "101-kitchen",
                text: [
                    "Mmmh, uh, hein ? Quelle heure il est ? Qui suis-je ?",
                    "Est-ce que... Est-ce que j'ai pas un job où je dois aller, ou quelque chose ?",
                    "Mgblr, il me faut un café. Tout ira bien lorsque j'aurai bu mon café",
                    "Ehhh ? Plus de café. Bon, pas de panique, je vais juste aller en acheter un au café du coin.",
                ],
            }),
            new Tableau_1.Tableau({
                scene: _this,
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
                    "Aller voir le fournisseur de la ville, Mol Palanã ? J'y vais de ce pas ! Tiens bon, brave caffelier !",
                ],
            }),
            new Tableau_1.Tableau({
                scene: _this,
                key: "103-livingroom",
                text: [
                    "Plus de café, je n'arrive pas à y croire, c'est déjà un miracle que je tienne debout. Si on ne résout pas ce problème rapidement, tout sera perdu.",
                    "Palanã ! L'heure est grave ! On est que lundi, et j'en ai déjà plein le dos.",
                    "A qui le dites-vous, la pénurie de café touche le continent entier.",
                ],
            }),
        ];
        _this.currentTableauIndex = 0;
        _this.setCurrentTableau(_this.currentTableauIndex);
        return _this;
    }
    Intro100.prototype.endOfTableaux = function () {
        if (this.currentTableauIndex >= this.tableaux.length - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Intro100.prototype.setCurrentTableau = function (n) {
        this.currentTableau = this.tableaux[n];
    };
    Intro100.prototype.create = function () {
        this.currentTableau.create();
    };
    Intro100.prototype.update = function () {
        if (this.currentTableau.endOfText() === true) {
            if (this.endOfTableaux() === false) {
                this.currentTableauIndex += 1;
                this.setCurrentTableau(this.currentTableauIndex);
                this.currentTableau.create();
                console.log("Current Tableau = ", this.currentTableau);
            }
        }
    };
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
exports.default = [BootScene_1.BootScene, Intro100_1.Intro100, OverworldScene_1.OverworldScene];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QYXduLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BsYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RhYmxlYXUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZmFicy9JbnRlcmFjdGl2ZUltYWdlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wcmVmYWJzL1NjZW5lU3RhcnRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZWZhYnMvVGV4dEFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9Cb290U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9JbnRybzEwMC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL092ZXJ3b3JsZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUFJLENBQUMsSUFBSSxHQUFHLHNCQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFB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R0FBRyxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEQsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDNUQsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDNUQsSUFBSSxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDMUQsTUFBTSxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDOUQsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDO1lBQ0YsT0FBTyxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0QsSUFBSSxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDekQsTUFBTSxFQUFFLElBQUksYUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDaEUsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVDtnQkFDSSxNQUFNLENBQUMsR0FBRztnQkFDVixNQUFNLENBQUMsR0FBRztnQkFDVixNQUFNLENBQUMsS0FBSztnQkFDWixNQUFNLENBQUMsS0FBSztnQkFDWixNQUFNLENBQUMsS0FBSztnQkFDWixNQUFNLENBQUMsS0FBSztnQkFD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Q0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsVUFBVSxFQUFFLGVBQWU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F2Qm1DLE1BQU0sQ0FBQyxLQUFLLEdBdUIvQztBQXZCWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNYM0IsY0FBYzs7QUFFZCxzRkFBd0M7QUFDeEMsbUZBQXNDO0FBQ3RDLHFHQUFrRDtBQUVsRCxrQkFBZSxDQUFDLHFCQUFTLEVBQUUsbUJBQVEsRUFBRSwrQkFBYyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICByYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICByYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGhcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG4gICAgbGV0IHJhd0dyaWQgPSBsb2FkRmlsZShwRmlsZVBhdGgpO1xyXG4gICAgcmV0dXJuIHJhd0dyaWQuc3BsaXQoXCJcXG5cIikubWFwKChpdGVtKSA9PiBpdGVtLnNwbGl0KFwiXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG4gICAgd2hpdGU6IHsgc3RyaW5nOiBcIiNmZmZmZmZcIiwgaGV4OiAweGZmZmZmZiB9LFxyXG4gICAgYmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9LFxyXG4gICAgY3VzdG9tWWVsbG93OiB7IHN0cmluZzogXCIjZmZkZTU5XCIsIGhleDogMHhmZmRlNTkgfSxcclxuICAgIGdyZXk6IHsgc3RyaW5nOiBcIiNkM2QxZDJcIiwgaGV4OiAweGQzZDFkMiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xLRVlTID0ge1xyXG4gICAgUExBWUVSOiB7XHJcbiAgICAgICAgU0VUMToge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZULFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFNFVDI6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogRml4ZWQgZm9udCBmYW1pbHkgdG8gdXNlIGFjcm9zcyB0aGUgZ2FtZSA6XHJcbiAqIFwiTW9ub3NwYWNlLCBUYWhvbWEsIEFyaWFsXCJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIm1vbm9zcGFjZSwgVGFob21hLCBBcmlhbFwiO1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkIGZvbnQgc2l6ZXMgdG8gdXNlIGFjcm9zcyB0aGUgZ2FtZSA6XHJcbiAqIHhzbWFsbCA9IDhweCxcclxuICogc21hbGwgPSAxMnB4LFxyXG4gKiBtZWRpdW0gPSAxOHB4LFxyXG4gKiBsYXJnZSA9IDI0cHgsXHJcbiAqIHhsYXJnZSA9IDMycHgsXHJcbiAqIGJpZyA9IDY0cHgsXHJcbiAqIGdpYW50ID0gMTI4cHhcclxuICovXHJcbmV4cG9ydCBjb25zdCBGT05UX1NJWkVTID0ge1xyXG4gICAgeHNtYWxsOiBcIjhweFwiLFxyXG4gICAgc21hbGw6IFwiMTJweFwiLFxyXG4gICAgbWVkaXVtOiBcIjE4cHhcIixcclxuICAgIGxhcmdlOiBcIjI0cHhcIixcclxuICAgIHhsYXJnZTogXCIzMnB4XCIsXHJcbiAgICBiaWc6IFwiNjRweFwiLFxyXG4gICAgZ2lhbnQ6IFwiMTI4cHhcIixcclxufTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiQ29mZmVlIFF1ZXN0XCIsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7IHdpZHRoOiA5MDAsIGhlaWdodDogNzAwIH0sXHJcbiAgICBpbnB1dDogeyBrZXlib2FyZDogdHJ1ZSB9LFxyXG4gICAgZG9tOiB7IGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSB9LFxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwiYXJjYWRlXCIsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFyZW50OiBcImdhbWVcIixcclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBiYXJYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhclk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveFdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZSh0aGlzLmJhckNvbG9yLCB0aGlzLmJhckFscGhhKTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdChcclxuICAgICAgICAgICAgdGhpcy5iYXJYLFxyXG4gICAgICAgICAgICB0aGlzLmJhclksXHJcbiAgICAgICAgICAgIHRoaXMuYmFyV2lkdGggKiBwVmFsdWUsXHJcbiAgICAgICAgICAgIHRoaXMuYmFySGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmUgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmJhcldpZHRoID0gNDAwO1xyXG4gICAgICAgIHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5iYXJYID0gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYmFyWSA9IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5iYXJIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tUmVkLmhleDtcclxuICAgICAgICB0aGlzLmJhckFscGhhID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLmJveCA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5ib3hXaWR0aCA9IHRoaXMuYmFyV2lkdGggKyAxMDtcclxuICAgICAgICB0aGlzLmJveEhlaWdodCA9IHRoaXMuYmFySGVpZ2h0ICsgMTA7XHJcbiAgICAgICAgdGhpcy5ib3hYID0gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYm94V2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYm94WSA9IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5ib3hIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG4gICAgICAgIHRoaXMuYm94QWxwaGEgPSAwLjM7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LmZpbGxTdHlsZSh0aGlzLmJveENvbG9yLCB0aGlzLmJveEFscGhhKTtcclxuICAgICAgICB0aGlzLmJveC5maWxsUmVjdCh0aGlzLmJveFgsIHRoaXMuYm94WSwgdGhpcy5ib3hXaWR0aCwgdGhpcy5ib3hIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyICsgNDAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQ2hhcmdlbWVudC4uLlwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udDogXCIyMHB4IG1vbm9zcGFjZVwiLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogQ09MT1JTLndoaXRlLnN0cmluZyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dCA9IHRoaXMuc2NlbmUubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgeTogZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiMCVcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IFwiMThweCBtb25vc3BhY2VcIixcclxuICAgICAgICAgICAgICAgIGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL1BsYWNlXCI7XHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi9UaWxlbWFwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGNvbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsaW5lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQbGFjZTogUGxhY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlTm9ydGgoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lIC09IDE7XHJcbiAgICAgICAgdGhpcy55IC09IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVTb3V0aCgpIHtcclxuICAgICAgICB0aGlzLmxpbmUgKz0gMTtcclxuICAgICAgICB0aGlzLnkgKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUVhc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgKz0gMTtcclxuICAgICAgICB0aGlzLnggKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVdlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgLT0gMTtcclxuICAgICAgICB0aGlzLnggLT0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGF3bihwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgcFRpbGVtYXA6IFRpbGVtYXApOiB2b2lkIHtcclxuICAgICAgICBsZXQgcHggPSBNYXRoLmZsb29yKHBvaW50ZXIueCAvIHBUaWxlbWFwLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgbGV0IHB5ID0gTWF0aC5mbG9vcihwb2ludGVyLnkgLyBwVGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHB5ID09PSB0aGlzLmxpbmUgKyAxICYmIHB4ID09PSB0aGlzLmNvbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHkgPT09IHRoaXMubGluZSAtIDEgJiYgcHggPT09IHRoaXMuY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVdlc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCAtIDEgJiYgcHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9ydGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlV2VzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXZXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUgLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUVhc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCArIDEgJiYgcHkgPT09IHRoaXMubGluZSArIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU291dGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2UgPSBwVGlsZW1hcC5ncmlkW3RoaXMubGluZV1bdGhpcy5jb2xdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgY29sOiBudW1iZXI7XHJcbiAgICAgICAgbGluZTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICB0aWxlbWFwOiBUaWxlbWFwO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHBhcmFtcy5jb2wgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBwYXJhbXMubGluZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCArXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgcGFyYW1zLnRleHR1cmVLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2wgPSBwYXJhbXMuY29sO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHBhcmFtcy5saW5lO1xyXG5cclxuICAgICAgICB0aGlzLnggPVxyXG4gICAgICAgICAgICB0aGlzLmNvbCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnkgPVxyXG4gICAgICAgICAgICB0aGlzLmxpbmUgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgIDogdGhpcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKFxyXG4gICAgICAgICAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgICAgIChwb2ludGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhd24ocG9pbnRlciwgcGFyYW1zLnRpbGVtYXApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYWNlIHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2lzUmVzdHJpY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzUmVzdHJpY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNSZXN0cmljdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IGlzUmVzdHJpY3RlZDogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2lzUmVzdHJpY3RlZCA9IHBhcmFtcy5pc1Jlc3RyaWN0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBDT0xPUlMsIEZPTlRfU0laRVMsIGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aXZlSXRlbSB9IGZyb20gXCIuL0ludGVyYWN0aXZlSXRlbVwiO1xyXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gXCIuLi9wcmVmYWJzL1RleHRBcmVhXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aXZlSW1hZ2VCdXR0b24gfSBmcm9tIFwiLi4vcHJlZmFicy9JbnRlcmFjdGl2ZUltYWdlQnV0dG9uXCI7XHJcbmltcG9ydCB7IFNjZW5lU3RhcnRCdXR0b24gfSBmcm9tIFwiLi4vcHJlZmFicy9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVhdSB7XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwcml2YXRlIGtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8SW50ZXJhY3RpdmVJdGVtPjtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RyaW5nSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VycmVudFN0cmluZzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0QXJlYTogVGV4dEFyZWE7XHJcbiAgICBwcml2YXRlIG5leHRCdG46IEludGVyYWN0aXZlSW1hZ2VCdXR0b247XHJcblx0cHJpdmF0ZSBtYXBCdG46IFNjZW5lU3RhcnRCdXR0b247XHJcblxyXG4gICAgZW5kT2ZUZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdHJpbmdJbmRleCA+PSB0aGlzLnRleHQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmdJbmRleCArPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRbdGhpcy5jdXJyZW50U3RyaW5nSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgdGV4dD86IEFycmF5PHN0cmluZz47XHJcbiAgICAgICAgaXRlbXM/OiBBcnJheTxJbnRlcmFjdGl2ZUl0ZW0+O1xyXG4gICAgICAgIGNoYXJhY3RlcnM/OiBBcnJheTxDaGFyYWN0ZXI+O1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBwYXJhbXMua2V5O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy50ZXh0O1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYXJhbXMuaXRlbXM7XHJcblx0XHR0aGlzLmNoYXJhY3RlcnMgPSBwYXJhbXMuY2hhcmFjdGVycztcclxuXHRcdHRoaXMuY3VycmVudFN0cmluZ0luZGV4ID0gMDtcclxuXHRcdHRoaXMuY3VycmVudFN0cmluZyA9IHRoaXMudGV4dFt0aGlzLmN1cnJlbnRTdHJpbmdJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1x0XHRcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGAke3RoaXMua2V5fS1iZ2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnRleHRBcmVhID0gbmV3IFRleHRBcmVhKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLSA4MixcclxuICAgICAgICAgICAgd2lkdGg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAtIDE1MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuYmxhY2suaGV4LFxyXG4gICAgICAgICAgICBhbHBoYTogMC44LFxyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nOiB0aGlzLmN1cnJlbnRTdHJpbmcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dEJ0biA9IG5ldyBJbnRlcmFjdGl2ZUltYWdlQnV0dG9uKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAtIDQyLFxyXG4gICAgICAgICAgICB5OiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC0gNzUsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IFwiYnV0dG9uTmV4dFwiLFxyXG4gICAgICAgICAgICBob3ZlckNvbG9yOiBDT0xPUlMuY3VzdG9tUmVkLmhleCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0QnRuLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmRPZlRleHQoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEFyZWEuY3VycmVudFN0cmluZyA9IHRoaXMubmV4dFN0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXBCdG4gPSBuZXcgU2NlbmVTdGFydEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB4OiA3NixcclxuICAgICAgICAgICAgeTogMzAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjgsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuYmxhY2suaGV4LFxyXG4gICAgICAgICAgICBob3ZlckNvbG9yOiBDT0xPUlMuY3VzdG9tUmVkLmhleCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTUFQXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBGT05UX1NJWkVTLmxhcmdlLFxyXG4gICAgICAgICAgICBmb250Q29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIGFscGhhOiAxLFxyXG4gICAgICAgICAgICBuZXdTY2VuZUtleTogXCJPdmVyd29ybGRcIixcclxuICAgICAgICB9KTtcclxuXHR9XHJcblx0XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4vUGxhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuICAgIHByaXZhdGUgdGlsZXNoZWV0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIF90aWxlV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpbGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2dyaWQ6IFBsYWNlW11bXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbGVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aWxlSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBncmlkKCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGlsZXNTaXplcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90aWxlV2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5fdGlsZUhlaWdodCA9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZSB9KSB7XHJcbiAgICAgICAgdGhpcy5pbml0VGlsZXNTaXplcygpO1xyXG5cclxuICAgICAgICBjb25zdCBQbGFjZXMgPSB7XHJcbiAgICAgICAgICAgIFNlYTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgc2VhXCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIEJlYWNoOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBiZWFjaFwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBHcmFzczogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgZ3Jhc3NcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgQ2l0eTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgY2l0eVwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBGb3Jlc3Q6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGZvcmVzdFwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBMaWdodGhvdXNlOiBuZXcgUGxhY2Uoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0aGUgbGlnaHRob3VzZVwiLFxyXG4gICAgICAgICAgICAgICAgaXNSZXN0cmljdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUHlyYW1pZDogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgcHlyYW1pZFwiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgICAgIERpY2s6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGRpY2tcIiwgaXNSZXN0cmljdGVkOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICBDYXN0bGU6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGNhc3RsZVwiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3JpZCA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DaXR5LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5EaWNrLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNpdHksXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5MaWdodGhvdXNlLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5QeXJhbWlkLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNhc3RsZSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2hlZXQgPSBwYXJhbXMuc2NlbmUuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIFwib3ZlcndvcmxkTWFwXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RpdmVJbWFnZUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcblx0XHR0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0XHRob3ZlckNvbG9yPzogbnVtYmVyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcclxuXHRcdGlmIChwYXJhbXMuaG92ZXJDb2xvcikge1xyXG5cdFx0XHR0aGlzLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0VGludChwYXJhbXMuaG92ZXJDb2xvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2xlYXJUaW50KCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBGT05UX1NJWkVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZVN0YXJ0QnV0dG9uIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYm94OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBob3ZlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzY2VuZURhdGE6IGFueTtcclxuXHJcbiAgICBkZXN0cm95Qm94QW5kVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICBjb2xvcjogbnVtYmVyO1xyXG4gICAgICAgIGhvdmVyQ29sb3I6IG51bWJlcjtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgICAgICAgZm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgYWxwaGE6IG51bWJlcjtcclxuICAgICAgICBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHNjZW5lRGF0YT86IGFueTtcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG4gICAgICAgIHRoaXMueCA9IHBhcmFtcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBhcmFtcy55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBwYXJhbXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3ZlckNvbG9yID0gcGFyYW1zLmhvdmVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHBhcmFtcy5sYWJlbDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gcGFyYW1zLmZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZm9udENvbG9yID0gcGFyYW1zLmZvbnRDb2xvcjtcclxuICAgICAgICB0aGlzLmFscGhhID0gcGFyYW1zLmFscGhhO1xyXG4gICAgICAgIHRoaXMubmV3U2NlbmVLZXkgPSBwYXJhbXMubmV3U2NlbmVLZXk7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMuc2NlbmVEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVEYXRhID0gcGFyYW1zLnNjZW5lRGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lRGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIHRoaXMuYWxwaGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcclxuICAgICAgICAgICAgXCJwb2ludGVyZG93blwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnN0b3BBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5mYWRlT3V0KDEwMDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLm9uY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5FdmVudHMuRkFERV9PVVRfQ09NUExFVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdTY2VuZUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5zY2VuZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJveC5maWxsQ29sb3IgPSB0aGlzLmhvdmVyQ29sb3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LmZpbGxDb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dChcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgdGhpcy5ib3gueCxcclxuICAgICAgICAgICAgdGhpcy5ib3gueSxcclxuICAgICAgICAgICAgdGhpcy5sYWJlbCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogREVGQVVMVF9GT05UX0ZBTUlMSUVTLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5ib3gpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBGT05UX1NJWkVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSB7XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYWxwaGE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGV4dFBhZGRpbmc6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICBzZXQgY3VycmVudFN0cmluZyh2OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQuc2V0VGV4dCh2KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95Qm94QW5kVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICBjb2xvcjogbnVtYmVyO1xyXG4gICAgICAgIGFscGhhOiBudW1iZXI7XHJcbiAgICAgICAgY3VycmVudFN0cmluZzogc3RyaW5nO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy54ID0gcGFyYW1zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcGFyYW1zLnk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHBhcmFtcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmFscGhhID0gcGFyYW1zLmFscGhhO1xyXG4gICAgICAgIHRoaXMudGV4dFBhZGRpbmcgPSAxMDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3RyaW5nID0gcGFyYW1zLmN1cnJlbnRTdHJpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgdGhpcy5hbHBoYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dChcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgdGhpcy5ib3gueCAtIHRoaXMuYm94LndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5ib3gueSAtIHRoaXMuYm94LmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdHJpbmcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBGT05UX1NJWkVTLmxhcmdlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgd29yZFdyYXA6IHsgd2lkdGg6IHRoaXMud2lkdGggLSB0aGlzLnRleHRQYWRkaW5nIH0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy50ZXh0UGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGhpcy50ZXh0UGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMudGV4dFBhZGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnRleHRQYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYm94KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLnRleHQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUywgRk9OVF9TSVpFUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IExvYWRpbmdCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Mb2FkaW5nQmFyXCI7XHJcbmltcG9ydCB7IFNjZW5lU3RhcnRCdXR0b24gfSBmcm9tIFwiLi4vcHJlZmFicy9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJCb290XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBsb2FkaW5nQmFyOiBMb2FkaW5nQmFyO1xyXG4gICAgcHJpdmF0ZSBtYWluQnRuOiBTY2VuZVN0YXJ0QnV0dG9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5wYWNrKFwicHJlbG9hZFwiLCBcImFzc2V0cy9wYWNrLmpzb25cIiwgXCJwcmVsb2FkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdCYXIgPSBuZXcgTG9hZGluZ0Jhcih7IHNjZW5lOiB0aGlzIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQub24oXCJwcm9ncmVzc1wiLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLmRyYXcodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3NUZXh0LnNldFRleHQoTWF0aC5mbG9vcih2YWx1ZSAqIDEwMCkgKyBcIiVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcImNvbXBsZXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJib290VGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwiYm9vdExvZ29cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbkJ0biA9IG5ldyBTY2VuZVN0YXJ0QnV0dG9uKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcykgLSAxMDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuY3VzdG9tUmVkLmhleCxcclxuICAgICAgICAgICAgaG92ZXJDb2xvcjogQ09MT1JTLmN1c3RvbVllbGxvdy5oZXgsXHJcbiAgICAgICAgICAgIGFscGhhOiAxLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJTVEFSVFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogRk9OVF9TSVpFUy54bGFyZ2UsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogQ09MT1JTLmJsYWNrLnN0cmluZyxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiSW50cm8xMDBcIixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcHMgfSBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCB7IFRhYmxlYXUgfSBmcm9tIFwiLi4vb2JqZWN0cy9UYWJsZWF1XCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJJbnRybzEwMFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEludHJvMTAwIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRwcml2YXRlIGN1cnJlbnRUYWJsZWF1OiBUYWJsZWF1O1xyXG5cdHByaXZhdGUgY3VycmVudFRhYmxlYXVJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdGFibGVhdXg6IFRhYmxlYXVbXTtcclxuXHRcclxuXHRwcml2YXRlIGVuZE9mVGFibGVhdXgoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5jdXJyZW50VGFibGVhdUluZGV4ID49IHRoaXMudGFibGVhdXgubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDdXJyZW50VGFibGVhdShuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUYWJsZWF1ID0gdGhpcy50YWJsZWF1eFtuXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMudGFibGVhdXggPSBbXHJcbiAgICAgICAgICAgIG5ldyBUYWJsZWF1KHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcIjEwMS1raXRjaGVuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNbW1oLCB1aCwgaGVpbsKgPyBRdWVsbGUgaGV1cmUgaWwgZXN0wqA/IFF1aSBzdWlzLWplwqA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFc3QtY2UgcXVlLi4uIEVzdC1jZSBxdWUgaidhaSBwYXMgdW4gam9iIG/DuSBqZSBkb2lzIGFsbGVyLCBvdSBxdWVscXVlIGNob3NlwqA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZ2JsciwgaWwgbWUgZmF1dCB1biBjYWbDqS4gVG91dCBpcmEgYmllbiBsb3JzcXVlIGonYXVyYWkgYnUgbW9uIGNhZsOpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFaGhowqA/IFBsdXMgZGUgY2Fmw6kuIEJvbiwgcGFzIGRlIHBhbmlxdWUsIGplIHZhaXMganVzdGUgYWxsZXIgZW4gYWNoZXRlciB1biBhdSBjYWbDqSBkdSBjb2luLlwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBUYWJsZWF1KHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcIjEwMi1zaG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCb25qb3VyIGNhZmZlbGllciwgdm90cmUgbWVpbGxldXIgY2Fmw6ksIGRhbnMgdW5lIGdyYW5kZSB0YXNzZSwgcHJvbnRvwqAhIEVzcHJlc3NvwqAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJybW0gYnJybW0gZ3JtbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29tbWVudMKgPyBQbHVzIGRlIGNhZsOpwqA/IFZvdXMgcGxhaXNhbnRleiBiaWVuIHPDu3IsIG9uIG1lIGxhIGZhaXQgcGFzLCBpbCB5IGEgw6ljcml0IMKrwqBjb2ZmZWXCoMK7IGRlcnJpw6hyZSB2b3VzLiBTYW5zIGNhZsOpLCB2b3VzIG4nw6p0ZXMgcmllbsKgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JtbWJsIGJydW1tYiBkcm1tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVbmUgcMOpbnVyaWUgZGUgY2Fmw6nCoD8gVG91dGUgbGEgdmlsbGUgZXN0IHRvdWNow6llwqA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm1iIHBydW1tYmxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYWlzIGMnZXN0IHVuZSBjYXRhc3Ryb3BoZSwgbCfDqWNvbm9taWUgdmEgc+KAmWVmZm9uZHJlcsKgISBKZSBuZSBtZSBzb3V2aWVucyBtw6ptZSBwbHVzIG/DuSBqZSB0cmF2YWlsbGXCoCFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImdybW1iIGJybW1ibFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxsZXIgdm9pciBsZSBmb3Vybmlzc2V1ciBkZSBsYSB2aWxsZSwgTW9sIFBhbGFuw6PCoD8gSid5IHZhaXMgZGUgY2UgcGFzwqAhIFRpZW5zIGJvbiwgYnJhdmUgY2FmZmVsaWVywqAhXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFRhYmxlYXUoe1xyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiMTAzLWxpdmluZ3Jvb21cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlBsdXMgZGUgY2Fmw6ksIGplIG4nYXJyaXZlIHBhcyDDoCB5IGNyb2lyZSwgYydlc3QgZMOpasOgIHVuIG1pcmFjbGUgcXVlIGplIHRpZW5uZSBkZWJvdXQuIFNpIG9uIG5lIHLDqXNvdXQgcGFzIGNlIHByb2Jsw6htZSByYXBpZGVtZW50LCB0b3V0IHNlcmEgcGVyZHUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYWxhbsOjwqAhIEwnaGV1cmUgZXN0IGdyYXZlwqAhIE9uIGVzdCBxdWUgbHVuZGksIGV0IGonZW4gYWkgZMOpasOgIHBsZWluIGxlIGRvcy5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkEgcXVpIGxlIGRpdGVzLXZvdXMsIGxhIHDDqW51cmllIGRlIGNhZsOpIHRvdWNoZSBsZSBjb250aW5lbnQgZW50aWVyLlwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcblx0XHR0aGlzLmN1cnJlbnRUYWJsZWF1SW5kZXggPSAwO1xyXG5cdFx0dGhpcy5zZXRDdXJyZW50VGFibGVhdSh0aGlzLmN1cnJlbnRUYWJsZWF1SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuY3VycmVudFRhYmxlYXUuY3JlYXRlKCk7XHJcblx0fVxyXG5cdFxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRUYWJsZWF1LmVuZE9mVGV4dCgpID09PSB0cnVlKSB7XHJcblx0XHRcdGlmICh0aGlzLmVuZE9mVGFibGVhdXgoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUYWJsZWF1SW5kZXggKz0gMTtcclxuXHRcdFx0XHR0aGlzLnNldEN1cnJlbnRUYWJsZWF1KHRoaXMuY3VycmVudFRhYmxlYXVJbmRleCk7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGFibGVhdS5jcmVhdGUoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkN1cnJlbnQgVGFibGVhdSA9IFwiLCB0aGlzLmN1cnJlbnRUYWJsZWF1KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuLi9vYmplY3RzL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9vYmplY3RzL1Bhd25cIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk92ZXJ3b3JsZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgdGlsZW1hcDogVGlsZW1hcDtcclxuICAgIHByaXZhdGUgcGF3bjogUGF3bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKFwib3ZlcndvcmxkVGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gbmV3IFRpbGVtYXAoeyBzY2VuZTogdGhpcyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXduID0gbmV3IFBhd24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgY29sOiA0LFxyXG4gICAgICAgICAgICBsaW5lOiAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiBcIm92ZXJ3b3JsZEhlcm9cIixcclxuICAgICAgICAgICAgdGlsZW1hcDogdGhpcy50aWxlbWFwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tIFwiLi9Cb290U2NlbmVcIjtcclxuaW1wb3J0IHsgSW50cm8xMDAgfSBmcm9tIFwiLi9JbnRybzEwMFwiO1xyXG5pbXBvcnQgeyBPdmVyd29ybGRTY2VuZSB9IGZyb20gXCIuL092ZXJ3b3JsZFNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBJbnRybzEwMCwgT3ZlcndvcmxkU2NlbmVdO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9