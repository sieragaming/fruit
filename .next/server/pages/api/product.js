"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./config/connectDB.js":
/*!*****************************!*\
  !*** ./config/connectDB.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = \"mongodb://admin:admin@cluster0-shard-00-00.vhse4.mongodb.net:27017,cluster0-shard-00-01.vhse4.mongodb.net:27017,cluster0-shard-00-02.vhse4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ld8a7j-shard-0&authSource=admin&retryWrites=true&w=majority\";\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already Connect\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(url, {\n        useCreateIndex: true,\n        useFindAndModify: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }).then(()=>console.log(\"Database Connected\")\n    ).catch((error)=>console.log(error.message)\n    );\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxHQUFHLEdBQUdDLG9RQUF1QjtBQUNuQyxNQUFNRyxTQUFTLEdBQUcsSUFBTTtJQUNwQixJQUFJTCwyRUFBa0MsRUFBRTtRQUNwQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDOUIsT0FBTTtLQUNUO0lBQ0RULHVEQUFnQixDQUFDQyxHQUFHLEVBQUU7UUFDbEJVLGNBQWMsRUFBRSxJQUFJO1FBQ3BCQyxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUMzQixDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFNUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUFBLENBQUMsQ0FBQ08sS0FBSyxDQUFDQyxDQUFBQSxLQUFLLEdBQUlULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLENBQUNDLE9BQU8sQ0FBQztJQUFBLENBQUM7Q0FDOUY7QUFDRCxpRUFBZWIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbmZpZy9jb25uZWN0REIuanM/OTg3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgQ29ubmVjdCcpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHVybCwge1xuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEYXRhYmFzZSBDb25uZWN0ZWRcIikpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/connectDB.js\n");

/***/ }),

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"(api)/./models/userModel.js\");\n\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization;\n    if (!token) return res.status(400).json({\n        err: \"Invalid Authentication.\"\n    });\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"Y86AVa6rN4DdCTQ5SQvQEHBU2d4WWStd4TxYuzR4ATjL7f7qc\");\n    if (!decoded) return res.status(400).json({\n        err: \"Invalid Authentication.\"\n    });\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        _id: decoded.id\n    });\n    return {\n        id: user._id,\n        role: user.role,\n        root: user.root\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNTO0FBR3ZDLE1BQU1FLElBQUksR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM3QixNQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxhQUFhO0lBQ3ZDLElBQUksQ0FBQ0YsS0FBSyxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsR0FBRyxFQUFFLHlCQUF5QjtLQUFFLENBQUM7SUFFM0UsTUFBTUMsT0FBTyxHQUFHWCwwREFBVSxDQUFDSyxLQUFLLEVBQUVRLG1EQUErQixDQUFDO0lBQ2xFLElBQUksQ0FBQ0YsT0FBTyxFQUFFLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsR0FBRyxFQUFFLHlCQUF5QjtLQUFFLENBQUM7SUFFN0UsTUFBTU0sSUFBSSxHQUFHLE1BQU1mLGlFQUFhLENBQUM7UUFBRWlCLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxFQUFFO0tBQUUsQ0FBQztJQUVyRCxPQUFPO1FBQUVBLEVBQUUsRUFBRUgsSUFBSSxDQUFDRSxHQUFHO1FBQUVFLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJO1FBQUVDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO0tBQUUsQ0FBQztDQUM3RDtBQUdELGlFQUFlbkIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXG5cblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLicgfSlcblxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nIH0pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KVxuXG4gICAgcmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOlsiand0IiwiVXNlcnMiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    price: {\n        type: Number,\n        required: true,\n        trim: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    images: {\n        type: Array,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    checked: {\n        type: Boolean,\n        default: false\n    },\n    inStock: {\n        type: Number,\n        default: 0\n    },\n    sold: {\n        type: Number,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUN0Q0csS0FBSyxFQUFFO1FBQ0hDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0RDLEtBQUssRUFBRTtRQUNISixJQUFJLEVBQUVLLE1BQU07UUFDWkgsUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNERyxXQUFXLEVBQUU7UUFDVE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0RLLE9BQU8sRUFBRTtRQUNMUCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRE0sTUFBTSxFQUFFO1FBQ0pSLElBQUksRUFBRVMsS0FBSztRQUNYUCxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNEUSxRQUFRLEVBQUU7UUFDTlYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0RTLE9BQU8sRUFBRTtRQUNMWCxJQUFJLEVBQUVZLE9BQU87UUFDYkMsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDREMsT0FBTyxFQUFFO1FBQ0xkLElBQUksRUFBRUssTUFBTTtRQUNaUSxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0RFLElBQUksRUFBRTtRQUNGZixJQUFJLEVBQUVLLE1BQU07UUFDWlEsT0FBTyxFQUFFLENBQUM7S0FDYjtDQUNKLEVBQUU7SUFDQ0csVUFBVSxFQUFFLElBQUk7Q0FDbkIsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR3JCLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLFNBQVMsRUFBRUMsYUFBYSxDQUFDO0FBQ2pGLGlFQUFlb0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL21vZGVscy9wcm9kdWN0TW9kZWwuanM/NjY1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGluU3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBzb2xkOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/productModel.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: \"https://res.cloudinary.com/sierragaming/image/upload/v1648911144/Pngtree_graphic_default_avatar_5938131_colh3a.png\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxVQUFVLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUNuQ0csSUFBSSxFQUFFO1FBQ0ZDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNEQyxLQUFLLEVBQUU7UUFDSEgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0tBQ2Y7SUFDREMsUUFBUSxFQUFFO1FBQ05MLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNESSxJQUFJLEVBQUU7UUFDRk4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBQ0RDLElBQUksRUFBRTtRQUNGUixJQUFJLEVBQUVTLE9BQU87UUFDYkYsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDREcsTUFBTSxFQUFFO1FBQ0pWLElBQUksRUFBRUMsTUFBTTtRQUNaTSxPQUFPLEVBQUUsb0hBQW9IO0tBQ2hJO0NBQ0osRUFBRTtJQUNDSSxVQUFVLEVBQUUsSUFBSTtDQUNuQixDQUFDO0FBRUYsSUFBSUMsT0FBTyxHQUFHaEIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsTUFBTSxFQUFFQyxVQUFVLENBQUM7QUFDeEUsaUVBQWVlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9tb2RlbHMvdXNlck1vZGVsLmpzPzk2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9zaWVycmFnYW1pbmcvaW1hZ2UvdXBsb2FkL3YxNjQ4OTExMTQ0L1BuZ3RyZWVfZ3JhcGhpY19kZWZhdWx0X2F2YXRhcl81OTM4MTMxX2NvbGgzYS5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0Iiwicm9vdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/connectDB */ \"(api)/./config/connectDB.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ \"(api)/./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"(api)/./middleware/auth.js\");\n/* eslint-disable import/no-anonymous-default-export */ \n\n\n(0,_config_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"GET\":\n            await getProducts(req, res);\n            break;\n        case \"POST\":\n            await createProduct(req, res);\n            break;\n    }\n});\nclass APIfeatures {\n    constructor(query, queryString){\n        this.query = query;\n        this.queryString = queryString;\n    }\n    filtering() {\n        const queryObj = {\n            ...this.queryString\n        };\n        const excludeFields = [\n            \"page\",\n            \"sort\",\n            \"limit\"\n        ];\n        excludeFields.forEach((el)=>delete queryObj[el]\n        );\n        if (queryObj.category !== \"all\") this.query.find({\n            category: queryObj.category\n        });\n        if (queryObj.title !== \"all\") this.query.find({\n            title: {\n                $regex: queryObj.title\n            }\n        });\n        this.query.find();\n        return this;\n    }\n    sorting() {\n        if (this.queryString.sort) {\n            const sortBy = this.queryString.sort.split(\",\").join(\"\");\n            this.query = this.query.sort(sortBy);\n        } else {\n            this.query = this.query.sort(\"-createdAt\");\n        }\n        return this;\n    }\n    paginating() {\n        const page = this.queryString.page * 1 || 1;\n        const limit = this.queryString.limit * 1 || 6;\n        const skip = (page - 1) * limit;\n        this.query = this.query.skip(skip).limit(limit);\n        return this;\n    }\n}\nconst getProducts = async (req, res)=>{\n    try {\n        const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(), req.query).filtering().sorting().paginating();\n        const products = await features.query;\n        res.json({\n            status: \"success\",\n            result: products.length,\n            products\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst createProduct = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n        if (result.role !== \"admin\") return res.status(400).json({\n            err: \"Authentication is not valid.\"\n        });\n        const { title , price , inStock , description , content , category , images  } = req.body;\n        if (!title || !price || !inStock || !description || !content || category === \"all\" || images.length === 0) return res.status(400).json({\n            err: \"Please add all the fields.\"\n        });\n        const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            title: title.toLowerCase(),\n            price,\n            inStock,\n            description,\n            content,\n            category,\n            images\n        });\n        await newProduct.save();\n        res.json({\n            msg: \"Success! Created a new product\"\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFBRUksR0FBRyxFQUFFLDRCQUE0QjtTQUFFLENBQUM7UUFHdEUsTUFBTVMsVUFBVSxHQUFHLElBQUk1Qyw0REFBUSxDQUFDO1lBQzVCa0IsS0FBSyxFQUFFQSxLQUFLLENBQUMyQixXQUFXLEVBQUU7WUFBRVAsS0FBSztZQUFFQyxPQUFPO1lBQUVDLFdBQVc7WUFBRUMsT0FBTztZQUFFekIsUUFBUTtZQUFFMEIsTUFBTTtTQUNyRixDQUFDO1FBRUYsTUFBTUUsVUFBVSxDQUFDRSxJQUFJLEVBQUU7UUFFdkIzQyxHQUFHLENBQUM0QixJQUFJLENBQUM7WUFBRWdCLEdBQUcsRUFBRSxnQ0FBZ0M7U0FBRSxDQUFDO0tBRXRELENBQUMsT0FBT1osR0FBRyxFQUFFO1FBQ1YsT0FBT2hDLEdBQUcsQ0FBQzZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVJLEdBQUcsRUFBRUEsR0FBRyxDQUFDQyxPQUFPO1NBQUUsQ0FBQztLQUNwRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanM/ZWNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25uZWN0REInXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3RzKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jbGFzcyBBUElmZWF0dXJlcyB7XG4gICAgY29uc3RydWN0b3IocXVlcnksIHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBmaWx0ZXJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5T2JqID0geyAuLi50aGlzLnF1ZXJ5U3RyaW5nIH1cblxuICAgICAgICBjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXVxuICAgICAgICBleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlIChxdWVyeU9ialtlbF0pKVxuXG4gICAgICAgIGlmIChxdWVyeU9iai5jYXRlZ29yeSAhPT0gJ2FsbCcpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoeyBjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnkgfSlcbiAgICAgICAgaWYgKHF1ZXJ5T2JqLnRpdGxlICE9PSAnYWxsJylcbiAgICAgICAgICAgIHRoaXMucXVlcnkuZmluZCh7IHRpdGxlOiB7ICRyZWdleDogcXVlcnlPYmoudGl0bGUgfSB9KVxuXG4gICAgICAgIHRoaXMucXVlcnkuZmluZCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNvcnRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMucXVlcnlTdHJpbmcuc29ydC5zcGxpdCgnLCcpLmpvaW4oJycpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoJy1jcmVhdGVkQXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGFnaW5hdGluZygpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucXVlcnlTdHJpbmcucGFnZSAqIDEgfHwgMVxuICAgICAgICBjb25zdCBsaW1pdCA9IHRoaXMucXVlcnlTdHJpbmcubGltaXQgKiAxIHx8IDZcbiAgICAgICAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2tpcChza2lwKS5saW1pdChsaW1pdClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3RzLmZpbmQoKSwgcmVxLnF1ZXJ5KVxuICAgICAgICAgICAgLmZpbHRlcmluZygpLnNvcnRpbmcoKS5wYWdpbmF0aW5nKClcblxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5XG5cbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICByZXN1bHQ6IHByb2R1Y3RzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSlcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgICBpZiAocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nIH0pXG5cbiAgICAgICAgY29uc3QgeyB0aXRsZSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGlmICghdGl0bGUgfHwgIXByaWNlIHx8ICFpblN0b2NrIHx8ICFkZXNjcmlwdGlvbiB8fCAhY29udGVudCB8fCBjYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaW1hZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMuJyB9KVxuXG5cbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0cyh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbmV3UHJvZHVjdC5zYXZlKClcblxuICAgICAgICByZXMuanNvbih7IG1zZzogJ1N1Y2Nlc3MhIENyZWF0ZWQgYSBuZXcgcHJvZHVjdCcgfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJQcm9kdWN0cyIsImF1dGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRQcm9kdWN0cyIsImNyZWF0ZVByb2R1Y3QiLCJBUElmZWF0dXJlcyIsImNvbnN0cnVjdG9yIiwicXVlcnkiLCJxdWVyeVN0cmluZyIsImZpbHRlcmluZyIsInF1ZXJ5T2JqIiwiZXhjbHVkZUZpZWxkcyIsImZvckVhY2giLCJlbCIsImNhdGVnb3J5IiwiZmluZCIsInRpdGxlIiwiJHJlZ2V4Iiwic29ydGluZyIsInNvcnQiLCJzb3J0QnkiLCJzcGxpdCIsImpvaW4iLCJwYWdpbmF0aW5nIiwicGFnZSIsImxpbWl0Iiwic2tpcCIsImZlYXR1cmVzIiwicHJvZHVjdHMiLCJqc29uIiwic3RhdHVzIiwicmVzdWx0IiwibGVuZ3RoIiwiZXJyIiwibWVzc2FnZSIsInJvbGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJib2R5IiwibmV3UHJvZHVjdCIsInRvTG93ZXJDYXNlIiwic2F2ZSIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/index.js"));
module.exports = __webpack_exports__;

})();