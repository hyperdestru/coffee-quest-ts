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
exports.DEFAULT_FONT_FAMILIES = exports.CONTROLKEYS = exports.COLORS = exports.loadStrings = exports.loadFile = exports.getGameHeight = exports.getGameWidth = void 0;
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
    black: { string: "#000000", hex: 0x000000 },
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
exports.DEFAULT_FONT_FAMILIES = "monospace, Tahoma, Arial";


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
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, "h3", Gui.mainTitleStyle, params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, "h4", Gui.secondaryTitleStyle, params.text);
    };
    Gui.simpleParagraph = function (params) {
        params.scene.add.dom(params.x, params.y, "p", Gui.simpleParagraphStyle, params.text);
    };
    Gui.mainBtnStyle = "\n\t\twidth: 128px; \n\t\theight: 48px;\n\t\tfont-weight: bold;\n\t\tfont-size: 25px;\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n\t\tcolor: " + helpers_1.COLORS.customYellow.string + ";\n\t\tbackground-color: " + helpers_1.COLORS.black.string + ";\n\t\tborder: 3px solid " + helpers_1.COLORS.customYellow.string + ";\n\t";
    Gui.secondaryBtnStyle = "\n\t\twidth: 100px;\n\t\theight: 33px;\n\t\tfont-size: 17px;\n\t\tborder-radius: 4px;\n\t\tcolor: " + helpers_1.COLORS.black.string + ";\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n\t\tbackground-color: " + helpers_1.COLORS.white.string + ";\n\t\tborder: 2px solid " + helpers_1.COLORS.black.string + ";\n\t";
    Gui.mainTitleStyle = "\n\t\tfont-size: 40px;\n\t\tcolor: " + helpers_1.COLORS.white.string + ";\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n\t";
    Gui.secondaryTitleStyle = "\n\t\tfont-size: 30px \n\t\tcolor: " + helpers_1.COLORS.white.string + " \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "\n\t";
    Gui.simpleParagraphStyle = "\n\t\tfont-size: 20px;\n\t\ttext-align: center;\n\t\tcolor: " + helpers_1.COLORS.white.string + ";\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n\t";
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
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Tableau = /** @class */ (function () {
    function Tableau(params) {
        this.id = uuid_1.v4();
        this.scene = params.scene;
        this.name = params.name;
        this.characters = params.characters;
        this.text = params.text;
        this.background = this.scene.add.image(helpers_1.getGameWidth(this.scene) / 2, helpers_1.getGameHeight(this.scene) / 2, params.backgroundKey);
        if (params.themeKey) {
            this.theme = this.scene.sound.add(params.themeKey);
        }
    }
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
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Intro",
            sceneData: this.data.getAll(),
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/IntroScene.ts":
/*!**********************************!*\
  !*** ./src/scenes/IntroScene.ts ***!
  \**********************************/
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
exports.IntroScene = void 0;
var Tableau_1 = __webpack_require__(/*! ../objects/Tableau */ "./src/objects/Tableau.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Intro",
};
var IntroScene = /** @class */ (function (_super) {
    __extends(IntroScene, _super);
    function IntroScene() {
        return _super.call(this, sceneConfig) || this;
    }
    IntroScene.prototype.create = function () {
        new Tableau_1.Tableau({
            scene: this,
            name: "kitchen",
            backgroundKey: "intro-scene-kitchen",
            text: [{ t: "hello..." }]
        });
    };
    IntroScene.prototype.update = function () { };
    return IntroScene;
}(Phaser.Scene));
exports.IntroScene = IntroScene;


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
var IntroScene_1 = __webpack_require__(/*! ./IntroScene */ "./src/scenes/IntroScene.ts");
var OverworldScene_1 = __webpack_require__(/*! ./OverworldScene */ "./src/scenes/OverworldScene.ts");
exports.default = [
    BootScene_1.BootScene,
    IntroScene_1.IntroScene,
    OverworldScene_1.OverworldScene
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0xvYWRpbmdCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUGF3bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UYWJsZWF1LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RpbGVtYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9Cb290U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9JbnRyb1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvT3ZlcndvcmxkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsZUFBZTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQXZCbUMsTUFBTSxDQUFDLEtBQUssR0F1Qi9DO0FBdkJZLHdDQUFjOzs7Ozs7Ozs7Ozs7OztBQ1gzQixjQUFjOztBQUVkLHNGQUF3QztBQUV4Qyx5RkFBMEM7QUFDMUMscUdBQWtEO0FBRWxELGtCQUFlO0lBQ2QscUJBQVM7SUFDVCx1QkFBVTtJQUNWLCtCQUFjO0NBQ2QsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG91bGQgcHV0IHRoaXMgaW5zaWRlIGEgY2xhc3NcclxuICovXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICByYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICByYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGhcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG4gICAgbGV0IHJhd0dyaWQgPSBsb2FkRmlsZShwRmlsZVBhdGgpO1xyXG4gICAgcmV0dXJuIHJhd0dyaWQuc3BsaXQoXCJcXG5cIikubWFwKChpdGVtKSA9PiBpdGVtLnNwbGl0KFwiXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG5cdHdoaXRlOiB7IHN0cmluZzogXCIjZmZmZmZmXCIsIGhleDogMHhmZmZmZmYgfSxcclxuXHRibGFjazogeyBzdHJpbmc6IFwiIzAwMDAwMFwiLCBoZXg6IDB4MDAwMDAwIH0sXHJcbiAgICBjdXN0b21ZZWxsb3c6IHsgc3RyaW5nOiBcIiNmZmRlNTlcIiwgaGV4OiAweGZmZGU1OSB9LFxyXG59O1xyXG5cclxuLy8gTm90ZSAtLSB3ZSBjYW4gYWRkIG11bHRpcGxlIGtleXMgYXQgb25jZSA6XHJcbi8vIHRoaXMua2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5cygnRU5URVIsVyxBLFMsRCcpXHJcbi8vIEFuZCB0aGVuIGRvIDogdGhpcy5rZXlzLkVOVEVSLmlzRG93bi4uLlxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xLRVlTID0ge1xyXG4gICAgUExBWUVSOiB7XHJcbiAgICAgICAgU0VUMToge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZULFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFNFVDI6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT05UX0ZBTUlMSUVTID0gXCJtb25vc3BhY2UsIFRhaG9tYSwgQXJpYWxcIjtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiQ29mZmVlIFF1ZXN0XCIsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7IHdpZHRoOiA5MDAsIGhlaWdodDogNzAwIH0sXHJcbiAgICBpbnB1dDogeyBrZXlib2FyZDogdHJ1ZSB9LFxyXG5cdGRvbTogeyBjcmVhdGVDb250YWluZXI6IHRydWUgfSxcclxuICAgIHBhcmVudDogXCJnYW1lXCIsXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0R2FtZVdpZHRoLFxyXG4gICAgZ2V0R2FtZUhlaWdodCxcclxuICAgIERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgIENPTE9SUyxcclxufSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEd1aSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG1haW5CdG5TdHlsZSA9IGBcclxuXHRcdHdpZHRoOiAxMjhweDsgXHJcblx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307XHJcblx0XHRjb2xvcjogJHtDT0xPUlMuY3VzdG9tWWVsbG93LnN0cmluZ307XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5ibGFjay5zdHJpbmd9O1xyXG5cdFx0Ym9yZGVyOiAzcHggc29saWQgJHtDT0xPUlMuY3VzdG9tWWVsbG93LnN0cmluZ307XHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gYFxyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0aGVpZ2h0OiAzM3B4O1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLmJsYWNrLnN0cmluZ307XHJcblx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICR7Q09MT1JTLmJsYWNrLnN0cmluZ307XHJcblx0YDtcclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluVGl0bGVTdHlsZSA9IGBcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHRcdGNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfTtcclxuXHRgO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeVRpdGxlU3R5bGUgPSBgXHJcblx0XHRmb250LXNpemU6IDMwcHggXHJcblx0XHRjb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfSBcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU31cclxuXHRgO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNpbXBsZVBhcmFncmFwaFN0eWxlID0gYFxyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307XHJcblx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9O1xyXG5cdGA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBzdHlsaXplZCBCdXR0b24gRE9NIEVsZW1lbnQgd2l0aCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGF0dGFjaGVkXHJcbiAgICAgKiB0byBpdC4gVGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrIHN0YXJ0cyBhIG5ldyBzY2VuZSB1c2luZyB0aGUgc2NlbmUga2V5XHJcbiAgICAgKiBwYXNzZWQgaW4gYXJndW1lbnRzIGFuZCBzdG9wcyBhbGwgc291bmRzIGlmIHN0b3BTb3VuZHMgc2V0IHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFpbkJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBzdG9wU291bmRzOiBib29sZWFuO1xyXG4gICAgICAgIHNjZW5lUGx1Z2luOiBQaGFzZXIuU2NlbmVzLlNjZW5lUGx1Z2luO1xyXG4gICAgICAgIG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgc2NlbmVEYXRhPzogb2JqZWN0O1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgICAgIGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKSAtIDEwMCxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBHdWkubWFpbkJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0b3BTb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgZmFkZS1vdXQgdG8gYmxhY2tcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5jYW1lcmFzLm1haW4uZmFkZU91dCgxMDAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRyaWdnZXJlZCBmYWRlLW91dCBpcyBmaW5pc2hlZCB0aGVuIHdlIHN0YXJ0IHRoZSBuZXcgc2NlbmVcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5jYW1lcmFzLm1haW4ub25jZShcclxuICAgICAgICAgICAgICAgICAgICBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkV2ZW50cy5GQURFX09VVF9DT01QTEVURSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZVBsdWdpbi5zdGFydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5uZXdTY2VuZUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1dHRvbiB0aGF0IGNoYW5nZXMgYW4gaW1hZ2UgKGltZykgdGV4dHVyZSB3aXRoIGFub3RoZXIgKHRleHR1cmVzKSxcclxuICAgICAqIG9uZSBieSBvbmUuIExpa2UgYSBzbGlkZXNob3cuXHJcbiAgICAgKiBAcGFyYW0gaW1nOiBhIHBoYXNlciBnYW1lIG9iamVjdCBpbWFnZSB0aGF0IGFjdCBhcyBhIGNvbnRhaW5lciBpbiBhIHdheS5cclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlczogdGhlIHRleHR1cmVzIHRvIGFwcGVuZCB0byBpbWcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2xpZGVCdG4ocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgICAgICB0ZXh0dXJlS2V5czogQXJyYXk8c3RyaW5nPjtcclxuICAgICAgICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy55LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgIEd1aS5zZWNvbmRhcnlCdG5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBwYXJhbXMudGV4dHVyZUtleXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5pbWcuc2V0VGV4dHVyZShwYXJhbXMudGV4dHVyZUtleXNbY3VycmVudEluZGV4XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGl0bGUocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR0ZXh0OiBzdHJpbmc7XHJcblx0fSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIDI0LFxyXG4gICAgICAgICAgICBcImgzXCIsXHJcbiAgICAgICAgICAgIEd1aS5tYWluVGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJoNFwiLFxyXG4gICAgICAgICAgICBHdWkuc2Vjb25kYXJ5VGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2ltcGxlUGFyYWdyYXBoKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJwXCIsXHJcbiAgICAgICAgICAgXHRHdWkuc2ltcGxlUGFyYWdyYXBoU3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIGJhclg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhclk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmNsZWFyKCk7XHJcblx0XHR0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcblx0XHR0aGlzLmJhci5maWxsUmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSwgdGhpcy5iYXJIZWlnaHQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuYm94LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMudGV4dC5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuXHRcdHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcblx0XHR0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFyV2lkdGgvMik7XHJcblx0XHR0aGlzLmJhclkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJhckhlaWdodC8yKTtcclxuXHRcdHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tUmVkLmhleDtcclxuXHRcdHRoaXMuYmFyQWxwaGEgPSAwLjg7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuXHRcdHRoaXMuYm94V2lkdGggPSB0aGlzLmJhcldpZHRoICsgMTA7XHJcblx0XHR0aGlzLmJveEhlaWdodCA9IHRoaXMuYmFySGVpZ2h0ICsgMTA7XHJcblx0XHR0aGlzLmJveFggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYm94V2lkdGgvMik7XHJcblx0XHR0aGlzLmJveFkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJveEhlaWdodC8yKTtcclxuXHRcdHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG5cdFx0dGhpcy5ib3hBbHBoYSA9IDAuMztcclxuXHRcdFxyXG5cdFx0dGhpcy5ib3guZmlsbFN0eWxlKHRoaXMuYm94Q29sb3IsIHRoaXMuYm94QWxwaGEpO1xyXG5cdFx0dGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSArIDQwLFxyXG5cdFx0XHR0ZXh0OiBcIkNoYXJnZW1lbnQuLi5cIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMjBweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMiksIFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSxcclxuXHRcdFx0dGV4dDogXCIwJVwiLFxyXG5cdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdGZvbnQ6ICcxOHB4IG1vbm9zcGFjZScsXHJcblx0XHRcdFx0ZmlsbDogQ09MT1JTLndoaXRlLnN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL1BsYWNlXCI7XHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi9UaWxlbWFwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGNvbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsaW5lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQbGFjZTogUGxhY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlTm9ydGgoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lIC09IDE7XHJcbiAgICAgICAgdGhpcy55IC09IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVTb3V0aCgpIHtcclxuICAgICAgICB0aGlzLmxpbmUgKz0gMTtcclxuICAgICAgICB0aGlzLnkgKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUVhc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgKz0gMTtcclxuICAgICAgICB0aGlzLnggKz0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVdlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb2wgLT0gMTtcclxuICAgICAgICB0aGlzLnggLT0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGF3bihwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgcFRpbGVtYXA6IFRpbGVtYXApOiB2b2lkIHtcclxuICAgICAgICBsZXQgcHggPSBNYXRoLmZsb29yKHBvaW50ZXIueCAvIHBUaWxlbWFwLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgbGV0IHB5ID0gTWF0aC5mbG9vcihwb2ludGVyLnkgLyBwVGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHB5ID09PSB0aGlzLmxpbmUgKyAxICYmIHB4ID09PSB0aGlzLmNvbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHkgPT09IHRoaXMubGluZSAtIDEgJiYgcHggPT09IHRoaXMuY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVdlc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCAtIDEgJiYgcHkgPT09IHRoaXMubGluZSAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9ydGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlV2VzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHggPT09IHRoaXMuY29sIC0gMSAmJiBweSA9PT0gdGhpcy5saW5lICsgMSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTb3V0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXZXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweCA9PT0gdGhpcy5jb2wgKyAxICYmIHB5ID09PSB0aGlzLmxpbmUgLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU5vcnRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUVhc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID09PSB0aGlzLmNvbCArIDEgJiYgcHkgPT09IHRoaXMubGluZSArIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU291dGgoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRWFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2UgPSBwVGlsZW1hcC5ncmlkW3RoaXMubGluZV1bdGhpcy5jb2xdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgY29sOiBudW1iZXI7XHJcbiAgICAgICAgbGluZTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICB0aWxlbWFwOiBUaWxlbWFwO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHBhcmFtcy5jb2wgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBwYXJhbXMubGluZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgOiBwYXJhbXMubGluZSAqIHBhcmFtcy50aWxlbWFwLnRpbGVXaWR0aCArXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGlsZW1hcC50aWxlSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgcGFyYW1zLnRleHR1cmVLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2wgPSBwYXJhbXMuY29sO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHBhcmFtcy5saW5lO1xyXG5cclxuICAgICAgICB0aGlzLnggPVxyXG4gICAgICAgICAgICB0aGlzLmNvbCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwYXJhbXMudGlsZW1hcC50aWxlV2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29sICogcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoICtcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnRpbGVtYXAudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnkgPVxyXG4gICAgICAgICAgICB0aGlzLmxpbmUgPT09IDBcclxuICAgICAgICAgICAgICAgID8gcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgIDogdGhpcy5saW5lICogcGFyYW1zLnRpbGVtYXAudGlsZUhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy50aWxlbWFwLnRpbGVIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKFxyXG4gICAgICAgICAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgICAgIChwb2ludGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhd24ocG9pbnRlciwgcGFyYW1zLnRpbGVtYXApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYWNlIHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2lzUmVzdHJpY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzUmVzdHJpY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNSZXN0cmljdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IGlzUmVzdHJpY3RlZDogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2lzUmVzdHJpY3RlZCA9IHBhcmFtcy5pc1Jlc3RyaWN0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlYXUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcnM6IEFycmF5PENoYXJhY3Rlcj47XHJcbiAgICBwcml2YXRlIHRoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIHRleHQ6IEFycmF5PE9iamVjdD47XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZEtleTogc3RyaW5nO1xyXG4gICAgICAgIHRleHQ/OiBBcnJheTxPYmplY3Q+O1xyXG4gICAgICAgIHRoZW1lS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIGNoYXJhY3RlcnM/OiBBcnJheTxDaGFyYWN0ZXI+O1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IHBhcmFtcy5jaGFyYWN0ZXJzO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy50ZXh0O1xyXG5cclxuXHRcdHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMiwgXHJcblx0XHRcdHBhcmFtcy5iYWNrZ3JvdW5kS2V5XHJcblx0XHQpO1xyXG5cclxuXHRcdGlmIChwYXJhbXMudGhlbWVLZXkpIHtcclxuXHRcdFx0dGhpcy50aGVtZSA9IHRoaXMuc2NlbmUuc291bmQuYWRkKHBhcmFtcy50aGVtZUtleSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4vUGxhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuICAgIHByaXZhdGUgdGlsZXNoZWV0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIF90aWxlV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpbGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2dyaWQ6IFBsYWNlW11bXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbGVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aWxlSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBncmlkKCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGlsZXNTaXplcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90aWxlV2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5fdGlsZUhlaWdodCA9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZSB9KSB7XHJcbiAgICAgICAgdGhpcy5pbml0VGlsZXNTaXplcygpO1xyXG5cclxuICAgICAgICBjb25zdCBQbGFjZXMgPSB7XHJcbiAgICAgICAgICAgIFNlYTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgc2VhXCIsIGlzUmVzdHJpY3RlZDogZmFsc2UgfSksXHJcbiAgICAgICAgICAgIEJlYWNoOiBuZXcgUGxhY2UoeyBuYW1lOiBcInRoZSBiZWFjaFwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBHcmFzczogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgZ3Jhc3NcIiwgaXNSZXN0cmljdGVkOiBmYWxzZSB9KSxcclxuICAgICAgICAgICAgQ2l0eTogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgY2l0eVwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBGb3Jlc3Q6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGZvcmVzdFwiLCBpc1Jlc3RyaWN0ZWQ6IGZhbHNlIH0pLFxyXG4gICAgICAgICAgICBMaWdodGhvdXNlOiBuZXcgUGxhY2Uoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0aGUgbGlnaHRob3VzZVwiLFxyXG4gICAgICAgICAgICAgICAgaXNSZXN0cmljdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUHlyYW1pZDogbmV3IFBsYWNlKHsgbmFtZTogXCJ0aGUgcHlyYW1pZFwiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgICAgIERpY2s6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGRpY2tcIiwgaXNSZXN0cmljdGVkOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICBDYXN0bGU6IG5ldyBQbGFjZSh7IG5hbWU6IFwidGhlIGNhc3RsZVwiLCBpc1Jlc3RyaWN0ZWQ6IHRydWUgfSksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3JpZCA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5DaXR5LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5EaWNrLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNpdHksXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQ2l0eSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5MaWdodGhvdXNlLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5CZWFjaCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5HcmFzcyxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5QeXJhbWlkLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuU2VhLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkJlYWNoLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkdyYXNzLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuR3Jhc3MsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgUGxhY2VzLlNlYSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5TZWEsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuQmVhY2gsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkZvcmVzdCxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgICAgICBQbGFjZXMuRm9yZXN0LFxyXG4gICAgICAgICAgICAgICAgUGxhY2VzLkNhc3RsZSxcclxuICAgICAgICAgICAgICAgIFBsYWNlcy5Gb3Jlc3QsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2hlZXQgPSBwYXJhbXMuc2NlbmUuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIFwib3ZlcndvcmxkTWFwXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQmFyID0gbmV3IExvYWRpbmdCYXIoeyBzY2VuZTogdGhpcyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwicHJvZ3Jlc3NcIiwgKHZhbHVlKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kcmF3KHZhbHVlKTtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzVGV4dC5zZXRUZXh0KChNYXRoLmZsb29yKHZhbHVlKjEwMCkpICsgXCIlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJjb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJib290VGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwiYm9vdExvZ29cIlxyXG5cdFx0KTtcclxuXHRcdFxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU1RBUlRcIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogdHJ1ZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIkludHJvXCIsXHJcbiAgICAgICAgICAgIHNjZW5lRGF0YTogdGhpcy5kYXRhLmdldEFsbCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBUYWJsZWF1IH0gZnJvbSBcIi4uL29iamVjdHMvVGFibGVhdVwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiSW50cm9cIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRyb1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblx0XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgbmV3IFRhYmxlYXUoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgbmFtZTogXCJraXRjaGVuXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRLZXk6IFwiaW50cm8tc2NlbmUta2l0Y2hlblwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBbeyB0OiBcImhlbGxvLi4uXCIgfV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7fVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4uL29iamVjdHMvVGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL29iamVjdHMvUGF3blwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiT3ZlcndvcmxkXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSB0aWxlbWFwOiBUaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSBwYXduOiBQYXduO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJvdmVyd29ybGRUaGVtZVwiKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblx0XHRcclxuXHRcdHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKHsgc2NlbmU6IHRoaXMgfSk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhd24gPSBuZXcgUGF3bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICBjb2w6IDQsXHJcbiAgICAgICAgICAgIGxpbmU6IDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IFwib3ZlcndvcmxkSGVyb1wiLFxyXG4gICAgICAgICAgICB0aWxlbWFwOiB0aGlzLnRpbGVtYXAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgSW50cm9TY2VuZSB9IGZyb20gXCIuL0ludHJvU2NlbmVcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkU2NlbmUgfSBmcm9tIFwiLi9PdmVyd29ybGRTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdEJvb3RTY2VuZSxcclxuXHRJbnRyb1NjZW5lLFxyXG5cdE92ZXJ3b3JsZFNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=