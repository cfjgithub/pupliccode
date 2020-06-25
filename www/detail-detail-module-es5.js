function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-icon style=\"float:left;width:50px;height:30px;color:rgb(red, green, blue)\" name=\"ios-arrow-back\" (click)='canGoBack()'></ion-icon>\n    <ion-title class=\"ion-text-center\">\n      {{data}}\n    </ion-title>  \n  </ion-toolbar>\n</ion-header>\n\n   <ion-content class=\"padding\" scroll=true  fullscreen=true > \n  \n     <div style=\"padding: 1%;\" [innerHtml]=content ></div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs >  \n    <ion-tab-bar slot=\"bottom\" >  \n  \n      <ion-tab-button tab=\"about\">  \n        <ion-icon  class=\"icon-sc\"  name=\"\" ></ion-icon>  \n        <ion-label>收藏</ion-label>  \n      </ion-tab-button  >  \n  \n      <ion-tab-button tab=\"my\">   \n        <ion-icon class=\"icon-fx\" ></ion-icon>  \n        <ion-label>分享</ion-label>  \n      </ion-tab-button>   \n  \n      <ion-tab-button  >   \n        <ion-icon  class=\"icon-dz\" ></ion-icon>  \n        <ion-label>点赞</ion-label>  \n      </ion-tab-button>   \n  \n  </ion-tab-bar>  \n  \n  </ion-tabs>  \n</ion-toolbar>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/detail/detail.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.module.ts ***!
    \*****************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DETAILPAGE"]
      }])],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DETAILPAGE"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/detail/detail.page.ts":
  /*!***************************************!*\
    !*** ./src/app/detail/detail.page.ts ***!
    \***************************************/

  /*! exports provided: DETAILPAGE */

  /***/
  function srcAppDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DETAILPAGE", function () {
      return DETAILPAGE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DETAILPAGE =
    /*#__PURE__*/
    function () {
      function DETAILPAGE(activeRoute, nav, httpClient) {
        _classCallCheck(this, DETAILPAGE);

        this.activeRoute = activeRoute;
        this.nav = nav;
        this.httpClient = httpClient;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'content-Type': 'application/json'
          })
        };
        this.content = "";
      } // 返回按钮


      _createClass(DETAILPAGE, [{
        key: "canGoBack",
        value: function canGoBack() {
          this.nav.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activeRoute.queryParams.subscribe(function (params) {
            _this.data = params.title;

            _this.httpClient.get("http://后端接口地址:8080/bk/pages?key=" + _this.data, _this.httpOptions).subscribe(function (res) {
              console.log(res);
              _this.content = res; //JSON.parse(res.toString()).data.content
            });
          });
        }
      }]);

      return DETAILPAGE;
    }();

    DETAILPAGE.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    DETAILPAGE = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/detail/detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], DETAILPAGE);
    /***/
  }
}]);
//# sourceMappingURL=detail-detail-module-es5.js.map