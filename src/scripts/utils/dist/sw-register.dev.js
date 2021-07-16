"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _runtime = _interopRequireDefault(require("serviceworker-webpack-plugin/lib/runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swRegister = function swRegister() {
  return regeneratorRuntime.async(function swRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!('serviceWorker' in navigator)) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(_runtime["default"].register());

        case 3:
          return _context.abrupt("return");

        case 4:
          console.log('Service worker not supported in this browser');

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = swRegister;
exports["default"] = _default;