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
    Pawn.prototype.updatePawn = function (pointer, pTilemap) {
        var normalizedPx = Math.floor(pointer.x / pTilemap.tileWidth);
        var normalizedPy = Math.floor(pointer.y / pTilemap.tileHeight);
        if (normalizedPy === this.line + 1 && normalizedPx === this.col) {
            this.moveSouth();
        }
        else if (normalizedPy === this.line - 1 && normalizedPx === this.col) {
            this.moveNorth();
        }
        else if (normalizedPx === this.col + 1 && normalizedPy === this.line) {
            this.moveEast();
        }
        else if (normalizedPx === this.col - 1 && normalizedPy === this.line) {
            this.moveWest();
        }
        else if (normalizedPx === this.col - 1 && normalizedPy === this.line - 1) {
            this.moveNorth();
            this.moveWest();
        }
        else if (normalizedPx === this.col - 1 && normalizedPy === this.line + 1) {
            this.moveSouth();
            this.moveWest();
        }
        else if (normalizedPx === this.col + 1 && normalizedPy === this.line - 1) {
            this.moveNorth();
            this.moveEast();
        }
        else if (normalizedPx === this.col + 1 && normalizedPy === this.line + 1) {
            this.moveSouth();
            this.moveEast();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1Bhd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL092ZXJ3b3JsZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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WixDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUN2SCxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUMxSCxNQUFNLENBQUMsVUFBVSxDQUNqQixTQWFEO1FBWEEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRTlCLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDO1FBQzVILEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxD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QUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFFO1lBQzlCLENBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUU7WUFDOUIsQ0FBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBRTtTQUM5QixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNqQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUN2QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7WUFDNUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQ3RFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUNqQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFB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QUFHLEVBQUUsV0FBVztDQUNoQixDQUFDO0FBRUY7SUFBb0Msa0NBQVk7SUFNL0M7ZUFDQyxrQkFBTSxXQUFXLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUk7WUFDWCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsVUFBVSxFQUFFLGVBQWU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQ0F0Qm1DLE1BQU0sQ0FBQyxLQUFLLEdBc0IvQztBQXRCWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDVjNCLHNGQUF3QztBQUd4QyxxR0FBa0Q7QUFFbEQsa0JBQWU7SUFDZCxxQkFBUztJQUNULCtCQUFjO0NBQ2QsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcblx0cmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG5cdHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuXHRsZXQgcmF3RmlsZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcblx0cmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gbG9hZCBmaWxlLlwiKTtcclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gcmF3RmlsZS5yZXNwb25zZVRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub3BlbihcIkdFVFwiLCBwRmlsZVBhdGgsIGZhbHNlKTtcclxuXHRyYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRTdHJpbmdzID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nW11bXSA9PiB7XHJcblx0bGV0IHJhd0dyaWQgPSB0aGlzLmxvYWRGaWxlKHBGaWxlUGF0aCk7XHJcblx0cmV0dXJuIHJhd0dyaWQuc3BsaXQoJ1xcbicpLm1hcChpdGVtID0+IGl0ZW0uc3BsaXQoJycpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcblx0Y3VzdG9tQmx1ZTogeyBzdHJpbmc6ICcjNDM0NmY5JywgaGV4OiAweDQzNDZmOSB9LFxyXG5cdGN1c3RvbUdyZWVuOiB7IHN0cmluZzogICcjNzZlYTY0JywgaGV4OiAweDc2ZWE2NCB9LFxyXG5cdHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6ICcjMjVmOTQ1JywgaGV4OiAweDI1Zjk0NSB9LFxyXG5cdGN1c3RvbVJlZDogeyBzdHJpbmc6ICcjZWEyZDIzJywgaGV4OiAweGVhMmQyMyB9LFxyXG5cdHdoaXRlOiB7IHN0cmluZzogJyNmZmZmZmYnLCBoZXg6IDB4ZmZmZmZmIH1cclxufVxyXG5cclxuLy8gTm90ZSAtLSB3ZSBjYW4gYWRkIG11bHRpcGxlIGtleXMgYXQgb25jZSA6IFxyXG4vLyB0aGlzLmtleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleXMoJ0VOVEVSLFcsQSxTLEQnKVxyXG4vLyBBbmQgdGhlbiBkbyA6IHRoaXMua2V5cy5FTlRFUi5pc0Rvd24uLi5cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuXHRQTEFZRVI6IHtcclxuXHRcdFNFVDE6IHtcclxuXHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuXHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0fSxcclxuXHJcblx0XHRTRVQyOiB7XHJcblx0XHRcdHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFXHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuXHJcblx0dGl0bGU6ICdDb2ZmZWUgUXVlc3QnLFxyXG5cclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcblx0c2NhbGU6IHtcclxuXHRcdHdpZHRoOiA5MDAsXHJcblx0XHRoZWlnaHQ6IDcwMFxyXG5cdH0sXHJcblxyXG5cdGlucHV0OiB7XHJcblx0XHRrZXlib2FyZDogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdGRvbToge1xyXG5cdFx0Y3JlYXRlQ29udGFpbmVyOiB0cnVlXHJcblx0fSxcclxuXHJcblx0cGFyZW50OiAnZ2FtZScsXHJcblx0XHJcblx0c2NlbmU6IFNjZW5lc1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBcclxuXHRcdGB3aWR0aDogMTI4cHg7IFxyXG5cdFx0aGVpZ2h0OiA0OHB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBUYWhvbWEsIGNvdXJpZXI7IFxyXG5cdFx0Y29sb3I6ICNmZmRlNTk7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcclxuXHRcdGJvcmRlcjogM3B4IHNvbGlkICNmZmRlNTlgXHJcblx0O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gXHJcblx0XHRgd2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG5cdFx0Y29sb3I6ICMwMDAwMDA7IFxyXG5cdFx0Zm9udC1zaXplOiAxN3B4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwMGBcclxuXHQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuXHQgKiB0byBpdC4gVGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrIHN0YXJ0cyBhIG5ldyBzY2VuZSB1c2luZyB0aGUgc2NlbmUga2V5XHJcblx0ICogcGFzc2VkIGluIGFyZ3VtZW50cyBhbmQgc3RvcHMgYWxsIHNvdW5kcyBpZiBzdG9wU291bmRzIHNldCB0byB0cnVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgbWFpbkJ0bihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHRcdHN0b3BTb3VuZHM6IGJvb2xlYW47IFxyXG5cdFx0c2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47IFxyXG5cdFx0bmV3U2NlbmVLZXk6IHN0cmluZztcclxuXHRcdHNjZW5lRGF0YT86IG9iamVjdDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSktMTAwLFxyXG5cdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0R3VpLm1haW5CdG5TdHlsZSxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHJcblx0XHQpLmFkZExpc3RlbmVyKCdjbGljaycpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG5cdFx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcmFtcy5zY2VuZVBsdWdpbi5zdGFydChwYXJhbXMubmV3U2NlbmVLZXksIHBhcmFtcy5zY2VuZURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG5cdCAqIG9uZSBieSBvbmUuIExpa2UgYSBzbGlkZXNob3cuXHJcblx0ICogQHBhcmFtIGltZzogYSBwaGFzZXIgZ2FtZSBvYmplY3QgaW1hZ2UgdGhhdCBhY3QgYXMgYSBjb250YWluZXIgaW4gYSB3YXkuXHJcblx0ICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHNsaWRlQnRuKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHR0ZXh0OiBzdHJpbmc7XHJcblx0XHRpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRcdHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG5cdFx0Y2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRHdWkuc2Vjb25kYXJ5QnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5hZGQoJ2NsaWNrU291bmQnKS5wbGF5KCk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEluZGV4IDwgcGFyYW1zLnRleHR1cmVLZXlzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXgrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuaW1nLnNldFRleHR1cmUocGFyYW1zLnRleHR1cmVLZXlzW2N1cnJlbnRJbmRleF0pO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyYW1zLmNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRpdGxlKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nIDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsXHJcblx0XHRcdDI0LFxyXG5cdFx0XHQnaDMnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0eDogbnVtYmVyOyBcclxuXHRcdHk6IG51bWJlcjsgXHJcblx0XHR0ZXh0OiBzdHJpbmc7IFxyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHRcdFx0cGFyYW1zLngsXHJcblx0XHRcdHBhcmFtcy55LFxyXG5cdFx0XHQnaDQnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDMwcHg7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3VzdG9tVGV4dChwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J3AnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblx0XHJcbn0iLCJpbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4vVGlsZW1hcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Uge1xyXG5cclxuXHRwcml2YXRlIGNvbDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbGluZTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIG1vdmVOb3J0aCgpIHtcclxuXHRcdHRoaXMubGluZSAtPSAxO1xyXG5cdFx0dGhpcy55IC09IDEwMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVNvdXRoKCkge1xyXG5cdFx0dGhpcy5saW5lICs9IDE7XHJcblx0XHR0aGlzLnkgKz0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlRWFzdCgpIHtcclxuXHRcdHRoaXMuY29sICs9IDE7XHJcblx0XHR0aGlzLnggKz0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlV2VzdCgpIHtcclxuXHRcdHRoaXMuY29sIC09IDE7XHJcblx0XHR0aGlzLnggLT0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB1cGRhdGVQYXduKHBvaW50ZXIsIHBUaWxlbWFwKTogdm9pZCB7XHJcblx0XHRsZXQgbm9ybWFsaXplZFB4ID0gTWF0aC5mbG9vcihwb2ludGVyLnggLyBwVGlsZW1hcC50aWxlV2lkdGgpO1xyXG5cdFx0bGV0IG5vcm1hbGl6ZWRQeSA9IE1hdGguZmxvb3IocG9pbnRlci55IC8gcFRpbGVtYXAudGlsZUhlaWdodCk7XHJcblxyXG5cdFx0aWYgKG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSAmJiBub3JtYWxpemVkUHggPT09IHRoaXMuY29sKSB7XHJcblx0XHRcdHRoaXMubW92ZVNvdXRoKCk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSAtIDEgJiYgbm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCkge1xyXG5cdFx0XHR0aGlzLm1vdmVOb3J0aCgpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCArIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUpIHtcclxuXHRcdFx0dGhpcy5tb3ZlRWFzdCgpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUpIHtcclxuXHRcdFx0dGhpcy5tb3ZlV2VzdCgpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCAtIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgLSAxKSB7XHJcblx0XHRcdHRoaXMubW92ZU5vcnRoKCk7XHJcblx0XHRcdHRoaXMubW92ZVdlc3QoKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgLSAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVTb3V0aCgpO1xyXG5cdFx0XHR0aGlzLm1vdmVXZXN0KCk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChub3JtYWxpemVkUHggPT09IHRoaXMuY29sICsgMSAmJiBub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuXHRcdFx0dGhpcy5tb3ZlTm9ydGgoKTtcclxuXHRcdFx0dGhpcy5tb3ZlRWFzdCgpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCArIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgKyAxKSB7XHJcblx0XHRcdHRoaXMubW92ZVNvdXRoKCk7XHJcblx0XHRcdHRoaXMubW92ZUVhc3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdGNvbDogbnVtYmVyO1xyXG5cdFx0bGluZTogbnVtYmVyO1xyXG5cdFx0dGV4dHVyZUtleTogc3RyaW5nO1xyXG5cdFx0dGlsZW1hcDogVGlsZW1hcDtcclxuXHR9KSB7XHJcblxyXG5cdFx0c3VwZXIoXHJcblx0XHRcdHBhcmFtcy5zY2VuZSwgXHJcblx0XHRcdChwYXJhbXMuY29sID09PSAwKSA/IHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aC8yIDogKHBhcmFtcy5jb2wgKiBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGgpICsgcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yLCBcclxuXHRcdFx0KHBhcmFtcy5saW5lID09PSAwKSA/IHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQvMiA6IChwYXJhbXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCkgKyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0LzIsXHJcblx0XHRcdHBhcmFtcy50ZXh0dXJlS2V5XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuY29sID0gcGFyYW1zLmNvbDtcclxuXHRcdHRoaXMubGluZSA9IHBhcmFtcy5saW5lO1xyXG5cclxuXHRcdHRoaXMueCA9ICh0aGlzLmNvbCA9PT0gMCkgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGgvMiA6ICh0aGlzLmNvbCAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCkgKyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGgvMjtcclxuXHRcdHRoaXMueSA9ICh0aGlzLmxpbmUgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yIDogKHRoaXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQpICsgcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXIpID0+IHtcclxuXHRcdFx0dGhpcy51cGRhdGVQYXduKHBvaW50ZXIsIHBhcmFtcy50aWxlbWFwKTtcclxuXHRcdH0sIHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge31cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcCB7XHJcblxyXG5cdHByaXZhdGUgdGlsZXNoZWV0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0cHJpdmF0ZSBfdGlsZXNHcmlkOiBudW1iZXJbXVtdO1xyXG5cdHByaXZhdGUgX3RpbGVXaWR0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3RpbGVIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF90aWxlVHlwZXM6IG9iamVjdDtcclxuXHJcblx0cHVibGljIGdldCB0aWxlV2lkdGgoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlV2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRpbGVIZWlnaHQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlSGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0aWxlVHlwZXMoKTogb2JqZWN0IHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlVHlwZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRpbGVzR3JpZCgpOiBudW1iZXJbXVtdIHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlc0dyaWQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRUaWxlc1NpemVzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fdGlsZVdpZHRoID0gMTAwO1xyXG5cdFx0dGhpcy5fdGlsZUhlaWdodCA9IDEwMDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5pbml0VGlsZXNTaXplcygpO1xyXG5cclxuXHRcdHRoaXMuX3RpbGVzR3JpZCA9IFtcclxuXHRcdFx0WyAwLDEsMiwzLDQsNSw2LDcsOCBdLFxyXG5cdFx0XHRbIDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcgXSxcclxuXHRcdFx0WyAxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiBdLFxyXG5cdFx0XHRbIDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1IF0sXHJcblx0XHRcdFsgMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQgXSxcclxuXHRcdFx0WyA0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1MyBdLFxyXG5cdFx0XHRbIDU0LDU1LDU2LDU3LDU4LDU5LDYwLDYxLDYyIF1cclxuXHRcdF07XHJcblxyXG5cdFx0dGhpcy5fdGlsZVR5cGVzID0ge1xyXG5cdFx0XHRzZWE6IFswLDEsOSwxMCwxMSwyNywyOCwzNiw0NSw0Niw1NCw1NV0sXHJcblx0XHRcdGJlYWNoOiBbMiwxMSwyMCwyOSwzNyw0Nyw1Nl0sXHJcblx0XHRcdGdyYXNzOiBbMyw0LDUsNiwxMiwxNCwxNSwyMSwyMiwyMywyNCwyNSwyNiwzMCwzMSwzMiwzMywzNCwzOCwzOSw0MCw0OF0sXHJcblx0XHRcdGNpdHk6IFs3LDgsMTYsMTddLFxyXG5cdFx0XHRmb3Jlc3Q6IFs0MSw0Miw0Myw0NCw0OSw1MCw1MSw1Miw1Myw1Nyw1OCw1OSw2MCw2MSw2Ml0sXHJcblx0XHRcdGRpY2s6IFsxM10sXHJcblx0XHRcdGxpZ2h0aG91c2U6IFsxOV0sXHJcblx0XHRcdHB5cmFtaWQ6IFszNV0sXHJcblx0XHRcdGNhc3RsZTogWzYxXSxcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRpbGVzaGVldCA9IHBhcmFtcy5zY2VuZS5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkvMixcclxuXHRcdFx0J292ZXJ3b3JsZE1hcCdcclxuXHRcdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvR3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdCb290J1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cdHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cclxuXHRcdHRoaXMubG9hZC5wYWNrKFxyXG5cdFx0XHRcInByZWxvYWRcIixcclxuXHRcdFx0XCJhc3NldHMvcGFjay5qc29uXCIsXHJcblx0XHRcdFwicHJlbG9hZFwiXHJcblx0XHQpO1xyXG5cdFxyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuXHRcdHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdib290VGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLjUsXHJcblx0XHRcdCdib290TG9nbydcclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdEd1aS5tYWluQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0dGV4dDogXCJTVEFSVFwiLFxyXG5cdFx0XHRzdG9wU291bmRzOiB0cnVlLFxyXG5cdFx0XHRzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuXHRcdFx0bmV3U2NlbmVLZXk6ICdPdmVyd29ybGQnLFxyXG5cdFx0XHRzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKVxyXG5cdFx0fSk7XHRcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4uL29iamVjdHMvVGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL29iamVjdHMvUGF3blwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdPdmVyd29ybGQnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblx0cHJpdmF0ZSB0aWxlbWFwOiBUaWxlbWFwO1xyXG5cdHByaXZhdGUgcGF3bjogUGF3bjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLm11c2ljVGhlbWUgPSB0aGlzLnNvdW5kLmFkZCgnb3ZlcndvcmxkVGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblx0XHR0aGlzLnRpbGVtYXAgPSBuZXcgVGlsZW1hcCh7c2NlbmU6IHRoaXN9KTtcclxuXHRcdHRoaXMucGF3biA9IG5ldyBQYXduKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdGNvbDogMCxcclxuXHRcdFx0bGluZTogMCxcclxuXHRcdFx0dGV4dHVyZUtleTogJ292ZXJ3b3JsZEhlcm8nLFxyXG5cdFx0XHR0aWxlbWFwOiB0aGlzLnRpbGVtYXBcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vQm9vdFNjZW5lJztcclxuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL0dhbWVTY2VuZSc7XHJcbmltcG9ydCB7IE92ZXJ3b3JsZFNjZW5lIH0gZnJvbSAnLi9PdmVyd29ybGRTY2VuZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcblx0Qm9vdFNjZW5lLFxyXG5cdE92ZXJ3b3JsZFNjZW5lXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==