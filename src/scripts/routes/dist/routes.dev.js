"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nowPlaying = _interopRequireDefault(require("../views/pages/now-playing"));

var _upcoming = _interopRequireDefault(require("../views/pages/upcoming"));

var _detail = _interopRequireDefault(require("../views/pages/detail"));

var _like = _interopRequireDefault(require("../views/pages/like"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = {
  '/': _nowPlaying["default"],
  // default page
  '/now-playing': _nowPlaying["default"],
  '/upcoming': _upcoming["default"],
  '/detail/:id': _detail["default"],
  '/like': _like["default"]
};
var _default = routes;
exports["default"] = _default;