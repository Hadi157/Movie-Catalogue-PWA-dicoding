"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_ENDPOINT = {
  NOW_PLAYING: "".concat(_config["default"].BASE_URL, "movie/now_playing?api_key=").concat(_config["default"].KEY, "&language=").concat(_config["default"].DEFAULT_LANGUAGE, "&page=1"),
  UPCOMING: "".concat(_config["default"].BASE_URL, "movie/upcoming?api_key=").concat(_config["default"].KEY, "&language=").concat(_config["default"].DEFAULT_LANGUAGE, "&page=1"),
  DETAIL: function DETAIL(id) {
    return "".concat(_config["default"].BASE_URL, "movie/").concat(id, "?api_key=").concat(_config["default"].KEY);
  }
};
var _default = API_ENDPOINT;
exports["default"] = _default;