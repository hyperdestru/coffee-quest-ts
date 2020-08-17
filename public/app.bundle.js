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

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTROLKEYS = exports.COLORS = exports.loadStrings = exports.loadFile = exports.getGameHeight = exports.getGameWidth = void 0;
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
    var rawGrid = _this.loadFile(pFilePath);
    return rawGrid.split('\n').map(function (item) { return item.split(''); });
};
exports.COLORS = {
    customBlue: { string: '#4346f9', hex: 0x4346f9 },
    customGreen: { string: '#76ea64', hex: 0x76ea64 },
    vibrantGreen: { string: '#25f945', hex: 0x25f945 },
    customRed: { string: '#ea2d23', hex: 0xea2d23 },
    white: { string: '#ffffff', hex: 0xffffff }
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
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Coffee Quest',
    type: Phaser.AUTO,
    scale: {
        width: 900,
        height: 700
    },
    input: {
        keyboard: true
    },
    dom: {
        createContainer: true
    },
    parent: 'game',
    scene: scenes_1.default
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
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 100, 'button', Gui.mainBtnStyle, params.text).addListener('click').on('click', function () {
            if (params.stopSounds) {
                params.scene.sound.stopAll();
            }
            params.scenePlugin.start(params.newSceneKey, params.sceneData);
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
        params.scene.add.dom(params.x, params.y, 'button', Gui.secondaryBtnStyle, params.text).addListener('click').on('click', function () {
            params.scene.sound.add('clickSound').play();
            if (currentIndex < params.textureKeys.length - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            params.img.setTexture(params.textureKeys[currentIndex]);
            if (params.callback !== undefined) {
                params.callback();
            }
        });
    };
    Gui.title = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, 'h3', "color: #ffffff; \n\t\t\tfont-size: 40px; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, 'h4', "color: #ffffff; \n\t\t\tfont-size: 30px; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.customText = function (params) {
        params.scene.add.dom(params.x, params.y, 'p', "color: #ffffff; \n\t\t\tfont-size: 20px; \n\t\t\ttext-align: center; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.mainBtnStyle = "width: 128px; \n\t\theight: 48px; \n\t\tfont-family: Tahoma, courier; \n\t\tcolor: #ffde59;\n\t\tfont-weight: bold;\n\t\tfont-size: 25px; \n\t\tbackground-color: #000; \n\t\tborder: 3px solid #ffde59";
    Gui.secondaryBtnStyle = "width: 100px; \n\t\theight: 33px; \n\t\tfont-family: Grobold, Arial, sans-serif; \n\t\tcolor: #000000; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000";
    return Gui;
}());
exports.Gui = Gui;


/***/ }),

