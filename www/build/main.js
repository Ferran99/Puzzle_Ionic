webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component inicial de l'aplicació
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
var IonicPage = /** @class */ (function () {
    function IonicPage() {
        this.slides = [
            {
                titol: "DAW2 . M14UF2 . Ionic!",
                descripcio: "<b>Ionic</b> és un bastiment per a construir aplicacions híbrides modernes.",
                imatge: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                titol: "Què és Ionic?",
                descripcio: "<b>Ionic</b> és open source i es basa en HTML5, CSS, i TS.",
                imatge: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                titol: "Què és Ionic Cloud?",
                descripcio: "<b>Ionic Cloud</b> es una plataforma al núvol per a gestionar les aplicacions.",
                imatge: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    IonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'inici',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/inici/inici.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inici</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides">\n          <ion-toolbar>\n            <ion-buttons end>\n              <button ion-button color="primary">Salta</button>\n            </ion-buttons>\n          </ion-toolbar>\n          <img [src]="slide.imatge" class="slide-image"/>\n          <h2 class="slide-title" [innerHTML]="slide.titol"></h2>\n          <p [innerHTML]="slide.descripcio"></p>\n        </ion-slide>\n        <ion-slide>\n          <ion-toolbar>\n          </ion-toolbar>\n          <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n          <h2 class="slide-title">basat en Cordova i Angular 2</h2>\n          <button ion-button large clear icon-end color="primary">\n            Continua\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n      </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/inici/inici.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonicPage);
    return IonicPage;
}());

//# sourceMappingURL=inici.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalls_detalls__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component que mostra una llista d'items, i en seleccionar un mostra el detall
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
var LlistaPage = /** @class */ (function () {
    function LlistaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                titol: 'Item ' + i,
                text: 'Aquest és el item #' + i,
                icona: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    LlistaPage.prototype.itemPolsat = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalls_detalls__["a" /* DetallsPage */], {
            item: item
        });
    };
    LlistaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'llista',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/llista/llista.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>llista d\'items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemPolsat($event, item)">\n      <ion-icon name="{{item.icona}}" item-left></ion-icon>\n      {{item.titol}}\n      <div class="item-note" item-right>\n        {{item.text}}\n      </div>\n    </button>\n  </ion-list>\n\n\n  <button ion-button color="primary" menuToggle>Accedir al Menu</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/llista/llista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LlistaPage);
    return LlistaPage;
}());

//# sourceMappingURL=llista.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component detall que apareix al seleccionar un item de la llista
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
var DetallsPage = /** @class */ (function () {
    function DetallsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemSeleccionat = navParams.get('item');
    }
    DetallsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'detalls',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/detalls/detalls.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!itemSeleccionat">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalls de l\'Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="itemSeleccionat">\n    {{itemSeleccionat.titol}}\n    <ion-icon [name]="itemSeleccionat.icona"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="itemSeleccionat">\n    Has vingut des de <b>{{itemSeleccionat.titol}}</b>\n  </h4>\n\n  <ion-card>\n\n    <img src="assets/imgs/logo_clot.png"/>\n  <ion-card-content>\n    <ion-card-title>\n      DAW2\n    </ion-card-title>\n    <p>\n      Desenvolupament d\'aplicaicons en entorns mòbils.\n      Ionic is a complete open-source SDK for hybrid mobile app development.[4] The original version was released in 2013 and built on top of AngularJS and Apache Cordova. The more recent releases, known as Ionic 3 or simply "Ionic", are built on Angular. Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass. Apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by leveraging Cordova\n    </p>\n  </ion-card-content>\n\n  <ion-item>\n    <ion-icon name=\'wifi\' item-start style="color: #d03e84"></ion-icon>\n    Connexió ON\n    <ion-badge item-end>9</ion-badge>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n    Followers\n    <ion-badge item-end>260k</ion-badge>\n  </ion-item>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/detalls/detalls.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetallsPage);
    return DetallsPage;
}());

//# sourceMappingURL=detalls.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_baseDadesService__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component que mostra el funcionament de SQLite
 * ionic cordova plugin add cordova-sqlite-storage
 * npm install --save @ionic-native/sqlite
 * @author sergi.grau@fje.edu
 * @version 2.0 25.03.2019
 *
 */
