"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _idb = require("idb");

var _config = _interopRequireDefault(require("../globals/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DATABASE_NAME = _config["default"].DATABASE_NAME,
    DATABASE_VERSION = _config["default"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _config["default"].OBJECT_STORE_NAME;
var dbPromise = (0, _idb.openDB)(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteMovieIdb = {
  getMovie: function getMovie(id) {
    return regeneratorRuntime.async(function getMovie$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(dbPromise);

          case 2:
            _context.t0 = OBJECT_STORE_NAME;
            _context.t1 = id;
            return _context.abrupt("return", _context.sent.get(_context.t0, _context.t1));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  getAllMovies: function getAllMovies() {
    return regeneratorRuntime.async(function getAllMovies$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(dbPromise);

          case 2:
            _context2.t0 = OBJECT_STORE_NAME;
            return _context2.abrupt("return", _context2.sent.getAll(_context2.t0));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  putMovie: function putMovie(movie) {
    return regeneratorRuntime.async(function putMovie$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(dbPromise);

          case 2:
            _context3.t0 = OBJECT_STORE_NAME;
            _context3.t1 = movie;
            return _context3.abrupt("return", _context3.sent.put(_context3.t0, _context3.t1));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  deleteMovie: function deleteMovie(id) {
    return regeneratorRuntime.async(function deleteMovie$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(dbPromise);

          case 2:
            _context4.t0 = OBJECT_STORE_NAME;
            _context4.t1 = id;
            return _context4.abrupt("return", _context4.sent["delete"](_context4.t0, _context4.t1));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  }
};
var _default = FavoriteMovieIdb;
exports["default"] = _default;