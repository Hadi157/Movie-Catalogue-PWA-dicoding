"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _notificationHelper = _interopRequireDefault(require("./notification-helper"));

var _config = _interopRequireDefault(require("../globals/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WebSocketInitiator = {
  init: function init(url) {
    var webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler: function _onMessageHandler(message) {
    var movie = JSON.parse(message.data);

    _notificationHelper["default"].sendNotification({
      title: "".concat(movie.title, " is on cinema!"),
      options: {
        body: movie.overview,
        image: "".concat(_config["default"].BASE_IMAGE_URL + movie.poster_path)
      }
    });
  }
};
var _default = WebSocketInitiator;
exports["default"] = _default;