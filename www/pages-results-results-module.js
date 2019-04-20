(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-results-results-module"],{

/***/ "./src/app/pages/results/results.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/results/results.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-button (click)=\"saveData()\">Add</ion-button><br><br><br><br>\n  <ion-item-sliding #sliding *ngFor=\"let tasca of tasques; let i = index\">\n    <ion-item >\n      <ion-label>{{ tasca.titol }}</ion-label>\n    </ion-item>\n  </ion-item-sliding>\n</ion-header>\n<footerBar ></footerBar>\n\n"

/***/ }),

/***/ "./src/app/pages/results/results.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/results/results.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/results/results.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/results/results.component.ts ***!
  \****************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");




var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.db = null;
        this.tasques = [];
        this.data = { 'titol': String, 'completada': Boolean };
    }
    ResultsComponent.prototype.saveData = function () {
        var _this = this;
        this.data.titol = 'Ferran';
        this.data.completada = false;
        this.tasques.push(this.data);
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO tasques VALUES(?,?)', [_this.data.titol, _this.data.completada])
                .then(function (res) {
                console.log(res);
            })
                .catch(function (e) {
                console.log(e);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'baseDades',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/pages/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/pages/results/results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/pages/results/results.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/results/results.module.ts ***!
  \*************************************************/
/*! exports provided: ResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsModule", function() { return ResultsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results.component */ "./src/app/pages/results/results.component.ts");









var routes = [
    {
        path: '',
        component: _results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"]
    }
];
var ResultsModule = /** @class */ (function () {
    function ResultsModule() {
    }
    ResultsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"]]
        })
    ], ResultsModule);
    return ResultsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-results-results-module.js.map