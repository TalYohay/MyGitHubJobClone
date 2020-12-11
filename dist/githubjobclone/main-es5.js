function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showallpositions/showallpositions.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showallpositions/showallpositions.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowallpositionsShowallpositionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"container my-4\">\n    <section>\n        <h1>Github Jobs</h1>\n        <div *ngIf = \"allPositions\">\n        \n            \n            <form class=\"form-inline align-items-end ml-left mb-4\">\n              <div class = form-group>\n            <label>\n            <span class = \"mb-1\">Job Description</span> \n              <input class=\"form-control mr-3\" #inputSearch type=\"text\" placeholder=\"Filter by title, companies, expertise\"  [(ngModel)]=\"DescSearch\" [ngModelOptions]=\"{standalone: true}\"  >\n            </label>\n          </div>\n          <div class = form-group>\n              <label>\n                <span class = \"mb-1\">Location</span> \n                <input class=\"form-control mr-3\" #inputSearch type=\"text\" placeholder=\"Filter by location\"  [(ngModel)]=\"locationSearch\"  [ngModelOptions]=\"{standalone: true}\" >\n            </label>\n          </div>\n          <div class = form-group>\n            <label>\n                <span class = \"fulltime\">Full Time Only</span> \n                <input class=\"form-control mb-2\" type=\"checkbox\" [(ngModel)]=\"fullTimeSearch\"  [ngModelOptions]=\"{standalone: true}\" >\n            </label>\n          </div>\n            </form>\n          \n\n            \n         \n        <div *ngFor = \"let position of allPositions | searchFilter : DescSearch:locationSearch:fullTimeSearch | paginate: { itemsPerPage:50, currentPage: pageActual};\">\n              \n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class = \"row\">\n               <div class = \"col-md-10\">     \n              <h5 class=\"card-title\">{{position.title}} - <a href = \"{{position.company_url}}\" target=\"_blank\"><span class = \"text-muted font-weight-light\">{{position.company}}</span> </a></h5> \n              <p class=\"card-subtitle text-muted mb-2\">{{position.created_at | date: short }}</p>\n              <p class=\"card-text badge badge-secondary mr-2\">{{position.type}}</p>\n              <p class=\"card-text badge badge-secondary\">{{position.location}}</p>\n              <p [innerHTML] = position.how_to_apply style = \"word-break:  break-all\"> </p>\n              \n              <p>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"position.isCollapsed = !position.isCollapsed\"\n                       >\n                  <div *ngIf = \"!position.isCollapsed\">\n                    View Details\n                  </div>\n                        <div *ngIf = \"position.isCollapsed\">\n                    Hide Details\n                    </div>\n                </button>\n              </p>\n              <div  *ngIf=\"position.isCollapsed\">\n                <p [innerHTML]  =  position.description></p>\n              </div>\n              \n            </div>\n            <div class = \"col-md-2\">\n              <img class = \" d-none d-md-block \" height = \"70\" width = \"100\" alt = \"{{position.company}}\" src = \"{{position.company_logo}}\" />\n            </div>\n        </div>\n    </div>\n          </div>\n        </div>\n        <div class =\"row justify-content-center align-items-center\">\n          <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n         </div>\n    </div>\n\n    <div *ngIf = \"!allPositions\">\n        <h1> Loading Jobs...</h1>\n    </div>\n\n</section>\n</div>\n    \n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _showallpositions_showallpositions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./showallpositions/showallpositions.component */
    "./src/app/showallpositions/showallpositions.component.ts");

    var routes = [{
      path: '',
      component: _showallpositions_showallpositions_component__WEBPACK_IMPORTED_MODULE_3__["ShowallpositionsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'githubjobclone';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _showallpositions_showallpositions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./showallpositions/showallpositions.component */
    "./src/app/showallpositions/showallpositions.component.ts");
    /* harmony import */


    var _services_positionservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/positionservice.service */
    "./src/app/services/positionservice.service.ts");
    /* harmony import */


    var _search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./search.pipe */
    "./src/app/search.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _showallpositions_showallpositions_component__WEBPACK_IMPORTED_MODULE_7__["ShowallpositionsComponent"], _search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot()],
      providers: [_services_positionservice_service__WEBPACK_IMPORTED_MODULE_8__["PositionserviceService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/search.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/search.pipe.ts ***!
    \********************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchPipe =
    /*#__PURE__*/
    // export class SearchPipe implements PipeTransform {
    //   transform(value: any, arg ?: any): any {
    //     if(!value) return null;
    //     if(!arg) return value;
    //     arg = arg.toLowerCase();
    //     return value.filter(function(myData){
    //       return JSON.stringify(myData).toLowerCase().includes(arg);
    //     });
    //   }
    // }
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(allPositions, DescSearch, locationSearch, fullTimeSearch, companySearch) {
          if (allPositions && allPositions.length) {
            return allPositions.filter(function (position) {
              if (DescSearch && position.description.toLowerCase().indexOf(DescSearch.toLowerCase()) === -1) {
                return false;
              } //   if (companySearch && position.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
              //     return false;
              // }
              //   if (titleSearch && position.company.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1){
              //     return false;
              // }


              if (locationSearch && position.location.toLowerCase().indexOf(locationSearch.toLowerCase()) === -1) {
                return false;
              }

              if (fullTimeSearch && position.type.length <= 0) {
                console.log("checkbox:");
                return false;
              }

              return true;
            });
          } else {
            return allPositions;
          }
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchFilter',
      pure: false // impure pipe 

    }) // export class SearchPipe implements PipeTransform {
    //   transform(value: any, arg ?: any): any {
    //     if(!value) return null;
    //     if(!arg) return value;
    //     arg = arg.toLowerCase();
    //     return value.filter(function(myData){
    //       return JSON.stringify(myData).toLowerCase().includes(arg);
    //     });
    //   }
    // }
    ], SearchPipe);
    /***/
  },

  /***/
  "./src/app/services/positionservice.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/positionservice.service.ts ***!
    \*****************************************************/

  /*! exports provided: PositionserviceService */

  /***/
  function srcAppServicesPositionserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionserviceService", function () {
      return PositionserviceService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PositionserviceService = /*#__PURE__*/function () {
      // uri = 'https://jobs.github.com/positions'
      function PositionserviceService(http) {
        _classCallCheck(this, PositionserviceService);

        this.http = http;
      }

      _createClass(PositionserviceService, [{
        key: "getAllPositions",
        value: function getAllPositions() {
          return this.http.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
        }
      }, {
        key: "getAllPoistions2",
        value: function getAllPoistions2(page) {
          return this.http.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=".concat(page));
        }
      }]);

      return PositionserviceService;
    }();

    PositionserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PositionserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PositionserviceService);
    /***/
  },

  /***/
  "./src/app/showallpositions/showallpositions.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/showallpositions/showallpositions.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowallpositionsShowallpositionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n    text-decoration: none;\r\n}\r\n\r\n\r\nform input{\r\n    width: 300px !important;\r\n    height: 30px;\r\n    border: 1px solid #ccc;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\nlabel {\r\n    display:block;\r\n  }\r\n\r\n\r\nlabel span {\r\n    display:block;\r\n    color:grey;\r\n    font-weight: bold;\r\n  }\r\n\r\n\r\nlabel span.fulltime {\r\n  /* color: yellow !important; */\r\n  margin-bottom: -25px;;\r\n  font-size: 10px;\r\n  float: right;\r\n  \r\n  }\r\n\r\n\r\nform input[type = \"checkbox\"]{\r\n    width: 15px !important;\r\n    height: 15px !important;\r\n    float: left;\r\n    margin-right: 10px !important;\r\n    text-decoration: none;\r\n   \r\n    \r\n    }\r\n\r\n\r\nform input[type = \"checkbox\"]:checked{\r\n      box-shadow:none !important;\r\n      \r\n    }\r\n  \r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2FsbHBvc2l0aW9ucy9zaG93YWxscG9zaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7OztBQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7OztBQUVBO0VBQ0EsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTs7RUFFWjs7O0FBR0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCOzs7SUFHckI7OztBQUNBO01BQ0UsMEJBQTBCOztJQUU1QiIsImZpbGUiOiJzcmMvYXBwL3Nob3dhbGxwb3NpdGlvbnMvc2hvd2FsbHBvc2l0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbmZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHNwYW4uZnVsbHRpbWUge1xyXG4gIC8qIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDs7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBcclxuICB9XHJcblxyXG5cclxuICBmb3JtIGlucHV0W3R5cGUgPSBcImNoZWNrYm94XCJde1xyXG4gICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIGZvcm0gaW5wdXRbdHlwZSA9IFwiY2hlY2tib3hcIl06Y2hlY2tlZHtcclxuICAgICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/showallpositions/showallpositions.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showallpositions/showallpositions.component.ts ***!
    \****************************************************************/

  /*! exports provided: ShowallpositionsComponent */

  /***/
  function srcAppShowallpositionsShowallpositionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowallpositionsComponent", function () {
      return ShowallpositionsComponent;
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


    var _services_positionservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/positionservice.service */
    "./src/app/services/positionservice.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ShowallpositionsComponent = /*#__PURE__*/function () {
      function ShowallpositionsComponent(positionService) {
        _classCallCheck(this, ShowallpositionsComponent);

        this.positionService = positionService;
        this.positions = [];
        this.isCollapsed = true;
      }

      _createClass(ShowallpositionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.positionService.getAllPositions().subscribe(data => {
          //   this.positions = data;
          //   console.log(this.positions)
          // })
          this.getAllPositions();
        } // getAllPositions(){
        //   for(let i = 1; i<=4; i++){
        //     this.positions = this.positionService.getAllPoistions2(i).subscribe((data: Object[]) => {
        //       this.positions = data
        //       console.log("All Positions:", this.positions)
        //     })
        //   }
        // }

      }, {
        key: "getAllPositions",
        value: function getAllPositions() {
          var _this = this;

          for (var i = 1; i <= 10; i++) {
            this.positions.push(this.positionService.getAllPoistions2(i));
          }

          console.log("This positions:", this.positions);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.positions).subscribe(function (data) {
            _this.allPositions = data.flat(1);
            console.log("All Positions:", _this.allPositions);
          });
        }
      }]);

      return ShowallpositionsComponent;
    }();

    ShowallpositionsComponent.ctorParameters = function () {
      return [{
        type: _services_positionservice_service__WEBPACK_IMPORTED_MODULE_2__["PositionserviceService"]
      }];
    };

    ShowallpositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showallpositions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./showallpositions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showallpositions/showallpositions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./showallpositions.component.css */
      "./src/app/showallpositions/showallpositions.component.css"))["default"]]
    })], ShowallpositionsComponent); // getAllPositions(){
    //   let i: number = 0;
    //   const observablesList = []; 
    //   while(i < 20){
    //     observablesList.push(this.positionService.getAllPoistions2(i));
    //     i++;
    //   }
    //   forkJoin(observablesList).subscribe((response) => {
    //     observablesList  = response
    //     console.log(response);
    //   });
    // }
    // getPage4(){
    //   this.positionService.getNextPage4().subscribe(data4 => {
    //     this.positions4 = data4;
    //     console.log("Page 4:", this.positions4)
    //   })
    // }
    // testingFunction() {
    //   let i: number = 0;
    //   const observablesList = []; 
    //   while(i < 20){
    //     observablesList.push(this.positionService.getAllPoistions2(i));
    //     i++;
    //   }
    //   forkJoin(observablesList).subscribe((response) => {
    //     console.log(response);
    //   });
    // }

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lenovo\Desktop\githubjobclone\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map