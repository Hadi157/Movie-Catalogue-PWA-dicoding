"use strict";

require("regenerator-runtime");

require("../styles/style.css");

require("../styles/responsive.css");

var _app = _interopRequireDefault(require("./views/app"));

var _swRegister = _interopRequireDefault(require("./utils/sw-register"));

var _websocketInitiator = _interopRequireDefault(require("./utils/websocket-initiator"));

var _config = _interopRequireDefault(require("./globals/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _app["default"]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
});
window.addEventListener('hashchange', function () {
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
  (0, _swRegister["default"])();

  _websocketInitiator["default"].init(_config["default"].WEB_SOCKET_SERVER);
});