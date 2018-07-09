(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-container [ngSwitch]=\"nowPage\">\n  <app-home *ngSwitchCase=\"1\" (showChapterEvent)=\"showChapter($event)\"></app-home>\n  <app-read *ngSwitchCase=\"2\" [nowChapter]=\"nowChapter\" [imgNum]=\"imgNum\" [chapterArray]=\"chapter\" (turnBackEvent)=\"turnBack()\"></app-read>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.nowChapterPage = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.chapter = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]];
        this.nowPage = 1;
        this.nowChapter = 1;
        this.arrayChapter = this.nowChapter - 1;
        this.imgNum = this.chapter[this.arrayChapter][this.nowChapterPage];
    };
    AppComponent.prototype.showChapter = function (num) {
        this.nowChapter = num;
        this.arrayChapter = this.nowChapter - 1;
        this.imgNum = this.chapter[this.arrayChapter][this.nowChapterPage];
        this.nowPage = 2;
    };
    AppComponent.prototype.turnBack = function () {
        this.nowPage = 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "nowChapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "imgNum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AppComponent.prototype, "chapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "nowPage", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _read_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read/read.component */ "./src/app/read/read.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _read_read_component__WEBPACK_IMPORTED_MODULE_3__["ReadComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container introduction homePage\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-lg-6 col-12 cover\" style=\"background-image: url(image/comic-cover.png)\"></div>\n    <div class=\"col-lg-6 col-12\">\n      <div class=\"title\">\n        <span>MY HEXSCHOOL</span>\n      </div>\n      <div class=\"row no-gutters content\">\n        <div class=\"col-lg-3 col-12 fieldName\">\n          <span>Genres</span>\n        </div>\n        <div class=\"col-lg-9 col-12 fieldContent\">\n          <span>Fusce/vehicula/dolor</span>\n        </div>\n        <div class=\"col-lg-3 col-12 fieldName\">\n          <span>Author</span>\n        </div>\n        <div class=\"col-lg-9 col-12 fieldContent\">\n          <span>Namae Shiranai</span>\n        </div>\n        <div class=\"col-lg-3 col-12 fieldName\">\n          <span>Status</span>\n        </div>\n        <div class=\"col-lg-9 col-12 fieldContent\">\n          <span>Ongoing</span>\n        </div>\n        <div class=\"col-lg-3 col-12 fieldName\">\n          <span>Rate</span>\n        </div>\n        <div class=\"col-lg-9 col-12 fieldContent\">\n          <span>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"far fa-star\"></i>\n            <i class=\"far fa-star\"></i>\n            <i class=\"far fa-star\"></i>\n            <i class=\"far fa-star\"></i>\n          </span>\n        </div>\n        <div class=\"col-12 fieldName\">\n          <span>Summary</span>\n        </div>\n        <div class=\"col-12 fieldContent\">\n          <span>\n            If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. Therefore, I say,\n            I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with\n            a plurality of other mortals.\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chapters\">\n      <div class=\"title-block\">\n        <span>All Chapters</span>\n      </div>\n      <div class=\"row no-gutters item-block\">\n        <div class=\"col-12 item\">\n          <a href=\"#\" (click)=\"selectChapter(1)\">Chapter 1: The F2E Challenge Start!</a>\n        </div>\n        <div class=\"col-12 item\"><a href=\"#\" (click)=\"selectChapter(2)\"  class=\"highNews\">Chapter 2: Todo List is Going Crazy! </a></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showChapterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.selectChapter = function (num) {
        this.showChapterEvent.emit(num);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "showChapterEvent", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/read/read.component.css":
/*!*****************************************!*\
  !*** ./src/app/read/read.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/read/read.component.html":
/*!******************************************!*\
  !*** ./src/app/read/read.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container readPage\">\n\n  <div class=\"row read\">\n    <div class=\"col-lg-3 col-12 order-lg-1 order-2 read-title\">\n      <a href=\"#\" (click)=\"turnBack()\">My Hexschool</a>\n    </div>\n    <div class=\"col-lg-3 col-12 order-lg-2 order-3\">\n      <div class=\"black-select\" style=\"width:200px;\">\n        <select id=\"chapter\" (change)=\"changeChapter($event)\">\n          <option value=\"0\">Select Chapter:</option>\n          <option value=\"1\">Chapter 1</option>\n          <option value=\"2\">Chapter 2</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-12 order-lg-3 order-4\">\n      <div class=\"black-select\" style=\"width:200px;\">\n        <select id=\"page\" (change)=\"changeChapterPage($event)\">\n          <option value=\"0\">Select Page:</option>\n          <option value=\"1\">Page 1</option>\n          <option value=\"2\">Page 2</option>\n          <option value=\"3\">Page 3</option>\n          <option value=\"4\">Page 4</option>\n          <option value=\"5\">Page 5</option>\n          <option value=\"6\">Page 6</option>\n          <option value=\"7\">Page 7</option>\n          <option value=\"8\">Page 8</option>\n          <option value=\"9\">Page 9</option>\n          <option value=\"10\">Page 10</option>\n          <option value=\"11\">Page 11</option>\n          <option value=\"12\">Page 12</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-12 order-lg-4 order-1\">\n      <div class=\"row no-gutters changeRight2Left\">\n        <div class=\"col-8\">\n          <i class=\"far fa-lightbulb fa-2x\"></i>\n          <label class=\"switch\">\n            <input type=\"checkbox\">\n            <span class=\"slider\"></span>\n          </label>\n          <i class=\"far fa-moon fa-2x\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row picture no-gutters\">\n    <div class=\"col-1 row pre-block no-gutters\">\n      <a href=\"#\" class=\"pre  align-items-center\" (click)=\"prePage()\">\n        <div class=\"col text-center\">\n          <i class=\"fas fa-chevron-left i-size\"></i>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-10 text-center\">\n      <img [src]=\"imgSrc\" alt=\"page1\">\n    </div>\n\n    <div class=\"col-1 row next-block  no-gutters\">\n      <a href=\"#\" class=\"next align-items-center\" (click)=\"nextPage()\">\n        <div class=\"col text-center\">\n          <i class=\"fas fa-chevron-right i-size\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"row no-gutters scrollbar\">\n    <div class=\"col\">\n      <div class=\"thumb\">\n        <div [class.thumb-selected]=\"TestSelected(1)\">\n          <span>1</span>\n          <a href=\"#\" (click)=\"turnPick(1)\">\n            <img src=\"./image/storyboard-1.png\" alt=\"1\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(2)\">\n          <span>2</span>\n          <a href=\"#\" (click)=\"turnPick(2)\">\n          <img src=\"./image/storyboard-2.png\" alt=\"2\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(3)\">\n          <span>3</span>\n          <a href=\"#\" (click)=\"turnPick(3)\"> <img src=\"./image/storyboard-3.png\" alt=\"3\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(4)\">\n          <span>4</span>\n          <a href=\"#\" (click)=\"turnPick(4)\"> <img src=\"./image/storyboard-4.png\" alt=\"4\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(5)\">\n          <span>5</span>\n          <a href=\"#\" (click)=\"turnPick(5)\"> <img src=\"./image/storyboard-5.png\" alt=\"5\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(6)\">\n          <span>6</span>\n          <a href=\"#\" (click)=\"turnPick(6)\"> <img src=\"./image/storyboard-6.png\" alt=\"6\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(7)\">\n          <span>7</span>\n          <a href=\"#\" (click)=\"turnPick(7)\"> <img src=\"./image/storyboard-7.png\" alt=\"7\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(8)\">\n          <span>8</span>\n          <a href=\"#\" (click)=\"turnPick(8)\"> <img src=\"./image/storyboard-8.png\" alt=\"8\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(9)\">\n          <span>9</span>\n          <a href=\"#\" (click)=\"turnPick(9)\"> <img src=\"./image/storyboard-9.png\" alt=\"9\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(10)\">\n          <span>10</span>\n          <a href=\"#\" (click)=\"turnPick(10)\">\n            <img src=\"./image/storyboard-10.png\" alt=\"10\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(11)\">\n          <span>11</span>\n          <a href=\"#\" (click)=\"turnPick(11)\">\n            <img src=\"./image/storyboard-11.png\" alt=\"11\">\n          </a>\n        </div>\n        <div [class.thumb-selected]=\"TestSelected(12)\">\n          <span>12</span>\n          <a href=\"#\" (click)=\"turnPick(12)\">\n            <img src=\"./image/storyboard-12.png\" alt=\"12\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/read/read.component.ts":
/*!****************************************!*\
  !*** ./src/app/read/read.component.ts ***!
  \****************************************/
/*! exports provided: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadComponent", function() { return ReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadComponent = /** @class */ (function () {
    function ReadComponent() {
        this.turnBackEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReadComponent.prototype.ngOnInit = function () {
        this.arrayChapterPage = this.chapterArray[Number(this.nowChapter) - 1];
        this.chapterNum = 1;
        this.pageNum = 0;
        this.chapterString = String(this.nowChapter);
        this.pageString = String(this.pageNum);
        document.getElementById('chapter').value = this.chapterString;
        document.getElementById('page').value = '1';
        this.changeImg();
    };
    ReadComponent.prototype.turnBack = function () {
        this.turnBackEvent.emit();
    };
    ReadComponent.prototype.changeChapter = function ($event) {
        if ($event.target.value === '0') {
            alert('請選擇章數');
        }
        else {
            this.changeImg();
        }
    };
    ReadComponent.prototype.changeChapterPage = function ($event) {
        if ($event.target.value === '0') {
            alert('請選擇頁數');
        }
        else {
            this.changeImg();
        }
    };
    ReadComponent.prototype.prePage = function () {
        var page = document.getElementById('page');
        if (page.value === '1') {
            alert('第一頁');
        }
        else {
            page.value = String(Number(page.value) - 1);
            this.changeImg();
        }
    };
    ReadComponent.prototype.nextPage = function () {
        var page = document.getElementById('page');
        if (page.value === String(page.length - 1)) {
            alert('最後一頁');
        }
        else {
            page.value = String(Number(page.value) + 1);
        }
        this.changeImg();
    };
    ReadComponent.prototype.turnPick = function (num) {
        var page = document.getElementById('page');
        page.value = String(num);
        this.changeImg();
    };
    ReadComponent.prototype.changeImg = function () {
        // 顯示下拉選單的值
        this.dropdownC = document.getElementById('chapter').value;
        this.dropdownP = document.getElementById('page').value;
        // 陣列的編號
        this.numC = Number(document.getElementById('chapter').value) - 1;
        this.numP = Number(document.getElementById('page').value) - 1;
        // 圖片陣列取得的值
        this.imgNum = this.chapterArray[this.numC][this.numP];
        this.imgSrc = './image/storyboard-' + this.imgNum + '.png';
    };
    ReadComponent.prototype.TestSelected = function (num) {
        if (num === this.numP + 1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReadComponent.prototype, "nowChapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReadComponent.prototype, "imgNum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReadComponent.prototype, "chapterArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReadComponent.prototype, "turnBackEvent", void 0);
    ReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-read',
            template: __webpack_require__(/*! ./read.component.html */ "./src/app/read/read.component.html"),
            styles: [__webpack_require__(/*! ./read.component.css */ "./src/app/read/read.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ReadComponent);
    return ReadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\commic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map