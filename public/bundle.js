/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './admin/admin.module.js':
      /*!*******************************!*\
  !*** ./admin/admin.module.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ AdminController,
          /* harmony export */
        });
        function AdminController($scope) {
          $scope.title = 'Test title';
        }

        /***/
      },

    /***/ './admin/admin.route.js':
      /*!******************************!*\
  !*** ./admin/admin.route.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var autoNgTemplateLoaderTemplate1 = __webpack_require__(
          /*! ./admin.html */ './admin/admin.html'
        );
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          templateUrl: autoNgTemplateLoaderTemplate1,
          controller: 'AdminController',
        };

        /***/
      },

    /***/ './admin/admin.html':
      /*!**************************!*\
  !*** ./admin/admin.html ***!
  \**************************/
      /***/ (module) => {
        // Module
        var code = '<div>\n  <h1>{{title}}</h1>\n</div>\n';
        // Exports
        var _module_exports = code;
        var path = 'ng1-app/admin/admin.html';
        window.angular.module('ng').run([
          '$templateCache',
          function (c) {
            c.put(path, _module_exports);
          },
        ]);
        module.exports = path;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    /*!******************!*\
  !*** ./index.js ***!
  \******************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _admin_admin_route__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./admin/admin.route */ './admin/admin.route.js');
    /* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
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
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