/***/ "./src/objects/Pawn.ts":
/*!*****************************!*\
  !*** ./src/objects/Pawn.ts ***!
  \*****************************/
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
exports.Pawn = void 0;
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(params) {
        var _this = _super.call(this, params.scene, (params.col === 0) ? params.tilemap.tileWidth / 2 : (params.col * params.tilemap.tileWidth) + params.tilemap.tileHeight / 2, (params.line === 0) ? params.tilemap.tileHeight / 2 : (params.line * params.tilemap.tileWidth) + params.tilemap.tileHeight / 2, params.textureKey) || this;
        _this.scene.add.existing(_this);
        _this.col = params.col;
        _this.line = params.line;
        _this.x = (_this.col === 0) ? params.tilemap.tileWidth / 2 : (_this.col * params.tilemap.tileWidth) + params.tilemap.tileWidth / 2;
        _this.y = (_this.line === 0) ? params.tilemap.tileHeight / 2 : (_this.line * params.tilemap.tileHeight) + params.tilemap.tileHeight / 2;
        _this.scene.input.on('pointerdown', function (pointer) {
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
    Pawn.prototype.moveNorthEast = function () {
        this.moveNorth();
        this.moveEast();
    };
    Pawn.prototype.moveNorthWest = function () {
        this.moveNorth();
        this.moveWest();
    };
    Pawn.prototype.moveSouthEast = function () {
        this.moveSouth();
        this.moveEast();
    };
    Pawn.prototype.moveSouthWest = function () {
        this.moveSouth();
        this.moveWest();
    };
    Pawn.prototype.updatePawn = function (pointer, pTilemap) {
        var normalizedPx = Math.floor((pointer === null || pointer === void 0 ? void 0 : pointer.x) / (pTilemap === null || pTilemap === void 0 ? void 0 : pTilemap.tileWidth));
        var normalizedPy = Math.floor((pointer === null || pointer === void 0 ? void 0 : pointer.y) / (pTilemap === null || pTilemap === void 0 ? void 0 : pTilemap.tileHeight));
        if (normalizedPx === this.col + 1) {
            this.moveEast();
        }
        else if (normalizedPx === this.col - 1) {
            this.moveWest();
        }
        else if (normalizedPy === this.line + 1) {
            this.moveSouth();
        }
        else if (normalizedPy === this.line - 1) {
            this.moveNorth();
        }
        else if (normalizedPx === this.col + 1 && normalizedPy === this.line + 1) {
            this.moveSouthEast();
        }
        else if (normalizedPx === this.col - 1 && normalizedPy === this.line - 1) {
            this.moveNorthWest();
        }
        else if (normalizedPx === this.col + 1 && normalizedPy === this.line - 1) {
            this.moveNorthEast();
        }
        else if (normalizedPx === this.col - 1 && normalizedPy === this.line + 1) {
            this.moveSouthWest();
        }
    };
    Pawn.prototype.update = function () { };
    return Pawn;
}(Phaser.GameObjects.Image));
exports.Pawn = Pawn;


/***/ }),

