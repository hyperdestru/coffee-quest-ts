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
            // Trigger fade-out to black
            params.scene.cameras.main.fadeOut(1000, 0, 0, 0);
            // When triggered fade-out is finished then we start the new scene
            params.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function () { return params.scenePlugin.start(params.newSceneKey, params.sceneData); });
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tilemap = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Place_1 = __webpack_require__(/*! ./Place */ "./src/objects/Place.ts");
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.initTilesSizes();
        var Places = {
            Sea: new Place_1.Place({ name: 'the sea', isRestricted: false }),
            Beach: new Place_1.Place({ name: 'the beach', isRestricted: false }),
            Grass: new Place_1.Place({ name: 'the grass', isRestricted: false }),
            City: new Place_1.Place({ name: 'the city', isRestricted: false }),
            Forest: new Place_1.Place({ name: 'the forest', isRestricted: false }),
            Lighthouse: new Place_1.Place({ name: 'the lighthouse', isRestricted: true }),
            Pyramid: new Place_1.Place({ name: 'the pyramid', isRestricted: true }),
            Dick: new Place_1.Place({ name: 'the dick', isRestricted: true }),
            Castle: new Place_1.Place({ name: 'the castle', isRestricted: true })
        };
        this._grid = [
            [
                Places.Sea, Places.Sea, Places.Beach, Places.Grass, Places.Grass,
                Places.Grass, Places.Grass, Places.City, Places.City
            ],
            [
                Places.Sea, Places.Sea, Places.Beach, Places.Grass, Places.Dick,
                Places.Grass, Places.Grass, Places.City, Places.City
            ],
            [
                Places.Sea, Places.Lighthouse, Places.Beach, Places.Grass,
                Places.Grass, Places.Grass, Places.Grass, Places.Grass, Places.Grass
            ],
            [
                Places.Sea, Places.Sea, Places.Beach, Places.Grass, Places.Grass,
                Places.Grass, Places.Grass, Places.Grass, Places.Pyramid
            ],
            [
                Places.Sea, Places.Beach, Places.Grass, Places.Grass, Places.Grass,
                Places.Forest, Places.Forest, Places.Forest, Places.Forest
            ],
            [
                Places.Sea, Places.Sea, Places.Beach, Places.Grass, Places.Forest,
                Places.Forest, Places.Forest, Places.Forest, Places.Forest
            ],
            [
                Places.Sea, Places.Sea, Places.Beach, Places.Forest, Places.Forest,
                Places.Forest, Places.Forest, Places.Castle, Places.Forest
            ]
        ];
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
            col: 4,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1Bhd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUGxhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL092ZXJ3b3JsZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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dCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuLyoqXHJcbiAqIFNob3VsZCBwdXQgdGhpcyBpbnNpZGUgYSBjbGFzc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIHdpZHRoIG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcblx0cmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG5cdGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0bGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuXHRyYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0aWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG5cdHJhd0ZpbGUuc2VuZChudWxsKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuXHRsZXQgcmF3R3JpZCA9IGxvYWRGaWxlKHBGaWxlUGF0aCk7XHJcblx0cmV0dXJuIHJhd0dyaWQuc3BsaXQoJ1xcbicpLm1hcChpdGVtID0+IGl0ZW0uc3BsaXQoJycpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcblx0Y3VzdG9tQmx1ZTogeyBzdHJpbmc6ICcjNDM0NmY5JywgaGV4OiAweDQzNDZmOSB9LFxyXG5cdGN1c3RvbUdyZWVuOiB7IHN0cmluZzogICcjNzZlYTY0JywgaGV4OiAweDc2ZWE2NCB9LFxyXG5cdHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6ICcjMjVmOTQ1JywgaGV4OiAweDI1Zjk0NSB9LFxyXG5cdGN1c3RvbVJlZDogeyBzdHJpbmc6ICcjZWEyZDIzJywgaGV4OiAweGVhMmQyMyB9LFxyXG5cdHdoaXRlOiB7IHN0cmluZzogJyNmZmZmZmYnLCBoZXg6IDB4ZmZmZmZmIH1cclxufVxyXG5cclxuLy8gTm90ZSAtLSB3ZSBjYW4gYWRkIG11bHRpcGxlIGtleXMgYXQgb25jZSA6IFxyXG4vLyB0aGlzLmtleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleXMoJ0VOVEVSLFcsQSxTLEQnKVxyXG4vLyBBbmQgdGhlbiBkbyA6IHRoaXMua2V5cy5FTlRFUi5pc0Rvd24uLi5cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuXHRQTEFZRVI6IHtcclxuXHRcdFNFVDE6IHtcclxuXHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuXHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0fSxcclxuXHJcblx0XHRTRVQyOiB7XHJcblx0XHRcdHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFXHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuXHJcblx0dGl0bGU6ICdDb2ZmZWUgUXVlc3QnLFxyXG5cclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcblx0c2NhbGU6IHtcclxuXHRcdHdpZHRoOiA5MDAsXHJcblx0XHRoZWlnaHQ6IDcwMFxyXG5cdH0sXHJcblxyXG5cdGlucHV0OiB7XHJcblx0XHRrZXlib2FyZDogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdGRvbToge1xyXG5cdFx0Y3JlYXRlQ29udGFpbmVyOiB0cnVlXHJcblx0fSxcclxuXHJcblx0cGFyZW50OiAnZ2FtZScsXHJcblx0XHJcblx0c2NlbmU6IFNjZW5lc1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBcclxuXHRcdGB3aWR0aDogMTI4cHg7IFxyXG5cdFx0aGVpZ2h0OiA0OHB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBUYWhvbWEsIGNvdXJpZXI7IFxyXG5cdFx0Y29sb3I6ICNmZmRlNTk7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcclxuXHRcdGJvcmRlcjogM3B4IHNvbGlkICNmZmRlNTlgXHJcblx0O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gXHJcblx0XHRgd2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG5cdFx0Y29sb3I6ICMwMDAwMDA7IFxyXG5cdFx0Zm9udC1zaXplOiAxN3B4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwMGBcclxuXHQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuXHQgKiB0byBpdC4gVGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrIHN0YXJ0cyBhIG5ldyBzY2VuZSB1c2luZyB0aGUgc2NlbmUga2V5XHJcblx0ICogcGFzc2VkIGluIGFyZ3VtZW50cyBhbmQgc3RvcHMgYWxsIHNvdW5kcyBpZiBzdG9wU291bmRzIHNldCB0byB0cnVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgbWFpbkJ0bihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHRcdHN0b3BTb3VuZHM6IGJvb2xlYW47IFxyXG5cdFx0c2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47IFxyXG5cdFx0bmV3U2NlbmVLZXk6IHN0cmluZztcclxuXHRcdHNjZW5lRGF0YT86IG9iamVjdDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSktMTAwLFxyXG5cdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0R3VpLm1haW5CdG5TdHlsZSxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHJcblx0XHQpLmFkZExpc3RlbmVyKCdjbGljaycpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG5cdFx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFRyaWdnZXIgZmFkZS1vdXQgdG8gYmxhY2tcclxuXHRcdFx0cGFyYW1zLnNjZW5lLmNhbWVyYXMubWFpbi5mYWRlT3V0KDEwMDAsMCwwLDApO1xyXG5cclxuXHRcdFx0Ly8gV2hlbiB0cmlnZ2VyZWQgZmFkZS1vdXQgaXMgZmluaXNoZWQgdGhlbiB3ZSBzdGFydCB0aGUgbmV3IHNjZW5lXHJcblx0XHRcdHBhcmFtcy5zY2VuZS5jYW1lcmFzLm1haW4ub25jZShcclxuXHRcdFx0XHRQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkV2ZW50cy5GQURFX09VVF9DT01QTEVURSwgXHJcblx0XHRcdFx0KCkgPT4gcGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG5cdCAqIG9uZSBieSBvbmUuIExpa2UgYSBzbGlkZXNob3cuXHJcblx0ICogQHBhcmFtIGltZzogYSBwaGFzZXIgZ2FtZSBvYmplY3QgaW1hZ2UgdGhhdCBhY3QgYXMgYSBjb250YWluZXIgaW4gYSB3YXkuXHJcblx0ICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHNsaWRlQnRuKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHR0ZXh0OiBzdHJpbmc7XHJcblx0XHRpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRcdHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG5cdFx0Y2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRHdWkuc2Vjb25kYXJ5QnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5hZGQoJ2NsaWNrU291bmQnKS5wbGF5KCk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEluZGV4IDwgcGFyYW1zLnRleHR1cmVLZXlzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXgrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuaW1nLnNldFRleHR1cmUocGFyYW1zLnRleHR1cmVLZXlzW2N1cnJlbnRJbmRleF0pO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyYW1zLmNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRpdGxlKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nIDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsXHJcblx0XHRcdDI0LFxyXG5cdFx0XHQnaDMnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0eDogbnVtYmVyOyBcclxuXHRcdHk6IG51bWJlcjsgXHJcblx0XHR0ZXh0OiBzdHJpbmc7IFxyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHRcdFx0cGFyYW1zLngsXHJcblx0XHRcdHBhcmFtcy55LFxyXG5cdFx0XHQnaDQnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDMwcHg7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3VzdG9tVGV4dChwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J3AnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblx0XHJcbn0iLCJpbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL1BsYWNlXCI7XHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi9UaWxlbWFwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcblxyXG5cdHByaXZhdGUgY29sOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsaW5lOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBjdXJyZW50UGxhY2U6IFBsYWNlO1xyXG5cclxuXHRwcml2YXRlIG1vdmVOb3J0aCgpIHtcclxuXHRcdHRoaXMubGluZSAtPSAxO1xyXG5cdFx0dGhpcy55IC09IDEwMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVNvdXRoKCkge1xyXG5cdFx0dGhpcy5saW5lICs9IDE7XHJcblx0XHR0aGlzLnkgKz0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlRWFzdCgpIHtcclxuXHRcdHRoaXMuY29sICs9IDE7XHJcblx0XHR0aGlzLnggKz0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlV2VzdCgpIHtcclxuXHRcdHRoaXMuY29sIC09IDE7XHJcblx0XHR0aGlzLnggLT0gMTAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB1cGRhdGVQYXduKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBwVGlsZW1hcDogVGlsZW1hcCk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBub3JtYWxpemVkUHggPSBNYXRoLmZsb29yKHBvaW50ZXIueCAvIHBUaWxlbWFwLnRpbGVXaWR0aCk7XHJcblx0XHRsZXQgbm9ybWFsaXplZFB5ID0gTWF0aC5mbG9vcihwb2ludGVyLnkgLyBwVGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcblx0XHRpZiAobm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgKyAxICYmIG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wpIHtcclxuXHRcdFx0dGhpcy5tb3ZlU291dGgoKTtcclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUgLSAxICYmIG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wpIHtcclxuXHRcdFx0dGhpcy5tb3ZlTm9ydGgoKTtcclxuXHRcdH0gZWxzZSBpZiAobm9ybWFsaXplZFB4ID09PSB0aGlzLmNvbCArIDEgJiYgbm9ybWFsaXplZFB5ID09PSB0aGlzLmxpbmUpIHtcclxuXHRcdFx0dGhpcy5tb3ZlRWFzdCgpO1xyXG5cdFx0fSBlbHNlIGlmIChub3JtYWxpemVkUHggPT09IHRoaXMuY29sIC0gMSAmJiBub3JtYWxpemVkUHkgPT09IHRoaXMubGluZSkge1xyXG5cdFx0XHR0aGlzLm1vdmVXZXN0KCk7XHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgLSAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lIC0gMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVOb3J0aCgpO1xyXG5cdFx0XHR0aGlzLm1vdmVXZXN0KCk7XHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgLSAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVTb3V0aCgpO1xyXG5cdFx0XHR0aGlzLm1vdmVXZXN0KCk7XHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgKyAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lIC0gMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVOb3J0aCgpO1xyXG5cdFx0XHR0aGlzLm1vdmVFYXN0KCk7XHJcblx0XHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQeCA9PT0gdGhpcy5jb2wgKyAxICYmIG5vcm1hbGl6ZWRQeSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG5cdFx0XHR0aGlzLm1vdmVTb3V0aCgpO1xyXG5cdFx0XHR0aGlzLm1vdmVFYXN0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50UGxhY2UgPSBwVGlsZW1hcC5ncmlkW3RoaXMubGluZV1bdGhpcy5jb2xdO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0Y29sOiBudW1iZXI7XHJcblx0XHRsaW5lOiBudW1iZXI7XHJcblx0XHR0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0XHR0aWxlbWFwOiBUaWxlbWFwO1xyXG5cdH0pIHtcclxuXHJcblx0XHRzdXBlcihcclxuXHRcdFx0cGFyYW1zLnNjZW5lLCBcclxuXHRcdFx0KHBhcmFtcy5jb2wgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoLzIgOiAocGFyYW1zLmNvbCAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCkgKyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0LzIsIFxyXG5cdFx0XHQocGFyYW1zLmxpbmUgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yIDogKHBhcmFtcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoKSArIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQvMixcclxuXHRcdFx0cGFyYW1zLnRleHR1cmVLZXlcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5jb2wgPSBwYXJhbXMuY29sO1xyXG5cdFx0dGhpcy5saW5lID0gcGFyYW1zLmxpbmU7XHJcblx0XHRcclxuXHRcdHRoaXMueCA9ICh0aGlzLmNvbCA9PT0gMCkgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGgvMiA6ICh0aGlzLmNvbCAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCkgKyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGgvMjtcclxuXHRcdHRoaXMueSA9ICh0aGlzLmxpbmUgPT09IDApID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yIDogKHRoaXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQpICsgcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodC8yO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZVBhd24ocG9pbnRlciwgcGFyYW1zLnRpbGVtYXApO1xyXG5cclxuXHRcdH0sIHRoaXMuc2NlbmUpO1xyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGFjZSB7XHJcblxyXG5cdHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIF9pc1Jlc3RyaWN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX25hbWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGlzUmVzdHJpY3RlZCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLl9pc1Jlc3RyaWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGlzUmVzdHJpY3RlZDogYm9vbGVhbjtcclxuXHR9KSB7XHJcblx0XHR0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcblx0XHR0aGlzLl9pc1Jlc3RyaWN0ZWQgPSBwYXJhbXMuaXNSZXN0cmljdGVkO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4vUGxhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuXHJcblx0cHJpdmF0ZSB0aWxlc2hlZXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIF90aWxlV2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIF90aWxlSGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfZ3JpZDogUGxhY2VbXVtdO1xyXG5cclxuXHRwdWJsaWMgZ2V0IHRpbGVXaWR0aCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVXaWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGlsZUhlaWdodCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGdyaWQoKTogb2JqZWN0IHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0VGlsZXNTaXplcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3RpbGVXaWR0aCA9IDEwMDtcclxuXHRcdHRoaXMuX3RpbGVIZWlnaHQgPSAxMDA7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMuaW5pdFRpbGVzU2l6ZXMoKTtcclxuXHJcblx0XHRjb25zdCBQbGFjZXMgPSB7XHJcblx0XHRcdFNlYTogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgc2VhJywgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuXHRcdFx0QmVhY2g6IG5ldyBQbGFjZSh7IG5hbWUgOiAndGhlIGJlYWNoJywgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuXHRcdFx0R3Jhc3M6IG5ldyBQbGFjZSh7IG5hbWUgOiAndGhlIGdyYXNzJywgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuXHRcdFx0Q2l0eTogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgY2l0eScsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcblx0XHRcdEZvcmVzdDogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgZm9yZXN0JywgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuXHRcdFx0TGlnaHRob3VzZTogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgbGlnaHRob3VzZScsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuXHRcdFx0UHlyYW1pZDogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgcHlyYW1pZCcsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuXHRcdFx0RGljazogbmV3IFBsYWNlKHsgbmFtZSA6ICd0aGUgZGljaycsIGlzUmVzdHJpY3RlZDogdHJ1ZSB9KSxcclxuXHRcdFx0Q2FzdGxlOiBuZXcgUGxhY2UoeyBuYW1lIDogJ3RoZSBjYXN0bGUnLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSlcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5fZ3JpZCA9IFtcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFBsYWNlcy5TZWEsUGxhY2VzLlNlYSxQbGFjZXMuQmVhY2gsUGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyxcclxuXHRcdFx0XHRQbGFjZXMuR3Jhc3MsUGxhY2VzLkdyYXNzLFBsYWNlcy5DaXR5LFBsYWNlcy5DaXR5XHJcblx0XHRcdF0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRQbGFjZXMuU2VhLFBsYWNlcy5TZWEsUGxhY2VzLkJlYWNoLFBsYWNlcy5HcmFzcyxQbGFjZXMuRGljayxcclxuXHRcdFx0XHRQbGFjZXMuR3Jhc3MsUGxhY2VzLkdyYXNzLFBsYWNlcy5DaXR5LFBsYWNlcy5DaXR5XHJcblx0XHRcdF0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRQbGFjZXMuU2VhLFBsYWNlcy5MaWdodGhvdXNlLFBsYWNlcy5CZWFjaCxQbGFjZXMuR3Jhc3MsXHJcblx0XHRcdFx0UGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyxQbGFjZXMuR3Jhc3MsUGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyBcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFBsYWNlcy5TZWEsUGxhY2VzLlNlYSxQbGFjZXMuQmVhY2gsUGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyxcclxuXHRcdFx0XHRQbGFjZXMuR3Jhc3MsUGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyxQbGFjZXMuUHlyYW1pZFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0UGxhY2VzLlNlYSxQbGFjZXMuQmVhY2gsUGxhY2VzLkdyYXNzLFBsYWNlcy5HcmFzcyxQbGFjZXMuR3Jhc3MsXHJcblx0XHRcdFx0UGxhY2VzLkZvcmVzdCxQbGFjZXMuRm9yZXN0LFBsYWNlcy5Gb3Jlc3QsUGxhY2VzLkZvcmVzdFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0UGxhY2VzLlNlYSxQbGFjZXMuU2VhLFBsYWNlcy5CZWFjaCxQbGFjZXMuR3Jhc3MsUGxhY2VzLkZvcmVzdCxcclxuXHRcdFx0XHRQbGFjZXMuRm9yZXN0LFBsYWNlcy5Gb3Jlc3QsUGxhY2VzLkZvcmVzdCxQbGFjZXMuRm9yZXN0XHJcblx0XHRcdF0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRQbGFjZXMuU2VhLFBsYWNlcy5TZWEsUGxhY2VzLkJlYWNoLFBsYWNlcy5Gb3Jlc3QsUGxhY2VzLkZvcmVzdCxcclxuXHRcdFx0XHRQbGFjZXMuRm9yZXN0LFBsYWNlcy5Gb3Jlc3QsUGxhY2VzLkNhc3RsZSxQbGFjZXMuRm9yZXN0IFxyXG5cdFx0XHRdXHJcblx0XHRdO1xyXG5cclxuXHRcdHRoaXMudGlsZXNoZWV0ID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC8gMixcclxuXHRcdFx0J292ZXJ3b3JsZE1hcCdcclxuXHRcdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvR3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdCb290J1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cdHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cclxuXHRcdHRoaXMubG9hZC5wYWNrKFxyXG5cdFx0XHRcInByZWxvYWRcIixcclxuXHRcdFx0XCJhc3NldHMvcGFjay5qc29uXCIsXHJcblx0XHRcdFwicHJlbG9hZFwiXHJcblx0XHQpO1xyXG5cdFxyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuXHRcdHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdib290VGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLjUsXHJcblx0XHRcdCdib290TG9nbydcclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdEd1aS5tYWluQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0dGV4dDogXCJTVEFSVFwiLFxyXG5cdFx0XHRzdG9wU291bmRzOiB0cnVlLFxyXG5cdFx0XHRzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuXHRcdFx0bmV3U2NlbmVLZXk6ICdPdmVyd29ybGQnLFxyXG5cdFx0XHRzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKVxyXG5cdFx0fSk7XHRcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4uL29iamVjdHMvVGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL29iamVjdHMvUGF3blwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdPdmVyd29ybGQnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblx0cHJpdmF0ZSB0aWxlbWFwOiBUaWxlbWFwO1xyXG5cdHByaXZhdGUgcGF3bjogUGF3bjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLm11c2ljVGhlbWUgPSB0aGlzLnNvdW5kLmFkZCgnb3ZlcndvcmxkVGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy50aWxlbWFwID0gbmV3IFRpbGVtYXAoe3NjZW5lOiB0aGlzfSk7XHJcblx0XHRcclxuXHRcdHRoaXMucGF3biA9IG5ldyBQYXduKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdGNvbDogNCxcclxuXHRcdFx0bGluZTogMCxcclxuXHRcdFx0dGV4dHVyZUtleTogJ292ZXJ3b3JsZEhlcm8nLFxyXG5cdFx0XHR0aWxlbWFwOiB0aGlzLnRpbGVtYXBcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vQm9vdFNjZW5lJztcclxuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL0dhbWVTY2VuZSc7XHJcbmltcG9ydCB7IE92ZXJ3b3JsZFNjZW5lIH0gZnJvbSAnLi9PdmVyd29ybGRTY2VuZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcblx0Qm9vdFNjZW5lLFxyXG5cdE92ZXJ3b3JsZFNjZW5lXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==