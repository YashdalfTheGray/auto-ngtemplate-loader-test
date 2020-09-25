/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './admin/admin.html':
      /*!**************************!*\
  !*** ./admin/admin.html ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        throw new Error(
          'Module parse failed: Unexpected token (3:0)\nFile was processed with these loaders:\n * ../../node_modules/ngtemplate-loader/index.js\n * ../../node_modules/html-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| var path = \'ng1-app/admin/admin.html\';\n| var html = // Module\n> var code = "<div>\\n    <h1>{{title}}</h1>\\n</div>\\n";\n| // Exports\n| module.exports = code;;'
        );

        /***/
      },

    /***/ './admin/admin.module.js':
      /*!*******************************!*\
  !*** ./admin/admin.module.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return AdminController;
          }
        );
        function AdminController($scope) {
          $scope.title = 'Test title';
        }

        /***/
      },

    /***/ './admin/admin.route.js':
      /*!******************************!*\
  !*** ./admin/admin.route.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var autoNgTemplateLoaderTemplate1 = __webpack_require__(
          /*! ./admin.html */ './admin/admin.html'
        );

        /* harmony default export */ __webpack_exports__['default'] = {
          templateUrl: autoNgTemplateLoaderTemplate1,
          controller: 'AdminController',
        };

        /***/
      },

    /***/ './index.js':
      /*!******************!*\
  !*** ./index.js ***!
  \******************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _admin_admin_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./admin/admin.route */ './admin/admin.route.js'
        );
        /* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./admin/admin.module */ './admin/admin.module.js'
        );

        angular
          .module('app', ['ngRoute'])
          .config(function ($routeProvider) {
            $routeProvider.when(
              '/',
              _admin_admin_route__WEBPACK_IMPORTED_MODULE_0__['default']
            );
          })
          .controller(
            'AdminController',
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__['default']
          );

        /***/
      },

    /***/ 0:
      /*!************************!*\
  !*** multi ./index.js ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(/*! ./index.js */ './index.js');

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=bundle.js.map