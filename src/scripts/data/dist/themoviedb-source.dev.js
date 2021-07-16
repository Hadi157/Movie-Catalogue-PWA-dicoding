"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiEndpoint = _interopRequireDefault(require("../globals/api-endpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TheMovieDbSource =
/*#__PURE__*/
function () {
  function TheMovieDbSource() {
    _classCallCheck(this, TheMovieDbSource);
  }

  _createClass(TheMovieDbSource, null, [{
    key: "nowPlayingMovies",
    value: function nowPlayingMovies() {
      var response, responseJson;
      return regeneratorRuntime.async(function nowPlayingMovies$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint["default"].NOW_PLAYING));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              responseJson = _context.sent;
              return _context.abrupt("return", responseJson.results);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "upcomingMovies",
    value: function upcomingMovies() {
      var response, responseJson;
      return regeneratorRuntime.async(function upcomingMovies$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint["default"].UPCOMING));

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              responseJson = _context2.sent;
              return _context2.abrupt("return", responseJson.results);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "detailMovie",
    value: function detailMovie(id) {
      var response;
      return regeneratorRuntime.async(function detailMovie$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint["default"].DETAIL(id)));

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.json());

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return TheMovieDbSource;
}();

var _default = TheMovieDbSource;
exports["default"] = _default;