/***/ "./src/objects/Tilemap.ts":
/*!********************************!*\
  !*** ./src/objects/Tilemap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tilemap = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.initTilesSizes();
        this._tilesGrid = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31, 32, 33, 34, 35],
            [36, 37, 38, 39, 40, 41, 42, 43, 44],
            [45, 46, 47, 48, 49, 50, 51, 52, 53],
            [54, 55, 56, 57, 58, 59, 60, 61, 62]
        ];
        this._tileTypes = {
            sea: [0, 1, 9, 10, 11, 27, 28, 36, 45, 46, 54, 55],
            beach: [2, 11, 20, 29, 37, 47, 56],
            grass: [3, 4, 5, 6, 12, 14, 15, 21, 22, 23, 24, 25, 26, 30, 31, 32, 33, 34, 38, 39, 40, 48],
            city: [7, 8, 16, 17],
            forest: [41, 42, 43, 44, 49, 50, 51, 52, 53, 57, 58, 59, 60, 61, 62],
            dick: [13],
            lighthouse: [19],
            pyramid: [35],
            castle: [61],
        };
        this.tilesheet = params.scene.add.image(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) / 2, 'overworldMap');
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
    Object.defineProperty(Tilemap.prototype, "tileTypes", {
        get: function () {
            return this._tileTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tilemap.prototype, "tilesGrid", {
        get: function () {
            return this._tilesGrid;
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
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot'
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.init = function () { };
    BootScene.prototype.preload = function () {
        this.load.pack("preload", "assets/pack.json", "preload");
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add('bootTheme');
        this.musicTheme.play();
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, 'bootLogo');
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: 'Overworld',
            sceneData: this.data.getAll()
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
    key: 'Overworld'
};
var OverworldScene = /** @class */ (function (_super) {
    __extends(OverworldScene, _super);
    function OverworldScene() {
        return _super.call(this, sceneConfig) || this;
    }
    OverworldScene.prototype.create = function () {
        this.musicTheme = this.sound.add('overworldTheme');
        this.musicTheme.play();
        this.tilemap = new Tilemap_1.Tilemap({ scene: this });
        this.pawn = new Pawn_1.Pawn({
            scene: this,
            col: 0,
            line: 0,
            textureKey: 'overworldHero',
            tilemap: this.tilemap
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

Object.defineProperty(exports, "__esModule", { value: true });
var BootScene_1 = __webpack_require__(/*! ./BootScene */ "./src/scenes/BootScene.ts");
var OverworldScene_1 = __webpack_require__(/*! ./OverworldScene */ "./src/scenes/OverworldScene.ts");
exports.default = [
    BootScene_1.BootScene,
    OverworldScene_1.OverworldScene
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1Bhd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL092ZXJ3b3JsZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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WixDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUN2SCxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUMxSCxNQUFNLENBQUMsVUFBVSxDQUNqQixTQWFEO1FBWEEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRTlCLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDO1FBQzVILEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxD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QUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFFO1lBQzlCLENBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUU7WUFDOUIsQ0FBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBRTtZQUM5QixDQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFFO1lBQzlCLENBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUU7U0FDOUIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDakIsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7WUFDdkMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFD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O0lBQ0osQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0FBQyxDQXpDOEIsTUFBTSxDQUFDLEtBQUssR0F5QzFDO0FBekNZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R0QiwwRkFBNkM7QUFDN0MsaUZBQXVDO0FBRXZDLElBQU0sV0FBVyxHQUF1QztJQUN2RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFdBQVc7Q0FDaEIsQ0FBQztBQUVGO0lBQW9DLGtDQUFZO0lBTS9DO2VBQ0Msa0JBQU0sV0FBVyxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxlQUFlO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLENBdEJtQyxNQUFNLENBQUMsS0FBSyxHQXNCL0M7QUF0Qlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ1YzQixzRkFBd0M7QUFHeEMscUdBQWtEO0FBRWxELGtCQUFlO0lBQ2QscUJBQVM7SUFDVCwrQkFBYztDQUNkLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG5cdHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIExvYWQgYSBmaWxlIGluIGFqYXggYW5kIHJldHVybiBpdHMgcmVzcG9uc2UgdGV4dC5cclxuICogQHBhcmFtIHBGaWxlUGF0aCBQYXRoIHRvIHRoZSBkZXNpcmVkIGZpbGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZSA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcblx0bGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG5cdHJhd0ZpbGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcblx0fVxyXG5cclxuXHRyYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHJhd0ZpbGUucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG5cdFx0XHRpZiAocmF3RmlsZS5zdGF0dXMgPT09IDIwMCB8fCByYXdGaWxlLnN0YXR1cyA9PT0gMCkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcblx0cmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSAyZC1hcnJheSBvZiBzdHJpbmdzIGZyb20gYSB3aG9sZSB0ZXh0IGZpbGUgZ2l2ZW4gYXMgaW5wdXQuXHJcbiAqIFdvcmtzIGJlc3QgaWYgdGhlIGlucHV0IHRleHQgaXMgb25seSBjb21wb3NlZCBvZiBzaW5nbGUgY2hhcnMgYW5kICdcXG4nLlxyXG4gKiBFYWNoIGZpbmFsIGFycmF5IGVsZW1lbnQgd291bGQgYmUgb25lIGNoYXJhY3RlciBvZiB0aGUgdGV4dCBpbnB1dC5cclxuICogQHBhcmFtIHBGaWxlUGF0aCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG5cdGxldCByYXdHcmlkID0gdGhpcy5sb2FkRmlsZShwRmlsZVBhdGgpO1xyXG5cdHJldHVybiByYXdHcmlkLnNwbGl0KCdcXG4nKS5tYXAoaXRlbSA9PiBpdGVtLnNwbGl0KCcnKSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG5cdGN1c3RvbUJsdWU6IHsgc3RyaW5nOiAnIzQzNDZmOScsIGhleDogMHg0MzQ2ZjkgfSxcclxuXHRjdXN0b21HcmVlbjogeyBzdHJpbmc6ICAnIzc2ZWE2NCcsIGhleDogMHg3NmVhNjQgfSxcclxuXHR2aWJyYW50R3JlZW46IHsgc3RyaW5nOiAnIzI1Zjk0NScsIGhleDogMHgyNWY5NDUgfSxcclxuXHRjdXN0b21SZWQ6IHsgc3RyaW5nOiAnI2VhMmQyMycsIGhleDogMHhlYTJkMjMgfSxcclxuXHR3aGl0ZTogeyBzdHJpbmc6ICcjZmZmZmZmJywgaGV4OiAweGZmZmZmZiB9XHJcbn1cclxuXHJcbi8vIE5vdGUgLS0gd2UgY2FuIGFkZCBtdWx0aXBsZSBrZXlzIGF0IG9uY2UgOiBcclxuLy8gdGhpcy5rZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXlzKCdFTlRFUixXLEEsUyxEJylcclxuLy8gQW5kIHRoZW4gZG8gOiB0aGlzLmtleXMuRU5URVIuaXNEb3duLi4uXHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTEtFWVMgPSB7XHJcblx0UExBWUVSOiB7XHJcblx0XHRTRVQxOiB7XHJcblx0XHRcdHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQsXHJcblx0XHRcdGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG5cdFx0XHRqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0hJRlRcclxuXHRcdH0sXHJcblxyXG5cdFx0U0VUMjoge1xyXG5cdFx0XHRyaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcblx0XHRcdGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG5cdFx0XHRqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUyxcclxuXHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcblxyXG5cdHRpdGxlOiAnQ29mZmVlIFF1ZXN0JyxcclxuXHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG5cdHNjYWxlOiB7XHJcblx0XHR3aWR0aDogOTAwLFxyXG5cdFx0aGVpZ2h0OiA3MDBcclxuXHR9LFxyXG5cclxuXHRpbnB1dDoge1xyXG5cdFx0a2V5Ym9hcmQ6IHRydWVcclxuXHR9LFxyXG5cclxuXHRkb206IHtcclxuXHRcdGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdHBhcmVudDogJ2dhbWUnLFxyXG5cdFxyXG5cdHNjZW5lOiBTY2VuZXNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEd1aSB7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gXHJcblx0XHRgd2lkdGg6IDEyOHB4OyBcclxuXHRcdGhlaWdodDogNDhweDsgXHJcblx0XHRmb250LWZhbWlseTogVGFob21hLCBjb3VyaWVyOyBcclxuXHRcdGNvbG9yOiAjZmZkZTU5O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRmb250LXNpemU6IDI1cHg7IFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDsgXHJcblx0XHRib3JkZXI6IDNweCBzb2xpZCAjZmZkZTU5YFxyXG5cdDtcclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBzZWNvbmRhcnlCdG5TdHlsZSA9IFxyXG5cdFx0YHdpZHRoOiAxMDBweDsgXHJcblx0XHRoZWlnaHQ6IDMzcHg7IFxyXG5cdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMTdweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBgXHJcblx0O1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBzdHlsaXplZCBCdXR0b24gRE9NIEVsZW1lbnQgd2l0aCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGF0dGFjaGVkXHJcblx0ICogdG8gaXQuIFRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFjayBzdGFydHMgYSBuZXcgc2NlbmUgdXNpbmcgdGhlIHNjZW5lIGtleVxyXG5cdCAqIHBhc3NlZCBpbiBhcmd1bWVudHMgYW5kIHN0b3BzIGFsbCBzb3VuZHMgaWYgc3RvcFNvdW5kcyBzZXQgdG8gdHJ1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIG1haW5CdG4ocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0XHRzdG9wU291bmRzOiBib29sZWFuOyBcclxuXHRcdHNjZW5lUGx1Z2luOiBQaGFzZXIuU2NlbmVzLlNjZW5lUGx1Z2luOyBcclxuXHRcdG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcblx0XHRzY2VuZURhdGE/OiBvYmplY3Q7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkvMixcclxuXHRcdFx0Z2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpLTEwMCxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5tYWluQnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAocGFyYW1zLnN0b3BTb3VuZHMpIHtcclxuXHRcdFx0XHRwYXJhbXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmVQbHVnaW4uc3RhcnQocGFyYW1zLm5ld1NjZW5lS2V5LCBwYXJhbXMuc2NlbmVEYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1dHRvbiB0aGF0IGNoYW5nZXMgYW4gaW1hZ2UgKGltZykgdGV4dHVyZSB3aXRoIGFub3RoZXIgKHRleHR1cmVzKSxcclxuXHQgKiBvbmUgYnkgb25lLiBMaWtlIGEgc2xpZGVzaG93LlxyXG5cdCAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG5cdCAqIEBwYXJhbSB0ZXh0dXJlczogdGhlIHRleHR1cmVzIHRvIGFwcGVuZCB0byBpbWcuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0eDogbnVtYmVyO1xyXG5cdFx0eTogbnVtYmVyO1xyXG5cdFx0dGV4dDogc3RyaW5nO1xyXG5cdFx0aW1nOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0XHR0ZXh0dXJlS2V5czogQXJyYXk8c3RyaW5nPjtcclxuXHRcdGNhbGxiYWNrPzogRnVuY3Rpb247XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cclxuXHRcdFx0cGFyYW1zLngsXHJcblx0XHRcdHBhcmFtcy55LFxyXG5cdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0R3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cclxuXHRcdCkuYWRkTGlzdGVuZXIoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuc291bmQuYWRkKCdjbGlja1NvdW5kJykucGxheSgpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRJbmRleCA8IHBhcmFtcy50ZXh0dXJlS2V5cy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0Y3VycmVudEluZGV4Kys7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudEluZGV4ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyYW1zLmltZy5zZXRUZXh0dXJlKHBhcmFtcy50ZXh0dXJlS2V5c1tjdXJyZW50SW5kZXhdKTtcclxuXHJcblx0XHRcdGlmIChwYXJhbXMuY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHBhcmFtcy5jYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZyA7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHQyNCxcclxuXHRcdFx0J2gzJyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiA0MHB4OyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNlY3Rpb25UaXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J2g0JyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGN1c3RvbVRleHQocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdwJyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4OyBcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cdFxyXG59IiwiaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuL1RpbGVtYXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcclxuXHJcblx0cHJpdmF0ZSBjb2w6IG51bWJlcjtcclxuXHRwcml2YXRlIGxpbmU6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBtb3ZlTm9ydGgoKSB7XHJcblx0XHR0aGlzLmxpbmUgLT0gMTtcclxuXHRcdHRoaXMueSAtPSAxMDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmVTb3V0aCgpIHtcclxuXHRcdHRoaXMubGluZSArPSAxO1xyXG5cdFx0dGhpcy55ICs9IDEwMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZUVhc3QoKSB7XHJcblx0XHR0aGlzLmNvbCArPSAxO1xyXG5cdFx0dGhpcy54ICs9IDEwMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVdlc3QoKSB7XHJcblx0XHR0aGlzLmNvbCAtPSAxO1xyXG5cdFx0dGhpcy54IC09IDEwMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZU5vcnRoRWFzdCgpIHtcclxuXHRcdHRoaXMubW92ZU5vcnRoKCk7XHJcblx0XHR0aGlzLm1vdmVFYXN0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmVOb3J0aFdlc3QoKSB7XHJcblx0XHR0aGlzLm1vdmVOb3J0aCgpO1xyXG5cdFx0dGhpcy5tb3ZlV2VzdCgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlU291dGhFYXN0KCkge1xyXG5cdFx0dGhpcy5tb3ZlU291dGgoKTtcclxuXHRcdHRoaXMubW92ZUVhc3QoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVNvdXRoV2VzdCgpIHtcclxuXHRcdHRoaXMubW92ZVNvdXRoKCk7XHJcblx0XHR0aGlzLm1vdmVXZXN0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHVwZGF0ZVBhd24ocG9pbnRlciwgcFRpbGVtYXApOiB2b2lkIHtcclxuXHRcdGxldCBub3JtYWxpemVkUHggPSBNYXRoLmZsb29yKHBvaW50ZXI/LnggLyBwVGlsZW1hcD8udGlsZVdpZHRoKTtcclxuXHRcdGxldCBub3JtYWxpemVkUHkgPSBNYXRoLmZsb29yKHBvaW50ZXI/LnkgLyBwVGlsZW1hcD8udGlsZUhlaWdodCk7XHJcblxyXG5cdFx0aWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgKyAxKSB7XHJcblx0XHRcdHRoaXMubW92ZUVhc3QoKTtcclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEpIHtcclxuXHRcdFx0dGhpcy5tb3ZlV2VzdCgpO1xyXG5cdFx0fSBlbHNlIGlmKG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVTb3V0aCgpO1xyXG5cdFx0fSBlbHNlIGlmIChub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuXHRcdFx0dGhpcy5tb3ZlTm9ydGgoKTtcclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCArIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgKyAxKSB7XHJcblx0XHRcdHRoaXMubW92ZVNvdXRoRWFzdCgpO1xyXG5cdFx0fSBlbHNlIGlmIChub3JtYWxpemVkUHggPT09IHRoaXMuY29sIC0gMSAmJiBub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuXHRcdFx0dGhpcy5tb3ZlTm9ydGhXZXN0KCk7XHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgKyAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lIC0gMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVOb3J0aEVhc3QoKTtcclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgKyAxKSB7XHJcblx0XHRcdHRoaXMubW92ZVNvdXRoV2VzdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0Y29sOiBudW1iZXI7XHJcblx0XHRsaW5lOiBudW1iZXI7XHJcblx0XHR0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0XHR0aWxlbWFwOiBUaWxlbWFwO1xyXG5cdH0pIHtcclxuXHJcblx0XHRzdXBlcihcclxuXHRcdFx0cGFyYW1zLnNjZW5lLCBcclxuXHRcdFx0KHBhcmFtcy5jb2wgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoLzIgOiAocGFyYW1zLmNvbCAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCkgKyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0LzIsIFxyXG5cdFx0XHQocGFyYW1zLmxpbmUgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yIDogKHBhcmFtcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoKSArIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQvMixcclxuXHRcdFx0cGFyYW1zLnRleHR1cmVLZXlcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5jb2wgPSBwYXJhbXMuY29sO1xyXG5cdFx0dGhpcy5saW5lID0gcGFyYW1zLmxpbmU7XHJcblxyXG5cdFx0dGhpcy54ID0gKHRoaXMuY29sID09PSAwKSA/IHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aC8yIDogKHRoaXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoKSArIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aC8yO1xyXG5cdFx0dGhpcy55ID0gKHRoaXMubGluZSA9PT0gMCkgPyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0LzIgOiAodGhpcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCkgKyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0LzI7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAocG9pbnRlcikgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVBhd24ocG9pbnRlciwgcGFyYW1zLnRpbGVtYXApO1xyXG5cdFx0fSwgdGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuXHJcblx0cHJpdmF0ZSB0aWxlc2hlZXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIF90aWxlc0dyaWQ6IG51bWJlcltdW107XHJcblx0cHJpdmF0ZSBfdGlsZVdpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3RpbGVUeXBlczogb2JqZWN0O1xyXG5cclxuXHRwdWJsaWMgZ2V0IHRpbGVXaWR0aCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVXaWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGlsZUhlaWdodCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRpbGVUeXBlcygpOiBvYmplY3Qge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVUeXBlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGlsZXNHcmlkKCk6IG51bWJlcltdW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVzR3JpZDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFRpbGVzU2l6ZXMoKTogdm9pZCB7XHJcblx0XHR0aGlzLl90aWxlV2lkdGggPSAxMDA7XHJcblx0XHR0aGlzLl90aWxlSGVpZ2h0ID0gMTAwO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLmluaXRUaWxlc1NpemVzKCk7XHJcblxyXG5cdFx0dGhpcy5fdGlsZXNHcmlkID0gW1xyXG5cdFx0XHRbIDAsMSwyLDMsNCw1LDYsNyw4IF0sXHJcblx0XHRcdFsgOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNyBdLFxyXG5cdFx0XHRbIDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2IF0sXHJcblx0XHRcdFsgMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUgXSxcclxuXHRcdFx0WyAzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCBdLFxyXG5cdFx0XHRbIDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzIF0sXHJcblx0XHRcdFsgNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIgXVxyXG5cdFx0XTtcclxuXHJcblx0XHR0aGlzLl90aWxlVHlwZXMgPSB7XHJcblx0XHRcdHNlYTogWzAsMSw5LDEwLDExLDI3LDI4LDM2LDQ1LDQ2LDU0LDU1XSxcclxuXHRcdFx0YmVhY2g6IFsyLDExLDIwLDI5LDM3LDQ3LDU2XSxcclxuXHRcdFx0Z3Jhc3M6IFszLDQsNSw2LDEyLDE0LDE1LDIxLDIyLDIzLDI0LDI1LDI2LDMwLDMxLDMyLDMzLDM0LDM4LDM5LDQwLDQ4XSxcclxuXHRcdFx0Y2l0eTogWzcsOCwxNiwxN10sXHJcblx0XHRcdGZvcmVzdDogWzQxLDQyLDQzLDQ0LDQ5LDUwLDUxLDUyLDUzLDU3LDU4LDU5LDYwLDYxLDYyXSxcclxuXHRcdFx0ZGljazogWzEzXSxcclxuXHRcdFx0bGlnaHRob3VzZTogWzE5XSxcclxuXHRcdFx0cHlyYW1pZDogWzM1XSxcclxuXHRcdFx0Y2FzdGxlOiBbNjFdLFxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudGlsZXNoZWV0ID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHQnb3ZlcndvcmxkTWFwJ1xyXG5cdFx0KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSAnLi4vb2JqZWN0cy9HdWknO1xyXG5pbXBvcnQgeyBwYXJzZWRTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZSc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0Jvb3QnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblx0cHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0cHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHt9XHJcblxyXG5cdHByZWxvYWQoKSB7XHJcblxyXG5cdFx0dGhpcy5sb2FkLnBhY2soXHJcblx0XHRcdFwicHJlbG9hZFwiLFxyXG5cdFx0XHRcImFzc2V0cy9wYWNrLmpzb25cIixcclxuXHRcdFx0XCJwcmVsb2FkXCJcclxuXHRcdCk7XHJcblx0XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoJ2Jvb3RUaGVtZScpO1xyXG5cdFx0dGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcblx0XHR0aGlzLmxvZ28gPSB0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIuNSxcclxuXHRcdFx0J2Jvb3RMb2dvJ1xyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0R3VpLm1haW5CdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR0ZXh0OiBcIlNUQVJUXCIsXHJcblx0XHRcdHN0b3BTb3VuZHM6IHRydWUsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ092ZXJ3b3JsZCcsXHJcblx0XHRcdHNjZW5lRGF0YTogdGhpcy5kYXRhLmdldEFsbCgpXHJcblx0XHR9KTtcdFxyXG5cdH1cclxufSIsImltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi4vb2JqZWN0cy9UaWxlbWFwXCI7XHJcbmltcG9ydCB7IFBhd24gfSBmcm9tIFwiLi4vb2JqZWN0cy9QYXduXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ092ZXJ3b3JsZCdcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVyd29ybGRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cdHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRwcml2YXRlIHRpbGVtYXA6IFRpbGVtYXA7XHJcblx0cHJpdmF0ZSBwYXduOiBQYXduO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdvdmVyd29ybGRUaGVtZScpO1xyXG5cdFx0dGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHRcdHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKHtzY2VuZTogdGhpc30pO1xyXG5cdFx0dGhpcy5wYXduID0gbmV3IFBhd24oe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0Y29sOiAwLFxyXG5cdFx0XHRsaW5lOiAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiAnb3ZlcndvcmxkSGVybycsXHJcblx0XHRcdHRpbGVtYXA6IHRoaXMudGlsZW1hcFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9Cb290U2NlbmUnO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tICcuL01lbnVTY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vR2FtZVNjZW5lJztcclxuaW1wb3J0IHsgT3ZlcndvcmxkU2NlbmUgfSBmcm9tICcuL092ZXJ3b3JsZFNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsXHJcblx0T3ZlcndvcmxkU2NlbmVcclxuXTsiXSwic291cmNlUm9vdCI6IiJ9