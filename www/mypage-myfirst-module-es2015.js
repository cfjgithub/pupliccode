(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mypage-myfirst-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypage/myfirst.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mypage/myfirst.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header no-border >\n  <ion-toolbar  color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-segment   style=\"font-size: 15px;\"\n    [(ngModel)]=\"segment\" mode=\"md\"\n    (ionChange)=\"segmentChanged($event)\" scrollable=true  #cateorySegment  \n    >\n     \n    <ion-segment-button\n    mode=\"md\"\n    *ngFor=\"let category of categories;let i = index\"   \n       (click)=\"doOnClick(category.key)\" \n       [value]=\"i\" \n  \n       >\n        {{category.name}}\n      </ion-segment-button\n      >\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n  \n  <!--\n\n <ion-tabs  selectedIndex=\"0\"  #cateoryTabs >  \n    \n    <ion-tab-bar slot=\"top\" >  \n      <ion-tab-button  \n      *ngFor=\"let category of categories\"\n      (click)=\"doOnClick(category.key,$event.target)\" >  \n        <ion-label >{{category.name}}</ion-label>  \n      </ion-tab-button\n      >  \n    </ion-tab-bar>  \n  </ion-tabs>  \n  -->\n \n<ion-content (swipe)=\"swipeEvnet($event)\">\n<div [ngSwitch]=\"segment\">\n  <ion-card   *ngFor=\"let title of titles\" (click)=\"goDetail(title)\">  \n    <ion-card-header>  \n      <ion-grid>\n        <ion-row>\n\n          <ion-col  size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size=\"12\" >\n            <ion-card-subtitle>\n              <ion-text color=\"primary\" >\n             发布时间：5天前\n              </ion-text>\n              <ion-text color=\"primary\" >\n                作者：张三\n                 </ion-text>\n            </ion-card-subtitle>\n            <img src=\"../../assets/shapes.svg\" />\n          </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n          <ion-card-title   color=\"primary\" style=\"font-size: medium;\">{{title}}</ion-card-title>  \n\n          <ion-card-subtitle>\n            <ion-text color=\"primary\">\n             收藏:333\n            </ion-text>\n            <ion-text color=\"primary\">\n               评论：55\n             </ion-text>\n             <ion-text color=\"primary\">\n              点赞：55\n            </ion-text>\n          </ion-card-subtitle>\n        </ion-col>\n        </ion-row>\n     \n        \n      </ion-grid>\n     \n    \n    \n    </ion-card-header> </ion-card>  \n</div>\n  </ion-content>\n  <style>\n    ion-segment {\n      padding: 5px;\n    }\n  </style>\n");

/***/ }),

/***/ "./src/app/mypage/myfirst.module.ts":
/*!******************************************!*\
  !*** ./src/app/mypage/myfirst.module.ts ***!
  \******************************************/
/*! exports provided: myfirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myfirstModule", function() { return myfirstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _myfirst_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myfirst.page */ "./src/app/mypage/myfirst.page.ts");








const routes = [
    {
        path: '',
        component: _myfirst_page__WEBPACK_IMPORTED_MODULE_7__["myfirstcomponent"]
    },
];
let myfirstModule = class myfirstModule {
    constructor() { }
};
myfirstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_myfirst_page__WEBPACK_IMPORTED_MODULE_7__["myfirstcomponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], myfirstModule);



/***/ }),

/***/ "./src/app/mypage/myfirst.page.ts":
/*!****************************************!*\
  !*** ./src/app/mypage/myfirst.page.ts ***!
  \****************************************/
/*! exports provided: myfirstcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myfirstcomponent", function() { return myfirstcomponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let myfirstcomponent = class myfirstcomponent {
    constructor(httpClient, nav, router, modalController) {
        this.httpClient = httpClient;
        this.nav = nav;
        this.router = router;
        this.modalController = modalController;
        this.segment = 0;
        this.messages = [
            { 'id': 1 },
            { 'id': 2 },
        ];
        this.categories = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'content-Type': 'application/json' })
        };
        this.titles = [];
    }
    // 返回按钮
    canGoBack() {
        this.nav.back();
    }
    swipeEvnet(event) {
        //向左滑
        if (event.direction == 2) {
            if (this.titles.indexOf(this.segment) < 3) {
                this.segment = this.titles[this.titles.indexOf(this.segment) + 1];
            }
            //向右滑}}
            if (event.direction == 4) {
                if (this.titles.indexOf(this.segment) > 0) {
                    this.segment = this.titles[this.titles.indexOf(this.segment) - 1];
                }
            }
        }
    }
    goDetail(title) {
        console.log(title);
        this.router.navigate(['/detail'], {
            queryParams: {
                title: title
            }
        });
    }
    segmentChanged(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.cateorySegment.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.segment = yield this.cateorySegment.getActiveIndex();
        });
    }
    ngOnInit() {
        this.httpClient.
            get("http://后端接口地址:8080/bk/categories", this.httpOptions).subscribe(res => {
            console.log(res);
            this.categories = res;
            console.log(this.categories);
            this.titles = JSON.parse(this.categories.find(p => p.key === 'general').list);
        });
        this.segment = 1;
    }
    ionViewDidLoad() {
        //this.cateoryTabs.select(1, { animate: false });
    }
    ngAfterViewInit() {
    }
    doOnClick(key) {
        //  console.log('====='+this.categories.find(p=>p.key===key));
        this.titles = JSON.parse(this.categories.find(p => p.key === key).list);
        //  console.log(this.titles)
    }
};
myfirstcomponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("cateorySegment", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], myfirstcomponent.prototype, "cateorySegment", void 0);
myfirstcomponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-first',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myfirst.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypage/myfirst.page.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], myfirstcomponent);



/***/ })

}]);
//# sourceMappingURL=mypage-myfirst-module-es2015.js.map