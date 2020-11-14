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
exports.CONTROLKEYS = exports.COLORS = exports.loadStrings = exports.loadFile = exports.getGameHeight = exports.getGameWidth = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/**
 * Should put this inside a class
 */
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
    customYellow: { string: "#ffde59", hex: 0xffde59 },
};
// Note -- we can add multiple keys at once :
// this.keys = this.input.keyboard.addKeys('ENTER,W,A,S,D')
// And then do : this.keys.ENTER.isDown...
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
    parent: "game",
    scene: scenes_1.default,
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/Gui.ts":
/*!****************************!*\
  !*** ./src/objects/Gui.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gui = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Gui = /** @class */ (function () {
    function Gui() {
    }
    /**
     * Create a stylized Button DOM Element with a click event listener attached
     * to it. The event listener callback starts a new scene using the scene key
     * passed in arguments and stops all sounds if stopSounds set to true.
     */
    Gui.mainBtn = function (params) {
        params.scene.add
            .dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 100, "button", Gui.mainBtnStyle, params.text)
            .addListener("click")
            .on("click", function () {
            if (params.stopSounds) {
                params.scene.sound.stopAll();
            }
            // Trigger fade-out to black
            params.scene.cameras.main.fadeOut(1000, 0, 0, 0);
            // When triggered fade-out is finished then we start the new scene
            params.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function () {
                params.scenePlugin.start(params.newSceneKey, params.sceneData);
            });
        });
    };
    /**
     * Button that changes an image (img) texture with another (textures),
     * one by one. Like a slideshow.
     * @param img: a phaser game object image that act as a container in a way.
     * @param textures: the textures to append to img.
     */
    Gui.slideBtn = function (params) {
        var currentIndex = 0;
        params.scene.add
            .dom(params.x, params.y, "button", Gui.secondaryBtnStyle, params.text)
            .addListener("click")
            .on("click", function () {
            params.scene.sound.add("clickSound").play();
            if (currentIndex < params.textureKeys.length - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            if (params.callback !== undefined) {
                params.callback();
            }
            params.img.setTexture(params.textureKeys[currentIndex]);
        });
    };
    Gui.title = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, "h3", "color: #ffffff \n\t\t\t\tfont-size: 40px \n\t\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, "h4", "color: #ffffff \n\t\t\t\tfont-size: 30px \n\t\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.customText = function (params) {
        params.scene.add.dom(params.x, params.y, "p", "color: #ffffff \n\t\t\t\tfont-size: 20px \n\t\t\t\ttext-align: center \n\t\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.mainBtnStyle = "width: 128px \n\t\theight: 48px;\n\t\tfont-family: Tahoma, courier;\n\t\tcolor: #ffde59;\n\t\tfont-weight: bold;\n\t\tfont-size: 25px;\n\t\tbackground-color: #000;\n\t\tborder: 3px solid #ffde59;";
    Gui.secondaryBtnStyle = "width: 100px \n\t\theight: 33px;\n\t\tfont-family: Grobold, Arial, sans-serif;\n\t\tcolor: #000;\n\t\tfont-size: 17px;\n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff;\n\t\tborder: 2px solid #000;";
    return Gui;
}());
exports.Gui = Gui;


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
        this.barColor = helpers_1.COLORS.white.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = (helpers_1.getGameWidth(this.scene) / 2) - (this.boxWidth / 2);
        this.boxX = (helpers_1.getGameHeight(this.scene) / 2) - (this.boxHeight / 2);
        this.boxColor = helpers_1.COLORS.customRed.hex;
        this.boxAlpha = 1;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: (helpers_1.getGameHeight(this.scene) / 2) + 40,
            text: "Chargement...",
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: (helpers_1.getGameWidth(this.scene) / 2),
            y: (helpers_1.getGameHeight(this.scene) / 2),
            text: "0%",
            style: {
                font: '18px monospace',
                fill: '#000000'
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
        var normalizedPx = Math.floor(pointer.x / pTilemap.tileWidth);
        var normalizedPy = Math.floor(pointer.y / pTilemap.tileHeight);
        if (normalizedPy === this.line + 1 && normalizedPx === this.col) {
            this.moveSouth();
        }
        else if (normalizedPy === this.line - 1 &&
            normalizedPx === this.col) {
            this.moveNorth();
        }
        else if (normalizedPx === this.col + 1 &&
            normalizedPy === this.line) {
            this.moveEast();
        }
        else if (normalizedPx === this.col - 1 &&
            normalizedPy === this.line) {
            this.moveWest();
        }
        else if (normalizedPx === this.col - 1 &&
            normalizedPy === this.line - 1) {
            this.moveNorth();
            this.moveWest();
        }
        else if (normalizedPx === this.col - 1 &&
            normalizedPy === this.line + 1) {
            this.moveSouth();
            this.moveWest();
        }
        else if (normalizedPx === this.col + 1 &&
            normalizedPy === this.line - 1) {
            this.moveNorth();
            this.moveEast();
        }
        else if (normalizedPx === this.col + 1 &&
            normalizedPy === this.line + 1) {
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
var Gui_1 = __webpack_require__(/*! ../objects/Gui */ "./src/objects/Gui.ts");
var LoadingBar_1 = __webpack_require__(/*! ../objects/LoadingBar */ "./src/objects/LoadingBar.ts");
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
        this.loadingBar = new LoadingBar_1.LoadingBar({ scene: this });
        this.load.on("progress", function (value) {
            _this.loadingBar.draw(value);
            _this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
        this.load.pack("preload", "assets/pack.json", "preload");
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add("bootTheme");
        this.musicTheme.play();
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, "bootLogo");
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Overworld",
            sceneData: this.data.getAll(),
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


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
var OverworldScene_1 = __webpack_require__(/*! ./OverworldScene */ "./src/scenes/OverworldScene.ts");
exports.default = [BootScene_1.BootScene, OverworldScene_1.OverworldScene];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0xvYWRpbmdCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUGF3bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UaWxlbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvQm9vdFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvT3ZlcndvcmxkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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RUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsZUFBZTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQXJCbUMsTUFBTSxDQUFDLEtBQUssR0FxQi9DO0FBckJZLHdDQUFjOzs7Ozs7Ozs7Ozs7OztBQ1gzQixjQUFjOztBQUVkLHNGQUF3QztBQUd4QyxxR0FBa0Q7QUFFbEQsa0JBQWUsQ0FBQyxxQkFBUyxFQUFFLCtCQUFjLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG91bGQgcHV0IHRoaXMgaW5zaWRlIGEgY2xhc3NcclxuICovXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICByYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICByYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGhcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG4gICAgbGV0IHJhd0dyaWQgPSBsb2FkRmlsZShwRmlsZVBhdGgpO1xyXG4gICAgcmV0dXJuIHJhd0dyaWQuc3BsaXQoXCJcXG5cIikubWFwKChpdGVtKSA9PiBpdGVtLnNwbGl0KFwiXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG4gICAgd2hpdGU6IHsgc3RyaW5nOiBcIiNmZmZmZmZcIiwgaGV4OiAweGZmZmZmZiB9LFxyXG4gICAgY3VzdG9tWWVsbG93OiB7IHN0cmluZzogXCIjZmZkZTU5XCIsIGhleDogMHhmZmRlNTkgfSxcclxufTtcclxuXHJcbi8vIE5vdGUgLS0gd2UgY2FuIGFkZCBtdWx0aXBsZSBrZXlzIGF0IG9uY2UgOlxyXG4vLyB0aGlzLmtleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleXMoJ0VOVEVSLFcsQSxTLEQnKVxyXG4vLyBBbmQgdGhlbiBkbyA6IHRoaXMua2V5cy5FTlRFUi5pc0Rvd24uLi5cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuICAgIFBMQVlFUjoge1xyXG4gICAgICAgIFNFVDE6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTRVQyOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuaW1wb3J0IFNjZW5lcyBmcm9tIFwiLi9zY2VuZXNcIjtcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogXCJDb2ZmZWUgUXVlc3RcIixcclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgc2NhbGU6IHsgd2lkdGg6IDkwMCwgaGVpZ2h0OiA3MDAgfSxcclxuICAgIGlucHV0OiB7IGtleWJvYXJkOiB0cnVlIH0sXHJcblx0ZG9tOiB7IGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSB9LFxyXG4gICAgcGFyZW50OiBcImdhbWVcIixcclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gYHdpZHRoOiAxMjhweCBcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdGZvbnQtZmFtaWx5OiBUYWhvbWEsIGNvdXJpZXI7XHJcblx0XHRjb2xvcjogI2ZmZGU1OTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHRcdGJvcmRlcjogM3B4IHNvbGlkICNmZmRlNTk7YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gYHdpZHRoOiAxMDBweCBcclxuXHRcdGhlaWdodDogMzNweDtcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDA7YDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuICAgICAqIHRvIGl0LiBUaGUgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2sgc3RhcnRzIGEgbmV3IHNjZW5lIHVzaW5nIHRoZSBzY2VuZSBrZXlcclxuICAgICAqIHBhc3NlZCBpbiBhcmd1bWVudHMgYW5kIHN0b3BzIGFsbCBzb3VuZHMgaWYgc3RvcFNvdW5kcyBzZXQgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYWluQnRuKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHN0b3BTb3VuZHM6IGJvb2xlYW47XHJcbiAgICAgICAgc2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47XHJcbiAgICAgICAgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuICAgICAgICBzY2VuZURhdGE/OiBvYmplY3Q7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAuZG9tKFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgIEd1aS5tYWluQnRuU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hZGRMaXN0ZW5lcihcImNsaWNrXCIpXHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBmYWRlLW91dCB0byBibGFja1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmNhbWVyYXMubWFpbi5mYWRlT3V0KDEwMDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gdHJpZ2dlcmVkIGZhZGUtb3V0IGlzIGZpbmlzaGVkIHRoZW4gd2Ugc3RhcnQgdGhlIG5ldyBzY2VuZVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmNhbWVyYXMubWFpbi5vbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuRXZlbnRzLkZBREVfT1VUX0NPTVBMRVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm5ld1NjZW5lS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG4gICAgICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuICAgICAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG4gICAgICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgICAgIHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb247XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHBhcmFtcy50ZXh0dXJlS2V5cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmltZy5zZXRUZXh0dXJlKHBhcmFtcy50ZXh0dXJlS2V5c1tjdXJyZW50SW5kZXhdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICAyNCxcclxuICAgICAgICAgICAgXCJoM1wiLFxyXG4gICAgICAgICAgICBgY29sb3I6ICNmZmZmZmYgXHJcblx0XHRcdFx0Zm9udC1zaXplOiA0MHB4IFxyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlY3Rpb25UaXRsZShwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgIFwiaDRcIixcclxuICAgICAgICAgICAgYGNvbG9yOiAjZmZmZmZmIFxyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzBweCBcclxuXHRcdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjdXN0b21UZXh0KHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJwXCIsXHJcbiAgICAgICAgICAgIGBjb2xvcjogI2ZmZmZmZiBcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHggXHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyIFxyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIGJhclg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhclk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmNsZWFyKCk7XHJcblx0XHR0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcblx0XHR0aGlzLmJhci5maWxsUmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSwgdGhpcy5iYXJIZWlnaHQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuYm94LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMudGV4dC5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuXHRcdHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcblx0XHR0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFyV2lkdGgvMik7XHJcblx0XHR0aGlzLmJhclkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJhckhlaWdodC8yKTtcclxuXHRcdHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG5cdFx0dGhpcy5iYXJBbHBoYSA9IDAuODtcclxuXHRcdFxyXG5cdFx0dGhpcy5ib3ggPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5ib3hXaWR0aCA9IHRoaXMuYmFyV2lkdGggKyAxMDtcclxuXHRcdHRoaXMuYm94SGVpZ2h0ID0gdGhpcy5iYXJIZWlnaHQgKyAxMDtcclxuXHRcdHRoaXMuYm94WCA9IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMikgLSAodGhpcy5ib3hXaWR0aC8yKTtcclxuXHRcdHRoaXMuYm94WCA9IChnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYm94SGVpZ2h0LzIpO1xyXG5cdFx0dGhpcy5ib3hDb2xvciA9IENPTE9SUy5jdXN0b21SZWQuaGV4O1xyXG5cdFx0dGhpcy5ib3hBbHBoYSA9IDE7XHJcblxyXG5cdFx0dGhpcy5ib3guZmlsbFN0eWxlKHRoaXMuYm94Q29sb3IsIHRoaXMuYm94QWxwaGEpO1xyXG5cdFx0dGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSArIDQwLFxyXG5cdFx0XHR0ZXh0OiBcIkNoYXJnZW1lbnQuLi5cIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMjBweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6ICcjZmZmZmZmJ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuXHRcdHRoaXMuX3Byb2dyZXNzVGV4dCA9IHRoaXMuc2NlbmUubWFrZS50ZXh0KHtcclxuXHRcdFx0eDogKGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yKSwgXHJcblx0XHRcdHk6IChnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpLzIpLFxyXG5cdFx0XHR0ZXh0OiBcIjAlXCIsXHJcblx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogJzE4cHggbW9ub3NwYWNlJyxcclxuXHRcdFx0XHRmaWxsOiAnIzAwMDAwMCdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi9QbGFjZVwiO1xyXG5pbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4vVGlsZW1hcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBjb2w6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGluZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGxhY2U6IFBsYWNlO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZU5vcnRoKCkge1xyXG4gICAgICAgIHRoaXMubGluZSAtPSAxO1xyXG4gICAgICAgIHRoaXMueSAtPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlU291dGgoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lICs9IDE7XHJcbiAgICAgICAgdGhpcy55ICs9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVFYXN0KCkge1xyXG4gICAgICAgIHRoaXMuY29sICs9IDE7XHJcbiAgICAgICAgdGhpcy54ICs9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVXZXN0KCkge1xyXG4gICAgICAgIHRoaXMuY29sIC09IDE7XHJcbiAgICAgICAgdGhpcy54IC09IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBhd24ocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIHBUaWxlbWFwOiBUaWxlbWFwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRQeCA9IE1hdGguZmxvb3IocG9pbnRlci54IC8gcFRpbGVtYXAudGlsZVdpZHRoKTtcclxuICAgICAgICBsZXQgbm9ybWFsaXplZFB5ID0gTWF0aC5mbG9vcihwb2ludGVyLnkgLyBwVGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSAmJiBub3JtYWxpemVkUHggPT09IHRoaXMuY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNvdXRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgLSAxICYmXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2xcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9ydGgoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBub3JtYWxpemVkUHggPT09IHRoaXMuY29sICsgMSAmJlxyXG4gICAgICAgICAgICBub3JtYWxpemVkUHkgPT09IHRoaXMubGluZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVFYXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEgJiZcclxuICAgICAgICAgICAgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlV2VzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgLSAxICYmXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lIC0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVOb3J0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXZXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEgJiZcclxuICAgICAgICAgICAgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgKyAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNvdXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVdlc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBub3JtYWxpemVkUHggPT09IHRoaXMuY29sICsgMSAmJlxyXG4gICAgICAgICAgICBub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9ydGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgKyAxICYmXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVFYXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZSA9IHBUaWxlbWFwLmdyaWRbdGhpcy5saW5lXVt0aGlzLmNvbF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICBjb2w6IG51bWJlcjtcclxuICAgICAgICBsaW5lOiBudW1iZXI7XHJcbiAgICAgICAgdGV4dHVyZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHRpbGVtYXA6IFRpbGVtYXA7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZSxcclxuICAgICAgICAgICAgcGFyYW1zLmNvbCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICA6IHBhcmFtcy5jb2wgKiBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIHBhcmFtcy5saW5lID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICA6IHBhcmFtcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dHVyZUtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbCA9IHBhcmFtcy5jb2w7XHJcbiAgICAgICAgdGhpcy5saW5lID0gcGFyYW1zLmxpbmU7XHJcblxyXG4gICAgICAgIHRoaXMueCA9XHJcbiAgICAgICAgICAgIHRoaXMuY29sID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIDogdGhpcy5jb2wgKiBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggK1xyXG4gICAgICAgICAgICAgICAgICBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMueSA9XHJcbiAgICAgICAgICAgIHRoaXMubGluZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmxpbmUgKiBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oXHJcbiAgICAgICAgICAgIFwicG9pbnRlcmRvd25cIixcclxuICAgICAgICAgICAgKHBvaW50ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGF3bihwb2ludGVyLCBwYXJhbXMudGlsZW1hcCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2Uge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaXNSZXN0cmljdGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNSZXN0cmljdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Jlc3RyaWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IG5hbWU6IHN0cmluZzsgaXNSZXN0cmljdGVkOiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcbiAgICAgICAgdGhpcy5faXNSZXN0cmljdGVkID0gcGFyYW1zLmlzUmVzdHJpY3RlZDtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi9QbGFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG4gICAgcHJpdmF0ZSB0aWxlc2hlZXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgX3RpbGVXaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdGlsZUhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZ3JpZDogUGxhY2VbXVtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbGVIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdyaWQoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRUaWxlc1NpemVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RpbGVXaWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLl90aWxlSGVpZ2h0ID0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuICAgICAgICB0aGlzLmluaXRUaWxlc1NpemVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFBsYWNlcyA9IHtcclxuICAgICAgICAgICAgU2VhOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBzZWFcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgQmVhY2g6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGJlYWNoXCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIEdyYXNzOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBncmFzc1wiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBDaXR5OiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBjaXR5XCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIEZvcmVzdDogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgZm9yZXN0XCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIExpZ2h0aG91c2U6IG5ldyBQbGFjZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRoZSBsaWdodGhvdXNlXCIsXHJcbiAgICAgICAgICAgICAgICBpc1Jlc3RyaWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBQeXJhbWlkOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBweXJhbWlkXCIsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgRGljazogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgZGlja1wiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgICAgIENhc3RsZTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgY2FzdGxlXCIsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9ncmlkID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DaXR5LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNpdHksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkRpY2ssXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DaXR5LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkxpZ2h0aG91c2UsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlB5cmFtaWQsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2FzdGxlLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVzaGVldCA9IHBhcmFtcy5zY2VuZS5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgXCJvdmVyd29ybGRNYXBcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nQmFyIH0gZnJvbSBcIi4uL29iamVjdHMvTG9hZGluZ0JhclwiO1xyXG5pbXBvcnQgeyBwYXJzZWRTdG9yYWdlIH0gZnJvbSBcIi4uL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0JhciA9IG5ldyBMb2FkaW5nQmFyKHsgc2NlbmU6IHRoaXMgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcInByb2dyZXNzXCIsICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZHJhdyh2YWx1ZSk7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzc1RleHQuc2V0VGV4dCgoTWF0aC5mbG9vcih2YWx1ZSoxMDApKSArIFwiJVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwiY29tcGxldGVcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJib290VGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwiYm9vdExvZ29cIlxyXG5cdFx0KTtcclxuXHRcdFxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU1RBUlRcIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogdHJ1ZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIk92ZXJ3b3JsZFwiLFxyXG4gICAgICAgICAgICBzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuLi9vYmplY3RzL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9vYmplY3RzL1Bhd25cIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk92ZXJ3b3JsZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgdGlsZW1hcDogVGlsZW1hcDtcclxuICAgIHByaXZhdGUgcGF3bjogUGF3bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKFwib3ZlcndvcmxkVGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSBuZXcgVGlsZW1hcCh7IHNjZW5lOiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMucGF3biA9IG5ldyBQYXduKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbDogNCxcclxuICAgICAgICAgICAgbGluZTogMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogXCJvdmVyd29ybGRIZXJvXCIsXHJcbiAgICAgICAgICAgIHRpbGVtYXA6IHRoaXMudGlsZW1hcCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSBcIi4vQm9vdFNjZW5lXCI7XHJcbmltcG9ydCB7IE1lbnVTY2VuZSB9IGZyb20gXCIuL01lbnVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkU2NlbmUgfSBmcm9tIFwiLi9PdmVyd29ybGRTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgT3ZlcndvcmxkU2NlbmVdO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9