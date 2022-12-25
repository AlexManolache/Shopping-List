/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/non-optimized/product-management.js":
/*!*************************************************!*\
  !*** ./src/non-optimized/product-management.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"initProducts\": () => (/* binding */ initProducts)\n/* harmony export */ });\n/* harmony import */ var _rendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendering */ \"./src/non-optimized/rendering.js\");\n\n\nlet products = [\n  {\n    id: new Date('1/1/1970').toString(),\n    title: 'Anna Karenina',\n    price: 12.99,\n  },\n  {\n    id: new Date('1/2/1970').toString(),\n    title: 'Candle',\n    price: 20.99,\n  },\n  {\n    id: new Date('1/3/1970').toString(),\n    title: 'Patek Philippe Watch',\n    price: 50000,\n  },\n  {\n    id: new Date('1/4/1970').toString(),\n    title: 'Wine Graham Ne Oublie 1882 ',\n    price: 4600,\n  },\n  {\n    id: new Date('1/5/1970').toString(),\n    title: 'Brunello Cucinelli Winter Jacket',\n    price: 2500,\n  },\n];\n\nfunction initProducts() {\n  (0,_rendering__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(products, deleteProduct);\n}\n\nfunction deleteProduct(prodId) {\n  const updatedProducts = [];\n  for (const prod of products) {\n    if (prod.id !== prodId) {\n      updatedProducts.push(prod);\n    }\n  }\n  products = updatedProducts;\n  (0,_rendering__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(products, deleteProduct);\n}\n\nfunction addProduct(event) {\n  event.preventDefault();\n  const titleEl = document.querySelector('#new-product #title');\n  const priceEl = document.querySelector('#new-product #price');\n\n  const title = titleEl.value;\n  const price = priceEl.value;\n\n  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {\n    alert('Please enter some valid input values for title and price.');\n    return;\n  }\n\n  const newProduct = {\n    id: new Date().toString(),\n    title: title,\n    price: price,\n  };\n\n  products.unshift(newProduct);\n  (0,_rendering__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(products, deleteProduct);\n}\n\n\n//# sourceURL=webpack://shoplist/./src/non-optimized/product-management.js?");

/***/ }),

/***/ "./src/non-optimized/rendering.js":
/*!****************************************!*\
  !*** ./src/non-optimized/rendering.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProducts\": () => (/* binding */ renderProducts)\n/* harmony export */ });\nfunction renderProducts(products, deleteProductFn) {\n  const productListEl = document.getElementById('product-list');\n  productListEl.innerHTML = '';\n  products.forEach((product) => {\n    const newListEl = document.createElement('li');\n    const prodTitleEl = document.createElement('h2');\n    const prodPriceEl = document.createElement('p');\n    const prodDeleteButtonEl = document.createElement('button');\n\n    prodTitleEl.innerHTML = product.title;\n    prodPriceEl.innerHTML = '$' + product.price;\n    prodDeleteButtonEl.innerHTML = 'DELETE';\n\n    prodDeleteButtonEl.addEventListener(\n      'click',\n      deleteProductFn.bind(this, product.id)\n    );\n\n    newListEl.appendChild(prodTitleEl);\n    newListEl.appendChild(prodPriceEl);\n    newListEl.appendChild(prodDeleteButtonEl);\n\n    productListEl.appendChild(newListEl);\n  });\n}\n\n\n//# sourceURL=webpack://shoplist/./src/non-optimized/rendering.js?");

/***/ }),

/***/ "./src/non-optimized/shop.js":
/*!***********************************!*\
  !*** ./src/non-optimized/shop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-management */ \"./src/non-optimized/product-management.js\");\n\n\nconst addProductForm = document.getElementById('new-product');\n\n(0,_product_management__WEBPACK_IMPORTED_MODULE_0__.initProducts)();\n\naddProductForm.addEventListener('submit', _product_management__WEBPACK_IMPORTED_MODULE_0__.addProduct);\n\n\n//# sourceURL=webpack://shoplist/./src/non-optimized/shop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/non-optimized/shop.js");
/******/ 	
/******/ })()
;