"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _drawerInitiator = _interopRequireDefault(require("../utils/drawer-initiator"));

var _urlParser = _interopRequireDefault(require("../routes/url-parser"));

var _routes = _interopRequireDefault(require("../routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;

    _classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      _drawerInitiator["default"].init({
        button: this._button,
        drawer: this._drawer,
        content: this._content
      }); // kita bisa menginisiasikan komponen lain bila ada

    }
  }, {
    key: "renderPage",
    value: function renderPage() {
      var url, page;
      return regeneratorRuntime.async(function renderPage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _urlParser["default"].parseActiveUrlWithCombiner();
              page = _routes["default"][url];
              _context.next = 4;
              return regeneratorRuntime.awrap(page.render());

            case 4:
              this._content.innerHTML = _context.sent;
              _context.next = 7;
              return regeneratorRuntime.awrap(page.afterRender());

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;