var BaseDadesPage = /** @class */ (function () {
    function BaseDadesPage(alertCtrl, navCtrl, baseDadesService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.baseDadesService = baseDadesService;
        this.tasques = [];
    }
    BaseDadesPage.prototype.ionViewDidLoad = function () {
        this.obtenirTotesTasques();
    };
    BaseDadesPage.prototype.esborrarTasca = function (tasca, index) {
        var _this = this;
        this.baseDadesService.esborrar(tasca)
            .then(function (response) {
            console.log(response);
            _this.tasques.splice(index, 1);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    BaseDadesPage.prototype.obtenirTotesTasques = function () {
        var _this = this;
        this.baseDadesService.recuperarTots()
            .then(function (tasques) {
            console.log(tasques);
            _this.tasques = tasques;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    BaseDadesPage.prototype.openAlertNewTask = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Crear tasca',
            message: 'Escriu el nom de la tasca',
            inputs: [
                {
                    name: 'titol',
                    placeholder: 'títol',
                }
            ],
            buttons: [
                {
                    text: 'Cancel·lar',
                    handler: function () {
                        console.log('Cancel·lar');
                    }
                },
                {
                    text: 'Crear',
                    handler: function (data) {
                        data.completada = false;
                        _this.baseDadesService.crear(data)
                            .then(function (response) {
                            _this.tasques.unshift(data);
                        })
                            .catch(function (error) {
                            console.error(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    BaseDadesPage.prototype.actualitzarTasca = function (tasca, index) {
        var _this = this;
        tasca = Object.assign({}, tasca);
        tasca.completada = !tasca.completada;
        this.baseDadesService.actualitzar(tasca)
            .then(function (response) {
            _this.tasques[index] = tasca;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    BaseDadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'baseDades',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/baseDades/baseDades.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tasques</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openAlertNewTask()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngIf="tasques.length == 0">\n      Cap\n    </ion-item>\n    <ion-item-sliding #sliding *ngFor="let tasca of tasques; let i = index">\n      <ion-item >\n        <ion-label>{{ tasca.titol }}</ion-label>\n        <ion-checkbox (ionChange)="actualitzarTasca( tasca, i )" [checked]="tasca.completada"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side="right" icon-left>\n        <button ion-button color="danger" (click)="esborrarTasca(tasca, i)">\n          <ion-icon name="trash"></ion-icon>\n          Esborra\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/baseDades/baseDades.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_baseDadesService__["a" /* BaseDadesService */]])
    ], BaseDadesPage);
    return BaseDadesPage;
}());

//# sourceMappingURL=baseDades.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component que mostra el funcionament de la Camera
 * ionic cordova plugin add cordova-plugin-camera
 * npm install --save @ionic-native/camera
 * ionic cordova plugin add cordova-plugin-android-permissions
 * npm install --save @ionic-native/android-permissions
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
var CameraPage = /** @class */ (function () {
    function CameraPage(camera, androidPermissions) {
        var _this = this;
        this.camera = camera;
        this.androidPermissions = androidPermissions;
        this.retallar = prompt("Quantes caselles vols: 3x3 o 4x4?");
        this.PUZZLE_DIFFICULTY = this.retallar;
        this.PUZZLE_HOVER_TINT = '#009900';
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) { return console.log('Té premís?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    }
    CameraPage.prototype.ferFoto = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: screen.width - 50,
            targetHeight: 350,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            init(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'camera',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/camera/camera.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>llista d\'items</ion-title>\n  </ion-navbar>\n</ion-header>\n<\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      Usant la camera\n      <button (click)="ferFoto()">fes foto</button>\n\n\n      <canvas draggable id="canvas" width="800" height="532" style="border: 1px solid black;"></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/camera/camera.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _b || Object])
    ], CameraPage);
    return CameraPage;
    var _a, _b;
}());

var retallar = 3;
var PUZZLE_DIFFICULTY = retallar;
var PUZZLE_HOVER_TINT = '#009900';
var _stage;
var _canvas;
var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;
var _mouse;
function init(imatge) {
    _img = new Image();
    _img.addEventListener('load', onImage, false);
    _img.src = imatge;
}
function onImage(e) {
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY);
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY);
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
}
function setCanvas() {
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _canvas.width = _puzzleWidth;
    _canvas.height = _puzzleHeight;
    _canvas.style.border = "1px solid black";
}
function initPuzzle() {
    _pieces = [];
    _mouse = { x: 0, y: 0 };
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
    createTitle("Click to Start Puzzle");
    buildPieces();
}
function createTitle(msg) {
    _stage.fillStyle = "#000000";
    _stage.globalAlpha = .4;
    _stage.fillRect(100, _puzzleHeight - 40, _puzzleWidth - 200, 40);
    _stage.fillStyle = "#FFFFFF";
    _stage.globalAlpha = 1;
    _stage.textAlign = "center";
    _stage.textBaseline = "middle";
    _stage.font = "60px Arial";
    _stage.fillText(msg, _puzzleWidth / 2, _puzzleHeight - 20);
}
function buildPieces() {
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0; i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY; i++) {
        piece = {};
        piece.sx = xPos;
        piece.sy = yPos;
        _pieces.push(piece);
        xPos += _pieceWidth;
        if (xPos >= _puzzleWidth) {
            xPos = 0;
            yPos += _pieceHeight;
        }
    }
    document.ondragstart = shufflePuzzle;
}
function shufflePuzzle() {
    console.log("click");
    _pieces = shuffleArray(_pieces);
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
        _stage.strokeRect(xPos, yPos, _pieceWidth, _pieceHeight);
        xPos += _pieceWidth;
        if (xPos >= _puzzleWidth) {
            xPos = 0;
            yPos += _pieceHeight;
        }
    }
    var div = document.createElement("div");
    div.setAttribute("id", "divImg");
    var insertar = document.getElementById("time");
    document.body.insertBefore(div, insertar);
    var img = document.createElement("img");
    img.setAttribute("src", _img.src);
    document.getElementById("divImg").appendChild(img);
    document.ondragstart = onPuzzleClick;
}
function onPuzzleClick(e) {
    if (e.layerX || e.layerX == 0) {
        _mouse.x = e.layerX - _canvas.offsetLeft;
        _mouse.y = e.layerY - _canvas.offsetTop;
    }
    else if (e.offsetX || e.offsetX == 0) {
        _mouse.x = e.offsetX - _canvas.offsetLeft;
        _mouse.y = e.offsetY - _canvas.offsetTop;
    }
    _currentPiece = checkPieceClicked();
    if (_currentPiece != null) {
        _stage.clearRect(_currentPiece.xPos, _currentPiece.yPos, _pieceWidth, _pieceHeight);
        _stage.save();
        _stage.globalAlpha = .9;
        _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
        _stage.restore();
        document.ondrag = updatePuzzle;
        document.ondragend = pieceDropped;
    }
}
function checkPieceClicked() {
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {
            //PIECE NOT HIT
        }
        else {
            return piece;
        }
    }
    return null;
}
function updatePuzzle(e) {
    _currentDropPiece = null;
    if (e.layerX || e.layerX == 0) {
        _mouse.x = e.layerX - _canvas.offsetLeft;
        _mouse.y = e.layerY - _canvas.offsetTop;
    }
    else if (e.offsetX || e.offsetX == 0) {
        _mouse.x = e.offsetX - _canvas.offsetLeft;
        _mouse.y = e.offsetY - _canvas.offsetTop;
    }
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        if (piece == _currentPiece) {
            continue;
        }
        _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        if (_currentDropPiece == null) {
            if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {
                //NOT OVER
            }
            else {
                _currentDropPiece = piece;
                _stage.save();
                _stage.globalAlpha = .4;
                _stage.fillStyle = PUZZLE_HOVER_TINT;
                _stage.fillRect(_currentDropPiece.xPos, _currentDropPiece.yPos, _pieceWidth, _pieceHeight);
                _stage.restore();
            }
        }
    }
    _stage.save();
    _stage.globalAlpha = .6;
    _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
    _stage.restore();
    _stage.strokeRect(_mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
}
function pieceDropped(e) {
    document.ontouchmove = null;
    document.ontouchend = null;
    if (_currentDropPiece != null) {
        var tmp = { xPos: _currentPiece.xPos, yPos: _currentPiece.yPos };
        _currentPiece.xPos = _currentDropPiece.xPos;
        _currentPiece.yPos = _currentDropPiece.yPos;
        _currentDropPiece.xPos = tmp.xPos;
        _currentDropPiece.yPos = tmp.yPos;
    }
    resetPuzzleAndCheckWin();
}
function resetPuzzleAndCheckWin() {
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var gameWin = true;
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
            gameWin = false;
        }
    }
    if (gameWin) {
        setTimeout(gameOver, 500);
    }
}
function gameOver() {
    document.ontouchstart = null;
    document.ontouchmove = null;
    document.ontouchend = null;
    createTitle("PUZZLE FINISHED");
    // initPuzzle();
    var node = document.createElement("form");
    node.setAttribute("action", "./Results.html");
    node.setAttribute("id", "formButton");
    var insertar = document.getElementById("time");
    document.body.insertBefore(node, insertar);
    var button = document.createElement("button");
    button.setAttribute("onclick", "addUsername();");
    var textButton = document.createTextNode("Show Results");
    button.appendChild(textButton);
    document.getElementById("formButton").appendChild(button);
}
function shuffleArray(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
}
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component que mostra l'accés als a la geolocaliztació
 * ionic cordova plugin add cordova-plugin-geolocation
 * npm install --save @ionic-native/geolocation
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
var GeoPage = /** @class */ (function () {
    function GeoPage(navCtrl, navParams, geolocation, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
    }
    GeoPage.prototype.ionViewDidLoad = function () {
        this.obtenirLatLong();
    };
    GeoPage.prototype.obtenirLatLong = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            var geolocalitzacio = 'lat ' + res.coords.latitude + ' lang ' + res.coords.longitude;
            var toast = _this.toastCtrl.create({
                message: geolocalitzacio,
                duration: 3000
            });
            toast.present();
        }).catch(function (error) {
            console.log('Error obtetint localització', error);
        });
    };
    GeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'Geopage',template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/geolocalitzacio/geolocalitzacio.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>geolocalitzacio</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h2 class="slide-title">geolocalitzacio</h2>\n</ion-content>\n\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/pagines/geolocalitzacio/geolocalitzacio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], GeoPage);
    return GeoPage;
}());

//# sourceMappingURL=geolocalitzacio.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagines_inici_inici__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagines_detalls_detalls__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagines_llista_llista__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagines_baseDades_baseDades__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagines_camera_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagines_geolocalitzacio_geolocalitzacio__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_baseDadesService__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pagines_inici_inici__["a" /* IonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pagines_detalls_detalls__["a" /* DetallsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pagines_llista_llista__["a" /* LlistaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pagines_baseDades_baseDades__["a" /* BaseDadesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pagines_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_9__pagines_geolocalitzacio_geolocalitzacio__["a" /* GeoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pagines_inici_inici__["a" /* IonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pagines_detalls_detalls__["a" /* DetallsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pagines_llista_llista__["a" /* LlistaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pagines_baseDades_baseDades__["a" /* BaseDadesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pagines_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_9__pagines_geolocalitzacio_geolocalitzacio__["a" /* GeoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_10__providers_baseDadesService__["a" /* BaseDadesService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagines_inici_inici__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagines_llista_llista__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagines_baseDades_baseDades__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagines_camera_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_baseDadesService__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pagines_geolocalitzacio_geolocalitzacio__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Aplicació amb Ionic
  author sergi.grau@fje.edu
  version 1.0 28.3.2018
 */
var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, baseDadesService, sqlite) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.baseDadesService = baseDadesService;
        this.sqlite = sqlite;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pagines_inici_inici__["a" /* IonicPage */];
        this.initializeApp();
        this.pagines = [
            { titol: 'Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pagines_inici_inici__["a" /* IonicPage */] },
            { titol: 'Llista / Detall', component: __WEBPACK_IMPORTED_MODULE_3__pagines_llista_llista__["a" /* LlistaPage */] },
            { titol: 'BaseDades', component: __WEBPACK_IMPORTED_MODULE_4__pagines_baseDades_baseDades__["a" /* BaseDadesPage */] },
            { titol: 'Camera', component: __WEBPACK_IMPORTED_MODULE_5__pagines_camera_camera__["a" /* CameraPage */] },
            { titol: 'Geolocalitzacio', component: __WEBPACK_IMPORTED_MODULE_10__pagines_geolocalitzacio_geolocalitzacio__["a" /* GeoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.createDatabase();
        });
    };
    MyApp.prototype.obrirPagina = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.createDatabase = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default' // the location field is required
        })
            .then(function (db) {
            _this.baseDadesService.assignarBD(db);
            return _this.baseDadesService.createTable();
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>pàgines</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pagines" (click)="obrirPagina(p)">\n        {{p.titol}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/ferran/Documents/IONIC/DAWM14UF2-5-Ionic-material/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_baseDadesService__["a" /* BaseDadesService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDadesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseDadesService = /** @class */ (function () {
    function BaseDadesService() {
        // public properties
        this.db = null;
    }
    // public methods
    BaseDadesService.prototype.assignarBD = function (db) {
        if (this.db === null) {
            this.db = db;
        }
    };
    BaseDadesService.prototype.crear = function (tasca) {
        var sql = 'INSERT INTO tasques(titol, completada) VALUES(?,?)';
        return this.db.executeSql(sql, [tasca.titol, tasca.completada]);
    };
    BaseDadesService.prototype.createTable = function () {
        var sql = 'CREATE TABLE IF NOT EXISTS tasques(id INTEGER PRIMARY KEY AUTOINCREMENT, titol TEXT, completada INTEGER)';
        return this.db.executeSql(sql, []);
    };
    BaseDadesService.prototype.esborrar = function (task) {
        var sql = 'DELETE FROM tasques WHERE id=?';
        return this.db.executeSql(sql, [task.id]);
    };
    BaseDadesService.prototype.recuperarTots = function () {
        var sql = 'SELECT * FROM tasques';
        return this.db.executeSql(sql, [])
            .then(function (response) {
            var tasques = [];
            for (var index = 0; index < response.rows.length; index++) {
                tasques.push(response.rows.item(index));
            }
            return Promise.resolve(tasques);
        })
            .catch(function (error) { return Promise.reject(error); });
    };
    BaseDadesService.prototype.actualitzar = function (tasca) {
        var sql = 'UPDATE tasques SET titol=?, completada=? WHERE id=?';
        return this.db.executeSql(sql, [tasca.titol, tasca.completada, tasca.id]);
    };
    BaseDadesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseDadesService);
    return BaseDadesService;
}());

//# sourceMappingURL=baseDadesService.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map